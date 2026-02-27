"use client"

import { useEffect, useRef } from "react"

export function GlobalBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const ballRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const container = backgroundRef.current
    if (!container) return

    const balls = [
      { x: 0, y: 0, vx: 1.7, vy: 1.3, size: 180 },
      { x: 0, y: 0, vx: -1.4, vy: 1.8, size: 160 },
      { x: 0, y: 0, vx: 1.5, vy: -1.6, size: 140 },
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
      const centerX = width / 2
      const centerY = height / 2

      balls.forEach((ball, index) => {
        ball.x = centerX + (index - 1) * 130 - ball.size / 2
        ball.y = centerY + (index % 2 === 0 ? -90 : 90) - ball.size / 2
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

        ball.vx += ((centerX - ballCenterX) / Math.max(width, 1)) * 0.06
        ball.vy += ((centerY - ballCenterY) / Math.max(height, 1)) * 0.06

        ball.x += ball.vx
        ball.y += ball.vy

        if (ball.x <= 0 || ball.x >= maxX) {
          ball.x = Math.min(Math.max(ball.x, 0), maxX)
          ball.vx *= -1
        }

        if (ball.y <= 0 || ball.y >= maxY) {
          ball.y = Math.min(Math.max(ball.y, 0), maxY)
          ball.vy *= -1
        }

        ball.vx *= 0.998
        ball.vy *= 0.998

        const speed = Math.hypot(ball.vx, ball.vy)
        if (speed > 3.2) {
          const scale = 3.2 / speed
          ball.vx *= scale
          ball.vy *= scale
        } else if (speed < 0.8) {
          const scale = 0.8 / Math.max(speed, 0.001)
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
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "radial-gradient(circle at center, var(--primary) 0%, transparent 62%)",
        }}
      />
      <div
        ref={(el) => {
          ballRefs.current[0] = el
        }}
        className="absolute rounded-full blur-2xl opacity-45"
        style={{
          width: "180px",
          height: "180px",
          background: "var(--primary)",
          boxShadow: "0 0 72px var(--primary)",
        }}
      />
      <div
        ref={(el) => {
          ballRefs.current[1] = el
        }}
        className="absolute rounded-full blur-2xl opacity-40"
        style={{
          width: "160px",
          height: "160px",
          background: "var(--accent)",
          boxShadow: "0 0 68px var(--accent)",
        }}
      />
      <div
        ref={(el) => {
          ballRefs.current[2] = el
        }}
        className="absolute rounded-full blur-2xl opacity-35"
        style={{
          width: "140px",
          height: "140px",
          background: "var(--chart-3)",
          boxShadow: "0 0 62px var(--chart-3)",
        }}
      />
    </div>
  )
}
