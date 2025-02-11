import { notFound } from "next/navigation"

export default function DocArticle({ params }: { params: { category: string; article: string } }) {
  const articles = [
    {
      category: "getting-started",
      name: "installation",
      title: "Installation Guide",
      content: "Step-by-step guide to install our software...",
    },
    {
      category: "core-concepts",
      name: "architecture-overview",
      title: "Architecture Overview",
      content: "Detailed explanation of our software architecture...",
    },
    {
      category: "advanced-topics",
      name: "performance-optimization",
      title: "Performance Optimization",
      content: "Tips and tricks for optimizing performance...",
    },
  ]

  const article = articles.find((a) => a.category === params.category && a.name === params.article)

  if (!article) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
        <div className="prose max-w-none">
          <p>{article.content}</p>
        </div>
      </article>
    </div>
  )
}

