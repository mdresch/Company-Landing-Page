import Link from "next/link"
import MobileNav from "./mobile-nav"
import ThemeToggle from "./theme-toggle"

export default function Header() {
  return (
    <header className="bg-background shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-foreground">
          TechCorp
        </Link>
        <MobileNav />
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
          </li>
          <li>
            <Link href="/showcase" className="text-muted-foreground hover:text-foreground">
              Showcase
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/docs" className="text-muted-foreground hover:text-foreground">
              Docs
            </Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  )
}

