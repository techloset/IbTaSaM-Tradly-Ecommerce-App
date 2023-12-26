import {StyleSheet, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import ratio from '../styles/ratio';
import BrowseHeader from '../(components)/BrowseHeader';
import ProductCard from '../(components)/ProductCard';
import BrowseScreenData from '../library/BrowseScreenData';

const {pixelSizeVertical} = ratio;

const BrowseScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
      <BrowseHeader />
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        <ProductCard data={BrowseScreenData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BrowseScreen;

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
