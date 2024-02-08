import { Suspense } from "react";

export default function Layout({
  params,
  children,
}: {
  params: { slug: string[] };
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div>
      <h1 className="inline-block text-3xl font-bold">Topic: {params.slug}</h1>
      <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
    </div>
  );
}
