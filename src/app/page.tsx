"use client";
import { useState } from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

export default function Home() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  return (
    <main className="">
        <Navbar isTopOfPage={isTopOfPage} />
        <Footer />
    </main>
  )
}
