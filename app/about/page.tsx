import Image from "next/image"
import SectionHeading from "@/components/section-heading"

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[50vh] w-full">
        <Image src="/about-header.png" alt="About Us" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <h1 className="font-serif text-4xl font-light tracking-wide md:text-5xl lg:text-6xl">About Us</h1>
          <div className="mt-2 h-0.5 w-24 bg-white mx-auto"></div>
          <p className="mt-4 max-w-md text-lg font-light md:text-xl">Our story of passion and excellence</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              title="Our Story"
              subtitle="Founded in 2010, Maison Élégante began as a vision to create a dining experience that celebrates the art of fine cuisine."
            />
            <p className="mt-6 text-[#4A4A4A] leading-relaxed">
              What started as a small intimate restaurant has grown into one of the city's most celebrated culinary
              destinations. Our journey has been guided by a commitment to excellence, a passion for innovative cuisine,
              and a dedication to creating memorable experiences for our guests.
            </p>
            <p className="mt-4 text-[#4A4A4A] leading-relaxed">
              Over the years, we have refined our craft, expanded our offerings, and welcomed guests from around the
              world. Yet, our core philosophy remains unchanged: to honor the ingredients, respect the traditions, and
              surprise the palate.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F9F6F0]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-md transform transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="https://i.postimg.cc/JnVN23Sw/chef.jpg"
                alt="Chef Antoine Laurent"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-light tracking-wide md:text-4xl">Meet Our Chef</h2>
              <div className="mt-2 h-0.5 w-24 bg-[#9A8866]"></div>
              <h3 className="mt-4 font-serif text-xl text-[#9A8866]">Chef Antoine Laurent</h3>
              <p className="mt-4 text-[#4A4A4A] leading-relaxed">
                With over 20 years of experience in prestigious kitchens across Europe, Chef Antoine brings a wealth of
                knowledge and passion to Maison Élégante. Trained in classical French techniques and inspired by global
                flavors, his culinary philosophy centers on highlighting the natural qualities of exceptional
                ingredients.
              </p>
              <p className="mt-4 text-[#4A4A4A] leading-relaxed">
                "My approach to cooking is rooted in respect—respect for the ingredients, for the traditions, and for
                the diners who trust us with their experience. Every dish should tell a story and create a memory."
              </p>
              <p className="mt-4 text-[#4A4A4A] leading-relaxed">
                Under Chef Antoine's leadership, Maison Élégante has earned numerous accolades, including two Michelin
                stars and recognition in the World's 50 Best Restaurants.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Our Values"
            subtitle="At the heart of Maison Élégante are the principles that guide everything we do."
          />

          <div className="grid gap-8 md:grid-cols-3 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
              <h3 className="font-serif text-xl font-medium text-[#9A8866]">Excellence</h3>
              <p className="mt-4 text-[#4A4A4A]">
                We pursue perfection in every detail, from the selection of ingredients to the presentation of each
                dish.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
              <h3 className="font-serif text-xl font-medium text-[#9A8866]">Sustainability</h3>
              <p className="mt-4 text-[#4A4A4A]">
                We are committed to responsible sourcing, supporting local producers, and minimizing our environmental
                impact.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
              <h3 className="font-serif text-xl font-medium text-[#9A8866]">Hospitality</h3>
              <p className="mt-4 text-[#4A4A4A]">
                We believe in creating a warm, welcoming atmosphere where every guest feels valued and cared for.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F9F6F0]">
        <div className="container px-4 md:px-6">
          <SectionHeading title="Our Journey" />

          <div className="relative mx-auto max-w-3xl mt-12">
            {/* Timeline */}
            <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-[#9A8866]"></div>

            {/* Timeline items */}
            <div className="relative grid gap-12">
              <TimelineItem
                year="2010"
                title="The Beginning"
                description="Maison Élégante opens its doors in a small, intimate space with just 24 seats."
              />

              <TimelineItem
                year="2013"
                title="First Recognition"
                description="Awarded our first Michelin star and named 'Best New Restaurant' by the city's culinary guide."
              />

              <TimelineItem
                year="2016"
                title="Expansion"
                description="Relocated to our current location, a historic building renovated to create our elegant dining spaces."
              />

              <TimelineItem
                year="2018"
                title="Second Star"
                description="Awarded our second Michelin star, recognizing our continued commitment to culinary excellence."
              />

              <TimelineItem
                year="2022"
                title="Global Recognition"
                description="Named in the World's 50 Best Restaurants list and launched our chef's table experience."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

interface TimelineItemProps {
  year: string
  title: string
  description: string
}

function TimelineItem({ year, title, description }: TimelineItemProps) {
  return (
    <div className="relative pl-10 md:pl-0 group">
      <div className="md:flex md:items-center">
        <div className="md:w-1/2 md:pr-8 md:text-right">
          <span className="font-serif text-xl font-medium text-[#9A8866] transition-all duration-300 group-hover:text-[#8A7856]">
            {year}
          </span>
          <h3 className="font-serif text-lg font-medium transition-all duration-300 group-hover:text-[#9A8866]">
            {title}
          </h3>
          <p className="text-[#4A4A4A]">{description}</p>
        </div>
        <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-[#9A8866] md:left-1/2 md:-translate-x-1/2 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#8A7856]"></div>
        <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
      </div>
    </div>
  )
}
