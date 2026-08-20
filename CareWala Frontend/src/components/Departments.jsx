import { FaHeartPulse, FaBrain, FaBone, FaTooth, FaEye, FaBaby, FaArrowRight } from 'react-icons/fa6'

const departmentsList = [
  { name: "Cardiology", icon: <FaHeartPulse />, desc: "Heart & vascular care" },
  { name: "Neurology", icon: <FaBrain />, desc: "Brain & nervous system" },
  { name: "Orthopedics", icon: <FaBone />, desc: "Bones & joints" },
  { name: "Dental Care", icon: <FaTooth />, desc: "Teeth & oral health" },
  { name: "Eye Care", icon: <FaEye />, desc: "Vision & eye health" },
  { name: "Pediatrics", icon: <FaBaby />, desc: "Child healthcare" },
]

function Departments() {
  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">
      
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Our <span className="text-teal-600">Departments</span>
        </h2>
        <div className="w-16 h-1 bg-teal-500 rounded-full mx-auto mb-4"></div>
        <p className="text-gray-500">
          Explore our wide range of specialized medical departments
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {departmentsList.map((dept, index) => (
          <div 
            key={index} 
            className="group flex flex-col items-start gap-3 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-teal-200 transition-all duration-300 cursor-pointer"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-teal-50 text-teal-600 text-2xl group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
              {dept.icon}
            </div>
            <div>
              <p className="text-gray-800 font-semibold text-lg">{dept.name}</p>
              <p className="text-gray-400 text-sm">{dept.desc}</p>
            </div>
            <span className="flex items-center gap-1 text-teal-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Learn more <FaArrowRight className="text-xs" />
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Departments