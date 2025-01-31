import { motion } from 'framer-motion'
import { Button, Input } from "@mui/material"
import { TextareaAutosize as Textarea } from '@mui/base';
import { Github, Linkedin, Mail } from "lucide-react"

export const Contact = () => {
  return (
    <section id="contact" className="w-full py-24 bg-muted/40">
      <div className="container">
        <motion.div
          className="max-w-md mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">I'm always open to new opportunities and collaborations.</p>
          <div className="flex justify-center gap-4 mb-8">
          <Button size="small" variant="outlined" component="a" href="#" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button size="small" variant="outlined" component="a" href="#" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          <Button size="small" variant="outlined" component="a" href="mailto:your@email.com">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </Button>
          </div>
          <form className="space-y-4">
            <Input placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Textarea placeholder="Message" className="min-h-[150px]" />
            <Button className="w-full">Send Message</Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

