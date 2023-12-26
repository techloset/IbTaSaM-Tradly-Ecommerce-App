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
import Input from '../../(components)/Input';
import WhiteBtn from '../../(components)/WhiteBtn';
import SCREENS from '../../library/SCREENS';

const {fontPixel, pixelSizeVertical} = ratio;

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>Welcome to tradly</Text>
      <Text style={styles.infoText}>Login to your account</Text>
      <View style={styles.inputsContainer}>
        <Input placeholder={'Email/Mobile Number'} />
        <Input placeholder={'Password'} />
      </View>
      <WhiteBtn
        text={'Login'}
        handleFunc={() => navigation.navigate(SCREENS.BOTTOM_NAVIGATOR)}
      />
      <Text style={styles.bottomText}>Forgot your password?</Text>
      <TouchableOpacity
      onPress={() => navigation.navigate(SCREENS.SIGN_UP)}
      >
        <Text style={styles.bottomText}>
          Don’t have an account?{' '}
          <Text style={{fontFamily: FONT_FAMILY.montserratSemiBold}}>
            Sign up
          </Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.green,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: {
    color: COLOR.white,
    fontSize: fontPixel(18),
    fontFamily: FONT_FAMILY.montserratRegular,
    letterSpacing: fontPixel(-0.434),
    marginTop: pixelSizeVertical(40),
  },
  inputsContainer: {
    marginBottom: pixelSizeVertical(35),
    gap: pixelSizeVertical(16),
  },
  infoText: {
    color: COLOR.white,
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.montserratRegular,
    letterSpacing: fontPixel(-0.386),
    marginBottom: pixelSizeVertical(40),
  },
  headingText: {
    color: COLOR.white,
    fontSize: fontPixel(24),
    fontFamily: FONT_FAMILY.montserratMedium,
    letterSpacing: fontPixel(-0.579),
    marginBottom: pixelSizeVertical(60),
  },
});
