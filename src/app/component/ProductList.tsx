"use client";
import Link from "next/link";
import { useFetchProducts } from "../hooks/useFetchProduct";
import CaretRight from "../../../public/chevron-right.svg";
import Image from "next/image";

const ProductList = () => {
  const { products, isLoading, error } = useFetchProducts();
  return (
    <section className="bg-secondary">
      <div className="flex items-center justify-between">
        <p>New Arrivals</p>
        <div>
          <Link href="/product" className="p-[10px 8px] flex justify-center items-center gap-4 border rounded-sm">
            View All <span>
                <Image src={CaretRight} alt="caretDown" width={20} height={20} />
            </span>
          </Link>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default ProductList;
