import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"

export default function Home() {
  return (
    <>
      <section className="relative h-[80vh] w-full">
        <Image src="/refined-dining-glow.png" alt="Fine dining ambiance" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <h1 className="font-serif text-4xl font-light tracking-wide md:text-5xl lg:text-6xl/none">
            Where Taste Meets Elegance
          </h1>
          <p className="mt-4 max-w-md text-lg font-light md:text-xl">
            An elevated dining experience in the heart of the city
          </p>
          <Link href="/reservations">
            <Button className="mt-8 bg-[#9A8866] hover:bg-[#8A7856] text-white">Reserve Your Table</Button>
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              title="Welcome to Maison Élégante"
              subtitle="At Maison Élégante, we blend timeless culinary artistry with modern sophistication. Every dish tells a story of passion, precision, and the finest ingredients sourced from around the world."
            />
            <p className="mt-6 text-[#4A4A4A] leading-relaxed">
              Our award-winning chefs create memorable dining experiences in an atmosphere of refined elegance. From
              intimate dinners to special celebrations, we invite you to indulge in the extraordinary.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F9F6F0]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <Link href="/menu" className="group">
              <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
                <div className="relative h-64">
                  <Image
                    src="https://i.postimg.cc/vBhd1Ttj/pexels-mat-brown-150387-1395967.jpg"
                    alt="Our Menu"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-medium">Our Menu</h3>
                  <p className="mt-2 text-sm text-[#4A4A4A]">Discover our seasonal culinary creations</p>
                </div>
              </div>
            </Link>

            <Link href="/about" className="group">
              <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
                <div className="relative h-64">
                  <Image
                    src="https://i.postimg.cc/Qty0nr8C/aboutus.jpg"
                    alt="About Us"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-medium">About Us</h3>
                  <p className="mt-2 text-sm text-[#4A4A4A]">Our story, our passion, our commitment</p>
                </div>
              </div>
            </Link>

            <Link href="/gallery" className="group">
              <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
                <div className="relative h-64">
                  <Image
                    src="https://i.postimg.cc/qqqWzLRh/gallery.jpg"
                    alt="Gallery"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-medium">Gallery</h3>
                  <p className="mt-2 text-sm text-[#4A4A4A]">Visual journey through our culinary world</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <SectionHeading title="A Glimpse of Our World" />
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            <div className="relative aspect-square overflow-hidden rounded-md">
              <Image src="https://i.postimg.cc/NMKC706L/wine.jpg" alt="Gallery image" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-md">
              <Image src="https://i.postimg.cc/W35bBXCh/elegant.jpg" alt="Gallery image" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-md">
              <Image src="https://i.postimg.cc/FK8VvVSs/privatedining.jpg" alt="Gallery image" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-md">
              <Image src="https://i.postimg.cc/8C56jfGJ/interior.jpg" alt="Gallery image" fill className="object-cover" />
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/gallery">
              <Button variant="outline" className="border-[#9A8866] text-[#9A8866] hover:bg-[#9A8866] hover:text-white">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F9F6F0]">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              title="Make a Reservation"
              subtitle="Join us for an unforgettable dining experience. Reserve your table today."
            />
            <Link href="/reservations">
              <Button className="mt-4 bg-[#9A8866] hover:bg-[#8A7856] text-white">Book Your Table</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
