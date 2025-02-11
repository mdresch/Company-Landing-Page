import { motion } from "framer-motion"

export default function ProductSkeleton() {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-48 bg-gray-200 rounded mb-4" />
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-full mb-4" />
      <div className="h-10 bg-gray-200 rounded w-1/3" />
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
    </motion.div>
  )
}

