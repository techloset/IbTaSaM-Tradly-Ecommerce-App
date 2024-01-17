import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  TextInput,
} from 'react-native';
import ratio from '../styles/ratio';
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import GreenBtn from '../(components)/GreenBtn';
import React from 'react';
import SCREENS from '../library/SCREENS';
import CommonHeader from '../(components)/CommonHeader';
import AddInput from '../(components)/AddInput';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const AddCardScreen = ({navigation}) => {
  const cardDetails = [
    { label: 'Card Number', input: <AddInput placeholder={'5627 2158 9854 8869'} /> },
    { label: 'Name', input: <AddInput placeholder={'Tradly'} /> },
  ];
  
  const renderCardDetails = () => {
    return cardDetails.map((detail, index) => (
      <View key={index}>
        <Text style={styles.inputLabel}>{detail.label}</Text>
        {detail.input}
      </View>
    ));
  };
  
  const addressDetails = [
    {
      label: 'Street address',
      input: (
        <TextInput
          style={[
            styles.input,
            {
              width: widthPixel(197),
            },
          ]}
          placeholderTextColor={'#333A42'}
          placeholder={'12/08'}
        />
      ),
    },
    {
      label: 'City',
      input: (
        <TextInput
          style={[
            styles.input,
            {
              width: widthPixel(83),
            },
          ]}
          placeholderTextColor={'#333A42'}
          placeholder={'***'}
        />
      ),
    },
  ];
  
  const renderAddressDetails = () => {
    return addressDetails.map((detail, index) => (
      <View key={index}>
        <Text style={styles.inputLabel}>{detail.label}</Text>
        {detail.input}
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
      <CommonHeader title={'Add Card'} />
      <View style={styles.container_1}>
        <Image
          style={styles.cardImg}
          source={require('../assets/images/mastercard.png')}
        />
      </View>
      <View style={styles.container_2}>
      {renderCardDetails()}       
        <View style={styles.inputsRow}>
        {renderAddressDetails()}
        </View>
      </View>
      <View style={styles.bottom_Bar}>
        <GreenBtn
          text={'Add Credit Card'}
          handleFunc={() => navigation.navigate(SCREENS.PAYMENT_FINAL)}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddCardScreen;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: COLOR.input_clr,
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.montserratMedium,
    lineHeight: fontPixel(24),
    alignSelf: 'center',
  },
  inputsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputLabel: {
    fontFamily: FONT_FAMILY.montserratRegular,
    fontSize: fontPixel(14),
    color: COLOR.neutral,
    lineHeight: fontPixel(14),
    opacity: 0.5,
  },
  container_2: {
    paddingHorizontal: pixelSizeVertical(23.5),
    marginTop: pixelSizeVertical(20),
    gap: pixelSizeVertical(25),
  },
  cardImg: {
    width: widthPixel(309),
    height: widthPixel(183.031),
  },
  container_1: {
    height: widthPixel(220),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: pixelSizeVertical(7),
    backgroundColor: COLOR.bg,
  },
  container: {
    backgroundColor: COLOR.white,
    flex: 1,
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
