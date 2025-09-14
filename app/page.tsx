import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
    </main>
  )
}
