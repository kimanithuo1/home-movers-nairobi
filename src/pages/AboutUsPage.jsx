import { Helmet } from "react-helmet"

function AboutUsPage() {
  const teamMembers = [
    {
      name: "Kijana Mwakimu",
      role: "Founder & CEO",
      image:
        "https://plus.unsplash.com/premium_photo-1661346026114-1f5097d17f0f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "With over 15 years of experience in the moving industry, Kijana founded Home Movers Nairobi with a vision to provide top-notch moving services to the community.",
    },
    {
      name: "Mpendakazi Oper",
      role: "Operations Manager",
      image:
        "https://plus.unsplash.com/premium_photo-1661963374633-ebd3e79f7b9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Mpendakazi ensures that every move is executed flawlessly. Her attention to detail and problem-solving skills keep our operations running smoothly.",
    },
    {
      name: "David Kimani",
      role: "Lead Mover",
      image:
        "https://plus.unsplash.com/premium_photo-1661326241188-e159b0ca5c05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "With his strength and expertise, David leads our moving teams. He's known for his careful handling of items and ability to tackle any moving challenge.",
    },
  ]

  return (
    <div className="bg-[#546581] text-white min-h-screen">
      <Helmet>
        <title>About Us - Home Movers Nairobi</title>
        <meta
          name="description"
          content="Learn about Home Movers Nairobi, our story, mission, and the dedicated team behind our exceptional moving services."
        />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center">About Us</h1>

        <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#546581]">Our Story</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Home Movers Nairobi team"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-4">
                Home Movers Nairobi was founded in 2010 with a simple mission: to make moving in Nairobi stress-free and
                affordable. What started as a small operation with just one truck has grown into a full-service moving
                company, trusted by thousands of Nairobi residents and businesses.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey began when our founder, Kijana Mwakimu, noticed a gap in the market for reliable and
                customer-focused moving services. Drawing from his experience in logistics and customer service, Kijana
                assembled a team of dedicated professionals who shared his vision of revolutionizing the moving industry
                in Nairobi.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, we've expanded our fleet, refined our processes, and continuously trained our team to
                meet the evolving needs of our clients. Today, we're proud to be one of Nairobi's most trusted moving
                companies, known for our reliability, efficiency, and commitment to customer satisfaction.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#546581]">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            At Home Movers Nairobi, our mission is to provide exceptional moving services that exceed our customers'
            expectations. We strive to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Deliver reliable and efficient moving solutions tailored to each client's unique needs</li>
            <li>Ensure the safety and security of our customers' belongings throughout the moving process</li>
            <li>Offer competitive and transparent pricing without compromising on quality</li>
            <li>Continuously improve our services based on customer feedback and industry best practices</li>
            <li>
              Contribute positively to the Nairobi community through ethical business practices and local initiatives
            </li>
          </ul>
          <p className="text-gray-700">
            We believe that moving doesn't have to be stressful. Our goal is to transform the moving experience into a
            smooth, efficient, and even enjoyable process for our clients.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2 text-[#546581]">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-gray-700 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#546581] text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-[#8B6465]">Reliability</h3>
              <p className="text-gray-700">We show up on time, every time, and deliver on our promises.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-[#8B6465]">Integrity</h3>
              <p className="text-gray-700">We operate with honesty and transparency in all our dealings.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-[#8B6465]">Excellence</h3>
              <p className="text-gray-700">We strive for the highest standards in every aspect of our service.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-[#8B6465]">Customer-Centric</h3>
              <p className="text-gray-700">Our clients' needs and satisfaction are at the heart of everything we do.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-[#8B6465]">Innovation</h3>
              <p className="text-gray-700">We continuously seek new ways to improve our services and processes.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-[#8B6465]">Community</h3>
              <p className="text-gray-700">We are committed to giving back to the Nairobi community we serve.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutUsPage

