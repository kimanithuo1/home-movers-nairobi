function AboutUsPage() {
    const teamMembers = [
      {
        name: "Kijana Mwakimu",
        role: "Founder & CEO",
        image:
          "https://plus.unsplash.com/premium_photo-1661346026114-1f5097d17f0f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Mpendakazi Oper",
        role: "Operations Manager",
        image:
          "https://plus.unsplash.com/premium_photo-1661963374633-ebd3e79f7b9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "David Kimani",
        role: "Lead Mover",
        image:
          "https://plus.unsplash.com/premium_photo-1661326241188-e159b0ca5c05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ]
  
    return (
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-12 text-center">About Us</h1>
  
          <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <img
                  src="https://plus.unsplash.com/premium_photo-1707155466084-690e1646e40d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                  Our team of experienced movers and our fleet of well-maintained vehicles ensure that your belongings are
                  transported safely and efficiently. We understand that every move is unique, which is why we offer a
                  range of services to meet your specific needs.
                </p>
              </div>
            </div>
          </section>
  
          <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At Home Movers Nairobi, our mission is to provide exceptional moving services that exceed our customers'
              expectations. We strive to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Deliver reliable and efficient moving solutions</li>
              <li>Ensure the safety and security of our customers' belongings</li>
              <li>Offer competitive and transparent pricing</li>
              <li>Continuously improve our services based on customer feedback</li>
              <li>Contribute positively to the Nairobi community</li>
            </ul>
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
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    )
  }
  
  export default AboutUsPage
  
  