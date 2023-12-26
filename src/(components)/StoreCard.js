import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import ratio from '../styles/ratio';
import {COLOR, FONT_FAMILY, TEXT} from '../styles/GlobalStyles';

import SeeAllBtnGreen from './SeeAllBtnGreen';
import StoreCardData from '../library/StoreCardData';
import SCREENS from '../library/SCREENS';
import {useNavigation} from '@react-navigation/native';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
const StoreCard = () => {
  const navigation = useNavigation();
  const CardData = StoreCardData;
  return (
    <>
      {CardData.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={styles.container}
            onPress={() => navigation.navigate(SCREENS.TRADLYSTORE)}>
            <Image style={styles.img} source={item.img} />
            <View style={styles.logo}>
              <item.svg />
            </View>
            <View style={styles.title}>
              <Text style={TEXT.cardText}>Tradly Store</Text>
            </View>
            <View style={styles.btn}>
              <SeeAllBtnGreen text={'Follow'} />
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export default StoreCard;

const styles = StyleSheet.create({
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(7),
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(20),
  },
  logoText: {
    fontFamily: FONT_FAMILY.montserratBold,
    fontSize: fontPixel(40),
    color: COLOR.white,
    textTransform: 'uppercase',
  },
  logo: {
    alignSelf: 'center',
    marginTop: pixelSizeVertical(-30),
  },
  bottomContainer: {
    height: '100%',
    backgroundColor: COLOR.white,
    marginTop: pixelSizeVertical(85),
  },
  img: {
    height: pixelSizeVertical(85),
    width: '100%',
  },
  container: {
    width: widthPixel(159.652),
    height: widthPixel(200),
    backgroundColor: COLOR.white,
    borderRadius: widthPixel(10),
    borderColor: COLOR.border_clr,
    borderWidth: widthPixel(1),
    overflow: 'hidden',
  },
});
