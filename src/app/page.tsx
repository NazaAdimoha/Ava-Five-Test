"use client";
import { useState } from 'react';
import Navbar from './component/Navbar';

export default function Home() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  return (
    <main className="">
        <Navbar isTopOfPage={isTopOfPage} />
        <h1>Hello World</h1>
    </main>
  )
}
