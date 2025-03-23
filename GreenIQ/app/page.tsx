import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, Microscope, Scale } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-lg font-semibold">GreenIQ</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/classify">
            Classify
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/sustainability">
            Sustainability
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/compare">
            Compare
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Biodegradable Polymer Classification
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Analyze, score, and compare polymers for biodegradability and sustainability.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/classify">
                  <Button className="bg-green-600 hover:bg-green-700">Get Started</Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-green-100 p-4 rounded-full">
                  <Microscope className="h-10 w-10 text-green-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Polymer Classification</h3>
                  <p className="text-gray-500">
                    Identify biodegradability characteristics of polymers using name or SMILES notation.
                  </p>
                </div>
                <Link href="/classify">
                  <Button variant="link" className="text-green-600">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-green-100 p-4 rounded-full">
                  <Scale className="h-10 w-10 text-green-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Sustainability Scoring</h3>
                  <p className="text-gray-500">
                    Get comprehensive sustainability scores for polymers based on multiple environmental factors.
                  </p>
                </div>
                <Link href="/sustainability">
                  <Button variant="link" className="text-green-600">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-green-100 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-green-600"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Polymer Comparison</h3>
                  <p className="text-gray-500">
                    Compare two polymers side by side to determine which has better sustainability characteristics.
                  </p>
                </div>
                <Link href="/compare">
                  <Button variant="link" className="text-green-600">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
        <p className="text-xs text-gray-500">© 2025 BioDegradePro. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

