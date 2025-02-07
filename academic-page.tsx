import { Mail, MapPin, FileText, Book, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function AcademicPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Bruno Mazorra</h1>
          <p className="mt-1 text-xl text-gray-600">Flashbots researcher</p>
          <div className="mt-4 flex space-x-4">
            <Button>
              <FileText className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            <Link href="/publications">
              <Button variant="outline">
                <Book className="mr-2 h-4 w-4" />
                View All Publications
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline">View Blog</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  I am a researcher in blockchain, mechanism design, and game theory with a Ph.D. from Pompeu Fabra
                  University. My academic background is in pure mathematics, having studied at the University of
                  Barcelona, Leiden University, and the University of Regensburg, where I focused on number theory,
                  topology, and geometry. I enjoy thinking about economic and cryptographic mechanisms, especially in
                  decentralized systems. My work explores how incentives shape behavior in digital markets, with a
                  particular interest in MEV, Sybil-proof mechanisms, and cross-domain auctions. Beyond research, I
                  appreciate a good mathematical puzzle, video games and climbing.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    <span>mynameandsurname@gmail.com</span>
                  </li>
                  <li className="flex items-center">
                    <Twitter className="mr-2 h-4 w-4" />
                    <a href="https://twitter.com/0xBrMazoRoig" className="text-blue-600 hover:underline">
                      @0xBrMazoRoig
                    </a>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>Barcelona</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Research Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Mechanism Design</li>
                  <li>Game theory</li>
                  <li>MEV and Blockchain</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Teaching</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>Blockchain and MEV</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Selected Publications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <p className="font-semibold">
                      Do not rug on me: Leveraging machine learning techniques for automated scam detection
                    </p>
                    <p className="text-sm text-gray-600">Mathematics, 2022</p>
                  </li>
                  <li>
                    <p className="font-semibold">Price of MEV: Towards a Game Theoretical Approach to MEV</p>
                    <p className="text-sm text-gray-600">
                      ACM CCS Workshop on Decentralized Finance and Security, 2022
                    </p>
                  </li>
                  <li>
                    <p className="font-semibold">
                      The Cost of Sybils, Credible Commitments, and False-Name Proof Mechanisms
                    </p>
                    <p className="text-sm text-gray-600">arXiv Preprint, 2023</p>
                  </li>
                  <li>
                    <p className="font-semibold">
                      Towards optimal prior-free permissionless rebate mechanisms, with applications to automated market
                      makers & combinatorial orderflow auctions
                    </p>
                    <p className="text-sm text-gray-600">arXiv Preprint, 2023</p>
                  </li>
                  <li>
                    <p className="font-semibold">
                      On the optimality of Shapley mechanism for funding public excludable goods under Sybil strategies
                    </p>
                    <p className="text-sm text-gray-600">arXiv Preprint, 2023</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="bg-white shadow mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Bruno Mazorra. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

