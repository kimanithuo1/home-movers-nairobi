"use client"
import { useState } from "react"

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
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4299e1]"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-2 font-semibold">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4299e1]"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4299e1]"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4299e1]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#4299e1] text-white px-6 py-3 rounded-md hover:bg-[#3182ce] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Our Location</h2>
              <div className="mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63820.96447478836!2d36.86143765652106!3d-1.2811595725231516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11655fc42331%3A0x8d57a3d0c4a1e0d2!2sUtawala%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1652893898419!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-md"
                ></iframe>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Home Movers Nairobi</h3>
                <p className="mb-2">123 Moving Street, Nairobi, Kenya</p>
                <p className="mb-2">Phone: +254 123 456 789</p>
                <p className="mb-2">Email: info@homemoversnairobi.com</p>
                <p>Working hours: Monday - Saturday, 8am - 6pm</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="text-[#4299e1] hover:text-[#3182ce]">
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href="#" className="text-[#4299e1] hover:text-[#3182ce]">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="#" className="text-[#4299e1] hover:text-[#3182ce]">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a href="#" className="text-[#4299e1] hover:text-[#3182ce]">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

