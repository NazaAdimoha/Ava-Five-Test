"use client";
import Link from "next/link"
import { useFetchProducts } from "../hooks/useFetchProduct"
import CaretRight from "../../../public/chevron-right.svg"


const ProductList = () => {
    const { products, isLoading, error } = useFetchProducts()
  return (
    <section className="bg-secondary">
        <div>
            <p>New Arrivals</p>
            <div className="p-[10px 8px] inline-flex justify-center items-center gap-4 border rounded-sm">
                <Link href="/product">View All <span>{CaretRight}</span></Link>
            </div>
        </div>
        <div>

        </div>
    </section>
  )
}

export default ProductList