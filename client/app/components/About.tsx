"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Zap } from "lucide-react"
import Image from "next/image"

export default function About() {
  const skills = [
    { icon: <Code className="w-8 h-8 text-blue-500" />, title: "Frontend", description: "React, Angular, Redux" },
    { icon: <Server className="w-8 h-8 text-green-500" />, title: "Backend", description: "Node.js, Express, CodeIgniter, Amplify" },
    { icon: <Database className="w-8 h-8 text-purple-500" />, title: "Database", description: "MongoDB, MySQL" },
    { icon: <Zap className="w-8 h-8 text-yellow-500" />, title: "Performance", description: "Optimization, Caching" },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I have 8 months of experience in full-stack development, with strong communication skills and a proven ability to work effectively in teams. I bring hands-on expertise in Node.js, Express.js, React, Angular, Codeigniter, MySQL, and MongoDB, and I am eager to leverage my skills and experience in a Software Engineer role.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              My expertise extends to modern frameworks like React and state management tools like Redux. I'm
              committed to writing clean, efficient code and staying up-to-date with the latest industry trends to
              deliver cutting-edge solutions for my clients. <a
              href="https://drive.google.com/file/d/1adG6YtyUnvqs9lDUa6YImTBSTMQofTuA/view?usp=sharing"
              download="Aman_Gupta_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Download CV
            </a>
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                {skill.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

