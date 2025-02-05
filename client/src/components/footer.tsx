import { motion } from "framer-motion"
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/aman8440", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aman-gupta-931148208", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/amang4885", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/aman_gupta8440", label: "Instagram" },
    { icon: Mail, href: "mailto:amang4885@gmail.com", label: "Email" },
  ]

  return (
    <motion.footer
      className="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Aman Gupta</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Full-stack developer passionate about creating amazing web experiences
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:dark:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:dark:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:dark:text-white transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:dark:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:dark:text-white transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-6 h-6" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Aman Gupta. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}
