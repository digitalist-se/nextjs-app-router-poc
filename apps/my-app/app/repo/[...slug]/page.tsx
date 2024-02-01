import { formatDate, formatNumber } from "@repo/utils";
import Link from "next/link";
import { Endpoints } from "@octokit/types";
import { PageProps } from "@/.next/types/app/page";

export default async function Repo({ params }: PageProps) {
  type Response = Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"];
  const res: Response = await fetch(
    `https://api.github.com/repos/${params.slug.join("/")}`
  ).then((res) => res.json());

  return (
    <>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {res.name}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Description
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {res.description}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Language
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {res.language}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Topics
            </dt>
            {res.topics ? (
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <ul className="flex flex-wrap gap-2">
                  {res.topics.map((topic) => (
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
              </dd>
            ) : null}
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Created
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {formatDate(res.created_at)}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Updated
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {formatDate(res.updated_at)}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Pushed
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {formatDate(res.pushed_at)}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Homepage
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {res.homepage ? (
                <Link
                  href={res.homepage}
                  className="underline text-blue-500 hover:text-blue-400"
                >
                  {res.homepage}
                </Link>
              ) : (
                "None"
              )}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              License
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {res.license?.name}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Owner
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {res.owner.login}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">URL</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {res.html_url ? (
                <Link
                  href={res.html_url}
                  className="underline text-blue-500 hover:text-blue-400"
                >
                  {res.html_url}
                </Link>
              ) : (
                "None"
              )}
            </dd>
          </div>
        </dl>
      </div>

      <h3 className="mt-8 text-xl font-bold mb-2">Stats</h3>
      <dl
        className="grid grid-cols-2 gap-2 max-w-[20rem]"
        style={{ gridTemplateColumns: "auto 1fr" }}
      >
        <dt className="font-bold">Stars</dt>
        <dd className="text-end">{formatNumber(res.stargazers_count)}</dd>
        <dt className="font-bold">Forks</dt>
        <dd className="text-end">{formatNumber(res.forks_count)}</dd>
        <dt className="font-bold">Open Issues</dt>
        <dd className="text-end">{formatNumber(res.open_issues_count)}</dd>
        <dt className="font-bold">Watchers</dt>
        <dd className="text-end">{formatNumber(res.watchers_count)}</dd>
      </dl>
    </>
  );
}
