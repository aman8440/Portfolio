"use client"

import { useEffect, useState } from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Contact from "./components/Contact"
import FloatingNav from "./components/floating-nav"
import { CustomCursor } from "./components/custom-cursor"
import { ToastContainer } from 'react-toastify';

export default function Home() {
  const [showCursor, setShowCursor] = useState(true)
  
  useEffect(() => {
    const checkScreenSize = () => {
      setShowCursor(window.innerWidth > 768)
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])
  
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <ToastContainer position='top-right' />
      {showCursor && <CustomCursor />}
      <FloatingNav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  )
}

