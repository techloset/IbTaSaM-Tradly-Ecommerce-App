import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import ratio from '../styles/ratio';
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
const OnBoardingItem = ({item}) => {
  return (
    <View styles={styles.container}>
      <View
        style={{
          width: widthPixel(375),
        }}>
        <Image style={styles.image} source={item.img} />
        <Text style={styles.titleText}>{item.title}</Text>
      </View>
    </View>
  );
};

export default OnBoardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    alignSelf: 'center',
    width: widthPixel(307),
    height: widthPixel(334),
    marginTop: pixelSizeVertical(190),
  },
  titleText: {
    color: COLOR.green,
    fontSize: fontPixel(20),
    letterSpacing: fontPixel(-0.482),
    lineHeight: fontPixel(30),
    width: widthPixel(260),
    marginTop: pixelSizeVertical(40),
    fontFamily: FONT_FAMILY.montserratMedium,
    textAlign: 'center',
    alignSelf: 'center',
  },
});
