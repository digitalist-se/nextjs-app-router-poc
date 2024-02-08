import { Card } from "@repo/ui/card";
import { Tag } from "@repo/ui/tag";

const TOPICS = [
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

export default function Page(): JSX.Element {
  return (
    <main>
      <div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
          Explore popular GitHub repositories
        </h1>
        <h2 className="text-lg font-semibold leading-6 mb-2">
          Find popular repositories by topic
        </h2>
        <ul className="flex flex-wrap gap-2 mb-6">
          {TOPICS.map((topic) => (
            <li key={topic}>
              <Tag href={`/topic/${topic}`}>{topic}</Tag>
            </li>
          ))}
        </ul>
        <h2 className="text-lg font-semibold leading-6">
          Featured repositories
        </h2>
        <ul className="flex flex-col">
          <li className="flex">
            <Card href="/repo/facebook/react" title="facebook/react">
              The library for web and native user interfaces.
            </Card>
          </li>
          <li className="flex">
            <Card href="/repo/vercel/next.js" title="vercel/next.js">
              The React Framework
            </Card>
          </li>
        </ul>
      </div>
    </main>
  );
}
