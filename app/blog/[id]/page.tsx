"use client"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// This would typically come from a database
const blogPosts = [
  {
    id: 1,
    title: "Advancements in AI",
    date: "2023-06-01",
    content:
      "Recent developments in artificial intelligence have shown promising results in various fields. From natural language processing to computer vision, AI is revolutionizing the way we interact with technology. This blog post explores some of the most exciting advancements and their potential implications for future research and applications.",
  },
  {
    id: 2,
    title: "The Future of Machine Learning",
    date: "2023-05-15",
    content:
      "Machine learning continues to evolve at a rapid pace. This post delves into potential future directions for machine learning research, including advances in unsupervised learning, reinforcement learning, and the integration of machine learning with other disciplines such as neuroscience and cognitive psychology.",
  },
]

export default function BlogPost() {
  const params = useParams()
  const postId = Number(params.id)
  const post = blogPosts.find((p) => p.id === postId)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
          <p className="mt-1 text-xl text-gray-600">{post.date}</p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Card>
            <CardContent className="pt-6">
              <p className="whitespace-pre-wrap">{post.content}</p>
            </CardContent>
          </Card>
          <div className="mt-6">
            <Link href="/blog">
              <Button variant="outline">Back to Blog List</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

