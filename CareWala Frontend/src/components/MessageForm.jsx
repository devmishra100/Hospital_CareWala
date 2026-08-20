import { useState } from 'react'
import { toast } from 'react-toastify'

function MessageForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Message Data:", formData)
    // Baad me yaha axios.post("/api/message", formData) aayega

    toast.success("Message Sent Successfully! 📩")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
        Contect  <span className="text-teal-600">Touch</span>
      </h2>
      <p className="text-gray-500 text-center mb-8">
        Have a question? Send us a message and we'll get back to you.
      </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-8">
        
        <label className="text-sm text-gray-600">Your Name</label>
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-4 focus:outline-teal-500"
        />

        <label className="text-sm text-gray-600">Your Email</label>
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-4 focus:outline-teal-500"
        />

        <label className="text-sm text-gray-600">Your Message</label>
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          rows="4"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-6 focus:outline-teal-500"
        ></textarea>

        <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded-lg font-medium hover:bg-teal-700">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default MessageForm