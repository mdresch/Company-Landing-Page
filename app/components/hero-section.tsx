import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="relative h-[600px] flex items-center justify-center">
      <Image src="/hero-image.jpg" alt="TechCorp Hero" fill style={{ objectFit: "cover" }} priority />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to TechCorp</h1>
        <p className="text-xl md:text-2xl mb-8">Innovative solutions for modern businesses</p>
        <Button asChild size="lg">
          <Link href="/contact">Get Started</Link>
        </Button>
      </div>
    </div>
  )
}

