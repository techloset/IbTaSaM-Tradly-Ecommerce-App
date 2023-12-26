import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ratio from '../styles/ratio';
import {COLOR, TEXT} from '../styles/GlobalStyles';

import BackIcon from '../assets/images/icons/backIcon.svg';
import {useNavigation} from '@react-navigation/native';

const {pixelSizeVertical} = ratio;

const CommonHeader = ({title}) => {
    const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTextContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon width={24} />
        </TouchableOpacity>
        <Text style={[TEXT.heading, {textAlign: 'center'}]}>{title}</Text>
        <View />
      </View>
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  headerTextContainer: {
    paddingHorizontal: pixelSizeVertical(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: pixelSizeVertical(28),
  },
  headerContainer: {
    backgroundColor: COLOR.green,
    paddingTop: pixelSizeVertical(40),
  },
});
