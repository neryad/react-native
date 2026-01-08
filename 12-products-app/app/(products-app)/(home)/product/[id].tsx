import { Size } from '@/core/products/interfaces/product.interface';
import ProductImages from '@/presentation/products/componts/productImages';
import useProduct from '@/presentation/products/hooks/useProduct';
import { ThemedView } from '@/presentation/theme/components/themed-view';
import ThemedButton from '@/presentation/theme/components/ThemedButton';
import ThemedButtonGroup from '@/presentation/theme/components/ThemedButtonGroup';
import ThemedTextInput from '@/presentation/theme/components/ThemedTextInput';
import { Ionicons } from '@expo/vector-icons';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';




const ProductScreen = () => {
 const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const { productQuery, productMutation } = useProduct(`${id}`);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Ionicons name="camera-outline" size={25} />,
    });
  }, []);

  useEffect(() => {
    if (productQuery.data) {
      navigation.setOptions({
        title: productQuery.data.title,
      });
    }
  }, [productQuery.data]);

  if (productQuery.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={30} />
      </View>
    );
  }

  if (!productQuery.data) {
    return <Redirect href="/(products-app)/(home)" />;
  }

  const product = productQuery.data!;

  return (
    <Formik initialValues={product} onSubmit={ productMutation.mutate}>

      {
        ({ values, handleSubmit, handleChange, setFieldValue }) => (
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
     <ScrollView>
      <ProductImages images={values.images}/>
     <ThemedView style={{marginHorizontal:10, marginTop:20}}>

      <ThemedTextInput value={values.title} onChangeText={handleChange('title')} placeholder='Titulo' style={{marginVertical:5}}></ThemedTextInput>

            <ThemedTextInput placeholder='Slug' value={values.slug} onChangeText={handleChange('slug')}  style={{marginVertical:5}}></ThemedTextInput>

                  <ThemedTextInput placeholder='Description'
                  value={values.description} onChangeText={handleChange('description')} 
                  multiline
                  numberOfLines={5}
                   style={{marginVertical:5}}></ThemedTextInput>



     </ThemedView>


     <ThemedView style={{marginVertical:5, marginHorizontal:10, flexDirection:"row", gap:10}}>

       <ThemedTextInput  value={values.price.toString()} onChangeText={handleChange('price')}  placeholder='Precio' style={{marginVertical:5}}></ThemedTextInput>

        <ThemedTextInput value={values.stock.toString()} onChangeText={handleChange('stock')} placeholder='Stock' style={{marginVertical:5}}></ThemedTextInput>

     </ThemedView>

      <ThemedView style={{ marginHorizontal:10}}>
        <ThemedButtonGroup options={['XS', 'S','M','L','XL','XXL','XXXL']} selectedOptions={values.sizes} onSelect={(options)=> {

          const newSizeValue = values.sizes.includes(options as Size) ? values.sizes.filter(s => s != options): [...values.sizes, options];

          setFieldValue('sizes', newSizeValue);



        }} />

           <ThemedButtonGroup options={['Kids', 'Men','Women','Unisex',]} selectedOptions={[values.gender]} onSelect={(option)=> setFieldValue('gender', option) } />
      </ThemedView>



      <View style={{
        marginHorizontal:10,
        marginBottom:50,
        marginTop:20
      }}>
        <ThemedButton children='Guardar' icon='save-outline' onPress={() =>handleSubmit()}/>
      </View>

    </ScrollView>
   </KeyboardAvoidingView>
        )
      }
   
      
    </Formik>
  
  );
}

export default ProductScreen