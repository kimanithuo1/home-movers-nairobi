import { Truck, Package, MapPin, Shield } from "lucide-react"
import { Helmet } from "react-helmet"

function ServicesPage() {
  const services = [
    {
      name: "Small Moves",
      description: "Perfect for studio or one-bedroom apartments",
      price: "From KSh 5,000",
      image:
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      details:
        "Includes 2 movers, 2-hour service, and a small truck. Ideal for moving a few items or a small apartment.",
    },
    {
      name: "Office Relocation",
      description: "Efficient moving for businesses of all sizes",
      price: "Custom quote",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      details:
        "Tailored solutions for office moves, including IT equipment handling, furniture disassembly/reassembly, and after-hours moving options.",
    },
    {
      name: "Long-Distance Moving",
      description: "Reliable service for moves outside Nairobi",
      price: "From KSh 15,000",
      image:
        "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      details:
        "Experienced in inter-city and cross-country moves. We provide packing services, transportation, and unpacking at your new location.",
    },
    {
      name: "Packing Services",
      description: "Professional packing to ensure your items are safe",
      price: "From KSh 2,000",
      image:
         "https://plus.unsplash.com/premium_photo-1679858781690-71bffb438658?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details:
        "Our team uses high-quality packing materials and techniques to protect your belongings. We can pack your entire home or just specific items.",
    },
  ]

  const vehicles = [
    {
      name: "Motorbike",
      capacity: "Small items",
      price: "KSh 500 per trip",
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Tuk-tuk",
      capacity: "Up to 500kg",
      price: "KSh 1,500 per trip",
      image:
        "https://images.unsplash.com/photo-1549287748-f095932c9f81?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Small Pickup",
      capacity: "Up to 1 ton",
      price: "KSh 3,000 per trip",
      image:
        "https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Small Truck",
      capacity: "Up to 3 tons",
      price: "KSh 5,000 per trip",
      image:
        "https://plus.unsplash.com/premium_photo-1683121309082-0241e761ba07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Large Truck",
      capacity: "Up to 10 tons",
      price: "KSh 10,000 per trip",
      image:
        "https://plus.unsplash.com/premium_photo-1661963219843-f1a50a6cfcd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]

  return (
    <div className="bg-[#546581] text-white min-h-screen">
      <Helmet>
        <title>Our Services - Home Movers Nairobi</title>
        <meta
          name="description"
          content="Explore our range of moving services and vehicle options for all your relocation needs in Nairobi."
        />
      </Helmet>
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">Our Services</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Moving Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#546581]">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="font-bold text-[#8B6465] mb-2">{service.price}</p>
                  <p className="text-gray-700 text-sm">{service.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Vehicle Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.name}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#546581]">{vehicle.name}</h3>
                  <p className="text-gray-600 mb-2">Capacity: {vehicle.capacity}</p>
                  <p className="font-bold text-[#8B6465] mb-2">{vehicle.price}</p>
                  <p className="text-gray-700 text-sm">{vehicle.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Why Choose Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Truck size={24} />}
              title="Experienced Team"
              description="Our movers are trained professionals with years of experience in handling all types of moves."
            />
            <FeatureCard
              icon={<Package size={24} />}
              title="Careful Handling"
              description="We treat your belongings with the utmost care and respect, using proper packing techniques and materials."
            />
            <FeatureCard
              icon={<MapPin size={24} />}
              title="Local Knowledge"
              description="We know Nairobi inside out, ensuring efficient routes and timely deliveries."
            />
            <FeatureCard
              icon={<Shield size={24} />}
              title="Fully Insured"
              description="Your items are protected throughout the entire moving process, giving you peace of mind."
            />
          </div>
        </section>

        <section className="bg-white text-[#546581] p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Additional Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Booking Process</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Contact us via phone, email, or our online booking form</li>
                <li>Provide details about your move (date, locations, items)</li>
                <li>Receive a quote and confirm your booking</li>
                <li>We'll send a confirmation and moving day instructions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">What to Expect on Moving Day</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Our team will arrive at the scheduled time</li>
                <li>We'll do a walk-through and confirm the moving plan</li>
                <li>Careful packing and loading of your items</li>
                <li>Transportation to your new location</li>
                <li>Unloading and placement of items as per your instructions</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
      <div className="bg-[#8B6465] text-white p-3 rounded-full mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-[#546581]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default ServicesPage

