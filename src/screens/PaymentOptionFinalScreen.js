import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import ratio from '../styles/ratio';
import {COLOR, FONT_FAMILY, TEXT} from '../styles/GlobalStyles';
import GreenBtn from '../(components)/GreenBtn';
import React, {useState} from 'react';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

import CardRadio from '../(components)/CardRadio';
import PaginatorDots from '../(components)/PaginatorDots';
import SCREENS from '../navigation/Screens';
import CommonHeader from '../(components)/CommonHeader';
import SeeAllBtnGreen from '../(components)/SeeAllBtnGreen';

const PaymentOptionFinalScreen = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const addCard = [
    {img: require('../assets/images/mastercard.png')},
    {img: require('../assets/images/addCard.png')},
    {img: require('../assets/images/addCard.png')},
  ];

  const handleMomentumScrollEnd = event => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / ratio.SCREEN_WIDTH);
    setCurrentIndex(index);
  };
  return (
    <SafeAreaView style={styles.superContainer}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
      <CommonHeader title={'Payment Option'} />
      <View style={styles.container1}>
        <FlatList
          data={addCard}
          renderItem={({item, i}) => (
            <TouchableOpacity
              key={i}
              onPress={() => navigation.navigate(SCREENS.ADD_CARD)}
              style={styles.cardImgContainer}>
              <Image style={styles.cardImg} source={item.img} />
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleMomentumScrollEnd}
        />
        <PaginatorDots data={addCard} currentIndex={currentIndex} />
      </View>
      <ScrollView>
        <CardRadio />
        <View style={styles.addressContainer}>
          <View style={styles.address}>
            <Text style={TEXT.cardText}>Deliver to Tradly Team, 75119</Text>
            <Text style={[TEXT.cardText, {opacity: 0.7}]}>
              Kualalumpur, Malaysia
            </Text>
          </View>
          <SeeAllBtnGreen text={'Change'} />
        </View>
        <View style={styles.container3}>
          <Text style={TEXT.title}>Price Details</Text>
          <View style={styles.options}>
            <View style={styles.optionLeft}>
              <Text style={styles.superContainer_Text}>Price ( 1 item)</Text>
              <Text style={styles.container3Text}>Delivery Fee</Text>
            </View>
            <View style={styles.optionRight}>
              <Text style={styles.container3Text}>Price ( 1 item)</Text>
              <Text style={styles.container3Text}>Delivery Fee</Text>
            </View>
          </View>
          <View style={styles.container3Bottom}>
            <Text style={TEXT.title}>Total Amount</Text>
            <Text style={TEXT.title}>$ 25</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <GreenBtn
          text={'Checkout'}
          handleFunc={() => navigation.navigate(SCREENS.CHECKOUT_SUCCESS)}
        />
      </View>
    </SafeAreaView>
  );
};

export default PaymentOptionFinalScreen;

const styles = StyleSheet.create({
  superContainer: {
    flex: 1,
    backgroundColor: COLOR.bg,
  },
  container3Bottom: {
    flexDirection: 'row',
    borderTopColor: 'rgba(0, 0, 0, 0.10)',
    borderTopWidth: widthPixel(1),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container3Text: {
    fontFamily: FONT_FAMILY.montserratMedium,
    fontSize: fontPixel(14),
    color: COLOR.neutral,
    lineHeight: fontPixel(20),
    letterSpacing: fontPixel(-0.165),
  },
  optionRight: {
    width: '50%',
    gap: pixelSizeVertical(24),
  },
  optionLeft: {
    width: '50%',
    gap: pixelSizeVertical(24),
  },
  options: {
    flexDirection: 'row',
    marginBottom: pixelSizeVertical(24),
  },
  container3: {
    height: widthPixel(183),
    width: '100%',
    backgroundColor: COLOR.white,
    paddingHorizontal: pixelSizeVertical(16),
    marginBottom: pixelSizeVertical(90),
  },
  addressContainer: {
    marginTop: pixelSizeVertical(13),
    alignItems: 'center',
    flexDirection: 'row',
    gap: pixelSizeVertical(49),
    height: widthPixel(52),
    width: '100%',
    backgroundColor: COLOR.white,
    marginBottom: pixelSizeVertical(9),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImg: {
    height: widthPixel(146),
    width: widthPixel(246),
  },
  cardImgContainer: {
    paddingHorizontal: pixelSizeVertical(10),
  },
  container1: {
    height: widthPixel(241),
    width: '100%',
    backgroundColor: COLOR.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(16),
    marginBottom: pixelSizeVertical(7),
    paddingVertical: pixelSizeVertical(26),
  },
  bottomBar: {
    height: widthPixel(80),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.white,
    position: 'absolute',
    bottom: pixelSizeVertical(0),
    elevation: 30,
  },
});
