"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateCursorPosition)

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition)
    }
  }, [])

  return (
    <div
      className="fixed pointer-events-none z-50 mix-blend-difference"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="relative -left-4 -top-4 w-8 h-8 rounded-full bg-white dark:bg-gray-800 opacity-50 transition-transform duration-300 ease-out animate-pulse" />
    </div>
  )
}