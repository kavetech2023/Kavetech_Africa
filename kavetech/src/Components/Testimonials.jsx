import React from 'react'
import { User } from 'lucide-react'

const Testimonial = ({ name, role, quote, image }) => (
  <div className="rounded-lg bg-white backdrop-blur-lg p-6 shadow-lg">
    <div className="flex items-center space-x-3 mb-4">
      {image ? (
        <img src={image} className="rounded-full h-12 w-12 object-cover" alt={name} />
      ) : (
        <User className="h-12 w-12 text-gray-400" />
      )}
      <div className="flex flex-col">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
    <p className="text-sm">{quote}</p>
  </div>
)

const testimonials = [
  {
    name: "Anna",
    role: "CEO, Global E-commerce Platform",
    image: "https://randomuser.me/portraits/women/1.jpg",
    quote: "KaveTech's custom software solution increased our international sales by 200%. Their tailored approach to our unique business needs was impressive. They're not just developers, they're growth partners."
  },
  {
    name: "Jessica",
    role: "CMO, Multinational Retail Corporation",
    image: "https://randomuser.me/portraits/women/15.jpg",
    quote: "The mobile app KaveTech developed for us has been downloaded in over 50 countries. It's user-friendly, scalable, and has significantly boosted our global brand presence. Their expertise in international markets is unparalleled."
  },
  {
    name: "Mark",
    role: "Founder, Tech Startup (Now in 10 Countries)",
    image: "https://randomuser.me/portraits/men/1.jpg",
    quote: "KaveTech's custom CRM system allowed us to expand into 7 new markets in just one year. Their software adapts seamlessly to different cultural and regulatory environments. They truly understand global business needs."
  },
  {
    name: "Emily",
    role: "CTO, International Fintech Company",
    image: "https://randomuser.me/portraits/women/4.jpg",
    quote: "The blockchain-based payment system KaveTech built for us is now handling transactions in 30+ currencies. Their innovative approach and attention to international compliance have been crucial to our global expansion."
  },
  {
    name: "Dr. Phoebe",
    role: "Director, Global Health Non-Profit",
    image: "https://randomuser.me/portraits/women/13.jpg",
    quote: "KaveTech developed a telemedicine platform that's now connecting doctors and patients across 15 countries. Their ability to create software that bridges language and cultural gaps is remarkable."
  },
  {
    name: "James",
    role: "COO, International Logistics Firm",
    image: "https://randomuser.me/portraits/men/5.jpg",
    quote: "The supply chain management system from KaveTech increased our operational efficiency by 40% across our global network. Their software's ability to handle complex international logistics is game-changing."
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide">Testimonials</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What our global clients say
          </h3>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}