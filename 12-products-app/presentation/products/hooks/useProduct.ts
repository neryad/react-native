import { updateCreateProduct } from '@/core/products/actions/create-update-product.actions';
import { getProductByIdActions } from '@/core/products/actions/get-product-by-id.action';
import { Product } from '@/core/products/interfaces/product.interface';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Alert } from 'react-native';

export const useProduct = (productId:string) => {


    const productQuery = useQuery({
        queryKey:['product',productId],
        queryFn:() => getProductByIdActions(productId),
        staleTime: 1000 * 60 * 60

    });


    const productMutation = useMutation({

        mutationFn:async(data: Product)=>updateCreateProduct(data),

        onSuccess(data:Product){
            ///validaro algo

            Alert.alert(`Producto, ${data.title} guardado bien`)
        }
    })


    
  return { productQuery, productMutation }
}

export default useProduct