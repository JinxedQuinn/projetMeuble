// page.js
import React from 'react';
import Link from 'next/link';
import Header from './components/Header';
import Navbar from './components/Navbar';

export default function Home() {
  return (<>
    <main>
      <Header />
      <Navbar />
    </main>
    </>
  );
}