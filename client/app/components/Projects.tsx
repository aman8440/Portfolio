"use client"

import { motion } from "framer-motion"
import { Github, Globe, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import AnimatedSectionHeader from "./AnimatedSectionHeader"
import TodoIconImg from "../../public/project_img/todo.png"
import GreenSFSIconImg from "../../public/project_img/greensfs.png"
import WeatherIconImg from "../../public/project_img/weather.png"

const projects = [
  {
    title: "TodoTask-App",
    description:
      "Developed a to-do task website where users can add tasks, with the system automatically sending an email containing the task information, increasing user engagement by 35%.",
    image: TodoIconImg,
    tags: ["React", "MongoDB", "Node.js", "Express.js"],
    liveUrl: "https://todo-task-app-aman.vercel.app/",
    githubUrl: "https://github.com/aman8440/TodoTask-App",
  },
  {
    title: "GreenSFS (Sustainable Food System)",
    description:
      "Created an e-commerce platform to buy India’s best pure and organic food products, including fruits and juices.",
    image: GreenSFSIconImg,
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://greensfs.onrender.com/",
    githubUrl: "https://github.com/aman8440/GreenSFS",
  },
  {
    title: "Weather App",
    description:
      "Developed a weather app fetching data using an API. Users can search for any city and get the weather details.",
    image: WeatherIconImg,
    tags: ["Node.js", "Express.js", "Handlebars", "JavaScript", "CSS"],
    liveUrl: "https://aman8440.onrender.com/",
    githubUrl: "https://github.com/aman8440/weatherwebsite",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Featured Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
                    aria-label="View live project"
                  >
                    <Globe className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
                    aria-label="View source code"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 -mt-32 -ml-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

