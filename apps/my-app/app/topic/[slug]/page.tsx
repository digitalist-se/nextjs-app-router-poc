import Card from "@/app/repo/[...slug]/card";
import { unstable_noStore as noStore } from "next/cache";

export default async function Topic({ params }) {
  noStore();
  const res = await fetch(
    `https://api.github.com/search/repositories?q=${params.slug}&page=1`
  ).then((res) => res.json());
  return (
    <>
      <h2 className="text-2xl font-bold mb-2">
        {res.items ? `Showing top ${res.items.length} results` : "No results"}
      </h2>
      {res.items ? (
        <ul className="flex flex-col gap-2">
          {res.items.map((item) => console.log(item)||(
            <li key={item.id}>
              <Card
                link={`/repo/${item.full_name}`}
                fullName={item.full_name}
                stargazersCount={item.stargazers_count}
                language={item.language}
              />
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

export async function generateStaticParams() {
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
  return topics.map((topic) => ({ slug: topic }));
}

export const dynamicParams = true; // true | false,
// false: Dynamic segments not included in generateStaticParams will return a 404.
