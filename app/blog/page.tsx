"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

// Skeleton component for loading state
const BlogPostSkeleton = () => (
  <div className="bg-card animate-pulse p-6 rounded-lg shadow-md">
    <div className="w-full h-48 bg-gray-300 rounded mb-4"></div>
    <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
  </div>
)

export default function BlogIndex() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    const fetchPosts = async () => {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const fetchedPosts = [
        {
          id: 1,
          title: "The Future of AI in Business",
          date: "2023-06-01",
          excerpt: "Exploring how AI is transforming various industries...",
          image: "/blog-post-1.jpg",
        },
        {
          id: 2,
          title: "Scaling Your Infrastructure: Best Practices",
          date: "2023-05-15",
          excerpt: "Learn how to effectively scale your IT infrastructure...",
          image: "/blog-post-2.jpg",
        },
        {
          id: 3,
          title: "Cybersecurity Trends in 2023",
          date: "2023-04-30",
          excerpt: "Stay ahead of the curve with these emerging cybersecurity trends...",
          image: "/blog-post-3.jpg",
        },
      ]

      setPosts(fetchedPosts)
      setLoading(false)
    }

    fetchPosts()

    // Simulating loading progress
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">TechCorp Blog</h1>

      {loading ? (
        <>
          <div className="mb-8 h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <BlogPostSkeleton key={index} />
            ))}
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-card p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">
                <Link href={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-800">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-500 text-sm mb-2">{post.date}</p>
              <p className="text-gray-600">{post.excerpt}</p>
              <Link href={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
                Read more
              </Link>
            </motion.article>
          ))}
        </div>
      )}
    </div>
  )
}

