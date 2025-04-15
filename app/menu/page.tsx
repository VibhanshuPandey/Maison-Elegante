import Image from "next/image"
import SectionHeading from "@/components/section-heading"

interface MenuItem {
  name: string
  description: string
  price: string
  image?: string
}

interface MenuSection {
  title: string
  items: MenuItem[]
}

const menuData: MenuSection[] = [
  {
    title: "Appetizers",
    items: [
      {
        name: "Lobster Bisque",
        description: "Maine lobster, crème fraîche, chives, brioche croutons",
        price: "$24",
        image: "/rich-lobster-bisque.png",
      },
      {
        name: "Foie Gras Terrine",
        description: "Port wine reduction, toasted brioche, fig compote",
        price: "$28",
        image: "https://i.postimg.cc/zv0ksZS4/Foie-Gras-Terrine.jpg",
      },
      {
        name: "Heirloom Tomato Salad",
        description: "Burrata, basil oil, aged balsamic, fleur de sel",
        price: "$19",
        image: "https://i.postimg.cc/SRBKNjr9/Heirloom-Tomato-Salad.webp",
      },
      {
        name: "Seared Scallops",
        description: "Cauliflower purée, brown butter, capers, pine nuts",
        price: "$26",
        image: "https://i.postimg.cc/DZsvp7Fy/Seared-Scallops.jpg",
      },
    ],
  },
  {
    title: "Main Courses",
    items: [
      {
        name: "Pan-Seared Duck Breast",
        description: "Orange glaze, seasonal vegetables, potato purée",
        price: "$42",
        image: "/seared-duck-gastronomy.png",
      },
      {
        name: "Truffle Risotto",
        description: "Arborio rice, wild mushrooms, truffle oil, aged parmesan",
        price: "$36",
        image: "/truffle-risotto-elegance.png",
      },
      {
        name: "Rack of Lamb",
        description: "Herb crust, ratatouille, rosemary jus, garlic confit",
        price: "$48",
        image: "https://i.postimg.cc/C5QcZpBk/Rack-of-Lamb.jpg",
      },
      {
        name: "Dover Sole",
        description: "Brown butter, capers, lemon, parsley, fingerling potatoes",
        price: "$54",
        image: "/seared-scallops-citrus.png",
      },
    ],
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Chocolate Ganache Tart",
        description: "Dark chocolate, sea salt, gold leaf, raspberry coulis",
        price: "$16",
        image: "/decadent-ganache-tart.png",
      },
      {
        name: "Crème Brûlée",
        description: "Tahitian vanilla bean, caramelized sugar, seasonal berries",
        price: "$14",
        image: "https://i.postimg.cc/G3DwWbNv/Cr-me-Br-l-e.jpg",
      },
      {
        name: "Lemon Soufflé",
        description: "Lavender ice cream, candied lemon zest",
        price: "$18",
        image: "https://i.postimg.cc/Qxj4fsr8/Lemon-Souffl.jpg",
      },
      {
        name: "Cheese Selection",
        description: "Artisanal cheeses, honeycomb, fig jam, walnut bread",
        price: "$24",
        image: "https://i.postimg.cc/Nj3RP7r6/Cheese-Selection.webp",
      },
    ],
  },
  {
    title: "Beverages",
    items: [
      {
        name: "Signature Cocktails",
        description: "Ask your server about our seasonal creations",
        price: "$18-24",
        image: "https://i.postimg.cc/Zqr1vnLm/signature-Cocktail.jpg",
      },
      {
        name: "Wine Pairings",
        description: "Curated selection to complement your meal",
        price: "$25 per course",
        image: "https://i.postimg.cc/8ccFCj6k/Wine-Pairings.jpg",
      },
      {
        name: "Artisanal Tea Selection",
        description: "Rare and premium loose leaf teas",
        price: "$12",
        image: "https://i.postimg.cc/QNF1sykQ/Artisanal-Tea-Selection.jpg",
      },
      {
        name: "Espresso & Coffee",
        description: "Single-origin beans, French press, or pour-over",
        price: "$8-12",
        image: "https://i.postimg.cc/R0PJx7Wp/coffee.jpg",
      },
    ],
  },
]

export default function MenuPage() {
  return (
    <>
      <section className="relative h-[50vh] w-full">
        <Image src="/menu-header.png" alt="Our Menu" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <h1 className="font-serif text-4xl font-light tracking-wide md:text-5xl lg:text-6xl">Our Menu</h1>
          <div className="mt-2 h-0.5 w-24 bg-white mx-auto"></div>
          <p className="mt-4 max-w-md text-lg font-light md:text-xl">Culinary artistry crafted with passion</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <p className="text-[#4A4A4A] leading-relaxed italic font-serif">
              "Cuisine is an art form that engages all the senses. At Maison Élégante, we craft each dish with passion
              and precision, using only the finest ingredients to create memorable culinary experiences."
            </p>
            <p className="mt-4 text-[#9A8866] font-medium">— Chef Antoine Laurent</p>
          </div>

          {menuData.map((section, index) => (
            <div
              key={index}
              className={`mb-20 ${index % 2 === 1 ? "bg-[#F9F6F0] py-16 -mx-4 px-4 md:-mx-6 md:px-6" : ""}`}
            >
              <SectionHeading title={section.title} />

              <div className="grid gap-8 md:grid-cols-2">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex gap-4 group">
                    {item.image && (
                      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md shadow-md transition-all duration-300 group-hover:shadow-lg">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={`${item.name} dish`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between">
                        <h3 className="font-serif text-xl font-medium transition-colors duration-300 group-hover:text-[#9A8866]">
                          {item.name}
                        </h3>
                        <div className="ml-4 text-[#9A8866] font-medium">{item.price}</div>
                      </div>
                      <p className="mt-1 text-sm text-[#4A4A4A]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
