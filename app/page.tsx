// app/page.tsx

import Link from "next/link";
  
// This file maps to the index route (/)
export default function Page() {
  return (
    <article style={{margin: 'auto'}}>
      <h1>Hello. I am on app folder </h1>
      <Link href="/counter" className='my-link'>Go to Counter</Link>
      <Link href="/legacy/page" className='my-link'>Go to legacy pages folder demo</Link>
      <Link href="/dashboard" className='my-link'>Go to Dashboard</Link>
      <Link href="/dashboard-client" className='my-link'>Go to Dashboard Client</Link>
    </article>
  );
}
