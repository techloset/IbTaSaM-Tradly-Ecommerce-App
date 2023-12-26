import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import ratio from '../styles/ratio';
const {widthPixel, fontPixel} = ratio;
const AddInput = ({placeholder}) => {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={'#333A42'}
      placeholder={placeholder}
    />
  );
};
export default AddInput;
const styles = StyleSheet.create({
  input: {
    width: widthPixel(335),
    borderBottomWidth: 1,
    borderColor: COLOR.input_clr,
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.montserratMedium,
    lineHeight: fontPixel(24),
    color: COLOR.black,
    alignSelf: 'center',
  },
});
