import Link from "next/link";

export function Tag({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}): JSX.Element {
  return (
    <Link
      className="ui-inline-flex ui-items-center ui-rounded-md ui-bg-blue-50 ui-px-2 ui-py-1 ui-text-xs ui-font-medium ui-text-blue-700 ui-ring-1 ui-ring-inset ui-ring-blue-700/10"
      href={href}
    >
      <p className="ui-m-0 ui-text-xs ui-font-semibold">{children}</p>
    </Link>
  );
}
