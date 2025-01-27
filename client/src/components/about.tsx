import { motion } from "framer-motion"
import { FileDown } from "lucide-react"
import profile from '../assets/img/profile.jpg';

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm a passionate full-stack developer with experience in building modern web applications. I love
                learning new technologies and solving complex problems.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Experience</h3>
                  <p className="text-gray-600 dark:text-gray-400">5+ years of professional development experience</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Education</h3>
                  <p className="text-gray-600 dark:text-gray-400">Bachelor's in Computer Science</p>
                </div>
                <motion.a
                  href="/path-to-your-cv.pdf"
                  download
                  className="inline-flex items-center space-x-2 bg-primary text-white dark:text-black px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FileDown className="w-5 h-5" />
                  <span>Download CV</span>
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src={profile} alt="Profile" className="rounded-lg shadow-lg" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

