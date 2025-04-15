"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"
import SectionHeading from "@/components/section-heading"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your server
    console.log("Form submitted:", formData)
    setSubmitted(true)
  }

  return (
    <>
      <section className="relative h-[50vh] w-full">
        <Image src="/contact-header.png" alt="Contact Us" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <h1 className="font-serif text-4xl font-light tracking-wide md:text-5xl lg:text-6xl">Contact Us</h1>
          <div className="mt-2 h-0.5 w-24 bg-white mx-auto"></div>
          <p className="mt-4 max-w-md text-lg font-light md:text-xl">We'd love to hear from you</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <SectionHeading
                title="Get in Touch"
                subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
              />

              {!submitted ? (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="transition-all duration-300 focus:border-[#9A8866] focus:ring-[#9A8866]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="transition-all duration-300 focus:border-[#9A8866] focus:ring-[#9A8866]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="transition-all duration-300 focus:border-[#9A8866] focus:ring-[#9A8866]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="transition-all duration-300 focus:border-[#9A8866] focus:ring-[#9A8866]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#9A8866] hover:bg-[#8A7856] text-white transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Send Message
                  </Button>
                </form>
              ) : (
                <div className="mt-8 rounded-lg bg-[#F9F6F0] p-8 text-center shadow-md">
                  <div className="mb-4 text-[#9A8866]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl font-medium">Thank You!</h3>
                  <p className="mt-2 text-[#4A4A4A]">Your message has been sent. We'll get back to you soon.</p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 bg-[#9A8866] hover:bg-[#8A7856] text-white transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Send Another Message
                  </Button>
                </div>
              )}
            </div>

            <div>
              <div className="h-[300px] overflow-hidden rounded-lg shadow-md mb-8 transition-all duration-500 hover:shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1650000000000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="rounded-full bg-[#F9F6F0] p-3 text-[#9A8866] transition-all duration-300 group-hover:bg-[#9A8866] group-hover:text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium transition-colors duration-300 group-hover:text-[#9A8866]">
                      Address
                    </h3>
                    <p className="mt-1 text-[#4A4A4A]">
                      123 Elegance Avenue
                      <br />
                      City Center, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="rounded-full bg-[#F9F6F0] p-3 text-[#9A8866] transition-all duration-300 group-hover:bg-[#9A8866] group-hover:text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium transition-colors duration-300 group-hover:text-[#9A8866]">
                      Phone
                    </h3>
                    <p className="mt-1 text-[#4A4A4A]">(212) 555-1234</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="rounded-full bg-[#F9F6F0] p-3 text-[#9A8866] transition-all duration-300 group-hover:bg-[#9A8866] group-hover:text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium transition-colors duration-300 group-hover:text-[#9A8866]">
                      Email
                    </h3>
                    <p className="mt-1 text-[#4A4A4A]">info@maisonelegante.com</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium">Follow Us</h3>
                  <div className="mt-4 flex space-x-4">
                    <a
                      href="#"
                      className="rounded-full bg-[#F9F6F0] p-3 text-[#9A8866] hover:bg-[#9A8866] hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a
                      href="#"
                      className="rounded-full bg-[#F9F6F0] p-3 text-[#9A8866] hover:bg-[#9A8866] hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a
                      href="#"
                      className="rounded-full bg-[#F9F6F0] p-3 text-[#9A8866] hover:bg-[#9A8866] hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
