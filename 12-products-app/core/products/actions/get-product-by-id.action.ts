import { API_URL, productsApi } from "@/core/api/products";
import { Product } from "../interfaces/product.interface";

export const getProductByIdActions = async  (id:string):Promise<Product> => {


    try {

        const {data} = await productsApi.get<Product>(`/products/${id}`, {
           
        } )

        return {...data, images: data.images.map( image => `${API_URL}/files/product/${image}` )};
        
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching product by id');
    }





}