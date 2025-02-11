"use client"

import type React from "react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"

const getPageVariants = (theme: string | undefined) => ({
  default: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.2 },
  },
})

const getTransitionEffect = (pathname: string) => {
  if (pathname.startsWith("/showcase")) return "scale"
  if (pathname.startsWith("/blog")) return "fade"
  return "default"
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { theme } = useTheme()
  const effect = getTransitionEffect(pathname)
  const pageVariants = getPageVariants(theme)

  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants[effect]}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

