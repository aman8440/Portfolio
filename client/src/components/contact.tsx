import { motion } from 'framer-motion'
import { TextField, Button } from "@mui/material";
import { Github, Linkedin, Mail } from "lucide-react"
import { formSchema } from '../schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { FormDataProp } from '../interfaces';

export const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProp>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormDataProp) => {
    console.log("Form Data:", data);
  };

  return (
    <section id="contact" className="w-full py-24 bg-muted/40 w-full">
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
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto">
            <TextField
              label="Name"
              fullWidth
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
              className="bg-white"
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              className="bg-white"
            />
            <TextField
              label="Message"
              multiline
              rows={4}
              fullWidth
              {...register("message")}
              error={!!errors.message}
              helperText={errors.message?.message}
              className="bg-white"
            />
            <Button type="submit" variant="contained" className="bg-[#060548] w-full text-white hover:bg-[#040435]">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}


