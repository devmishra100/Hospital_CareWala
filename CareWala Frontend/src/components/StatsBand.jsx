import { useEffect, useRef, useState } from 'react'
import { FaUserDoctor, FaHospitalUser, FaAward, FaHeartPulse } from 'react-icons/fa6'

const stats = [
  { icon: <FaUserDoctor />, value: 500, suffix: "+", label: "Expert Doctors" },
  { icon: <FaHospitalUser />, value: 50000, suffix: "+", label: "Patients Treated" },
  { icon: <FaAward />, value: 15, suffix: "+", label: "Years of Trust" },
  { icon: <FaHeartPulse />, value: 98, suffix: "%", label: "Satisfaction Rate" },
]

function Counter({ value, suffix, startCounting }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startCounting) return

    const duration = 1500
    const steps = 40
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [startCounting, value])

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

function StatsBand() {
  const [startCounting, setStartCounting] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className="bg-gradient-to-r from-teal-600 to-emerald-600 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center text-white">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/15 text-2xl mb-3">
              {stat.icon}
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-1">
              <Counter value={stat.value} suffix={stat.suffix} startCounting={startCounting} />
            </h3>
            <p className="text-teal-50 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsBand