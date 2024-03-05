// page.js
import React from 'react';
import Link from 'next/link';
import Header from './components/Header'; 

export default function Home() {
  return (
    <main>
      <Header />
      <Link href="/about">A Propos</Link>
    </main>
  );
}