"use client";
import Link from "next/link";
import { useFetchProducts } from "../hooks/useFetchProduct";
import CaretRight from "../../../public/chevron-right.svg";
import Image from "next/image";
import ProductCard from "./ProductCard";
import { Key } from "react";

const ProductList = () => {
  const { products, isLoading, error } = useFetchProducts();

  //define product state
  const productList = products;
  return (
    <section className="bg-secondary p-10">
      <div className="flex items-center justify-between">
        <p>New Arrivals</p>
        <div>
          <Link
            href="/product"
            className="p-[10px] text-primary flex justify-center items-center gap-4 border rounded-md transition ease-in-out delay-150 bg-slate-400 hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:text-secondaryText duration-300 "
          >
            View All{" "}
            <span>
              <Image src={CaretRight} alt="caretDown" width={20} height={20} />
            </span>
          </Link>
        </div>
      </div>
      {/* product list */}

      <div className="gap-4 grid grid-rows-2 md:grid-rows-4 ">
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error fetching product</div>
        ) : (
          productList && productList.products.map(
            (product: { title: string; price: number; description: string; images: string; isFavourite: boolean | undefined; }, index: Key | null | undefined) => (
            <ProductCard
                key={index}
                title={product.title}
                price={product.price}
                description={product.description}
                image={
                    [product.images[0]]
                }
                isFavourite={product.isFavourite}
            />
          )
        ))}
      </div>
    </section>
  );
};

export default ProductList;
