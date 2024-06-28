import React, { useRef, useState } from "react";
import {StyleSheet, View ,FlatList,Animated, useWindowDimensions} from 'react-native';
import Slides from "../../Slides";
import OnboardingItem from "./OnboardingItem";

export default function Onboarding () {
  const[currentIndex, setCurrentIndex]=useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemChanged =useRef(({viewableItem}) =>{
    setCurrentIndex(viewableItem[0].index)
  }).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current;
  const slidesRef=useRef(null);

  const {width: windowWidth} = useWindowDimensions();
    return (
        <View style={styles.container}>
          <FlatList
          data = {Slides}
          renderItem={({item})=> <OnboardingItem item={item}/>}
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
          keyExtractor={(item)=>item.id}
          onScroll={Animated.event([{nativeEvent:{contentOffset:{ x: scrollX }}}],{
            useNativeDriver:false,
          })}
          scrollEventThrottle={32}
          onViewableItemChanged={viewableItemChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
           />
          

          
        </View>
      );

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  