import {StyleSheet, View,useWindowDimensions,Image,Text} from 'react-native';
import React from 'react';
export default  OnboardingItem = ({item}) => {
  const {width} =useWindowDimensions();
    return (
        <View style={[styles.container,{width}]}>
         <Image source={item.image} style={[styles.image,{width,resizeMode:'contain'}]} />
         <View style={{flex:0.3}}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>

         </View>
         
          
        </View>
      );

};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
      flex:0.7,
      justifyContent:'center'
    },
    title:{
      fontWeight:'800',
      fontSize:20,
      marginBottom:10,
      color:'#493d8a',
      textAlign:'center'

    },
    description:{
      fontWeight:'300',
      textAlign:'center',
      paddingHorizontal:64,
      color:'#62656b'
    }

  });
  