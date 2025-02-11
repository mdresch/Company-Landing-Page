"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"

export default function LoadingBar() {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 500) // Simulate loading time
    return () => clearTimeout(timer)
  }, []) // Removed pathname dependency

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 ${theme === "dark" ? "bg-blue-500" : "bg-blue-700"} z-50`}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    />
  )
}

