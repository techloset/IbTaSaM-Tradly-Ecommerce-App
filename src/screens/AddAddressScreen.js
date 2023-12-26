import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import ratio from '../styles/ratio';
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import CommonHeader from '../(components)/CommonHeader';
import GreenBtn from '../(components)/GreenBtn';
import React from 'react';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

import LocationIcon from '../assets/images/icons/currentLocation.svg';
import AddInput from '../(components)/AddInput';
import SCREENS from '../library/SCREENS';

const AddAddressScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.super_Container}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
      <CommonHeader title={'Add a new Address'} />
      <View style={styles.container_1}>
        <LocationIcon />
        <Text style={styles.locationText}>Use current location</Text>
      </View>
      {/* inputs */}
      <View style={styles.container_2}>
        <View>
          <Text style={styles.inputLabel}>Name</Text>
          <AddInput placeholder={'Tradly Team'} />
        </View>
        <View>
          <Text style={styles.inputLabel}>Phone</Text>
          <AddInput placeholder={'+621234567890'} />
        </View>
        <View>
          <Text style={styles.inputLabel}>Street address</Text>
          <AddInput placeholder={'Kualalumpur Malaysia'} />
        </View>
        <View>
          <Text style={styles.inputLabel}>City</Text>
          <AddInput placeholder={'Kualalumpur'} />
        </View>
        <View>
          <Text style={styles.inputLabel}>State</Text>
          <AddInput placeholder={'Malaysia'} />
        </View>
        <View>
          <Text style={styles.inputLabel}>Zip Code</Text>
          <AddInput placeholder={'75119'} />
        </View>
      </View>
      <View style={styles.bottom_Bar}>
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
  super_Container: {
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
  container_2: {
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
  container_1: {
    height: widthPixel(65),
    width: '100%',
    backgroundColor: COLOR.white,
    marginBottom: pixelSizeVertical(9),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: pixelSizeVertical(8),
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
