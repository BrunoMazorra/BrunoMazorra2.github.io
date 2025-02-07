import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PublicationsPage() {
  const publications = [
    {
      title: "Do not rug on me: Leveraging machine learning techniques for automated scam detection",
      journal: "Mathematics",
      year: 2022,
      link: "https://doi.org/10.3390/math10233975",
    },
    {
      title: "Price of MEV: Towards a Game Theoretical Approach to MEV",
      journal: "ACM CCS Workshop on Decentralized Finance and Security",
      year: 2022,
      link: "https://dl.acm.org/doi/10.1145/3560832.3563453",
    },
    {
      title: "The Cost of Sybils, Credible Commitments, and False-Name Proof Mechanisms",
      journal: "arXiv Preprint",
      year: 2023,
      link: "https://arxiv.org/abs/2305.15030",
    },
    {
      title:
        "Towards optimal prior-free permissionless rebate mechanisms, with applications to automated market makers & combinatorial orderflow auctions",
      journal: "arXiv Preprint",
      year: 2023,
      link: "https://arxiv.org/abs/2305.15030",
    },
    {
      title: "On the optimality of Shapley mechanism for funding public excludable goods under Sybil strategies",
      journal: "arXiv Preprint",
      year: 2023,
      link: "https://arxiv.org/abs/2305.15030",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">All Publications</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {pub.title}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    {pub.journal}, {pub.year}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

