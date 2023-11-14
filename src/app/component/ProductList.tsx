"use client";
import Link from "next/link";
import { useFetchProducts } from "../hooks/useFetchProduct";
import CaretRight from "../../../public/chevron-right.svg";
import Image from "next/image";
import ProductCard from "./ProductCard";
import { Key, useState } from "react";
import Button from "./Button";

const ProductList = () => {
  const { products, isLoading, error } = useFetchProducts();
  const [viewAll, setViewAll] = useState<boolean>(false);

  //define product state
  const productList = products && products.products;

  //display only four products based on the viewAll state
  const displayProducts = viewAll
    ? productList
    : (productList && productList.slice(0, 4)) || [];
  return (
    <section className="bg-secondary p-10">
      <div className="flex items-center justify-between mb-4">
        <p className="text-2xl text-primary">New Arrivals</p>
        <div>
          {!viewAll && productList && productList?.length > 4 && (
            <button
              onClick={() => setViewAll(!viewAll)}
              className="p-[10px] text-primary flex justify-center items-center gap-4 border rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:text-secondaryText duration-300 "
            >
              View All{" "}
              <Image src={CaretRight} alt="caretDown" width={20} height={20} />
            </button>
          )}
        </div>
      </div>
      {/* product list */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error fetching product</div>
        ) : (
          displayProducts?.map(
            (
              product: {
                id: string;
                title: string;
                brand: string;
                price: number;
                description: string;
                images: string;
                rating: string | undefined;
              },
              index: Key | null | undefined
            ) => (
              <ProductCard
                key={product?.id}
                title={product?.title}
                price={product?.price}
                description={product?.description}
                image={[product?.images[0]]}
                brand={product?.brand}
                isFavourite={product?.rating}
              />
            )
          )
        )}
      </div>
    </section>
  );
};

export default ProductList;
