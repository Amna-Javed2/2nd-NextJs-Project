import React from 'react'
import Link from 'next/link';

function HomePage() {
  return (
    <div className='flex min-h-screen flex-col p-5 gap-2 bg-slate-400'>
      <Link href={'/HomePage/Home'}>Home</Link>
      <Link href={'/HomePage/About'}>About</Link>
      <Link href={'/HomePage/Services'}>Services</Link>
    </div>
  )
}

export default HomePage;