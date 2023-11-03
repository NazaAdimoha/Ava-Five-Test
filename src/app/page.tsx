// "use client";
import Navbar from './component/Navbar';
import ClearanceMessage from './component/ClearanceMessage';
import Footer from './component/Footer';
import ProductList from './component/ProductList';

export default function Home() {
  return (
    <main className="">
        <Navbar />
        <ClearanceMessage />
        <ProductList  />
        <Footer />

    </main>
  )
}
