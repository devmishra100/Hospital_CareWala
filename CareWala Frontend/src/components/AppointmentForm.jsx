import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import axiosInstance from '../utils/axiosInstance'
import { AuthContext } from '../context/AuthContext'
import { 
  FaQrcode, 
  FaRegCreditCard, 
  FaHandHoldingDollar, 
  FaXmark,
  FaCalendarCheck,
  FaUserDoctor,
  FaClock,
  FaShieldHalved,
  FaPhone,
  FaLock,
  FaStar
} from 'react-icons/fa6'

function AppointmentForm() {
  const { isAuthenticated } = useContext(AuthContext)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "Male",
    department: "Cardiology",
    date: "",
    address: "",
    hasVisited: false,
  })

  const [showPayment, setShowPayment] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("upi")
  const [isPaying, setIsPaying] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value })
  }

  const handleOpenPayment = (e) => {
    e.preventDefault()
    if (!isAuthenticated) {
      toast.error("Please login first to book an appointment")
      return
    }

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || 
        !formData.dob || !formData.date || !formData.address) {
      toast.error("Please fill all required appointment fields!")
      return
    }

    setShowPayment(true)
  }

  const handlePayNow = () => {
    setIsPaying(true)

    setTimeout(async () => {
      try {
        const { data } = await axiosInstance.post("/appointment/post", {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          dob: formData.dob,
          gender: formData.gender,
          appointment_date: formData.date,
          department: formData.department,
          hasVisited: formData.hasVisited,
          address: formData.address,
        })

        toast.success(data.message || "Appointment Booked Successfully!")
        setShowPayment(false)

        setFormData({
          firstName: "", lastName: "", email: "", phone: "", dob: "",
          gender: "Male", department: "Cardiology", date: "", address: "", hasVisited: false,
        })
      } catch (error) {
        toast.error(error.response?.data?.message || "Appointment booking failed!")
      } finally {
        setIsPaying(false)
      }
    }, 1800)
  }

  const inputClass = "w-full border border-slate-200/80 rounded-xl px-4 py-3 text-sm bg-slate-50/80 text-gray-800 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all duration-200 shadow-sm"
  const labelClass = "text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 block"

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-slate-900 via-teal-950 to-slate-900 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      
      {/* Dynamic Background Glowing Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 backdrop-blur-md">
            <FaStar className="text-teal-400 animate-pulse" size={13} /> Premium Healthcare Experience
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Book Your Consultation
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Connect with top certified medical specialists. Fast, seamless & completely digital.
          </p>
        </div>

        {/* Main Grid: Left Highlights + Right Glassmorphism Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Advantage Card */}
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-slate-700/50 text-white">
              <h3 className="text-lg font-bold mb-5 flex items-center gap-2.5 text-teal-300">
                <FaUserDoctor size={20} /> Why Choose CareWala?
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-700/30 border border-slate-600/30">
                  <div className="p-2.5 bg-teal-500/20 text-teal-400 rounded-xl shrink-0 mt-0.5">
                    <FaClock size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-100">Zero Wait Time</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Instant slot confirmation with direct consultation queueing.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-700/30 border border-slate-600/30">
                  <div className="p-2.5 bg-cyan-500/20 text-cyan-400 rounded-xl shrink-0 mt-0.5">
                    <FaShieldHalved size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-100">100% Encrypted & Safe</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Your medical records and details are completely protected.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white rounded-3xl p-6 shadow-xl border border-teal-400/30">
              <h3 className="text-base font-bold mb-4 flex items-center gap-2">
                <FaCalendarCheck /> Hospital Schedule
              </h3>
              <div className="space-y-2.5 text-sm text-teal-50">
                <div className="flex justify-between border-b border-teal-400/30 pb-2">
                  <span>Mon - Sat:</span>
                  <span className="font-semibold text-white">08:00 AM - 08:00 PM</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span>Sunday:</span>
                  <span className="font-semibold text-white">10:00 AM - 04:00 PM</span>
                </div>
              </div>

              {/* Emergency Helpline */}
              <div className="mt-6 pt-4 border-t border-teal-400/30 flex items-center gap-3.5">
                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                  <FaPhone className="text-white animate-bounce" size={18} />
                </div>
                <div>
                  <p className="text-xs text-teal-100 font-medium">24/7 Emergency Support</p>
                  <p className="text-lg font-black text-white tracking-wide">+1 (800) 123-4567</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Panel: Form Card */}
          <div className="lg:col-span-7">
            <form onSubmit={handleOpenPayment} className="bg-white/95 backdrop-blur-2xl shadow-2xl border border-slate-200/60 rounded-3xl p-6 sm:p-10">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Patient Details</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Fill in your information to schedule the visit.</p>
                </div>
                <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 border border-teal-200/60 px-3 py-1 rounded-full">
                  Step 1 of 2
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className={inputClass} placeholder="John" />
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className={inputClass} placeholder="Doe" />
                </div>

                <div>
                  <label className={labelClass}>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="john@example.com" />
                </div>
                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className={inputClass} placeholder="+91 9876543210" />
                </div>

                <div>
                  <label className={labelClass}>Date of Birth</label>
                  <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Gender</label>
                  <select name="gender" value={formData.gender} onChange={handleChange} className={inputClass}>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Department</label>
                  <select name="department" value={formData.department} onChange={handleChange} className={inputClass}>
                    <option>Cardiology</option>
                    <option>Neurology</option>
                    <option>Orthopedics</option>
                    <option>Dental Care</option>
                    <option>Eye Care</option>
                    <option>Pediatrics</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Preferred Date</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} required className={inputClass} />
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClass}>Residential Address</label>
                  <input type="text" name="address" value={formData.address} onChange={handleChange} required className={inputClass} placeholder="123 Street Name, City" />
                </div>
              </div>

              <div className="mt-6 mb-6">
                <label className="inline-flex items-center gap-3 cursor-pointer text-xs font-semibold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/80 w-full hover:bg-slate-100/80 transition">
                  <input 
                    type="checkbox" 
                    name="hasVisited" 
                    checked={formData.hasVisited} 
                    onChange={handleChange} 
                    className="w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500"
                  />
                  Have you visited our clinic before?
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 text-white py-4 rounded-xl font-bold shadow-lg shadow-teal-700/25 hover:shadow-teal-700/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 text-sm tracking-wide"
              >
                <span>Proceed to Confirmation</span>
                <FaLock size={13} className="text-teal-200" />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Modal Payment */}
      {showPayment && (
        <div 
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center px-4 z-50 transition-opacity"
          onClick={() => !isPaying && setShowPayment(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-100 transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-700 to-cyan-700 px-6 py-5 flex items-center justify-between">
              <div>
                <h3 className="text-white font-bold text-lg">Appointment Checkout</h3>
                <p className="text-teal-100 text-xs mt-0.5">Select payment method to confirm booking</p>
              </div>
              {!isPaying && (
                <button onClick={() => setShowPayment(false)} className="text-white/80 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition">
                  <FaXmark size={18} />
                </button>
              )}
            </div>

            <div className="p-6">
              {/* Amount */}
              <div className="flex items-center justify-between bg-teal-50/80 border border-teal-200/60 rounded-2xl px-5 py-4 mb-5">
                <span className="text-slate-600 text-sm font-semibold">Consultation Fee</span>
                <span className="text-2xl font-black text-teal-800">₹200</span>
              </div>

              {/* Payment Method Tabs */}
              <div className="grid grid-cols-3 gap-2.5 mb-5">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("upi")}
                  className={`flex flex-col items-center gap-1.5 py-3 rounded-2xl border text-xs font-bold transition-all ${
                    paymentMethod === "upi" 
                      ? "border-teal-600 bg-teal-50 text-teal-700 shadow-sm" 
                      : "border-slate-200 text-slate-500 hover:border-slate-300"
                  }`}
                >
                  <FaQrcode size={18} /> UPI / QR
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`flex flex-col items-center gap-1.5 py-3 rounded-2xl border text-xs font-bold transition-all ${
                    paymentMethod === "card" 
                      ? "border-teal-600 bg-teal-50 text-teal-700 shadow-sm" 
                      : "border-slate-200 text-slate-500 hover:border-slate-300"
                  }`}
                >
                  <FaRegCreditCard size={18} /> Card
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("clinic")}
                  className={`flex flex-col items-center gap-1.5 py-3 rounded-2xl border text-xs font-bold transition-all ${
                    paymentMethod === "clinic" 
                      ? "border-teal-600 bg-teal-50 text-teal-700 shadow-sm" 
                      : "border-slate-200 text-slate-500 hover:border-slate-300"
                  }`}
                >
                  <FaHandHoldingDollar size={18} /> Pay at Clinic
                </button>
              </div>

              {/* UPI QR view */}
              {paymentMethod === "upi" && (
                <div className="flex flex-col items-center mb-5 p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                  <div className="w-36 h-36 bg-white p-3 rounded-2xl shadow-sm flex items-center justify-center mb-2 border border-slate-100">
                    <FaQrcode size={80} className="text-slate-700" />
                  </div>
                  <p className="text-xs text-slate-500 font-medium">Scan using GPay, PhonePe, or Paytm</p>
                </div>
              )}

              {/* Card view */}
              {paymentMethod === "card" && (
                <div className="space-y-3 mb-5">
                  <input placeholder="Card Number" className={inputClass} disabled />
                  <div className="grid grid-cols-2 gap-3">
                    <input placeholder="MM/YY" className={inputClass} disabled />
                    <input placeholder="CVV" className={inputClass} disabled />
                  </div>
                </div>
              )}

              {/* Pay at Clinic view */}
              {paymentMethod === "clinic" && (
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center mb-5">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pay <span className="font-bold text-slate-800">₹200</span> in cash or via card directly at the hospital reception desk on arrival.
                  </p>
                </div>
              )}

              <button
                type="button"
                onClick={handlePayNow}
                disabled={isPaying}
                className="w-full bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-3.5 rounded-xl font-bold shadow-md hover:scale-[1.01] transition disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {isPaying ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processing Booking...
                  </>
                ) : (
                  "Pay Now & Confirm Booking"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AppointmentForm