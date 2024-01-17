import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import ratio from '../styles/ratio';
import {COLOR, FONT_FAMILY, TEXT} from '../styles/GlobalStyles';
import React from 'react';
import CommonHeader2 from '../(components)/CommonHeader2';
import SmallBtn from '../(components)/SmallBtn';
import StoreBtn from '../(components)/StoreBtn';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../navigation/Screens';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const MyStoreScreen = () => {
  const navigation = useNavigation();
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
      <View style={styles.container1}>
        <Text style={[TEXT.title, styles.text]}>You Dont Have a Product</Text>
        <StoreBtn
          text={'Add Product'}
          color={COLOR.green}
          handleFunc={() =>
            navigation.navigate(SCREENS.ADD_PRODUCT, {
              data: 'Add Product',
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default MyStoreScreen;

const styles = StyleSheet.create({
  superContainer: {
    flex: 1,
    backgroundColor: COLOR.bg,
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
