import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axiosInstance from '../utils/axiosInstance'
import { AuthContext } from '../context/AuthContext'

function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { setUser, setIsAuthenticated } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { data } = await axiosInstance.post("/user/login", {
        email,
        password,
        role: "Admin",
      })

      toast.success(data.message)
      setUser(data.user)
      setIsAuthenticated(true)
      navigate("/admin/dashboard")
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed!")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-8 w-full max-w-sm">
        
        <h2 className="text-2xl font-bold text-center text-teal-700 mb-6">
          Admin Login
        </h2>

        <label className="text-sm text-gray-600">Email</label>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter admin email"
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-4 focus:outline-teal-500"
        />

        <label className="text-sm text-gray-600">Password</label>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-6 focus:outline-teal-500"
        />

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-teal-600 text-white py-2 rounded-lg font-medium hover:bg-teal-700 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login as Admin"}
        </button>
      </form>
    </div>
  )
}

export default AdminLogin