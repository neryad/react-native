import { API_URL, productsApi } from "@/core/api/products";
import { Product } from "../interfaces/product.interface";

export const getProductsActions = async  (limit =20, offset = 0) => {


    try {

        const {data} = await productsApi.get<Product[]>('/products', {
            params: {
                limit,
                offset
            }
        } )

        return data.map(product => ({
            ...product,
            images: product.images.map( image => `${API_URL}/files/product/${image}` )
        }));
        
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching products');
    }





}