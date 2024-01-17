import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLOR, FONT_FAMILY} from '../../styles/GlobalStyles';
import ratio from '../../styles/ratio';
import WhiteBtn from '../../(components)/WhiteBtn';
import BackIcon from '../../assets/images/icons/backIcon.svg';
import OTPTextView from 'react-native-otp-textinput';
import SCREENS from '../../navigation/Screens';

const {fontPixel, pixelSizeVertical} = ratio;

const OtpVerficationScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.header}>
        <BackIcon width={20} />
      </TouchableOpacity>
      <View style={styles.containerCenter}>
        <Text style={styles.headingText}>Phone Verification</Text>
        <Text style={styles.infoText}>Enter your OTP code here </Text>
        <View style={styles.inputsContainer}>
          <OTPTextView
            inputCount={6}
            offTintColor={COLOR.white}
            textInputStyle={styles.inputsText}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.bottomText}>Didn’t you received any code? </Text>
        </TouchableOpacity>
        <Text
          style={[
            styles.bottomText,
            {
              marginBottom: pixelSizeVertical(57),
              marginTop: pixelSizeVertical(16),
            },
          ]}>
          Resent new code
        </Text>
        <WhiteBtn
          text={'Verify'}
          handleFunc={() => navigation.navigate(SCREENS.BOTTOM_NAVIGATOR)}
        />
      </View>
    </SafeAreaView>
  );
};
export default OtpVerficationScreen;

const styles = StyleSheet.create({
  bottomText: {
    color: COLOR.white,
    fontSize: fontPixel(18),
    fontFamily: FONT_FAMILY.montserratRegular,
    letterSpacing: fontPixel(-0.434),
  },
  inputsText: {
    color: COLOR.white,
    fontSize: fontPixel(26),
    fontFamily: FONT_FAMILY.montserratBold,
    letterSpacing: fontPixel(-0.627),
  },
  inputsContainer: {
    marginBottom: pixelSizeVertical(75),
    gap: pixelSizeVertical(16),
    marginTop: pixelSizeVertical(64),
  },
  infoText: {
    color: COLOR.white,
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.montserratRegular,
    letterSpacing: fontPixel(-0.386),
    marginBottom: pixelSizeVertical(40),
    width: pixelSizeVertical(309),
    textAlign: 'center',
  },
  headingText: {
    color: COLOR.white,
    fontSize: fontPixel(24),
    fontFamily: FONT_FAMILY.montserratMedium,
    letterSpacing: fontPixel(-0.579),
    marginBottom: pixelSizeVertical(25),
  },
  containerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(135),
  },
  header: {
    paddingHorizontal: pixelSizeVertical(16),
    marginTop: pixelSizeVertical(50),
  },
  container: {
    backgroundColor: COLOR.green,
    flex: 1,
  },
});
