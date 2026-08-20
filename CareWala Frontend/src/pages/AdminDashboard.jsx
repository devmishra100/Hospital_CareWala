import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axiosInstance from '../utils/axiosInstance'
import { AuthContext } from '../context/AuthContext'

function AdminDashboard() {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()
  const { user, isAuthenticated } = useContext(AuthContext)

  const fetchAppointments = async () => {
    try {
      const { data } = await axiosInstance.get("/appointment/getall")
      setAppointments(data.appointments)
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch appointments")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Sirf Admin ko hi dashboard dikhana hai
    if (!isAuthenticated || user?.role !== "Admin") {
      navigate("/admin/login")
      return
    }
    fetchAppointments()
  }, [isAuthenticated, user])

  const handleStatusUpdate = async (id, status) => {
    try {
      const { data } = await axiosInstance.put(`/appointment/update/${id}`, { status })
      toast.success(data.message)
      fetchAppointments() // list refresh karo
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed")
    }
  }

  const handleDelete = async (id) => {
    try {
      const { data } = await axiosInstance.delete(`/appointment/delete/${id}`)
      toast.success(data.message)
      fetchAppointments()
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete failed")
    }
  }

  if (loading) {
    return <div className="text-center py-10">Loading appointments...</div>
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-teal-700 mb-6">
        Admin Dashboard — All Appointments
      </h2>

      {appointments.length === 0 ? (
        <p className="text-gray-500">No appointments found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-teal-600 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Patient</th>
                <th className="px-4 py-2 text-left">Department</th>
                <th className="px-4 py-2 text-left">Doctor</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr key={appt._id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{appt.firstName} {appt.lastName}</td>
                  <td className="px-4 py-2">{appt.department}</td>
                  <td className="px-4 py-2">
                    Dr. {appt.doctor?.firstName} {appt.doctor?.lastName}
                  </td>
                  <td className="px-4 py-2">{appt.appointment_date}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        appt.status === "Accepted"
                          ? "bg-green-100 text-green-700"
                          : appt.status === "Rejected"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {appt.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => handleStatusUpdate(appt._id, "Accepted")}
                      className="px-3 py-1 bg-green-600 text-white rounded-md text-xs hover:bg-green-700"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleStatusUpdate(appt._id, "Rejected")}
                      className="px-3 py-1 bg-red-500 text-white rounded-md text-xs hover:bg-red-600"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => handleDelete(appt._id)}
                      className="px-3 py-1 bg-gray-500 text-white rounded-md text-xs hover:bg-gray-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard