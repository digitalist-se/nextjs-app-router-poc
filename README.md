# App router example

## Prerequisites

- [`pnpm`](https://pnpm.io/)
  - Since v16.13, Node.js is shipping Corepack for managing package managers. This is an experimental feature, so you need to enable it by running: `corepack enable pnpm`

## Setup

- Run turbo application `apps/web` in dev by running following command at the root of the project

```
pnpm dev
```

- Run turbo application in production mode by running

```
pnpm build && cd apps/web/
```

## App router

- App router is a evolution of the existing file-system based router in the Pages Router

### `page.tsx`

- A page is UI that is unique to a route
- Pages are Server Components by default but can be set to a Client Component with `'use client';` directive.

### `layout.tsx`

- On navigation, layouts preserve state, remain interactive, and do not re-render
- Layouts can be cached and reused to avoid unnecessary computation when navigating between pages
- Root layout is required and it needs to contain `<html>` and `<body>`
- Layouts can also be nested

### `template.tsx`

- Same as `layout.tsx` but they are re-rendered on navigation
- This means that when a user navigates between routes that share a template, a new instance of the component is mounted, **DOM elements are recreated**, **state is not preserved**, and effects are re-synchronized.
- Good for eg. logging page views

### [Rest of the special files](https://nextjs.org/docs/app/building-your-application/routing#file-conventions)

## Example of static versus dynamic rendering

### Static rendering

- Start app in dev `pnpm dev`
- Create an app router route component eg. `/app/date/page.tsx`
- Add `Date.now()` to returned JSX
- Build and start the application in production mode
- The new route with current timestamp has been statically rendered

### Dynamic rendering

- Add `import { unstable_noStore as noStore } from "next/cache";`
- Add `noStore()` to the body of the the newly created app router component
- Build and start the application in production mode
- The new route is now dynamically rendered

## Github Topic explorer

### Demo dynamic rendering

- Comment out `generateStaticParams` and `dynamicParams` from topic route component (`app/topic/[slug]/page.tsx`) to test dynamic rendering

### Demo suspense boundary

- Change the `fallback` prop value in the topic layout component (`app/topic/[slug]/layout.tsx`)

### Demo static rendering

- Test different values for `generateStaticParams` and `dynamicParams` in the topic route component (`app/topic/[slug]/page.tsx`) to test static rendering
- Build and start the application in production mode
- Check the `.next/server/app/topic` to see which pages got statically rendered
- Set `dynamicParams` to `true` and `false` and see behaviour of accessing an unknown route (not present in the array returned by the `generateStaticParams`) changes based on the value

### Demo ISR like behaviour (incremental static regeneration)

- Comment out the `noStore()` function in the `RecentlyUpdated` component found in `app/topic/[slug]/page.tsx`
- Add `revalidate` next options in fetch

```js
...
const recentlyUpdated = (await fetch(
  `https://api.github.com/search/repositories?q=${slug}&sort=updated&page=1&per_page=1`,
  {
    next: {
      revalidate: 30,
    },
  }
).then((response) => response.json())) as Response;
...
```

- Build and run the application
- See how the most recent repository stays the same for 30 seconds until it is allowed to be revalidated and generated

### Partial pre rendering

- Read more about partial prerendering - [Partial Prerendering](https://nextjs.org/learn/dashboard-app/partial-prerendering)
- Still experimental

### Server actions

- Read more about server actions - [Server Actions and Mutations](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
- Take note on how to revalidate data that has been mutated by the server action - [Revalidating data](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#revalidating-data)
