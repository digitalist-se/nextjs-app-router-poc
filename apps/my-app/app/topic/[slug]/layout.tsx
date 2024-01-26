import { Suspense } from "react";

export default function Layout({ params, children }) {
  return (
    <div>
      <h1 className="inline-block text-3xl font-bold mb-8">
        Topic: {params.slug}
      </h1>
      <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
    </div>
  );
}
