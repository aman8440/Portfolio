import { useState, useEffect } from "react"
import { Moon, Sun, Menu } from "lucide-react"
import { useTheme } from "./theme-provider"

export function Navigation() {
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : ""
      }`}
    >
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <a href="/" className="font-bold text-xl">
          Aman Gupta
        </a>
        <nav className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#experience" className="hover:text-primary transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2 navigartion-btn">
          <button
            className="p-2 hover:bg-accent rounded-lg btn-nav"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 moon-btn" />
            <span className="sr-only">Toggle theme</span>
          </button>
          <button className="md:hidden p-2 hover:bg-accent rounded-lg">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>
    </header>
  )
}

