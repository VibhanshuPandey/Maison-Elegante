"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import SectionHeading from "@/components/section-heading"

export default function ReservationsPage() {
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "",
    time: "",
    specialRequests: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your server
    console.log("Form submitted:", { ...formData, date })
    setSubmitted(true)
  }

  const timeSlots = ["5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"]

  return (
    <>
      <section className="relative h-[50vh] w-full">
        <Image src="/reservations-header.png" alt="Reservations" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <h1 className="font-serif text-4xl font-light tracking-wide md:text-5xl lg:text-6xl">Reservations</h1>
          <div className="mt-2 h-0.5 w-24 bg-white mx-auto"></div>
          <p className="mt-4 max-w-md text-lg font-light md:text-xl">
            Reserve your table for an unforgettable experience
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          {!submitted ? (
            <>
              <SectionHeading
                title="Reserve Your Table"
                subtitle="We look forward to hosting you at Maison Élégante. Please fill out the form below to make your reservation."
              />

              <div className="mx-auto max-w-2xl mt-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="transition-all duration-300 focus:border-[#9A8866] focus:ring-[#9A8866]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(123) 456-7890"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="transition-all duration-300 focus:border-[#9A8866] focus:ring-[#9A8866]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="transition-all duration-300 focus:border-[#9A8866] focus:ring-[#9A8866]"
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <label htmlFor="date" className="text-sm font-medium">
                        Date
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal transition-all duration-300 hover:border-[#9A8866]"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Select date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="time" className="text-sm font-medium">
                        Time
                      </label>
                      <Select onValueChange={(value) => handleSelectChange("time", value)}>
                        <SelectTrigger className="transition-all duration-300 hover:border-[#9A8866]">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="guests" className="text-sm font-medium">
                        Number of Guests
                      </label>
                      <Select onValueChange={(value) => handleSelectChange("guests", value)}>
                        <SelectTrigger className="transition-all duration-300 hover:border-[#9A8866]">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num}
                            </SelectItem>
                          ))}
                          <SelectItem value="9+">9+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="specialRequests" className="text-sm font-medium">
                      Special Requests
                    </label>
                    <Textarea
                      id="specialRequests"
                      name="specialRequests"
                      placeholder="Please let us know about any dietary restrictions, allergies, or special occasions."
                      rows={4}
                      value={formData.specialRequests}
                      onChange={handleChange}
                      className="transition-all duration-300 focus:border-[#9A8866] focus:ring-[#9A8866]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#9A8866] hover:bg-[#8A7856] text-white transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Request Reservation
                  </Button>

                  <p className="text-xs text-[#4A4A4A] text-center">
                    Your reservation is not confirmed until you receive confirmation from our team.
                  </p>
                </form>
              </div>
            </>
          ) : (
            <div className="mx-auto max-w-2xl text-center py-12">
              <div className="mb-6 text-[#9A8866]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-16 w-16"
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
              <h2 className="font-serif text-3xl font-light tracking-wide">Thank You!</h2>
              <p className="mt-4 text-[#4A4A4A]">
                Your reservation request has been submitted. Our team will contact you shortly to confirm your
                reservation.
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                className="mt-8 bg-[#9A8866] hover:bg-[#8A7856] text-white transition-all duration-300 transform hover:scale-[1.02]"
              >
                Make Another Reservation
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F9F6F0]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="font-serif text-3xl font-light tracking-wide">Reservation Policies</h2>
              <div className="mt-2 h-0.5 w-24 bg-[#9A8866]"></div>
              <div className="mt-6 space-y-4">
                <p className="text-[#4A4A4A]">
                  <span className="font-medium">Confirmation:</span> All reservations require confirmation from our
                  team.
                </p>
                <p className="text-[#4A4A4A]">
                  <span className="font-medium">Cancellations:</span> We kindly request 24 hours notice for
                  cancellations.
                </p>
                <p className="text-[#4A4A4A]">
                  <span className="font-medium">Late Arrivals:</span> Tables will be held for 15 minutes past the
                  reservation time.
                </p>
                <p className="text-[#4A4A4A]">
                  <span className="font-medium">Large Parties:</span> For groups of 8 or more, please contact us
                  directly.
                </p>
                <p className="text-[#4A4A4A]">
                  <span className="font-medium">Children:</span> We welcome guests of all ages and offer a special menu
                  for children.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-md transition-all duration-500 hover:shadow-xl">
              <Image
                src="https://i.postimg.cc/8C56jfGJ/interior.jpg"
                alt="Restaurant interior"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
