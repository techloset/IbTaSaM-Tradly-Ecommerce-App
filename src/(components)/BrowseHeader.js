import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ratio from '../styles/ratio';
import {COLOR, TEXT} from '../styles/GlobalStyles';
import FiltersRow from './FiltersRow';

import HeartIcon from '../assets/images/icons/heart.svg';
import CartIcon from '../assets/images/icons/cart.svg';
import SearchInput from './SearchInput';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../navigation/Screens';

const {pixelSizeVertical} = ratio;

const BrowseHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTextContainer}>
        <Text style={TEXT.heading}>Browse</Text>
        <View style={styles.headerIconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate(SCREENS.HOME)}>
            <HeartIcon />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(SCREENS.CART)}
            style={styles.cartIcon}>
            <CartIcon />
            <View style={styles.ellipse} />
          </TouchableOpacity>
        </View>
      </View>
      <SearchInput />
      <FiltersRow />
    </View>
  );
};

export default BrowseHeader;

const styles = StyleSheet.create({
  ellipse: {
    position: 'absolute',
    width: pixelSizeVertical(14),
    height: pixelSizeVertical(14),
    borderRadius: pixelSizeVertical(14),
    backgroundColor: '#FF7272',
    right: pixelSizeVertical(-7),
    top: pixelSizeVertical(-3),
  },
  cartIcon: {
    position: 'relative',
  },
  headerIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: pixelSizeVertical(18),
  },
  headerTextContainer: {
    paddingHorizontal: pixelSizeVertical(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainer: {
    backgroundColor: COLOR.green,
    paddingTop: pixelSizeVertical(40),
  },
});
