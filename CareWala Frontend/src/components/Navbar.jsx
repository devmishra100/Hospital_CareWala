import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaUserDoctor } from 'react-icons/fa6'
import { HiMenu, HiX } from 'react-icons/hi'
import { toast } from 'react-toastify'
import axiosInstance from '../utils/axiosInstance'
import { AuthContext } from '../context/AuthContext'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isAuthenticated, setIsAuthenticated, setUser, user } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      const { data } = await axiosInstance.get("/user/logout")
      toast.success(data.message)
      setUser(null)
      setIsAuthenticated(false)
      setMenuOpen(false)
      navigate("/login")
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed!")
    }
  }

  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow-md bg-white sticky top-0 z-50">
      
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <FaUserDoctor className="text-teal-600 text-3xl" />
        <div>
          <h1 className="text-xl font-bold text-teal-700">CareWala</h1>
          <p className="text-xs text-gray-500 -mt-1">Medical Institute</p>
        </div>
      </div>

      {/* Menu Links - Desktop */}
      <div className="hidden md:flex gap-8 font-medium text-gray-700">
        <Link to="/" className="hover:text-teal-600">Home</Link>
        <Link to="/services" className="hover:text-teal-600">Services</Link>
        <Link to="/appointment" className="hover:text-teal-600">Appointment</Link>
        <Link to="/about" className="hover:text-teal-600">About Us</Link>
      </div>

      {/* Buttons - Desktop */}
      <div className="hidden md:flex gap-3 items-center">
        {isAuthenticated ? (
          <>
            <span className="text-sm text-gray-600">Hi, {user?.name?.split(" ")[0]}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-full bg-teal-600 text-white hover:bg-teal-700"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="px-4 py-2 rounded-full border border-teal-600 text-teal-600 hover:bg-teal-50">
              Login
            </Link>
            <Link to="/register" className="px-4 py-2 rounded-full bg-teal-600 text-white hover:bg-teal-700">
              Register
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        {menuOpen ? (
          <HiX className="text-3xl text-teal-700" onClick={() => setMenuOpen(false)} />
        ) : (
          <HiMenu className="text-3xl text-teal-700" onClick={() => setMenuOpen(true)} />
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/appointment" onClick={() => setMenuOpen(false)}>Appointment</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>

          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="bg-teal-600 text-white px-4 py-1 rounded-full"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)} className="text-teal-600 border border-teal-600 px-4 py-1 rounded-full">Login</Link>
              <Link to="/register" onClick={() => setMenuOpen(false)} className="bg-teal-600 text-white px-4 py-1 rounded-full">Register</Link>
            </>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar