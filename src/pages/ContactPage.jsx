"use client"

import { useState } from "react"
import { Helmet } from "react-helmet"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    alert("Thank you for your message. We will get back to you soon!")
    setFormData({ name: "", phone: "", email: "", message: "" })
  }

  return (
    <div className="bg-[#546581] text-white min-h-screen py-16">
      <Helmet>
        <title>Contact Us - Home Movers Nairobi</title>
        <meta
          name="description"
          content="Get in touch with Home Movers Nairobi for all your moving needs. We're here to help with your relocation questions and concerns."
        />
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-[#546581]">Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-semibold text-[#546581]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-100 text-[#546581] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6465]"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-2 font-semibold text-[#546581]">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-100 text-[#546581] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6465]"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-semibold text-[#546581]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-100 text-[#546581] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6465]"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 font-semibold text-[#546581]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-3 py-2 bg-gray-100 text-[#546581] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6465]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#8B6465] text-white px-6 py-3 rounded-md hover:bg-opacity-80 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-[#546581]">Our Location</h2>
              <div className="mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63820.96447478836!2d36.86143765652106!3d-1.2811595725231516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11655fc42331%3A0x8d57a3d0c4a1e0d2!2sUtawala%2C%20Nairobi%2C%20Kenya!5e0"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-md"
                ></iframe>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-2 text-[#546581]">Home Movers Nairobi</h3>
                <p className="flex items-center text-gray-700">
                  <MapPin className="mr-2 text-[#8B6465]" /> 123 Moving Street, Utawala, Nairobi, Kenya
                </p>
                <p className="flex items-center text-gray-700">
                  <Phone className="mr-2 text-[#8B6465]" /> +254 123 456 789
                </p>
                <p className="flex items-center text-gray-700">
                  <Mail className="mr-2 text-[#8B6465]" /> info@homemoversnairobi.com
                </p>
                <p className="flex items-center text-gray-700">
                  <Clock className="mr-2 text-[#8B6465]" /> Working hours: Monday - Saturday, 8am - 6pm
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#546581]">Connect With Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="text-[#8B6465] hover:text-opacity-80 transition duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-[#8B6465] hover:text-opacity-80 transition duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-[#8B6465] hover:text-opacity-80 transition duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-[#546581] text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[#8B6465]">What areas do you serve?</h3>
              <p className="text-gray-700">
                We provide moving services throughout Nairobi and its surrounding areas, including Utawala, Westlands,
                Kilimani, and more. For long-distance moves, we cover most of Kenya.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[#8B6465]">How far in advance should I book my move?</h3>
              <p className="text-gray-700">
                We recommend booking at least 1-2 weeks in advance for local moves, and 3-4 weeks for long-distance
                moves. However, we also offer last-minute moving services when available.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[#8B6465]">Do you provide packing materials?</h3>
              <p className="text-gray-700">
                Yes, we offer a range of packing materials including boxes, bubble wrap, and packing tape. These can be
                purchased separately or included as part of our full-service packing option.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[#8B6465]">Are your movers insured?</h3>
              <p className="text-gray-700">
                Yes, all our movers are fully insured. We also offer additional moving insurance options for extra peace
                of mind.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContactPage

