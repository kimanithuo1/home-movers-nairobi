"use client"
import { useState } from "react"

function BookingPage() {
  const [step, setStep] = useState(1)
  const [booking, setBooking] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    vehicleType: "",
    extraServices: [],
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setBooking({ ...booking, [name]: value })
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
            <h2 className="text-2xl font-bold mb-4">Step 1: Pickup & Drop-off</h2>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Pickup Location</label>
              <input
                type="text"
                name="pickup"
                value={booking.pickup}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4299e1]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Drop-off Location</label>
              <input
                type="text"
                name="dropoff"
                value={booking.dropoff}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4299e1]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Moving Date</label>
              <input
                type="date"
                name="date"
                value={booking.date}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4299e1]"
                required
              />
            </div>
            <button
              onClick={nextStep}
              className="bg-[#4299e1] text-white px-4 py-2 rounded-md hover:bg-[#3182ce] transition duration-300"
            >
              Next
            </button>
          </div>
        )
      case 2:
        return (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Step 2: Vehicle Selection</h2>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Select Vehicle Type</label>
              <select
                name="vehicleType"
                value={booking.vehicleType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4299e1]"
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
            <button
              onClick={prevStep}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2 hover:bg-gray-400 transition duration-300"
            >
              Previous
            </button>
            <button
              onClick={nextStep}
              className="bg-[#4299e1] text-white px-4 py-2 rounded-md hover:bg-[#3182ce] transition duration-300"
            >
              Next
            </button>
          </div>
        )
      case 3:
        return (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Step 3: Extra Services</h2>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Select Extra Services</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="packing"
                    checked={booking.extraServices.includes("packing")}
                    onChange={handleExtraServiceChange}
                    className="mr-2"
                  />
                  Packing Service
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="storage"
                    checked={booking.extraServices.includes("storage")}
                    onChange={handleExtraServiceChange}
                    className="mr-2"
                  />
                  Storage Service
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="insurance"
                    checked={booking.extraServices.includes("insurance")}
                    onChange={handleExtraServiceChange}
                    className="mr-2"
                  />
                  Moving Insurance
                </label>
              </div>
            </div>
            <button
              onClick={prevStep}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2 hover:bg-gray-400 transition duration-300"
            >
              Previous
            </button>
            <button
              onClick={nextStep}
              className="bg-[#4299e1] text-white px-4 py-2 rounded-md hover:bg-[#3182ce] transition duration-300"
            >
              Next
            </button>
          </div>
        )
      case 4:
        return (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Step 4: Booking Summary</h2>
            <div className="bg-gray-100 p-4 rounded-md mb-4">
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
                <strong>Vehicle Type:</strong> {booking.vehicleType}
              </p>
              <p>
                <strong>Extra Services:</strong> {booking.extraServices.join(", ") || "None"}
              </p>
            </div>
            <p className="mb-4 text-lg font-semibold">Estimated Price: KSh XX,XXX</p>
            <button
              onClick={prevStep}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2 hover:bg-gray-400 transition duration-300"
            >
              Previous
            </button>
            <button
              onClick={() => alert("Booking confirmed!")}
              className="bg-[#4299e1] text-white px-4 py-2 rounded-md hover:bg-[#3182ce] transition duration-300"
            >
              Confirm Booking
            </button>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Book Your Move</h1>
        <div className="max-w-2xl mx-auto">{renderStep()}</div>
      </div>
    </div>
  )
}

export default BookingPage

