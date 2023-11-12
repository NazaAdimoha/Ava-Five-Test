import Image from "next/image";

interface ProductCardProps {
  title: string;
  price: number;
  description: string;
  image: string[];
  isFavourite?: boolean;
};

const ProductCard = ({
  title,
  price,
  description,
  image,
  isFavourite
}:ProductCardProps) => {
  return (
    <div className="bg-primary gap-4 rounded-lg shadow-md p-4 sm:p-2 md:p-4 lg:p-6">
      <Image src={
        image[0]
      } alt={title} width={30} height={30} className="object-cover rounded-lg mb-4" />
      <div className="p-2">
        <div className="flex justify-between items-center">
          <h3 className="text-lg sm:text-base md:text-lg lg:text-xl font-semibold">{isFavourite}</h3>
          {isFavourite && (
            <span className="text-tertiary">
              <i className="fas fa-heart"></i>
            </span>
          )}
        </div>
        {/* Additional product details can be added here */}
      </div>
    </div>
  )
}

export default ProductCard