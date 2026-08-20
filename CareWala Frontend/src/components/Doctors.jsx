import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaStar, FaTimes, FaGraduationCap, FaClock, FaUserFriends } from 'react-icons/fa'

const doctorsList = [
  {
    name: "Dr. Priyank Modi",
    specialization: "Cardiologist",
    experience: "12+ yrs experience",
    rating: 4.9,
    qualification: "MBBS, MD (Cardiology), DM",
    patients: "3,200+",
    timings: "Mon–Sat, 10 AM – 6 PM",
    bio: "Dr. Priyank Modi specializes in interventional cardiology and has performed over 1,000 successful angioplasties. He is known for his patient-first approach and clear communication.",
    image: "https://cdn.hexahealth.com/Image/webp/480x480/fbd2ebbe-240d-41aa-9b5c-1a195e58459b.webp",
  },
  {
    name: "Dr. Satyam Shukla",
    specialization: "Neurologist",
    experience: "9+ yrs experience",
    rating: 4.8,
    qualification: "MBBS, MD (Neurology)",
    patients: "2,100+",
    timings: "Mon–Fri, 9 AM – 5 PM",
    bio: "Dr. Satyam Shukla focuses on treating migraines, epilepsy, and stroke recovery. He believes in combining modern diagnostics with personalized care plans.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dr. Pratik Desai",
    specialization: "Orthopedic",
    experience: "15+ yrs experience",
    rating: 4.9,
    qualification: "MBBS, MS (Orthopedics)",
    patients: "4,500+",
    timings: "Tue–Sun, 11 AM – 7 PM",
    bio: "Dr. Pratik Desai is a joint replacement specialist with expertise in sports injuries and minimally invasive surgery techniques.",
    image: "https://tse1.explicit.bing.net/th/id/OIP.xEYpMeOVPEcfe52XB-a21wHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Dr. Gaurav Gandhi",
    specialization: "Pediatrician",
    experience: "8+ yrs experience",
    rating: 4.7,
    qualification: "MBBS, MD (Pediatrics)",
    patients: "2,800+",
    timings: "Mon–Sat, 10 AM – 4 PM",
    bio: "Dr. Gaurav Gandhi has a gentle, child-friendly approach to pediatric care, specializing in newborn care and childhood immunizations.",
    image: "https://www.hindustantimes.com/ht-img/img/2023/06/07/1600x900/download_1686110901708_1686110904635.jpg",
  },
]

function Doctors() {
  const [selectedDoctor, setSelectedDoctor] = useState(null)

  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">
      
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Our <span className="text-teal-600">Doctors</span>
        </h2>
        <div className="w-16 h-1 bg-teal-500 rounded-full mx-auto mb-4"></div>
        <p className="text-gray-500">
          Meet our team of experienced and certified specialists
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {doctorsList.map((doctor, index) => (
          <div 
            key={index} 
            className="group bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative w-24 h-24 mx-auto mb-4">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-24 h-24 rounded-full object-cover border-4 border-teal-50 group-hover:border-teal-200 transition-colors duration-300"
              />
              <span className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            <h3 className="font-semibold text-gray-800">{doctor.name}</h3>
            <p className="text-teal-600 text-sm mb-1">{doctor.specialization}</p>
            <p className="text-gray-400 text-xs mb-3">{doctor.experience}</p>

            <div className="flex items-center justify-center gap-1 text-sm text-gray-600 mb-4">
              <FaStar className="text-yellow-400" />
              <span className="font-medium">{doctor.rating}</span>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => setSelectedDoctor(doctor)}
                className="w-full border border-teal-600 text-teal-600 text-sm font-medium py-2 rounded-full hover:bg-teal-50 transition-colors duration-300"
              >
                View Profile
              </button>
              <Link 
                to="/appointment" 
                className="block w-full bg-teal-50 text-teal-700 text-sm font-medium py-2 rounded-full group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
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
              <FaTimes size={18} />
            </button>

            <div className="flex flex-col items-center text-center mb-5">
              <img 
                src={selectedDoctor.image} 
                alt={selectedDoctor.name} 
                className="w-24 h-24 rounded-full object-cover border-4 border-teal-50 mb-3"
              />
              <h3 className="text-xl font-bold text-gray-800">{selectedDoctor.name}</h3>
              <p className="text-teal-600 font-medium">{selectedDoctor.specialization}</p>
              <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                <FaStar className="text-yellow-400" />
                <span>{selectedDoctor.rating} rating</span>
              </div>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              {selectedDoctor.bio}
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <FaGraduationCap className="text-teal-600" />
                {selectedDoctor.qualification}
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <FaClock className="text-teal-600" />
                {selectedDoctor.timings}
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <FaUserFriends className="text-teal-600" />
                {selectedDoctor.patients} patients treated
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

export default Doctors