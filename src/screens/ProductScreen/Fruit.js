import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ProductHeader from '../../(components)/ProductHeader';
import ratio from '../../styles/ratio';
import {COLOR, FONT_FAMILY} from '../../styles/GlobalStyles';
import {Fruits} from '../../library/ProductsData';

const {pixelSizeVertical, fontPixel, pixelSizeHorizontal} = ratio;

const Fruit = () => {
  return (
    <ScrollView>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
      <ProductHeader Protitle={'Fruit'} />
      <View style={styles.tradlyStoreProduct}>
        {Fruits?.map((item, index) => {
          return (
            <View key={index} style={styles.container}>
              <Image
                style={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}
                source={item.source}
              />
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.innerContainer}>
                <View style={styles.AvatarConatiner}>
                  <Image style={styles.avatar} source={item.avatar} />
                  <Text style={styles.subtitle}>{item.subtitle}</Text>
                </View>
                <View style={styles.priceConatiner}>
                  <Text style={styles.lastPrice1}>{item.lastPrice}</Text>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Fruit;

const styles = StyleSheet.create({
  tradlyStoreProduct: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: pixelSizeVertical(24),
  },
  container: {
    borderWidth: 1,
    borderColor: COLOR.dimGray,
    borderRadius: 10,
    margin: pixelSizeVertical(10),
  },
  title: {
    color: COLOR.grayComb,
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.montserratMedium,
    marginLeft: pixelSizeVertical(12),
    marginTop: pixelSizeVertical(11),
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: pixelSizeVertical(16),
    marginBottom: pixelSizeVertical(11),
    alignItems: 'center',
  },
  AvatarConatiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    marginLeft: pixelSizeVertical(12),
    marginRight: pixelSizeVertical(4),
  },
  subtitle: {
    color: COLOR.neutral,
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.montserratMedium,
  },
  lastPrice1: {fontSize: fontPixel(12), textDecorationLine: 'line-through'},
  price: {
    marginRight: pixelSizeVertical(6),
    marginLeft: pixelSizeVertical(6),
    color: COLOR.green,
  },
  priceConatiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
