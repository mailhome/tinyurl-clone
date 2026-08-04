import { createFileRoute } from "@tanstack/react-router"
import Hero from "@/components/hero/hero"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <div className="flex min-h-svh">
      <Hero />
    </div>
  )
}
