import { Product } from '@/core/products/interfaces/product.interface';
import { useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { RefreshControl } from 'react-native-gesture-handler';
import { ProductCard } from './ProductCard';


interface Props{

    products:Product[];
    loadNextPage:()=>void;

}

const ProductList = ({ products, loadNextPage }: Props) => {

    const [refreshing, setRefreshing] = useState(false);
    const queryClient = useQueryClient();;

    const onPullToRefresh = async () => {

        setRefreshing(true);
        await new Promise((resolve)=> setTimeout(resolve, 200));
        await queryClient.invalidateQueries({ queryKey: ['products', 'infinite'] });
        setRefreshing(false);



    };
  return (
    <FlatList 
    data={products}
    numColumns={2}
    keyExtractor={(item)=> item.id}
   
    renderItem={({ item }) => (
  <ProductCard product={item} />
)}

onEndReached={loadNextPage}
onEndReachedThreshold={0.8}
showsVerticalScrollIndicator={false}
refreshControl={
    <RefreshControl
        refreshing={refreshing}
        onRefresh={onPullToRefresh}
    />
}

    
    />
  )
}

export default ProductList