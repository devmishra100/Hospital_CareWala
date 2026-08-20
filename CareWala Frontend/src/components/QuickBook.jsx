import { Link } from 'react-router-dom'
import { FaUserDoctor, FaFlask, FaHospital, FaTruckMedical, FaKitMedical, FaVideo } from 'react-icons/fa6'

const bookingCategories = [
  {
    icon: <FaUserDoctor />,
    title: "Health Checkups",
    desc: "Full body & specialized packages",
    color: "bg-teal-50 text-teal-600",
    link: "/services",
  },
  {
    icon: <FaFlask />,
    title: "Tests & Services",
    desc: "Lab tests & diagnostics",
    color: "bg-emerald-50 text-emerald-600",
    link: "/services",
  },
  
  {
    icon: <FaHospital />,
    title: "In-Clinic Visit",
    desc: "Book a doctor appointment",
    color: "bg-teal-50 text-teal-600",
    link: "/appointment",
  },
  {
    icon: <FaKitMedical />,
    title: "Surgery",
    desc: "Planned & emergency procedures",
    color: "bg-green-50 text-green-600",
    link: "/services",
  },
  {
    icon: <FaTruckMedical />,
    title: "Ambulance",
    desc: "24/7 emergency response",
    color: "bg-red-50 text-red-500",
    link: "/",
  },
]

function QuickBook() {
  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">
      
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          We can help you <span className="text-teal-600">book</span>
        </h2>
        <div className="w-16 h-1 bg-teal-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {bookingCategories.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="group flex flex-col items-center text-center bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-teal-200 transition-all duration-300"
          >
            <div className={`w-16 h-16 flex items-center justify-center rounded-2xl ${item.color} text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {item.icon}
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default QuickBook