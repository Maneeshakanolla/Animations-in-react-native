import React, { useEffect, useRef, useState } from "react";
import {StyleSheet, View ,FlatList,Animated, useWindowDimensions,Image, Dimensions} from 'react-native';
import Images from "../../Image";;

const ImageAutoSlide =() => {
 const {width: windowWidth} = useWindowDimensions();
  const[activeIndex, setActiveIndex]=useState(0);
  const flatListRef=useRef();

  const screenWidth =Dimensions.get("window").width;
 const renderItem =({item ,index}) => {
        return <View>
            <Image source={item.image} style={{height:200, width:screenWidth}} />
        </View>

    };

    const handleOnScroll =(event) =>{
      const scrollPoasition =event.nativeEvent.contentOffset.x;
     // console.log({scrollPoasition});
      const index=scrollPoasition/windowWidth;
     // console.log({index});
      setActiveIndex(index);
    }

    //Auto Scroll
    useEffect(() => {
        let interval=setInterval(() => {
            if(activeIndex === Images.length-1){
                flatListRef.current.scrollToIndex({
                 index:0,
                 Animation:true
                });
            }else{
                flatListRef.current.scrollToIndex({
                    index:activeIndex+1,    
                    Animation:true
                   });
            }
        },1000);
        return () => clearInterval(interval);
    });
    const getItemLayout=(data,index) => ({
        length:screenWidth,
        offset:screenWidth*index,
        index:index,
    });
    

    const renderDotindicator =()=> {
        return Images.map((dot,index) =>{
            if(activeIndex === index){
                return(
                    <View style={{
                        backgroundColor:'green',
                        height:10,
                        width:10,
                        borderRadius:5,
                        marginHorizontal:6,
                    }}>

                    </View>
                    );
            }else{
                return(
                    <View 
                    key={index}
                    style={{
                        backgroundColor:'red',
                        height:10,
                        width:10,
                        borderRadius:5,
                        marginHorizontal:6,
                    }}>
                    </View>    

                );
            }
        });
    };
    
   
    return (
        <View >
          <FlatList
             data={Images} 
             ref={flatListRef}
             getItemLayout={getItemLayout}
             renderItem={renderItem}
             keyExtractor={(item) => item.id}
             horizontal={true}
             pagingEnabled={true}
             onScroll={handleOnScroll}
           />
          <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>{renderDotindicator()}</View>

          
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
  });
  export default ImageAutoSlide;