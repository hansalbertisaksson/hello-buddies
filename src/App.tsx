import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-8 bg-background px-6 text-center text-foreground">
      <h1 className="text-6xl font-bold tracking-tight text-balance sm:text-8xl">Hello buddies 👋</h1>
      <p className="text-lg text-muted-foreground">Kul att ni tittar förbi.</p>
      <Button asChild>
        <a href="kit/">Se hur den är byggd</a>
      </Button>
    </main>
  )
}
