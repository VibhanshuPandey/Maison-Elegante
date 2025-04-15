import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-[#E8E2D9] bg-[#FFFCF8] py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-lg font-medium">Maison Élégante</h3>
            <p className="mt-4 text-sm text-[#4A4A4A]">Where culinary artistry meets elegant ambiance.</p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-medium">Contact</h3>
            <p className="mt-4 text-sm text-[#4A4A4A]">
              123 Elegance Avenue
              <br />
              City Center, NY 10001
              <br />
              info@maisonelegante.com
              <br />
              (212) 555-1234
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-medium">Hours</h3>
            <p className="mt-4 text-sm text-[#4A4A4A]">
              Monday - Thursday: 5:30pm - 10:00pm
              <br />
              Friday - Saturday: 5:30pm - 11:00pm
              <br />
              Sunday: 5:00pm - 9:00pm
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-medium">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-[#9A8866] hover:text-[#8A7856]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-[#9A8866] hover:text-[#8A7856]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-[#9A8866] hover:text-[#8A7856]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-[#E8E2D9] pt-8 text-center">
          <nav className="mb-4 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/" className="hover:text-[#9A8866]">
              Home
            </Link>
            <Link href="/menu" className="hover:text-[#9A8866]">
              Menu
            </Link>
            <Link href="/about" className="hover:text-[#9A8866]">
              About Us
            </Link>
            <Link href="/reservations" className="hover:text-[#9A8866]">
              Reservations
            </Link>
            <Link href="/gallery" className="hover:text-[#9A8866]">
              Gallery
            </Link>
            <Link href="/contact" className="hover:text-[#9A8866]">
              Contact
            </Link>
          </nav>
          <p className="text-xs text-[#4A4A4A]">
            &copy; {new Date().getFullYear()} Maison Élégante. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
