import Link from "next/link";

interface CardProps {
  link?: string;
  fullName?: string;
  language?: string | null;
  stargazersCount?: number;
  title?: string;
  children?: React.ReactNode;
}

export function Card({
  link,
  fullName,
  language,
  stargazersCount,
  title,
  children,
}: CardProps) {
  return (
    <div className="rounded-2xl bg-gray-50 text-center ring-1 ring-inset ring-gray-900/5 py-4 px-4 relative group">
      <div className="flex justify-between gap-4">
        <div className="font-mono underline text-blue-700 group-hover:text-blue-500 truncate">
          {fullName}
        </div>
        <div className="flex gap-2 font-mono flex-none text-slate-500">
          {/* {formatNumber(stargazersCount)}{" "} */}
          {stargazersCount ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          ) : null}
        </div>
      </div>
      <div className="flex justify-between gap-4">
        <div className="flex gap-2 font-mono flex-none text-slate-500">
          {language}
        </div>
        {link ? (
          <Link href={link} className="after:absolute after:inset-0">
            View {fullName}
          </Link>
        ) : null}
      </div>
      {title ? <div className="mt-4 text-gray-600 text-sm">{title}</div> : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  );
}
