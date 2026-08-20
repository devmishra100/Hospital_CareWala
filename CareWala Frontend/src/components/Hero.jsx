import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaStethoscope, FaClock, FaUserDoctor } from 'react-icons/fa6'
import { FaPhoneAlt, FaShieldAlt, FaSearch, FaBell, FaStar, FaCheckCircle } from 'react-icons/fa'
import { searchData } from '../data/searchData'

function Hero() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showResults, setShowResults] = useState(false)
  const navigate = useNavigate()

  const quickTags = ["Chest Pain", "Cancer", "Surgery", "Liver"]

  const filteredResults = searchTerm.trim()
    ? searchData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : []

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
    setShowResults(true)
  }

  const handleSelect = (item) => {
    setSearchTerm("")
    setShowResults(false)
    navigate(item.link)
  }

  const handleTagClick = (tag) => {
    setSearchTerm(tag)
    setShowResults(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (filteredResults.length > 0) {
      handleSelect(filteredResults[0])
    }
  }

  return (
    <div className="relative overflow-hidden">

      {/* Bold colored background shape */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-700 -z-20"></div>
      <div className="absolute top-0 left-0 right-0 h-[600px] -z-10 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      ></div>
      <div className="absolute bottom-[0px] left-0 right-0 h-24 bg-white -z-10" style={{ clipPath: "ellipse(70% 100% at 50% 100%)" }}></div>

      {/* Emergency Strip */}
      <div className="max-w-6xl mx-auto px-6 pt-8 relative">
        <div className="flex items-center gap-2 bg-white/95 backdrop-blur border border-red-100 text-red-600 px-5 py-2.5 rounded-full w-fit text-sm font-semibold shadow-md">
          <FaBell className="animate-pulse" />
          24/7 Emergency
          <span className="hidden sm:inline text-red-400 font-normal">— Call anytime, we're always here</span>
        </div>
      </div>

      {/* Hero Main */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 pt-10 pb-16 max-w-6xl mx-auto relative">
        
        {/* Left Side - Text */}
        <div className="flex-1 animate-fade-up">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-yellow-300 tracking-wider">★★★★★</span>
            <span className="text-teal-100 text-sm">(2,400+ reviews)</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 leading-tight">
            Care<span className="text-teal-200">Wala+</span>
          </h1>

          <p className="text-teal-50 text-lg mb-1">Trusted Healthcare</p>
          <p className="text-white text-3xl font-bold mb-6">At Your Fingertips</p>

          {/* Feature Pills */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <span className="flex items-center gap-2 bg-white/15 backdrop-blur text-white border border-white/30 px-4 py-2 rounded-full text-sm">
              <FaUserDoctor /> Certified Specialists
            </span>
            <span className="flex items-center gap-2 bg-white/15 backdrop-blur text-white border border-white/30 px-4 py-2 rounded-full text-sm">
              <FaClock /> 24/7 Availability
            </span>
            <span className="flex items-center gap-2 bg-white/15 backdrop-blur text-white border border-white/30 px-4 py-2 rounded-full text-sm">
              <FaShieldAlt /> Safe & Secure
            </span>
            <span className="flex items-center gap-2 bg-white/15 backdrop-blur text-white border border-white/30 px-4 py-2 rounded-full text-sm">
              <FaUserDoctor /> 500+ Doctors
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link to="/appointment" className="bg-white text-teal-700 px-6 py-3 rounded-full font-semibold hover:bg-teal-50 transition shadow-lg">
              Book Appointment Now
            </Link>
            <button className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-full font-medium hover:bg-red-600 transition shadow-lg">
              <FaPhoneAlt /> Emergency Call
            </button>
          </div>
        </div>

        {/* Right Side - Image with floating cards */}
        <div className="flex-1 relative animate-fade-up-delay">
          <img 
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600" 
            alt="Doctors" 
            className="rounded-2xl w-full shadow-2xl border-4 border-white relative z-10"
          />

          {/* Floating rating card */}
          <div className="absolute -left-6 top-8 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-20">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500">
              <FaStar />
            </div>
            <div>
              <p className="font-bold text-gray-800 text-sm">4.9 / 5.0</p>
              <p className="text-gray-400 text-xs">Patient Rating</p>
            </div>
          </div>

          {/* Floating verified card */}
          <div className="absolute -right-4 bottom-10 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-20">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-100 text-teal-600">
              <FaCheckCircle />
            </div>
            <div>
              <p className="font-bold text-gray-800 text-sm">Verified</p>
              <p className="text-gray-400 text-xs">Certified doctors only</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-3xl mx-auto px-6 pb-16 text-center relative">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
          Search by Speciality, Condition or Treatment
        </h2>
        <p className="text-gray-500 mb-6">Find the right care for your concern</p>

        <form onSubmit={handleSubmit} className="relative mb-4">
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            onFocus={() => setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 150)}
            placeholder="Search for doctors, treatments and specialities, conditions or procedures"
            className="w-full border border-gray-200 rounded-full pl-12 pr-5 py-4 shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
          />

          {/* Dropdown Results */}
          {showResults && searchTerm.trim() && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-lg text-left overflow-hidden z-20">
              {filteredResults.length > 0 ? (
                filteredResults.map((item, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => handleSelect(item)}
                    className="flex items-center justify-between w-full px-5 py-3 hover:bg-teal-50 transition text-sm"
                  >
                    <span>
                      <span className="font-medium text-gray-800">{item.name}</span>
                      {item.extra && <span className="text-gray-400"> — {item.extra}</span>}
                    </span>
                    <span className="text-xs text-teal-600 bg-teal-50 px-2 py-1 rounded-full">
                      {item.type}
                    </span>
                  </button>
                ))
              ) : (
                <p className="px-5 py-3 text-sm text-gray-400">No matches found. Try "Cardiology" or "Doctor"</p>
              )}
            </div>
          )}
        </form>

        <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
          <span className="text-gray-500">What people are searching for:</span>
          {quickTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full hover:bg-teal-100 transition uppercase text-xs font-semibold"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero