import type { Endpoints } from "@octokit/types";
import { Tag } from "@repo/ui/tag";

export default async function Repo({
  params,
}: {
  params: { slug: string[] };
}): Promise<JSX.Element> {
  type Response = Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"];
  const data = (await fetch(
    `https://api.github.com/repos/${params.slug.join("/")}`
  ).then((response) => response.json())) as Response;

  return (
    <>
      <p className="text-lg leading-8">{data.description}</p>
      <ul className="flex flex-wrap">
        {data.topics?.map((topic) => (
          <li key={topic}>
            <Tag href={`/topic/${topic}`}>{topic}</Tag>
          </li>
        ))}
      </ul>
    </>
  );
}
