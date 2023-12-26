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
import BackIcon from '../../assets/images/icons/backIcon.svg';
import SCREENS from '../../library/SCREENS';

const {fontPixel, pixelSizeVertical} = ratio;

const SignUpScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
        onPress={() => navigation.goBack()}
      style={styles.header}>
        <BackIcon width={20} />
      </TouchableOpacity>
      <View style={styles.containerCenter}>
        <Text style={styles.headingText}>Welcome to tradly</Text>
        <Text style={styles.infoText}>Signup to your account</Text>
        <View style={styles.inputsContainer}>
          <Input placeholder={'First Name'} />
          <Input placeholder={'Last Name'} />
          <Input placeholder={'Email/Mobile Number'} />
          <Input placeholder={'Password'} />
          <Input placeholder={'Re-enter Password'} />
        </View>
        <WhiteBtn
          text={'Create'}
          handleFunc={() => navigation.navigate(SCREENS.OTP)}
        />
        <TouchableOpacity onPress={() => navigation.navigate(SCREENS.LOGIN)}>
          <Text style={styles.bottomText}>
            Have an account?{' '}
            <Text style={{fontFamily: FONT_FAMILY.montserratSemiBold}}>
              Sign in
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
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
  containerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(80),
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
