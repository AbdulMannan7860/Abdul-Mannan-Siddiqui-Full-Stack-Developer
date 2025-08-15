"use client"
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Facebook
} from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img src="/Image1.png" className="w-24 h-24 rounded-full shadow-purple-600 shadow-sm bg-white" alt="" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Abdul Mannan Siddiqui
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                MERN-Stack developer passionate about creating innovative digital solutions
                and building meaningful user experiences.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/AbdulMannan7860"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="www.linkedin.com/in/abdul-mannan-8b1260279"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100013942695820"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:webdo2016@gmail.com"
                className="p-3 bg-gray-800 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#home').scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-300 text-sm">Email</p>
                <a
                  href="mailto:webdo2016@gmail.com"
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  webdo2016@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Location</p>
                <p className="text-white">Pakistan</p>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Availability</p>
                <p className="text-green-400">Open for opportunities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-300 text-sm mb-4 md:mb-0">
              <span>© {currentYear} all right reserverd to Abdul Mannan Siddiqui<br /> Made with using Next.js & Tailwind CSS</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 bg-gray-800 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
