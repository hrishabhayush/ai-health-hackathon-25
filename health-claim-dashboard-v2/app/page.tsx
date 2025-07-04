import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, BarChart3, FileText, Home, Settings } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Sidebar */}
      <aside className="hidden w-64 border-r border-gray-700 bg-gray-800 p-6 md:block">
        <div className="flex items-center gap-2 font-semibold text-lg mb-8 text-white">
          <BarChart3 className="h-6 w-6 text-blue-400" />
          <span>ClaimAssist</span>
        </div>

        <nav className="space-y-1">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-md bg-blue-900/50 px-3 py-2 text-blue-300 font-medium"
          >
            <Home className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="/claims"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700"
          >
            <FileText className="h-5 w-5" />
            Claims
          </Link>
          <Link
            href="/settings"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">
            Welcome back, Dr. Smith
          </h1>
          <p className="text-gray-400">
            Submit and review your insurance claims
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>New Claim</CardTitle>
              <CardDescription>
                Submit a new claim for AI review
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/claims/new">
                  Create new claim <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Pending Reviews</CardTitle>
              <CardDescription>Claims awaiting AI analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">3</div>
              <p className="text-sm text-gray-500">Updated 5 minutes ago</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Average Risk Score</CardTitle>
              <CardDescription>For your recent claims</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-amber-500">42%</div>
              <p className="text-sm text-gray-500">Last 30 days</p>
            </CardContent>
          </Card>
        </div>

        <h2 className="mt-10 mb-4 text-xl font-semibold text-white">
          Recent Claims
        </h2>
        <div className="rounded-lg border border-gray-700 bg-gray-800">
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700 text-sm text-gray-400">
                  <th className="pb-3 text-left font-medium">ID</th>
                  <th className="pb-3 text-left font-medium">Date</th>
                  <th className="pb-3 text-left font-medium">Status</th>
                  <th className="pb-3 text-left font-medium">Risk Score</th>
                  <th className="pb-3 text-right font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-3 text-white">CL-1234</td>
                  <td className="py-3 text-gray-300">Jun 5, 2025</td>
                  <td className="py-3">
                    <span className="rounded-full bg-green-900/50 px-2 py-1 text-xs font-medium text-green-300">
                      Completed
                    </span>
                  </td>
                  <td className="py-3 text-white">28%</td>
                  <td className="py-3 text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/claims/CL-1234">View</Link>
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 text-white">CL-1233</td>
                  <td className="py-3 text-gray-300">Jun 4, 2025</td>
                  <td className="py-3">
                    <span className="rounded-full bg-amber-900/50 px-2 py-1 text-xs font-medium text-amber-300">
                      Pending
                    </span>
                  </td>
                  <td className="py-3 text-white">--</td>
                  <td className="py-3 text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/claims/CL-1233">View</Link>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 text-white">CL-1232</td>
                  <td className="py-3 text-gray-300">Jun 3, 2025</td>
                  <td className="py-3">
                    <span className="rounded-full bg-red-900/50 px-2 py-1 text-xs font-medium text-red-300">
                      High Risk
                    </span>
                  </td>
                  <td className="py-3 text-white">76%</td>
                  <td className="py-3 text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/claims/CL-1232">View</Link>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
