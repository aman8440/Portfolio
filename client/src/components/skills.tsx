import { motion } from "framer-motion"
import {
  Heading5Icon as Html5,
  FileCode2,
  Palette,
  Layout,
  Server,
  Database,
  Shield,
  Settings,
  Github,
  Terminal,
  Box,
  Cloud,
  Code2,
  Brackets,
  Binary,
  Laptop,
  Frame,
  Library,
  Package,
  Layers
} from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML/CSS", icon: Html5, level: 90 },
      { name: "JavaScript", icon: FileCode2, level: 85 },
      { name: "UI/UX Design", icon: Palette, level: 80 },
      { name: "Responsive Design", icon: Layout, level: 90 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: Server, level: 85 },
      { name: "Databases", icon: Database, level: 80 },
      { name: "Security", icon: Shield, level: 75 },
      { name: "API Design", icon: Settings, level: 85 },
    ],
  },
  {
    title: "Development Tools",
    skills: [
      { name: "Git/GitHub", icon: Github, level: 90 },
      { name: "Command Line", icon: Terminal, level: 85 },
      { name: "Docker", icon: Box, level: 75 },
      { name: "AWS", icon: Cloud, level: 80 },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "TypeScript", icon: Code2, level: 85 },
      { name: "Python", icon: Brackets, level: 80 },
      { name: "JavaScript", icon: Binary, level: 75 },
      { name: "C++", icon: Laptop, level: 70 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: Frame, level: 90 },
      { name: "Vue.js", icon: Library, level: 80 },
      { name: "Express.js", icon: Package, level: 85 },
      { name: "Next.js", icon: Layers, level: 85 },
    ],
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Skills() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={item}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <skill.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

