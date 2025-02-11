import { notFound } from "next/navigation"

export default function BlogPost({ params }: { params: { id: string } }) {
  const posts = [
    {
      id: "1",
      title: "The Future of AI in Business",
      date: "2023-06-01",
      content: "Full content of the AI article...",
    },
    {
      id: "2",
      title: "Scaling Your Infrastructure: Best Practices",
      date: "2023-05-15",
      content: "Full content of the scaling article...",
    },
    {
      id: "3",
      title: "Cybersecurity Trends in 2023",
      date: "2023-04-30",
      content: "Full content of the cybersecurity article...",
    },
  ]

  const post = posts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-6">{post.date}</p>
        <div className="prose max-w-none">
          <p>{post.content}</p>
        </div>
      </article>
    </div>
  )
}

