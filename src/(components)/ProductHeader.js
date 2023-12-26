import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import CommonHeader from './CommonHeader';
import FiltersRow from './FiltersRow';
import {COLOR} from '../styles/GlobalStyles';

const ProductHeader = ({Protitle}) => {
  return (
    <ScrollView style={styles.headerContainer}>
      <CommonHeader title={Protitle} />
      <FiltersRow />
    </ScrollView>
  );
};
export default ProductHeader;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLOR.green,
  },
});
