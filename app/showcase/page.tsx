"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import ProductSkeleton from "../components/product-skeleton"

const allProducts = [
  {
    id: 1,
    name: "TechAI",
    category: "AI",
    description: "AI-powered business analytics",
    image: "/placeholder.svg?height=200&width=300",
    details: "TechAI uses advanced machine learning algorithms to provide real-time insights into your business data.",
  },
  {
    id: 2,
    name: "CloudScale",
    category: "Infrastructure",
    description: "Scalable cloud infrastructure",
    image: "/placeholder.svg?height=200&width=300",
    details: "CloudScale offers a flexible, high-performance cloud platform that grows with your business needs.",
  },
  {
    id: 3,
    name: "SecureGuard",
    category: "Security",
    description: "Advanced cybersecurity solution",
    image: "/placeholder.svg?height=200&width=300",
    details:
      "SecureGuard provides state-of-the-art protection against the latest cyber threats, ensuring your data remains safe.",
  },
  {
    id: 4,
    name: "DataSync",
    category: "Data",
    description: "Real-time data synchronization",
    image: "/placeholder.svg?height=200&width=300",
    details: "DataSync ensures your data is always up-to-date across all your systems and devices.",
  },
  {
    id: 5,
    name: "AIAssist",
    category: "AI",
    description: "AI-powered virtual assistant",
    image: "/placeholder.svg?height=200&width=300",
    details: "AIAssist provides intelligent virtual assistance to streamline your daily tasks and boost productivity.",
  },
  {
    id: 6,
    name: "CloudBackup",
    category: "Infrastructure",
    description: "Automated cloud backup solution",
    image: "/placeholder.svg?height=200&width=300",
    details:
      "CloudBackup ensures your critical data is always safe and easily recoverable with automated cloud backups.",
  },
  {
    id: 7,
    name: "CyberShield",
    category: "Security",
    description: "Comprehensive cybersecurity suite",
    image: "/placeholder.svg?height=200&width=300",
    details:
      "CyberShield offers a full suite of cybersecurity tools to protect your business from evolving digital threats.",
  },
  {
    id: 8,
    name: "DataViz",
    category: "Data",
    description: "Advanced data visualization tool",
    image: "/placeholder.svg?height=200&width=300",
    details:
      "DataViz transforms complex data into clear, actionable insights through powerful visualization techniques.",
  },
]

const ITEMS_PER_PAGE = 4

export default function Showcase() {
  const [filter, setFilter] = useState("All")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [displayedProducts, setDisplayedProducts] = useState([])
  const [skeletonCount, setSkeletonCount] = useState(3)
  const [page, setPage] = useState(1)

  const categories = ["All", ...new Set(allProducts.map((product) => product.category))]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSkeletonCount(1)
      } else if (window.innerWidth < 1024) {
        setSkeletonCount(2)
      } else {
        setSkeletonCount(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true)
      setDisplayedProducts([])
      setPage(1)

      const filteredProducts =
        filter === "All" ? allProducts : allProducts.filter((product) => product.category === filter)

      const productsToLoad = filteredProducts.slice(0, ITEMS_PER_PAGE)

      for (let i = 0; i < productsToLoad.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 300)) // Simulate API delay
        setDisplayedProducts((prev) => [...prev, productsToLoad[i]])
      }

      setLoading(false)
    }

    loadProducts()
  }, [filter])

  const loadMore = async () => {
    setLoading(true)
    const filteredProducts =
      filter === "All" ? allProducts : allProducts.filter((product) => product.category === filter)

    const nextPage = page + 1
    const startIndex = (nextPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    const newProducts = filteredProducts.slice(startIndex, endIndex)

    for (let i = 0; i < newProducts.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 300)) // Simulate API delay
      setDisplayedProducts((prev) => [...prev, newProducts[i]])
    }

    setPage(nextPage)
    setLoading(false)
  }

  const filterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Solutions
      </motion.h1>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-8"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {categories.map((category, index) => (
          <motion.div
            key={category}
            variants={filterVariants}
            custom={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button onClick={() => setFilter(category)} variant={filter === category ? "default" : "outline"}>
              {category}
            </Button>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <AnimatePresence mode="popLayout">
          {loading && displayedProducts.length === 0 && (
            <>
              {[...Array(skeletonCount)].map((_, index) => (
                <ProductSkeleton key={`skeleton-${index}`} />
              ))}
            </>
          )}
          {displayedProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={200}
                className="mb-4 rounded"
              />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button onClick={() => setSelectedProduct(product)}>Learn More</Button>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {!loading &&
        displayedProducts.length <
          (filter === "All" ? allProducts.length : allProducts.filter((p) => p.category === filter).length) && (
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button onClick={loadMore}>Load More</Button>
          </motion.div>
        )}

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedProduct?.name}</DialogTitle>
            <DialogDescription>{selectedProduct?.details}</DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <Button onClick={() => setSelectedProduct(null)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

