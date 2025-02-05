import { motion } from "framer-motion"
import { TextField, Button } from "@mui/material"
import { Github, Linkedin, Mail } from "lucide-react"
import { formSchema } from "../schema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormDataProp, ResposneProp } from "../interfaces"
import { enviromentVariable } from "../environment/environment";
import { toast } from "react-toastify"

export const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProp>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormDataProp) => {
    console.log("Form Data:", data)
    const response :ResposneProp = await fetch( enviromentVariable.BASE_URL +'/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if(response.status === "success"){
      toast.success(response.message);
    }
    else{
      toast.error(response.message);
    }
  }

  return (
    <section id="contact" className="w-full py-24 bg-white-100 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          className="max-w-md mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            I'm always open to new opportunities and collaborations.
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <Button
              size="small"
              variant="outlined"
              component="a"
              href="https://github.com/aman8440"
              target="_blank"
              rel="noopener noreferrer"
              className="border-gray-700 text-gray-700 dark:border-gray-300 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              size="small"
              variant="outlined"
              component="a"
              href="https://www.linkedin.com/in/aman-gupta-931148208"
              target="_blank"
              rel="noopener noreferrer"
              className="border-gray-700 text-gray-700 dark:border-gray-300 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button
              size="small"
              variant="outlined"
              component="a"
              href="mailto:amang4885@gmail.com"
              className="border-gray-700 text-gray-700 dark:border-gray-300 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg max-w-md mx-auto border border-gray-200 dark:border-gray-700 contact-form"
          >
            <TextField
              label="Name"
              fullWidth
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
              className="bg-white dark:bg-gray-700 rounded"
              InputLabelProps={{ className: "text-gray-600 dark:text-gray-300" }}
              InputProps={{ className: "text-gray-900 dark:text-white" }}
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              className="bg-white dark:bg-gray-700 rounded"
              InputLabelProps={{ className: "text-gray-600 dark:text-gray-300" }}
              InputProps={{ className: "text-gray-900 dark:text-white" }}
            />
            <TextField
              label="Message"
              multiline
              rows={4}
              fullWidth
              {...register("message")}
              error={!!errors.message}
              helperText={errors.message?.message}
              className="bg-white dark:bg-gray-700 rounded"
              InputLabelProps={{ className: "text-gray-600 dark:text-gray-300" }}
              InputProps={{ className: "text-gray-900 dark:text-white" }}
            />
            <Button
              type="submit"
              variant="contained"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
