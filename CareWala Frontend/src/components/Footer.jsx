import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaLocationDot } from 'react-icons/fa6'
import { FaPhoneAlt, FaUserTie } from 'react-icons/fa'

function Footer() {
  const leadership = [
    { name: "Dev Mishra", role: "Founder & CEO" },
    { name: "Ritesh Kushwaha", role: "Co-Founder & CEO" },
    { name: "Prince Kushwaha", role: "Co-Founder & CEO" }
  ]

  return (
    <footer className="bg-slate-900 text-white px-6 pt-12 pb-6 mt-16 border-t-4 border-teal-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

        {/* Column 1 - Brand & Co-Founders Info */}
        <div className="space-y-3">
          <h2 className="text-2xl font-extrabold tracking-wide text-white">
            CareWala<span className="text-teal-400">+</span>
          </h2>
          <p className="text-slate-300 text-xs leading-relaxed">
            Trusted healthcare partner providing quality treatment with certified doctors and modern facilities.
          </p>

          {/* Leadership List */}
          <div className="pt-2 space-y-2">
            <span className="block text-amber-400 text-[10px] uppercase tracking-wider font-bold">
              Founders & Leadership
            </span>

            <div className="space-y-2">
              {leadership.map((person, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-slate-800/90 border border-slate-700/80 rounded-xl px-3 py-1.5 transition hover:border-amber-400/40">
                  <div className="bg-amber-400/10 text-amber-400 p-1.5 rounded-lg shrink-0">
                    <FaUserTie className="text-xs" />
                  </div>
                  <div>
                    <span className="block text-slate-400 text-[9px] uppercase tracking-wider font-semibold">{person.role}</span>
                    <span className="font-bold text-white text-xs">{person.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-amber-400 border-b-2 border-amber-400/40 pb-1.5 inline-block tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-slate-300 text-sm">
            <li><a href="#about" className="hover:text-amber-300 hover:translate-x-1 inline-block transition duration-200">About Us</a></li>
            <li><a href="#doctors" className="hover:text-amber-300 hover:translate-x-1 inline-block transition duration-200">Find a Doctor</a></li>
            <li><a href="#services" className="hover:text-amber-300 hover:translate-x-1 inline-block transition duration-200">Medical Services</a></li>
            <li><a href="#appointment" className="hover:text-amber-300 hover:translate-x-1 inline-block transition duration-200">Book Appointment</a></li>
            <li><a href="#emergency" className="hover:text-amber-300 hover:translate-x-1 inline-block transition duration-200">Emergency Care</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-cyan-400 border-b-2 border-cyan-400/40 pb-1.5 inline-block tracking-wide">
            Contact Us
          </h3>
          <div className="space-y-3.5 text-slate-300 text-sm">
            <a href="tel:+917284996935" className="flex items-center gap-3 hover:text-cyan-300 transition">
              <span className="p-2 bg-cyan-500/10 text-cyan-400 rounded-lg"><FaPhoneAlt /></span>
              <span className="font-medium">+91 7284996935</span>
            </a>
            <a href="mailto:support@carewala.com" className="flex items-center gap-3 hover:text-cyan-300 transition">
              <span className="p-2 bg-cyan-500/10 text-cyan-400 rounded-lg"><FaEnvelope /></span>
              <span>support@carewala.com</span>
            </a>
            <div className="flex items-start gap-3">
              <span className="p-2 bg-cyan-500/10 text-cyan-400 rounded-lg mt-0.5"><FaLocationDot /></span>
              <span>Ahmedabad, Gujarat, India</span>
            </div>
          </div>
        </div>

        {/* Column 4 - Connect With Us */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-emerald-400 border-b-2 border-emerald-400/40 pb-1.5 inline-block tracking-wide">
            Connect With Us
          </h3>
          <p className="text-slate-300 text-xs mb-4">
            Follow our social media channels for health tips and updates.
          </p>
          <div className="flex gap-3 text-lg">
            <a href="#" className="bg-slate-800 text-emerald-400 p-3 rounded-xl border border-slate-700 hover:bg-emerald-500 hover:text-slate-950 hover:scale-105 transition duration-200">
              <FaFacebook />
            </a>
            <a href="#" className="bg-slate-800 text-emerald-400 p-3 rounded-xl border border-slate-700 hover:bg-emerald-500 hover:text-slate-950 hover:scale-105 transition duration-200">
              <FaInstagram />
            </a>
            <a href="#" className="bg-slate-800 text-emerald-400 p-3 rounded-xl border border-slate-700 hover:bg-emerald-500 hover:text-slate-950 hover:scale-105 transition duration-200">
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-3">
        <p>© 2026 CareWala Medical Institute. All Rights Reserved.</p>
        <p className="font-medium text-slate-300">
          Founded & Directed by <span className="text-amber-400 font-bold">Dev Mishra, Ritesh Kushwaha & Prince Kushwaha</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
