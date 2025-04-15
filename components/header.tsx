"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E8E2D9] bg-[#FFFCF8]/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-serif font-medium tracking-wider text-[#9A8866]">Maison Élégante</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-[#9A8866] transition-colors">
            Home
          </Link>
          <Link href="/menu" className="text-sm font-medium hover:text-[#9A8866] transition-colors">
            Menu
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-[#9A8866] transition-colors">
            About Us
          </Link>
          <Link href="/reservations" className="text-sm font-medium hover:text-[#9A8866] transition-colors">
            Reservations
          </Link>
          <Link href="/gallery" className="text-sm font-medium hover:text-[#9A8866] transition-colors">
            Gallery
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-[#9A8866] transition-colors">
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex h-screen w-full flex-col bg-white p-6 md:hidden">
          <div className="flex items-center justify-between">
            <span className="text-xl font-serif font-medium tracking-wider text-[#9A8866]">Maison Élégante</span>
            <button onClick={toggleMenu} className="cursor-pointer">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="mt-8 flex flex-col space-y-4">
            <Link href="/" onClick={toggleMenu} className="text-lg font-medium hover:text-[#9A8866]">
              Home
            </Link>
            <Link href="/menu" onClick={toggleMenu} className="text-lg font-medium hover:text-[#9A8866]">
              Menu
            </Link>
            <Link href="/about" onClick={toggleMenu} className="text-lg font-medium hover:text-[#9A8866]">
              About Us
            </Link>
            <Link href="/reservations" onClick={toggleMenu} className="text-lg font-medium hover:text-[#9A8866]">
              Reservations
            </Link>
            <Link href="/gallery" onClick={toggleMenu} className="text-lg font-medium hover:text-[#9A8866]">
              Gallery
            </Link>
            <Link href="/contact" onClick={toggleMenu} className="text-lg font-medium hover:text-[#9A8866]">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
