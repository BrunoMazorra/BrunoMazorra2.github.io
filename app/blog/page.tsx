"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// This would typically come from a database
const initialBlogPosts = [
  {
    id: 1,
    title: "Advancements in AI",
    date: "2023-06-01",
    excerpt: "Recent developments in artificial intelligence and their implications...",
  },
  {
    id: 2,
    title: "The Future of Machine Learning",
    date: "2023-05-15",
    excerpt: "Exploring potential directions for machine learning research...",
  },
]

export default function BlogList() {
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
          <p className="mt-1 text-xl text-gray-600">Thoughts and updates on my research</p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Link href="/blog/new">
            <Button className="mb-6">Create New Post</Button>
          </Link>
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <CardTitle>
                    <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

