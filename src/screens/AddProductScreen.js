import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import ratio from '../styles/ratio';
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import GreenBtn from '../(components)/GreenBtn';
import React from 'react';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
import ProductInput from '../(components)/ProductInput';

import AddIcon from '../assets/images/icons/addIconSmall.svg';
import CrossIcon from '../assets/images/icons/crossCircle.svg';
import PickIcon from '../assets/images/icons/pick.svg';
import OptionWithCross from '../(components)/OptionWithCross';
import SCREENS from '../navigation/Screens';
import CommonHeader from '../(components)/CommonHeader';

const AddProductScreen = ({navigation}) => {
  const productFields = [
    {label: 'Product Name', placeholder: 'Broccoli'},
    {label: 'Category Product', placeholder: 'Vegetables'},
  ];

  const renderProductFields = () => {
    return productFields?.map((field, index) => (
      <View key={index}>
        <Text style={styles.inputLabel}>{field.label}</Text>
        <ProductInput placeholder={field.placeholder} />
      </View>
    ));
  };

  const inputFields = [
    {
      label: 'Price',
      inputStyle: {
        width: widthPixel(121),
      },
      placeholder: '$ 30',
    },
    {
      label: 'Offer Price',
      inputStyle: {
        width: widthPixel(121),
      },
      placeholder: '$ 15',
    },
  ];

  const renderInputFields = () => {
    return inputFields?.map((field, index) => (
      <View key={index}>
        <Text style={styles.inputLabel}>{field.label}</Text>
        <TextInput
          style={[styles.input, field.inputStyle]}
          placeholderTextColor={'#333A42'}
          placeholder={field.placeholder}
        />
      </View>
    ));
  };

  const inputFields2 = [
    {
      label: 'Location Details',
      inputContainerStyle: styles.inputWithIconContainer,
      inputStyle: styles.inputWithicon,
      placeholder: 'Kualalumpur, Malaysia',
      iconComponent: <PickIcon />,
    },
    {
      label: 'Location Details',
      inputStyle: styles.textarea,
      placeholder:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus placerat sit fringilla at facilisis. Quam vivamus non orci elit platea id sed est.',
      isMultiline: true,
    },
  ];

  const renderInputFields2 = () => {
    return inputFields2?.map((field, index) => (
      <View key={index}>
        <Text style={styles.inputLabel}>{field.label}</Text>
        {field.iconComponent ? (
          <View style={field.inputContainerStyle}>
            <TextInput
              style={field.inputStyle}
              placeholderTextColor={'#4F4F4F'}
              placeholder={field.placeholder}
            />
            {field.iconComponent}
          </View>
        ) : (
          <TextInput
            style={field.inputStyle}
            placeholderTextColor={'#4F4F4F'}
            multiline={field.isMultiline}
            placeholder={field.placeholder}
          />
        )}
      </View>
    ));
  };
  const productDetails = [
    {label: 'Condition', input: <ProductInput placeholder={'Organic'} />},
    {label: 'Price Type', input: <ProductInput placeholder={'Fixed'} />},
    {
      label: 'Additional Details',
      input: (
        <View style={styles.optionInput}>
          <OptionWithCross text={'Cash on delivery'} />
          <OptionWithCross text={'Available'} />
        </View>
      ),
    },
  ];

  const renderProductDetails = () => {
    return productDetails?.map((detail, index) => (
      <View key={index}>
        <Text style={styles.inputLabel}>{detail.label}</Text>
        {detail.input}
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.superContainer}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
      <CommonHeader title={'Add Products'} />
      <View style={styles.container1}>
        <View style={styles.image}>
          <TouchableOpacity style={styles.addPhotoContainer}>
            <AddIcon />
            <Text style={styles.addFaded}>Add Photos</Text>
            <Text style={styles.smallFaded}>1600 x 1200 for hi res</Text>
          </TouchableOpacity>
          <View style={styles.vegImgContainer}>
            <Image
              style={styles.vegImg}
              source={require('../assets/images/veggies/brocCarrot.png')}
            />
            <View style={styles.icon}>
              <CrossIcon />
            </View>
          </View>
        </View>
        <View style={styles.fadedContainer}>
          <Text style={styles.faded}>Max. 4 photos per product</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.container2}>
        {renderProductFields()}
        <View style={styles.inputsRow}>{renderInputFields()}</View>
        {renderInputFields2()}
        {renderProductDetails()}
      </ScrollView>
      <View style={styles.bottomBar}>
        <GreenBtn
          text={'Add Products'}
          handleFunc={() => navigation.navigate(SCREENS.MYSTORE_PRODUCTS)}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddProductScreen;

const styles = StyleSheet.create({
  superContainer: {
    flex: 1,
    backgroundColor: COLOR.bg,
  },
  optionInput: {
    width: widthPixel(335),
    borderBottomWidth: 1,
    borderColor: COLOR.input_clr,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: pixelSizeVertical(3),
  },
  textarea: {
    width: '80%',
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.montserratRegular,
    lineHeight: fontPixel(24),
    width: widthPixel(335),
    borderBottomWidth: 1,
    borderColor: COLOR.input_clr,
    alignSelf: 'center',
    color: COLOR.black,
  },
  inputWithicon: {
    width: '80%',
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.montserratRegular,
    color: COLOR.black,
    lineHeight: fontPixel(24),
  },
  inputWithIconContainer: {
    width: widthPixel(335),
    borderBottomWidth: 1,
    borderColor: COLOR.input_clr,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: COLOR.input_clr,
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.montserratMedium,
    lineHeight: fontPixel(24),
    color: COLOR.black,
    alignSelf: 'center',
  },
  inputsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: pixelSizeVertical(41),
  },
  inputLabel: {
    fontFamily: FONT_FAMILY.montserratRegular,
    fontSize: fontPixel(14),
    color: COLOR.neutral,
    lineHeight: fontPixel(14),
    opacity: 0.5,
  },
  container2: {
    paddingHorizontal: pixelSizeVertical(23.5),
    gap: pixelSizeVertical(25),
    backgroundColor: COLOR.white,
    paddingTop: pixelSizeVertical(18),
    paddingBottom: pixelSizeVertical(152),
  },
  icon: {
    position: 'absolute',
    top: pixelSizeVertical(-8),
    right: pixelSizeVertical(-8),
  },
  vegImg: {
    width: '100%',
    height: '100%',
  },
  vegImgContainer: {
    width: widthPixel(140),
    height: widthPixel(108),
    position: 'relative',
  },
  faded: {
    fontFamily: FONT_FAMILY.montserratRegular,
    fontSize: fontPixel(14),
    color: COLOR.black,
    opacity: 0.5,
    lineHeight: fontPixel(16),
  },
  fadedContainer: {
    paddingStart: pixelSizeVertical(16),
    marginTop: pixelSizeVertical(14),
  },
  smallFaded: {
    fontFamily: FONT_FAMILY.montserratMedium,
    fontSize: fontPixel(10),
    color: COLOR.black,
    opacity: 0.2,
    lineHeight: fontPixel(10),
    letterSpacing: fontPixel(0.3),
  },
  addFaded: {
    fontFamily: FONT_FAMILY.montserratSemiBold,
    fontSize: fontPixel(14),
    color: COLOR.black,
    opacity: 0.4,
    lineHeight: fontPixel(28),
  },
  addPhotoContainer: {
    width: widthPixel(140),
    height: widthPixel(105),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: pixelSizeVertical(10),
    borderColor: COLOR.border_clr,
    borderWidth: widthPixel(1),
    borderStyle: 'dashed',
  },
  image: {
    paddingStart: pixelSizeVertical(21),
    gap: pixelSizeVertical(15),
    flexDirection: 'row',
  },
  container1: {
    height: widthPixel(193),
    width: '100%',
    paddingTop: pixelSizeVertical(31),
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
