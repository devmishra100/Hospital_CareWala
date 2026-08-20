import { 
  FaBullseye, 
  FaEye, 
  FaHandHoldingHeart, 
  FaUserDoctor, 
  FaClock, 
  FaAward, 
  FaShieldHalved, 
  FaCheck,
  FaCalendarCheck,
  FaPhoneVolume
} from 'react-icons/fa6'

function AboutUs() {
  const stats = [
    { number: "15+", label: "Years of Service" },
    { number: "500+", label: "Expert Doctors" },
    { number: "50K+", label: "Happy Patients" },
    { number: "24/7", label: "Emergency Care" },
  ]

  const coreValues = [
    {
      icon: <FaBullseye className="text-teal-600 text-3xl" />,
      title: "Our Mission",
      desc: "To deliver accessible, world-class medical services backed by compassion and cutting-edge technology."
    },
    {
      icon: <FaEye className="text-teal-600 text-3xl" />,
      title: "Our Vision",
      desc: "To be the global benchmark in healthcare excellence, patient safety, and medical innovation."
    },
    {
      icon: <FaHandHoldingHeart className="text-teal-600 text-3xl" />,
      title: "Our Values",
      desc: "Integrity, patient-first care, relentless quality improvement, and community well-being."
    }
  ]

  const highlights = [
    "State-of-the-art ICU & Modular Operation Theatres",
    "24/7 Advanced Emergency & Ambulance Response",
    "NABH Accredited Healthcare Facility",
    "Multidisciplinary Team of Senior Specialists",
    "Transparent & Affordable Medical Care",
    "Digital Health Records & Online Appointments"
  ]

  const team = [
    {
      name: "Dr.Dhurvi Pandey ",
      role: "Chief Medical Officer (Cardiology)",
      image: "https://tse2.mm.bing.net/th/id/OIP.vvJWurKzD_vLqnPRqy8vLgHaHb?r=0&w=748&h=750&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      name: "Dr. dhurv pandey",
      role: "Head of Neuro Surgery",
      image: "https://cdn.hexahealth.com/Image/webp/480x480/e149d16f-083a-4571-996d-6e55da5795ad.webp"
    },
    {
      name: "Dr. Amita Shah",
      role: "Senior Pediatrician",
      image: "https://www.rfhospital.org/sites/default/files/2025-02/Amita%20Shah%20(1).jpg"
    }
  ]

  return (
    <div className="bg-slate-50 min-h-screen text-gray-800 font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative px-6 py-16 lg:py-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Column: Text */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <span className="inline-block bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Welcome to CareWala
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Caring For You, <br className="hidden sm:inline" />
              <span className="text-teal-600">Since Day One</span>
            </h1>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              CareWala Medical Institute stands as a beacon of health, hope, and healing. 
              Equipped with modern infrastructure and guided by empathetic medical professionals, 
              we ensure every patient receives world-class treatment tailored to their needs.
            </p>

            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4">
              <a 
                href="#appointment" 
                className="inline-flex items-center gap-2 bg-teal-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition"
              >
                <FaCalendarCheck /> Book Appointment
              </a>
              <a 
                href="tel:1234567890" 
                className="inline-flex items-center gap-2 bg-white text-teal-700 border border-teal-200 font-medium px-6 py-3 rounded-lg hover:bg-teal-50 transition"
              >
                <FaPhoneVolume /> Emergency Contact
              </a>
            </div>
          </div>

          {/* Right Column: Visual Image Block */}
          <div className="flex-1 relative w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=800" 
                alt="CareWala Medical Team" 
                className="w-full object-cover h-[350px] md:h-[450px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-4">
              <div className="bg-teal-100 text-teal-600 p-3 rounded-xl">
                <FaAward className="text-2xl" />
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900">15+ Years</p>
                <p className="text-xs text-gray-500 font-medium">Healthcare Excellence</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Stats Banner */}
      <section className="bg-teal-600 py-12 text-white shadow-inner">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{stat.number}</h2>
              <p className="text-teal-100 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Core Mission, Vision, Values */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Driven By Values, Focused On You</h2>
          <p className="text-gray-500 mt-2 text-sm">
            We are guided by principles that keep patient health and comfort at the core of everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition duration-300 flex flex-col items-center text-center group"
            >
              <div className="bg-teal-50 p-4 rounded-2xl mb-5 group-hover:bg-teal-600 group-hover:text-white transition duration-300">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="bg-white py-16 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800" 
              alt="Medical Care" 
              className="rounded-3xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>

          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">
              <FaShieldHalved /> Why Choose CareWala
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Advanced Healthcare Built Around Patient Needs
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              From routine checkups to complex surgeries, our facility is structured to deliver fast, effective, and safe medical assistance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((point, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="bg-teal-100 text-teal-700 p-1 rounded-full mt-1">
                    <FaCheck className="text-xs" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase">Our Specialists</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-1">Meet Our Leading Doctors</h2>
          <p className="text-gray-500 text-sm mt-2">
            Our team of board-certified specialists brings decades of experience across clinical disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((doc, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition">
              <img src={doc.image} alt={doc.name} className="w-full h-64 object-cover object-top" />
              <div className="p-6 text-center">
                <h3 className="font-bold text-lg text-gray-800">{doc.name}</h3>
                <p className="text-teal-600 text-xs font-medium mt-1">{doc.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Call to Action (CTA) */}
      <section id="appointment" className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-teal-700 to-teal-500 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold">Need Immediate Medical Advice?</h2>
            <p className="text-teal-100 text-sm max-w-xl">
              Book your consultation with our experienced specialists or reach our 24/7 helpdesk today.
            </p>
          </div>
          <a 
            href="#book" 
            className="bg-white text-teal-700 font-bold px-8 py-3 rounded-xl hover:bg-teal-50 transition shadow-md whitespace-nowrap"
          >
            Get In Touch
          </a>
        </div>
      </section>

    </div>
  )
}

export default AboutUs