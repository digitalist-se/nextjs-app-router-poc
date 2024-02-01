import Link from "next/link";
import { Card } from "@repo/ui/card";

export default function Home() {
  const topics = [
    "react",
    "nodejs",
    "javascript",
    "css",
    "config",
    "python",
    "html",
    "angular",
    "reactjs",
    "github-config",
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Explore popular GitHub repositories
      </h1>
      <p className="mt-2 md:mt-4 text-lg leading-8 text-gray-600">
        Find popular repositories by topic. Explore and compare repositories
        side-by-side.
      </p>
      <h2 className="mt-6 md:mt-10 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
        Find repositories by topic
      </h2>
      <ul className="flex flex-wrap gap-2 mt-2 md:mt-4">
        {topics.map((topic) => (
          <li key={topic}>
            <Link
              href={`/topic/${topic}`}
              className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
            >
              {topic}
            </Link>
          </li>
        ))}
      </ul>
      <h2 className="mt-6 md:mt-10 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
        Most starred repositories
      </h2>
      <ul className="flex flex-col gap-1  mt-2 md:mt-4">
        <li>
          <Card
            link={`/repo/facebook/react`}
            fullName="facebook/react"
            language="TypeScript"
          />
        </li>
      </ul>
    </div>
  );
}
