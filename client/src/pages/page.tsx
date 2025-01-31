import { motion } from "framer-motion"
import { Button } from "@mui/material"
import { Badge } from "@mui/material"
import { About } from "../components/about"
import { Skills } from "../components/skills"
import { Experience } from "../components/experience"
import { Projects } from "../components/projects"
import { Contact } from "../components/contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center py-12 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]">
        <div className="container flex flex-col items-center text-center gap-4 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge className="mb-4">Available for hire</Badge>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Full Stack Developer
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-[600px] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Building modern web applications with React, Next.js, and Node.js
          </motion.p>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button size="large" component="a" href="#contact">
              Contact Me
            </Button>
            <Button size="large" variant="outlined" component="a" href="#projects">
              View Projects
            </Button>
          </motion.div>
        </div>
      </section>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </main>
  )
}