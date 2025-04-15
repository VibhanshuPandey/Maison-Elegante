"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ImageOff } from "lucide-react"
import SectionHeading from "@/components/section-heading"

// Gallery images data with verified image sources
const galleryImages = [
  {
    src: "https://i.postimg.cc/W35bBXCh/elegant.jpg",
    alt: "Elegant table setting",
    category: "Interior",
  },
  {
    src: "https://i.postimg.cc/qqqWzLRh/gallery.jpg",
    alt: "Chef plating a dish",
    category: "Culinary",
  },
  {
    src: "https://i.postimg.cc/8C56jfGJ/interior.jpg",
    alt: "Restaurant interior",
    category: "Interior",
  },
  {
    src: "https://i.postimg.cc/Zqr1vnLm/signature-Cocktail.jpg",
    alt: "Signature cocktail",
    category: "Beverages",
  },
  {
    src: "https://i.postimg.cc/8zLyt3fB/dessert.jpg",
    alt: "Dessert presentation",
    category: "Culinary",
  },
  {
    src: "https://i.postimg.cc/NMKC706L/wine.jpg",
    alt: "Wine selection",
    category: "Beverages",
  },
  {
    src: "https://i.postimg.cc/FK8VvVSs/privatedining.jpg",
    alt: "Private Dining Room",
    category: "Interior",
  },
  {
    src: "https://i.postimg.cc/6604LhQ2/seafood.jpg",
    alt: "Seafood dish",
    category: "Culinary",
  },
  {
    src: "https://i.postimg.cc/mk5bpkqq/bararea.jpg",
    alt: "Bar area",
    category: "Interior",
  },
  {
    src: "https://i.postimg.cc/z3ZQf1Rv/appetizer.jpg",
    alt: "Seasonal appetizer",
    category: "Culinary",
  },
  {
    src: "/truffle-risotto-elegance.png",
    alt: "Truffle Risotto",
    category: "Culinary",
  },
  {
    src: "/seared-duck-gastronomy.png",
    alt: "Duck Breast",
    category: "Culinary",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>("All")
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({
      ...prev,
      [index]: true,
    }))
  }

  return (
    <>
      <section className="relative h-[50vh] w-full">
        <Image
          src="/gallery-header.png"
          alt="Gallery"
          fill
          className="object-cover"
          priority
          onError={() => console.error("Header image failed to load")}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <h1 className="font-serif text-4xl font-light tracking-wide md:text-5xl lg:text-6xl">Gallery</h1>
          <div className="mt-2 h-0.5 w-24 bg-white mx-auto"></div>
          <p className="mt-4 max-w-md text-lg font-light md:text-xl">A visual journey through our culinary artistry</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Visual Journey"
            subtitle="Explore the elegance and artistry of Maison Élégante through our curated gallery."
          />

          <div className="flex justify-center mt-8 mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              {["All", "Interior", "Culinary", "Beverages"].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-md text-sm transition-all duration-300 ${
                    filter === category
                      ? "bg-[#9A8866] text-white shadow-md"
                      : "bg-[#F9F6F0] text-[#4A4A4A] hover:bg-[#E8E2D9] hover:shadow"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-md cursor-pointer group bg-[#F9F6F0] shadow-md transition-all duration-300 hover:shadow-xl"
                onClick={() => !imageErrors[index] && setSelectedImage(image.src)}
              >
                {imageErrors[index] ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-[#9A8866]">
                    <ImageOff className="h-10 w-10 mb-2" />
                    <p className="text-sm text-center">{image.alt}</p>
                  </div>
                ) : (
                  <>
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={() => handleImageError(index)}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="font-serif text-lg">{image.alt}</p>
                        <p className="text-sm mt-1">{image.category}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 transition-transform duration-300 hover:scale-110"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(null)
            }}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative w-full max-w-5xl h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Enlarged gallery image"
              fill
              className="object-contain"
              onError={() => {
                console.error("Lightbox image failed to load")
                setSelectedImage(null)
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}
