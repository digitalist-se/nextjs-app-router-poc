import { Card } from "@repo/ui/card";
import type { Endpoints } from "@octokit/types";
import { unstable_noStore as noStore } from "next/cache";

type Response = Endpoints["GET /search/repositories"]["response"]["data"];

export default async function Topic({
  params,
}: {
  params: { slug: string };
}): Promise<JSX.Element> {
  const data = (await fetch(
    `https://api.github.com/search/repositories?q=${params.slug}&sort=stars&page=1`
  ).then((response) => response.json())) as Response;
  return (
    <>
      <RecentlyUpdated slug={params.slug} />
      <h2 className="text-2xl font-bold">
        {data.items.length > 0
          ? `Showing top ${data.items.length} results`
          : "No results"}
      </h2>
      {data.items.length > 0 ? (
        <ul className="flex flex-col">
          {data.items.map((item) => (
            <li className="flex" key={item.id}>
              <Card href={`/repo/${item.full_name}`} title={item.full_name}>
                {item.description}
              </Card>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

export function generateStaticParams(): { slug: string }[] {
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
  return TOPICS.map((topic) => ({ slug: topic }));
}

export const dynamicParams = true;

async function RecentlyUpdated({
  slug,
}: {
  slug: string;
}): Promise<JSX.Element> {
  noStore();
  const recentlyUpdated = (await fetch(
    `https://api.github.com/search/repositories?q=${slug}&sort=updated&page=1&per_page=1`
  ).then((response) => response.json())) as Response;
  return (
    <>
      <h2 className="text-2xl font-bold">Recently updated</h2>
      {recentlyUpdated.items.length > 0 ? (
        <div className="flex">
          <Card
            href={`/repo/${recentlyUpdated.items[0].full_name}`}
            title={recentlyUpdated.items[0].full_name}
          >
            {recentlyUpdated.items[0].description}
          </Card>
        </div>
      ) : null}
    </>
  );
}
