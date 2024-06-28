import { ActivityIndicator, FlatList, Image, StyleSheet,Text,View } from "react-native";
import React , { useEffect, useState } from "react";
 
const ProductListingItem = ()=>{
    const [products,setProducts]=useState([]);
    const [isLoading , setIsLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        getProducts();

    },[]);

    const getProducts =()=>{
        const URL = "https://fakestoreapi.com/products";
        
        fetch(URL)
        .then((res)=>{
            if(!res.ok){
                throw new Error("Somthing went wrong")
            }
            return res.json();    //convert into readable format/parsed
        })
        .then((data)=>{
            setProducts(data);
            setIsLoading(false);
         console.log(data);
        })
        .catch((error) => {
            setError(error.message);
            console.log(error.message);
        });

    };
    
    return(
        <View>
            { isLoading ? (
                <ActivityIndicator color="red" size="large" />
            ) : error ? (
            <Text style={styles.errorStyle}>
            {error}
            </Text>
            ):(

            <FlatList 
            showsVerticalScrollIndicator={false}
            data={products}
            renderItem = {({item}) => (
                <View style={styles.cardcontainer}>
                   <Image source={{uri:item.image}} style={styles.image}/>
                   <Text style={{fontSize:16,alignItems:'center'}}>Title : {item.title}</Text>
                   <Text style={{fontSize:16,alignItems:'center'}}>Price : {item.price}</Text>
                   <Text style={{fontSize:16,alignItems:'center'}}>Desscreption : {item.description}</Text>
                   <Text style={{fontSize:16,alignItems:'center'}}>Category : {item.category}</Text>
               </View>
            

            )

            } />)}
        </View>
    );
};
const styles = StyleSheet.create({
    cardcontainer: {
      backgroundColor:'white',
      borderRadius:10,
      padding:20,
      alignItems:'center',
      justifyContent:'center',
      shadowColor:'#000',
      shadowOffset:{width:0,height:2},
      shadowOpacity:0.2,
      shadowRadius:4,
      marginTop:20
    },
    image:{
        height:200,
        width:200
    },
    errorStyle:{
        color:'red',
        fontSize:18
    }
});
export default ProductListingItem;