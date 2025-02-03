import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    image: "/placeholder.svg",
    github: "#",
    demo: "#",
  },
  {
    title: "Social Media App",
    description: "Real-time social media platform with chat functionality",
    image: "/placeholder.svg",
    github: "#",
    demo: "#",
  }, 
  {
    title: "Task Management",
    description: "Collaborative task management application",
    image: "/placeholder.svg",
    github: "#",
    demo: "#",
  },
  {
    title: "To Do Task App",
    description: "Collaborative task management application",
    image: "/placeholder.svg",
    github: "#",
    demo: "#",
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
}

export function Projects() {
  const [[page, direction], setPage] = useState([0, 0])
  const [autoPlay, setAutoPlay] = useState(true)

  const projectIndex = Math.abs(page % projects.length)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      paginate(1)
    }, 1000)

    return () => clearInterval(timer)
  }, [page, autoPlay])

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800 w-full">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div
          className="relative h-[500px] w-full max-w-4xl mx-auto"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(false)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full h-full"
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden h-full">
                <div className="relative h-64">
                  <img
                    src={projects[projectIndex].image || "/placeholder.svg"}
                    alt={projects[projectIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{projects[projectIndex].title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{projects[projectIndex].description}</p>
                  <div className="flex space-x-4">
                    <a
                      href={projects[projectIndex].github}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </a>
                    <a
                      href={projects[projectIndex].demo}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

