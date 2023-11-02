import { useFetchProducts } from "../hooks/useFetchProduct"


const ProductList = () => {
    const { products, isLoading, error } = useFetchProducts()
  return (
    <section className="bg-secondary">

    </section>
  )
}

export default ProductList