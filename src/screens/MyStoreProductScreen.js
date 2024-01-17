import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ratio from '../styles/ratio';
import {COLOR, FONT_FAMILY, TEXT} from '../styles/GlobalStyles';
import React from 'react';
import CommonHeader2 from '../(components)/CommonHeader2';
import SmallBtn from '../(components)/SmallBtn';
import {useNavigation} from '@react-navigation/native';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

import SearchInput from '../(components)/SearchInput';
import StoreProductCard from '../(components)/StoreProductCard';
import AddIcon from '../assets/images/icons/addIcon.svg';
import SCREENS from '../navigation/Screens';

const MyStoreProductScreen = () => {
  const navigation = useNavigation();
  const cardData = [
    {
      title: 'Brocolli',
      img: require('../assets/images/veggies/brocolli.png'),
    },
  ];
  return (
    <SafeAreaView style={styles.superContainer}>
      <CommonHeader2 title={'My Store'} />
      <View style={styles.container}>
        <View style={styles.alphaLogo}>
          <Text style={styles.alphaLogoText}>T</Text>
        </View>
        <Text style={styles.heading}>Tradly Store</Text>
        <View style={styles.smallBtns}>
          <SmallBtn
            btnColor={COLOR.white}
            color={COLOR.green}
            text={'Edit Store'}
          />
          <SmallBtn
            bgColor={COLOR.green}
            color={COLOR.white}
            text={'View Store'}
          />
        </View>
        <TouchableOpacity style={styles.removeContainer}>
          <Text style={styles.faded}>Remove Store</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.superContainer}>
        <View style={styles.container2}>
          <SearchInput />
          <Text style={[TEXT.title, styles.text1]}>
            You Dont Have a Product
          </Text>
          <ScrollView contentContainerStyle={styles.container1}>
            <StoreProductCard data={cardData} />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(SCREENS.ADD_PRODUCT, {
                  data: 'Add Product',
                })
              }
              style={styles.addProductContainer}>
              <AddIcon />
              <Text
                style={[
                  TEXT.heading_2,
                  {fontFamily: FONT_FAMILY.montserratMedium},
                ]}>
                Add Product
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default MyStoreProductScreen;

const styles = StyleSheet.create({
  superContainer: {
    flex: 1,
    backgroundColor: COLOR.bg,
  },
  addProductContainer: {
    width: widthPixel(160),
    height: widthPixel(200),
    borderRadius: widthPixel(10),
    borderColor: COLOR.neutral,
    borderWidth: widthPixel(1),
    overflow: 'hidden',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    gap: pixelSizeVertical(10),
  },
  container1: {
    flexDirection: 'row',
    gap: pixelSizeVertical(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    marginBottom: pixelSizeVertical(16),
    paddingStart: pixelSizeVertical(19),
  },
  container2: {
    paddingTop: pixelSizeVertical(9),
  },

  text: {
    marginBottom: pixelSizeVertical(37),
  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: pixelSizeVertical(59),
  },
  faded: {
    fontFamily: FONT_FAMILY.montserratSemiBold,
    fontSize: fontPixel(14),
    color: COLOR.neutral,
    opacity: 0.5,
  },
  removeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(12),
    paddingTop: pixelSizeVertical(9),
    borderTopColor: 'rgba(0, 0, 0, 0.10)',
    borderTopWidth: widthPixel(1),
    alignSelf: 'stretch',
    marginTop: pixelSizeVertical(27),
  },
  smallBtns: {
    flexDirection: 'row',
    gap: pixelSizeVertical(17),
  },
  heading: {
    fontFamily: FONT_FAMILY.montserratBold,
    fontSize: fontPixel(24),
    color: COLOR.neutral,
    marginTop: pixelSizeVertical(16),
    marginBottom: pixelSizeVertical(20),
  },
  text: {
    marginTop: pixelSizeVertical(28.11),
    marginBottom: pixelSizeVertical(37),
  },
  container: {
    alignItems: 'center',
    paddingTop: pixelSizeVertical(50),
    width: '100%',
    height: widthPixel(229),
    backgroundColor: COLOR.white,
  },
  alphaLogoText: {
    fontFamily: FONT_FAMILY.montserratBold,
    fontSize: fontPixel(40),
    color: COLOR.white,
    textTransform: 'uppercase',
  },
  alphaLogo: {
    width: widthPixel(60),
    height: widthPixel(60),
    backgroundColor: COLOR.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPixel(64),
    borderWidth: widthPixel(1.5),
    borderColor: COLOR.white,
    alignSelf: 'center',
    marginTop: pixelSizeVertical(-30),
  },
});
