import { API_URL, productsApi } from "@/core/api/products";
import { Gender, Product } from "../interfaces/product.interface";


const emptyProduct: Product = {
    id: '',
    title: 'Nuevo',
    price: 0,
    description: "",
    slug: "",
    stock: 0,
    sizes: [],
    gender: Gender.Men,
    tags: [],
    images: [],
    user: undefined
}

export const getProductByIdActions = async  (id:string):Promise<Product> => {



    if (id === 'new') return emptyProduct;


    try {

        const {data} = await productsApi.get<Product>(`/products/${id}`, {
           
        } )

        return {...data, images: data.images.map( image => `${API_URL}/files/product/${image}` )};
        
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching product by id');
    }





}