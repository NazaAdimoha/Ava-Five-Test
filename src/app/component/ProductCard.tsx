import Image from "next/image";
import WishList from "../../../public/wishlist.svg";
import { useState } from "react";

interface ProductCardProps {
  title: string;
  price: number;
  description: string;
  image: string[];
  brand?: string;
  isFavourite?: string;
}

const ProductCard = ({
  title,
  price,
  description,
  image,
  brand,
  isFavourite,
}: ProductCardProps) => {
  const [wish, setWishList] = useState<boolean>(false);

  const handleFavoriteToggle = () => {
    setWishList(!wish);
  };

  return (
    <div className="bg-secondary h-[407.708px] w-[284px] flex flex-col gap-2 rounded-lg shadow-md p-4 sm:p-2 md:p-4 lg:p-6">
      <Image
        src={image[0]}
        alt={title}
        width={250}
        height={260}
        className="w-full bg-secondaryText object-cover rounded-lg mb-4"
      />
      <div className="flex items-center justify-between p-2 ">
          <div>
            <h5 className="text-md text-[#171520] ">{title}</h5>
          </div>

          <div
            onClick={handleFavoriteToggle}
            className={`text-tertiary cursor-pointer ${
              wish ? "text-red-500" : ""
            }`}
          >
            <Image src={WishList} alt="favourite" width={25} height={25} />
          </div>
      </div>
        {/* Additional product details can be added here */}
        <p className="text-lg sm:text-base md:text-lg lg:text-xl font-semibold">
          {price}
        </p>
        <p className="text-lg sm:text-base md:text-lg lg:text-xl font-semibold">
          {brand}
        </p>
        <h3 className="text-lg sm:text-base md:text-lg lg:text-xl font-semibold">
          {isFavourite}
        </h3>
    </div>
  );
};

export default ProductCard;
