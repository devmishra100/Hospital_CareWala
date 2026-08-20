import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaStar, FaUserDoctor, FaMagnifyingGlass, FaLocationDot, FaClock, FaXmark } from 'react-icons/fa6'

const doctorsList = [
  { name: "Dr. Priyank Modi", service: "Cardiologist", rating: 4.8, fee: 600, experience: "12+ yrs", slot: "Today, 4:30 PM" },
  { name: "Dr. Priyam Mishra", service: "Neurologist", rating: 4.6, fee: 700, experience: "9+ yrs", slot: "Tomorrow, 10:00 AM" },
  { name: "Dr. OM Ray", service: "Orthopedic Surgeon", rating: 4.9, fee: 800, experience: "15+ yrs", slot: "Today, 6:00 PM" },
  { name: "Dr. Shivam Shukla", service: "Pediatrician", rating: 4.7, fee: 500, experience: "8+ yrs", slot: "Today, 5:00 PM" },
  { name: "Dr. Satyam Shukla", service: "Dentist", rating: 4.5, fee: 400, experience: "6+ yrs", slot: "Tomorrow, 11:30 AM" },
  { name: "Dr. Harsh Shukla", service: "Eye Specialist", rating: 4.8, fee: 550, experience: "10+ yrs", slot: "Today, 3:00 PM" },
  { name: "Dr. Khayal Vasva", service: "General Physician", rating: 4.6, fee: 350, experience: "7+ yrs", slot: "Today, 2:00 PM" },
  { name: "Dr. Vipul Yadav", service: "Gynecologist", rating: 4.9, fee: 650, experience: "14+ yrs", slot: "Tomorrow, 9:30 AM" },
  { name: "Dr. Rupesh Sharma", service: "ENT Specialist", rating: 4.5, fee: 450, experience: "6+ yrs", slot: "Today, 5:30 PM" },
  { name: "Dr. Kavita Rao", service: "Dermatologist", rating: 4.7, fee: 500, experience: "9+ yrs", slot: "Tomorrow, 12:00 PM" },
]

function Services() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedDoctor, setSelectedDoctor] = useState(null)

  const categories = ["All", ...new Set(doctorsList.map((d) => d.service))]

  const filteredDoctors = doctorsList.filter((doctor) => {
    const matchesFilter = activeFilter === "All" || doctor.service === activeFilter
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.service.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-gradient-to-br from-teal-600 to-emerald-700 px-6 py-14 text-center">
        <h1 className="text-4xl font-extrabold text-white mb-2">
          Our <span className="text-teal-200">Services</span>
        </h1>
        <p className="text-teal-50 mb-8">
          Choose from our top-rated specialists across departments
        </p>

        {/* Search */}
        <div className="max-w-xl mx-auto relative">
          <FaMagnifyingGlass className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search doctor or specialization..."
            className="w-full rounded-full pl-12 pr-5 py-3.5 shadow-md focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === cat
                  ? "bg-teal-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-teal-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-gray-500 text-sm mb-4">
          {filteredDoctors.length} doctor{filteredDoctors.length !== 1 && "s"} found
        </p>

        {/* Doctor List */}
        <div className="flex flex-col gap-4">
          {filteredDoctors.length === 0 ? (
            <div className="bg-white rounded-xl p-10 text-center text-gray-400">
              No doctors found. Try a different search or filter.
            </div>
          ) : (
            filteredDoctors.map((doctor, index) => (
              <div 
                key={index} 
                className="bg-white shadow-sm border border-gray-100 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-teal-50 text-teal-600 text-2xl shrink-0">
                    <FaUserDoctor />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{doctor.name}</h3>
                    <p className="text-teal-600 text-sm">{doctor.service}</p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <FaStar className="text-yellow-400" /> {doctor.rating}
                      </span>
                      <span>•</span>
                      <span>{doctor.experience}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-teal-600">
                        <FaClock /> {doctor.slot}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:flex-col sm:items-end">
                  <p className="text-gray-700 font-semibold">₹{doctor.fee} <span className="text-gray-400 text-xs font-normal">/ visit</span></p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedDoctor(doctor)}
                      className="px-4 py-2 text-sm border border-teal-600 text-teal-600 rounded-full hover:bg-teal-50 transition"
                    >
                      View Profile
                    </button>
                    <Link
                      to="/appointment"
                      className="px-4 py-2 text-sm bg-teal-600 text-white rounded-full hover:bg-teal-700 transition"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Profile Modal */}
      {selectedDoctor && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center px-4 z-50"
          onClick={() => setSelectedDoctor(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
            >
              <FaXmark size={18} />
            </button>

            <div className="flex flex-col items-center text-center mb-5">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-teal-50 text-teal-600 text-3xl mb-3">
                <FaUserDoctor />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{selectedDoctor.name}</h3>
              <p className="text-teal-600 font-medium">{selectedDoctor.service}</p>
              <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                <FaStar className="text-yellow-400" />
                <span>{selectedDoctor.rating} rating • {selectedDoctor.experience}</span>
              </div>
            </div>

            <div className="space-y-3 mb-6 border-t border-gray-100 pt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 flex items-center gap-2"><FaClock className="text-teal-600" /> Next Slot</span>
                <span className="text-gray-800 font-medium">{selectedDoctor.slot}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 flex items-center gap-2"><FaLocationDot className="text-teal-600" /> Consultation Fee</span>
                <span className="text-gray-800 font-medium">₹{selectedDoctor.fee}</span>
              </div>
            </div>

            <Link
              to="/appointment"
              onClick={() => setSelectedDoctor(null)}
              className="block w-full text-center bg-teal-600 text-white py-3 rounded-full font-medium hover:bg-teal-700 transition"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Services