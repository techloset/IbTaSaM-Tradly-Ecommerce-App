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
import CommonHeader from '../(components)/CommonHeader';
import GreenBtn from '../(components)/GreenBtn';
import React, {useState} from 'react';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

import CardRadio from '../(components)/CardRadio';
import SeeAllBtnGreen from '../(components)/SeeAllBtnGreen';
import Paginator_Dots from '../(components)/Paginator_Dots';
import SCREENS from '../library/SCREENS';

const PaymentOptionScreen = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const addCard = [
    {img: require('../assets/images/addCard.png')},
    {img: require('../assets/images/addCard.png')},
    {img: require('../assets/images/addCard.png')},
  ];

  const handleMomentumScrollEnd = event => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / ratio.SCREEN_WIDTH);
    setCurrentIndex(index);
  };
  return (
    <>
      <SafeAreaView style={styles.super_Container}>
        <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
        <CommonHeader title={'Payment Option'} />
        <View style={styles.container_1}>
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
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={handleMomentumScrollEnd}
          />
          <Paginator_Dots data={addCard} currentIndex={currentIndex} />
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
          <View style={styles.container_3}>
            <Text style={TEXT.title}>Price Details</Text>
            <View style={styles.options}>
              <View style={styles.optionLeft}>
                <Text style={styles.container_3_Text}>Price ( 1 item)</Text>
                <Text style={styles.container_3_Text}>Delivery Fee</Text>
              </View>
              <View style={styles.optionRight}>
                <Text style={styles.container_3_Text}>Price ( 1 item)</Text>
                <Text style={styles.container_3_Text}>Delivery Fee</Text>
              </View>
            </View>
            <View style={styles.container_3_Bottom}>
              <Text style={TEXT.title}>Total Amount</Text>
              <Text style={TEXT.title}>$ 25</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.bottom_Bar}>
          <View style={{opacity: 0.4}}>
            <GreenBtn text={'Checkout'} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default PaymentOptionScreen;

const styles = StyleSheet.create({
  super_Container: {
    flex: 1,
    backgroundColor: COLOR.bg,
  },
  container_3_Bottom: {
    flexDirection: 'row',
    borderTopColor: 'rgba(0, 0, 0, 0.10)',
    borderTopWidth: widthPixel(1),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container_3_Text: {
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
  container_3: {
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
    paddingHorizontal: pixelSizeVertical(68),
  },
  container_1: {
    height: widthPixel(241),
    width: '100%',
    backgroundColor: COLOR.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(16),
    marginBottom: pixelSizeVertical(7),
    paddingVertical: pixelSizeVertical(26),
  },
  bottom_Bar: {
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
