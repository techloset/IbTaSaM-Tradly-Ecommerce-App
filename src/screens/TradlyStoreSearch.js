import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import ratio from '../styles/ratio';
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import React from 'react';
import ProductCard from '../(components)/ProductCard';
import BrowseScreenData from '../library/BrowseScreenData';

import BackIcon from '../assets/images/icons/backIcon.svg';
import SearchIcon from '../assets/images/icons/browseWhite.svg';

const {fontPixel, pixelSizeVertical, pixelSizeHorizontal} = ratio;
import SCREENS from '../library/SCREENS';
import FiltersRow from '../(components)/FiltersRow';

const TradlyStoreSearch = ({navigation}) => {
  return (
    <SafeAreaView style={styles.super_Container}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
      <View style={styles.headerContainer}>
        <View style={styles.headerTextContainer}>
          <View style={styles.headerGrou}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackIcon width={24} />
            </TouchableOpacity>
            <Text style={styles.headingText}>Fruit</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate(SCREENS.TRADLYSTORESEARCH)}>
            <SearchIcon width={24} />
          </TouchableOpacity>
        </View>
        <FiltersRow />
      </View>
      <ScrollView contentContainerStyle={styles.products_Cards}>
        <ProductCard data={BrowseScreenData.slice(0, 2)} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default TradlyStoreSearch;

const styles = StyleSheet.create({
  super_Container: {
    flex: 1,
    backgroundColor: COLOR.bg,
  },
  headerContainer: {
    backgroundColor: COLOR.green,
    paddingTop: pixelSizeVertical(40),
  },
  headerGrou: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: pixelSizeVertical(32),
    borderBottomWidth: 1,
    borderBottomColor: COLOR.white,
    paddingBottom: 12,
    marginHorizontal: pixelSizeHorizontal(15),
  },
  headingText: {
    fontFamily: FONT_FAMILY.montserratBold,
    fontSize: fontPixel(17),
    color: COLOR.white,
    marginLeft: pixelSizeVertical(15),
  },
  products_Cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: pixelSizeVertical(10),
    justifyContent: 'center',
    marginTop: pixelSizeVertical(25),
    paddingBottom: pixelSizeVertical(600),
  },
});
