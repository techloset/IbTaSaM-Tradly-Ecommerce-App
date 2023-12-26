import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import ratio from '../styles/ratio';
import {COLOR, TEXT} from '../styles/GlobalStyles';
import React from 'react';

import StoreMainIcon from '../assets/images/icons/storeMain.svg';
import CommonHeader2 from '../(components)/CommonHeader2';
import StoreBtn from '../(components)/StoreBtn';
import SCREENS from '../library/SCREENS';

const {pixelSizeVertical} = ratio;

const StoreScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.super_Container}>
      <CommonHeader2 title={'My Store'} />
      <View style={styles.container}>
        <StoreMainIcon width={pixelSizeVertical(152)} />
        <Text style={[TEXT.title, styles.text]}>You Dont Have a Store</Text>
        <StoreBtn
          text={'Create Store'}
          btnColor={COLOR.green}
          color={COLOR.white}
          handleFunc={() => navigation.navigate(SCREENS.CREATE_STORE)}
        />
      </View>
    </SafeAreaView>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  super_Container: {
    flex: 1,
    backgroundColor: COLOR.bg,
  },
  text: {
    marginTop: pixelSizeVertical(28.11),
    marginBottom: pixelSizeVertical(37),
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: pixelSizeVertical(57),
  },
});
