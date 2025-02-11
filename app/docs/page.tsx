import Link from "next/link"

export default function DocsIndex() {
  const categories = [
    { name: "Getting Started", articles: ["Installation", "Configuration", "Quick Start Guide"] },
    { name: "Core Concepts", articles: ["Architecture Overview", "Data Models", "API Reference"] },
    { name: "Advanced Topics", articles: ["Performance Optimization", "Security Best Practices", "Integrations"] },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Documentation</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.name} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
            <ul className="space-y-2">
              {category.articles.map((article) => (
                <li key={article}>
                  <Link
                    href={`/docs/${category.name.toLowerCase().replace(" ", "-")}/${article.toLowerCase().replace(" ", "-")}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {article}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

