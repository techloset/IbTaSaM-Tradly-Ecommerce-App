import {StyleSheet, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import ratio from '../styles/ratio';
import CommonHeader from '../(components)/CommonHeader';
import WishlistProducts from '../library/WishlistProducts';
import ProductCard from '../(components)/ProductCard';

const {pixelSizeVertical} = ratio;

const WishlistScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
      <CommonHeader title={'Wishlist'} />
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        <ProductCard data={WishlistProducts.slice(0, 4)} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: pixelSizeVertical(22),
    justifyContent: 'center',
    gap: pixelSizeVertical(10),
    paddingTop: pixelSizeVertical(30),
    paddingBottom: pixelSizeVertical(230),
  },
});
