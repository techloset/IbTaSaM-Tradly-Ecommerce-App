import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import ratio from '../styles/ratio';
import {COLOR, FONT_FAMILY, TEXT} from '../styles/GlobalStyles';
import React from 'react';

import StoreMainIcon from '../assets/images/icons/storeMain.svg';
import CommonHeader from '../(components)/CommonHeader';
import GreenBtn from '../(components)/GreenBtn';
import OptionWithCross from '../(components)/OptionWithCross';
import ProductInput from '../(components)/ProductInput';
import CreateStoreInputFieldsData from '../library/CreateStoreInputFieldsData';
import SCREENS from '../library/SCREENS';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const CreateStoreScreen = ({navigation}) => {
  const inputsData = CreateStoreInputFieldsData;

  return (
    <SafeAreaView style={styles.super_Container}>
      <CommonHeader title={'My Store'} />
      <View style={styles.container}>
        <StoreMainIcon width={pixelSizeVertical(152)} />
        <Text style={[TEXT.cardText, styles.text]}>
          This information is used to set up your shop
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        {inputsData.map((item, index) => {
          return (
            <View key={index}>
              <Text style={styles.inputLabel}>{item.inputLabel}</Text>
              <ProductInput placeholder={item.placeholderText} />
            </View>
          );
        })}
        <Text style={styles.inputLabel}>Tagline</Text>
        <View style={styles.optionInput}>
          <OptionWithCross text={'Groceries'} />
        </View>
      </ScrollView>
      <View style={styles.bottom_Bar}>
        <GreenBtn
          text={'Create'}
          handleFunc={() =>
            navigation.navigate(SCREENS.MY_STORE, {data: false})
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateStoreScreen;

const styles = StyleSheet.create({
  super_Container: {
    flex: 1,
    backgroundColor: COLOR.bg,
  },
  optionInput: {
    width: widthPixel(335),
    borderBottomWidth: 1,
    borderColor: COLOR.input_clr,
    alignSelf: 'center',
  },
  inputLabel: {
    fontFamily: FONT_FAMILY.montserratRegular,
    fontSize: fontPixel(14),
    color: COLOR.neutral,
    lineHeight: fontPixel(16),
    opacity: 0.5,
  },
  scroll: {
    paddingHorizontal: pixelSizeVertical(20),
    backgroundColor: COLOR.white,
    paddingTop: pixelSizeVertical(15),
    paddingBottom: pixelSizeVertical(122),
    gap: pixelSizeVertical(19),
  },
  text: {
    width: pixelSizeVertical(240),
    textAlign: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: pixelSizeVertical(23),
    gap: pixelSizeVertical(25),
    paddingBottom: pixelSizeVertical(17),
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
