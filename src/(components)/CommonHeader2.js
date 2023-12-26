import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ratio from '../styles/ratio';
import {COLOR, TEXT} from '../styles/GlobalStyles';
import {useNavigation} from '@react-navigation/native';
import HeartIcon from '../assets/images/icons/heart.svg';
import CartIcon from '../assets/images/icons/cart.svg';
import SCREENS from '../library/SCREENS';
const {pixelSizeVertical} = ratio;
const CommonHeader2 = ({title}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTextContainer}>
        <View>
          <Text style={TEXT.heading}>{title}</Text>
        </View>
        <View style={styles.headerIconContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate(SCREENS.WISHLIST)}>
            <HeartIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(SCREENS.CART)}>
            <CartIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CommonHeader2;

const styles = StyleSheet.create({
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
    paddingTop: pixelSizeVertical(50),
    paddingBottom: pixelSizeVertical(33),
  },
});
