import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLOR} from '../styles/GlobalStyles';
import ratio from '../styles/ratio';

const {widthPixel} = ratio;

const Paginator_Dots = ({data, currentIndex}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {data.map((_, i) => {
        return (
          <View
            style={
              currentIndex == i ? [styles.dot] : [styles.dot, {opacity: 0.5}]
            }
            key={i}
          />
        );
      })}
    </View>
  );
};

export default Paginator_Dots;

const styles = StyleSheet.create({
  dot: {
    height: widthPixel(8),
    width: widthPixel(8),
    borderRadius: 8,
    backgroundColor: COLOR.green,
    marginHorizontal: 6,
  },
});
