import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import ratio from '../styles/ratio';
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import CommonHeader from '../(components)/CommonHeader';
import GreenBtn from '../(components)/GreenBtn';
import React from 'react';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

import LocationIcon from '../assets/images/icons/currentLocation.svg';
import AddInput from '../(components)/AddInput';
import SCREENS from '../navigation/Screens';
const AddAddressScreen = ({navigation}) => {
  const inputFields = [
    {label: 'Name', placeholder: 'Tradly Team'},
    {label: 'Phone', placeholder: '+621234567890'},
    {label: 'Street address', placeholder: 'Kualalumpur Malaysia'},
    {label: 'City', placeholder: 'Kualalumpur'},
    {label: 'State', placeholder: 'Malaysia'},
    {label: 'Zip Code', placeholder: '75119'},
  ];

  const renderInputFields = () => {
    return inputFields.map((field, index) => (
      <View key={index}>
        <Text style={styles.inputLabel}>{field.label}</Text>
        <AddInput placeholder={field.placeholder} />
      </View>
    ));
  };
  return (
    <SafeAreaView style={styles.superContainer}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
      <CommonHeader title={'Add a new Address'} />
      <View style={styles.container1}>
        <LocationIcon />
        <Text style={styles.locationText}>Use current location</Text>
      </View>
      <View style={styles.container2}>{renderInputFields()}</View>
      <View style={styles.bottomBar}>
        <GreenBtn
          text={'Save'}
          handleFunc={() => navigation.navigate(SCREENS.CHECKOUT)}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddAddressScreen;

const styles = StyleSheet.create({
  superContainer: {
    flex: 1,
    backgroundColor: COLOR.bg,
  },
  inputLabel: {
    fontFamily: FONT_FAMILY.montserratRegular,
    fontSize: fontPixel(14),
    color: COLOR.neutral,
    lineHeight: fontPixel(16),
    opacity: 0.5,
  },
  container2: {
    paddingHorizontal: pixelSizeVertical(23.5),
    marginTop: pixelSizeVertical(36),
    gap: pixelSizeVertical(16),
  },
  locationText: {
    fontFamily: FONT_FAMILY.montserratMedium,
    fontSize: fontPixel(16),
    color: COLOR.blue,
    lineHeight: fontPixel(24),
  },
  container1: {
    height: widthPixel(65),
    width: '100%',
    backgroundColor: COLOR.white,
    marginBottom: pixelSizeVertical(9),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: pixelSizeVertical(8),
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
