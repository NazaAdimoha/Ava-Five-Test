import Image from "next/image";

interface ProductCardProps {
  title: string;
  price: number;
  description: string;
  image: string[];
  brand?: string;
  isFavourite?: boolean;
};

const ProductCard = ({
  title,
  price,
  description,
  image,
  brand,
  isFavourite
}:ProductCardProps) => {
  return (
    <div className="bg-secondary h-[407.708px] w-[284px] flex flex-col items-center gap-4 rounded-lg shadow-md p-4 sm:p-2 md:p-4 lg:p-6">
      <Image src={
        image[0]
      } alt={title} width={250} height={260} className="w-full bg-secondaryText object-cover rounded-lg mb-4" />
      <div className="p-2">
        <div className="flex justify-between items-center">
          <h5>{title}</h5>
          <h3 className="text-lg sm:text-base md:text-lg lg:text-xl font-semibold">{isFavourite}</h3>
          {isFavourite && (
            <span className="text-tertiary">
              <i className="fas fa-heart"></i>
            </span>
          )}
        </div>
        {/* Additional product details can be added here */}
        <p className="text-lg sm:text-base md:text-lg lg:text-xl font-semibold">{price}</p>
        <p className="text-lg sm:text-base md:text-lg lg:text-xl font-semibold">{brand}</p>
      </div>
    </div>
  )
}

export default ProductCard