interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="font-serif text-3xl font-light tracking-wide md:text-4xl">{title}</h2>
      <div className="mt-2 h-0.5 w-24 bg-[#9A8866] mx-auto"></div>
      {subtitle && <p className="mt-4 text-center text-[#4A4A4A] max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}
