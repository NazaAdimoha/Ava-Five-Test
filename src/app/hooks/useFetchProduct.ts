import { axiosInstance } from "../service/http_common";
import { useQuery } from "react-query";

const fetchProducts = async () => {
 const response = await axiosInstance.get("products")
    return response.data   
}

export const useFetchProducts = () => {
    const queryKey = "products"
    const queryFn = fetchProducts
    const queryOptions = {
        staleTime: 5000, // 5 seconds
        cacheTime: 3600000, // 1 hour
    }

    const { data: products, isLoading, error } = useQuery(
        queryKey,
        queryFn,
        queryOptions
    )

    return { products, isLoading, error }
};