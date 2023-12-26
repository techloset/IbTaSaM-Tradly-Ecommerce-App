import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import ratio from '../styles/ratio';
import {COLOR, FONT_FAMILY, TEXT} from '../styles/GlobalStyles';
import React from 'react';

import SmallBtn from '../(components)/SmallBtn';
import CommonHeader2 from '../(components)/CommonHeader2';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const btnData = [
  {
    text: 'Delivered',
    dis: '50% ',
    dis1: 'Off',
  },
  {
    text: 'Order Placed',
  },
  {
    text: 'Payment Confirmed',
  },
  {
    text: 'Processed',
  },
];

const OrderHistoryScreen = () => {
  return (
    <SafeAreaView style={styles.super_Container}>
      <CommonHeader2 title={'Order History'} />
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={TEXT.title}>Transactions</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>Januari 2020</Text>
          </View>
        </View>
        <View style={styles.container_1}>
          {btnData.map((item, i) => {
            return (
              <View key={i} style={styles.option_Container}>
                <View style={styles.left}>
                  <Image
                    style={styles.img}
                    source={require('../assets/images/coke_2.png')}
                  />
                  <View style={styles.leftText_Container}>
                    <Text style={styles.title}>Coca Cola</Text>
                    <View style={styles.priceContainer}>
                      <Text style={styles.price}>$25</Text>
                      <View style={styles.dis_Container}>
                        <Text
                          style={[
                            styles.dis,
                            {textDecorationLine: 'line-through'},
                          ]}>
                          {item.dis}
                        </Text>
                        <Text style={styles.dis}>{item.dis1}</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.right}>
                  {i == 0 ? (
                    <SmallBtn
                      text={item.text}
                      bgColor={COLOR.green}
                      color={COLOR.white}
                    />
                  ) : (
                    <SmallBtn
                      text={item.text}
                      btnColor={COLOR.white}
                      color={COLOR.green}
                    />
                  )}
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderHistoryScreen;

const styles = StyleSheet.create({
  super_Container: {
    flex: 1,
    backgroundColor: COLOR.bg,
  },
  dis: {
    fontFamily: FONT_FAMILY.montserratMedium,
    fontSize: fontPixel(12),
    color: COLOR.neutral,
    letterSpacing: fontPixel(0.4),
  },
  dis_Container: {
    flexDirection: 'row',
    opacity: 0.7,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: pixelSizeVertical(8),
  },
  leftText_Container: {
    justifyContent: 'center',
  },
  price: {
    fontFamily: FONT_FAMILY.montserratBold,
    fontSize: fontPixel(16),
    color: COLOR.green,
    letterSpacing: fontPixel(0.4),
  },
  title: {
    fontFamily: FONT_FAMILY.montserratMedium,
    fontSize: fontPixel(14),
    color: COLOR.black,
    letterSpacing: fontPixel(0.35),
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: pixelSizeVertical(22),
  },
  img: {
    width: pixelSizeVertical(37),
    height: pixelSizeVertical(37),
    borderRadius: pixelSizeVertical(5),
  },
  option_Container: {
    width: '100%',
    height: pixelSizeVertical(68),
    backgroundColor: COLOR.white,
    borderRadius: pixelSizeVertical(8),
    alignItems: 'center',
    flexDirection: 'row',
    paddingStart: pixelSizeVertical(16),
    paddingEnd: pixelSizeVertical(10),
    justifyContent: 'space-between',
  },
  container_1: {
    marginTop: pixelSizeVertical(18),
    gap: pixelSizeVertical(6),
  },
  dateText: {
    fontFamily: FONT_FAMILY.montserratBold,
    fontSize: fontPixel(13),
    color: COLOR.green,
    letterSpacing: fontPixel(0.111),
  },
  dateContainer: {
    width: widthPixel(107),
    height: widthPixel(26),
    borderRadius: widthPixel(6),
    backgroundColor: COLOR.green_1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingContainer: {
    flexDirection: 'row',
    paddingHorizontal: pixelSizeVertical(9),
    gap: pixelSizeVertical(7),
    alignItems: 'center',
  },
  container: {
    paddingTop: pixelSizeVertical(30),
  },
});
