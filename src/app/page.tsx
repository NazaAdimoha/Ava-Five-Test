// "use client";
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import ClearanceMessage from './component/ClearanceMessage';

export default function Home() {
  return (
    <main className="">
        <Navbar />
        <ClearanceMessage />
        <Footer />
    </main>
  )
}
