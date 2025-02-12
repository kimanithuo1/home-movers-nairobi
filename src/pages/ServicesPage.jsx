import { Truck, Package, MapPin, Shield } from "lucide-react"

function ServicesPage() {
  const services = [
    {
      name: "Small Moves",
      description: "Perfect for studio or one-bedroom apartments",
      price: "From KSh 5,000",
      image:
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Office Relocation",
      description: "Efficient moving for businesses of all sizes",
      price: "Custom quote",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    },
    {
      name: "Long-Distance Moving",
      description: "Reliable service for moves outside Nairobi",
      price: "From KSh 15,000",
      image:
        "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Packing Services",
      description: "Professional packing to ensure your items are safe",
      price: "From KSh 2,000",
      image:
        "https://plus.unsplash.com/premium_photo-1679858781690-71bffb438658?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    <div className="bg-gray-50">
      <div className="container py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our Services</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Moving Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.name} className="card">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="font-bold text-[#4299e1]">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Vehicle Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <div key={vehicle.name} className="card">
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
                  <p className="text-gray-600 mb-2">Capacity: {vehicle.capacity}</p>
                  <p className="font-bold text-[#4299e1]">{vehicle.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Truck size={24} />}
              title="Experienced Team"
              description="Our movers are trained professionals with years of experience"
            />
            <FeatureCard
              icon={<Package size={24} />}
              title="Careful Handling"
              description="We treat your belongings with the utmost care and respect"
            />
            <FeatureCard
              icon={<MapPin size={24} />}
              title="Local Knowledge"
              description="We know Nairobi inside out, ensuring efficient routes"
            />
            <FeatureCard
              icon={<Shield size={24} />}
              title="Fully Insured"
              description="Your items are protected throughout the entire moving process"
            />
          </div>
        </section>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
      <div className="bg-[#4299e1] text-white p-3 rounded-full mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default ServicesPage

