// app/page.tsx

import Link from "next/link";
  
// This file maps to the index route (/)
export default function Page() {
  return (
    <article>
      <h1>Hello, I am on Legay page folder!</h1>
      <Link className='my-link' href="/counter">Go to Counter</Link>
    </article>
  );
}
