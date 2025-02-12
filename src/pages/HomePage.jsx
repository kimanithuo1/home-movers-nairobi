import React from "react"
import { Link } from "react-router-dom"
import { Truck, Package, Clock, Shield } from "lucide-react"

function HomePage() {
  const vehicles = [
    {
      name: "Motorbike",
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Quick deliveries for small items",
    },
    {
      name: "Tuk-tuk",
      image:
        "https://images.unsplash.com/photo-1549287748-f095932c9f81?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Affordable option for medium-sized moves",
    },
    {
      name: "Small Pickup",
      image:
        "https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Perfect for apartment moves",
    },
    {
      name: "Small Truck",
      image:
        "https://plus.unsplash.com/premium_photo-1683121309082-0241e761ba07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Ideal for house moves",
    },
    {
      name: "Large Truck",
      image:
        "https://plus.unsplash.com/premium_photo-1661963219843-f1a50a6cfcd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Best for office relocations",
    },
  ]

  const testimonials = [
    {
      name: "John Doe",
      role: "Homeowner",
      content: "Excellent service! They made my move stress-free.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Jane Smith",
      role: "Business Owner",
      content: "Professional team, highly recommended for office moves.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "David Kimani",
      role: "Student",
      content: "Affordable and reliable. Perfect for students!",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1592805144716-feeccccef5ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Moving truck on the road"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">Your Trusted Moving Partner in Nairobi</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Fast, reliable, and affordable moving services for homes and businesses
          </p>
          <Link to="/booking" className="btn btn-primary text-lg">
            Book Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Truck />}
              title="Wide Range of Vehicles"
              description="From motorbikes to large trucks, we have the right vehicle for your move"
            />
            <FeatureCard
              icon={<Package />}
              title="Professional Packing"
              description="Our expert team ensures your belongings are packed securely"
            />
            <FeatureCard
              icon={<Clock />}
              title="Timely Service"
              description="We value your time and always strive to deliver on schedule"
            />
            <FeatureCard
              icon={<Shield />}
              title="Fully Insured"
              description="Your items are protected throughout the entire moving process"
            />
          </div>
        </div>
      </section>

      {/* Vehicle Options */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Vehicle Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <div key={vehicle.name} className="card">
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={`${vehicle.name} for moving services`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
                  <p className="text-gray-600">{vehicle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="card p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Service Area</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63820.96447478836!2d36.86143765652106!3d-1.2811595725231516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11655fc42331%3A0x8d57a3d0c4a1e0d2!2sUtawala%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1652893898419!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="text-center mt-4 text-gray-600">
            We provide moving services throughout Nairobi and surrounding areas, including Utawala.
          </p>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-[#4299e1] text-white p-4 rounded-full mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default HomePage

