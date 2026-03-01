"use client"

import { useEffect, useRef } from "react"

export function GlobalBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const ballRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const container = backgroundRef.current
    if (!container) return

    const balls = [
      { x: 0, y: 0, vx: 2.4, vy: 1.8, size: 220, centerBoost: 0 },
      { x: 0, y: 0, vx: -2.1, vy: 2.3, size: 190, centerBoost: 0 },
      { x: 0, y: 0, vx: 2.0, vy: -2.2, size: 165, centerBoost: 0 },
    ]

    let width = 0
    let height = 0
    let rafId = 0

    const updateBounds = () => {
      const rect = container.getBoundingClientRect()
      width = rect.width
      height = rect.height
    }

    const initializeBalls = () => {
      updateBounds()

      balls.forEach((ball, index) => {
        const maxX = Math.max(width - ball.size, 1)
        const maxY = Math.max(height - ball.size, 1)
        if (index === 0) {
          ball.x = maxX * 0.1
          ball.y = maxY * 0.12
        } else if (index === 1) {
          ball.x = maxX * 0.78
          ball.y = maxY * 0.2
        } else {
          ball.x = maxX * 0.4
          ball.y = maxY * 0.72
        }
      })
    }

    const animate = () => {
      const centerX = width / 2
      const centerY = height / 2

      balls.forEach((ball, index) => {
        const maxX = Math.max(width - ball.size, 0)
        const maxY = Math.max(height - ball.size, 0)
        const ballCenterX = ball.x + ball.size / 2
        const ballCenterY = ball.y + ball.size / 2

        const attraction = 0.012 + ball.centerBoost
        ball.vx += ((centerX - ballCenterX) / Math.max(width, 1)) * attraction
        ball.vy += ((centerY - ballCenterY) / Math.max(height, 1)) * attraction

        ball.x += ball.vx
        ball.y += ball.vy

        if (ball.x <= 0 || ball.x >= maxX) {
          ball.x = Math.min(Math.max(ball.x, 0), maxX)
          ball.vx *= -1
          ball.centerBoost = 0.08
        }

        if (ball.y <= 0 || ball.y >= maxY) {
          ball.y = Math.min(Math.max(ball.y, 0), maxY)
          ball.vy *= -1
          ball.centerBoost = 0.08
        }

        ball.vx *= 0.999
        ball.vy *= 0.999
        ball.centerBoost *= 0.985

        const speed = Math.hypot(ball.vx, ball.vy)
        if (speed > 4.4) {
          const scale = 4.4 / speed
          ball.vx *= scale
          ball.vy *= scale
        } else if (speed < 1.4) {
          const scale = 1.4 / Math.max(speed, 0.001)
          ball.vx *= scale
          ball.vy *= scale
        }

        const ballEl = ballRefs.current[index]
        if (ballEl) {
          ballEl.style.transform = `translate3d(${ball.x}px, ${ball.y}px, 0)`
        }
      })

      rafId = window.requestAnimationFrame(animate)
    }

    initializeBalls()
    rafId = window.requestAnimationFrame(animate)
    window.addEventListener("resize", initializeBalls)

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener("resize", initializeBalls)
    }
  }, [])

  return (
    <div ref={backgroundRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--primary) 0%, transparent 38%), radial-gradient(circle at 80% 25%, var(--accent) 0%, transparent 40%), radial-gradient(circle at 50% 80%, var(--chart-3) 0%, transparent 42%)",
        }}
      />
      <div
        ref={(el) => {
          ballRefs.current[0] = el
        }}
        className="absolute rounded-full blur-2xl opacity-30"
        style={{
          width: "220px",
          height: "220px",
          background: "var(--primary)",
          boxShadow: "0 0 80px var(--primary)",
        }}
      />
      <div
        ref={(el) => {
          ballRefs.current[1] = el
        }}
        className="absolute rounded-full blur-2xl opacity-28"
        style={{
          width: "190px",
          height: "190px",
          background: "var(--accent)",
          boxShadow: "0 0 76px var(--accent)",
        }}
      />
      <div
        ref={(el) => {
          ballRefs.current[2] = el
        }}
        className="absolute rounded-full blur-2xl opacity-26"
        style={{
          width: "165px",
          height: "165px",
          background: "var(--chart-3)",
          boxShadow: "0 0 70px var(--chart-3)",
        }}
      />
    </div>
  )
}
