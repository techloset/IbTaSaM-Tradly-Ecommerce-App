import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import ratio from '../styles/ratio';
import CardRadioData from '../library/CardRadioData';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
const CardRadio = () => {
  const [value, setValue] = useState(0);
  const data = CardRadioData;

  return (
    <View style={styles.container}>
      {data?.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => setValue(index)}>
            <View style={styles.itemContainer}>
              {value == index ? (
                <View style={styles.radioFocus}>
                  <View style={styles.radioInner} />
                </View>
              ) : (
                <View style={styles.radio} />
              )}
              <Text style={styles.itemText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CardRadio;

const styles = StyleSheet.create({
  radioInner: {
    height: widthPixel(10),
    width: widthPixel(10),
    borderRadius: widthPixel(10),
    backgroundColor: COLOR.green,
  },
  radioFocus: {
    height: widthPixel(18),
    width: widthPixel(18),
    borderRadius: widthPixel(18),
    justifyContent: 'center',
    alignItems: 'center',
    padding: pixelSizeVertical(4),
    borderColor: COLOR.green,
    borderWidth: 1,
  },
  radio: {
    height: widthPixel(18),
    width: widthPixel(18),
    borderRadius: widthPixel(18),
    justifyContent: 'center',
    alignItems: 'center',
    padding: pixelSizeVertical(4),
    borderColor: COLOR.border_clr,
    borderWidth: 1,
  },
  itemText: {
    fontFamily: FONT_FAMILY.montserratSemiBold,
    fontSize: fontPixel(14),
    color: COLOR.neutral,
    lineHeight: fontPixel(21),
  },
  itemContainer: {
    borderTopColor: COLOR.border_clr,
    borderTopWidth: 1,
    height: widthPixel(48),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: pixelSizeVertical(16),
    gap: pixelSizeVertical(8),
  },
  container: {
    width: '100%',
    height: widthPixel(193),
    backgroundColor: COLOR.white,
  },
});
