import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Onboarding from './assets/components/Onboarding';
import ProductListingItem from './assets/components/ProductListingItem';
import Contact from './assets/components/NewFile';
import ImageAutoSlide from './assets/components/ImageAutoSlide';

export default function App() {
  return (
    <SafeAreaView>
     <ImageAutoSlide/>
    </SafeAreaView>
    // <View style={styles.container}>
    //   {/* <Onboarding/> */}
    //   {/* <ProductListingItem/> */}
      
    // </View>
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
