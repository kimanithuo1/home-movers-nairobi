"use client"

import { useState } from "react"
import { Truck, Users, Package, AlertTriangle } from "lucide-react"
import { Helmet } from "react-helmet"

function BookingPage() {
  const [step, setStep] = useState(1)
  const [booking, setBooking] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    reason: "",
    houseSize: "",
    teamSize: "",
    items: {
      fragile: false,
      heavy: false,
      valuable: false,
    },
    itemDetails: "",
    vehicleType: "",
    extraServices: [],
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === "checkbox") {
      setBooking((prev) => ({
        ...prev,
        items: {
          ...prev.items,
          [name]: checked,
        },
      }))
    } else {
      setBooking({ ...booking, [name]: value })
    }
  }

  const handleExtraServiceChange = (e) => {
    const { value, checked } = e.target
    if (checked) {
      setBooking({ ...booking, extraServices: [...booking.extraServices, value] })
    } else {
      setBooking({ ...booking, extraServices: booking.extraServices.filter((service) => service !== value) })
    }
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-[#546581]">Step 1: Basic Information</h2>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-[#546581]">Pickup Location</label>
              <input
                type="text"
                name="pickup"
                value={booking.pickup}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white text-[#546581] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6465]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-[#546581]">Drop-off Location</label>
              <input
                type="text"
                name="dropoff"
                value={booking.dropoff}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white text-[#546581] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6465]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-[#546581]">Moving Date</label>
              <input
                type="date"
                name="date"
                value={booking.date}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white text-[#546581] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6465]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-[#546581]">Reason for Moving</label>
              <select
                name="reason"
                value={booking.reason}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white text-[#546581] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6465]"
                required
              >
                <option value="">Select a reason</option>
                <option value="newHome">Moving to a new home</option>
                <option value="job">Job relocation</option>
                <option value="school">School relocation</option>
                <option value="downsizing">Downsizing</option>
                <option value="upsizing">Upsizing</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button
              onClick={nextStep}
              className="bg-[#8B6465] text-white font-bold py-2 px-4 rounded hover:bg-opacity-80 transition duration-300"
            >
              Next
            </button>
          </div>
        )
      case 2:
        return (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-[#546581]">Step 2: Move Details</h2>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-[#546581]">House Size</label>
              <select
                name="houseSize"
                value={booking.houseSize}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white text-[#546581] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6465]"
                required
              >
                <option value="">Select house size</option>
                <option value="studio">Studio</option>
                <option value="1bedroom">1 Bedroom</option>
                <option value="2bedroom">2 Bedrooms</option>
                <option value="3bedroom">3 Bedrooms</option>
                <option value="4bedroom">4+ Bedrooms</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-[#546581]">Team Size Needed</label>
              <select
                name="teamSize"
                value={booking.teamSize}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white text-[#546581] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6465]"
                required
              >
                <option value="">Select team size</option>
                <option value="2">2 Movers</option>
                <option value="3">3 Movers</option>
                <option value="4">4 Movers</option>
                <option value="5+">5+ Movers</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-[#546581]">Items to be Moved</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="fragile"
                    checked={booking.items.fragile}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span className="text-[#546581]">Fragile Items</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="heavy"
                    checked={booking.items.heavy}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span className="text-[#546581]">Heavy Items</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="valuable"
                    checked={booking.items.valuable}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span className="text-[#546581]">Valuable Items</span>
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-[#546581]">Additional Item Details</label>
              <textarea
                name="itemDetails"
                value={booking.itemDetails}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white text-[#546581] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6465]"
                rows="3"
                placeholder="Please provide any additional details about your items"
              ></textarea>
            </div>
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-opacity-80 transition duration-300"
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                className="bg-[#8B6465] text-white font-bold py-2 px-4 rounded hover:bg-opacity-80 transition duration-300"
              >
                Next
              </button>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-[#546581]">Step 3: Vehicle and Services</h2>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-[#546581]">Select Vehicle Type</label>
              <select
                name="vehicleType"
                value={booking.vehicleType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white text-[#546581] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6465]"
                required
              >
                <option value="">Select a vehicle</option>
                <option value="motorbike">Motorbike</option>
                <option value="tuktuk">Tuk-tuk</option>
                <option value="smallPickup">Small Pickup</option>
                <option value="smallTruck">Small Truck</option>
                <option value="largeTruck">Large Truck</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-[#546581]">Select Extra Services</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="packing"
                    checked={booking.extraServices.includes("packing")}
                    onChange={handleExtraServiceChange}
                    className="mr-2"
                  />
                  <span className="text-[#546581]">Packing Service</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="storage"
                    checked={booking.extraServices.includes("storage")}
                    onChange={handleExtraServiceChange}
                    className="mr-2"
                  />
                  <span className="text-[#546581]">Storage Service</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="insurance"
                    checked={booking.extraServices.includes("insurance")}
                    onChange={handleExtraServiceChange}
                    className="mr-2"
                  />
                  <span className="text-[#546581]">Moving Insurance</span>
                </label>
              </div>
            </div>
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-opacity-80 transition duration-300"
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                className="bg-[#8B6465] text-white font-bold py-2 px-4 rounded hover:bg-opacity-80 transition duration-300"
              >
                Next
              </button>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-[#546581]">Step 4: Booking Summary</h2>
            <div className="bg-[#546581] text-white p-4 rounded-md mb-4">
              <p>
                <strong>Pickup:</strong> {booking.pickup}
              </p>
              <p>
                <strong>Drop-off:</strong> {booking.dropoff}
              </p>
              <p>
                <strong>Date:</strong> {booking.date}
              </p>
              <p>
                <strong>Reason for Moving:</strong> {booking.reason}
              </p>
              <p>
                <strong>House Size:</strong> {booking.houseSize}
              </p>
              <p>
                <strong>Team Size:</strong> {booking.teamSize}
              </p>
              <p>
                <strong>Items:</strong>{" "}
                {Object.entries(booking.items)
                  .filter(([_, v]) => v)
                  .map(([k]) => k)
                  .join(", ")}
              </p>
              <p>
                <strong>Item Details:</strong> {booking.itemDetails}
              </p>
              <p>
                <strong>Vehicle Type:</strong> {booking.vehicleType}
              </p>
              <p>
                <strong>Extra Services:</strong> {booking.extraServices.join(", ") || "None"}
              </p>
            </div>
            <p className="mb-4 text-lg font-semibold text-[#8B6465]">Estimated Price: KSh XX,XXX</p>
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-opacity-80 transition duration-300"
              >
                Previous
              </button>
              <button
                onClick={() => alert("Booking confirmed! We'll contact you shortly with more details.")}
                className="bg-[#8B6465] text-white font-bold py-2 px-4 rounded hover:bg-opacity-80 transition duration-300"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="bg-[#546581] min-h-screen py-16">
      <Helmet>
        <title>Book Your Move - Home Movers Nairobi</title>
        <meta
          name="description"
          content="Book your move with Home Movers Nairobi. Fast, reliable, and affordable moving services for homes and businesses."
        />
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Book Your Move</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <div className="flex justify-between mb-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= i ? "bg-[#8B6465] text-white" : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    {i}
                  </div>
                ))}
              </div>
              {renderStep()}
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-[#546581]">Why Choose Us</h2>
              <ul className="space-y-4">
                <FeatureItem icon={<Truck />} text="Wide range of vehicles for all move sizes" />
                <FeatureItem icon={<Users />} text="Professional and experienced moving teams" />
                <FeatureItem icon={<Package />} text="Careful handling of your belongings" />
                <FeatureItem icon={<AlertTriangle />} text="Fully insured for your peace of mind" />
              </ul>
            </div>
            <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-[#546581]">Booking Tips</h2>
              <ul className="list-disc list-inside text-[#546581] space-y-2">
                <li>Book at least a week in advance for better availability</li>
                <li>Prepare a detailed inventory of items to be moved</li>
                <li>Consider our packing services for fragile items</li>
                <li>Inform us of any parking or access restrictions</li>
                <li>Have a contingency plan for unexpected delays</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureItem({ icon, text }) {
  return (
    <li className="flex items-center">
      <div className="bg-[#8B6465] text-white p-2 rounded-full mr-3">{icon}</div>
      <span className="text-[#546581]">{text}</span>
    </li>
  )
}

export default BookingPage

