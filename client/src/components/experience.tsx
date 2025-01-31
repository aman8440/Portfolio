import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    period: "2021 - Present",
    description: [
      "Led a team of 5 developers in building a cloud-based SaaS platform",
      "Implemented microservices architecture using Node.js and Docker",
      "Reduced application load time by 40% through optimization techniques",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations Ltd",
    location: "New York, NY",
    period: "2019 - 2021",
    description: [
      "Developed and maintained multiple React-based web applications",
      "Integrated third-party APIs and payment gateways",
      "Implemented automated testing with Jest and Cypress",
      "Collaborated with UX team to improve user experience",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Creative Web Agency",
    location: "Boston, MA",
    period: "2017 - 2019",
    description: [
      "Built responsive websites using React and TypeScript",
      "Implemented state management using Redux and Context API",
      "Created reusable component libraries",
      "Optimized website performance and SEO",
    ],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
}

export function Experience() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Work Experience
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {experiences.map((experience, index) => (
            <motion.div key={index} variants={item} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />

              {/* Timeline dot */}
              <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary" />

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{experience.title}</h3>
                    <p className="text-lg text-primary">{experience.company}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{experience.period}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{experience.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {experience.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

