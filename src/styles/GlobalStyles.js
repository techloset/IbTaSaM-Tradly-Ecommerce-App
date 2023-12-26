import ratio from './ratio';

const {fontPixel, pixelSizeVertical} = ratio;

export const FONT_FAMILY = {
  montserratSemiBold: 'Montserrat-SemiBold',
  montserratBold: 'Montserrat-Bold',
  montserratMedium: 'Montserrat-Medium',
  montserratRegular: 'Montserrat-Regular',
  montserratLight: 'Montserrat-Light',
};

export const COLOR = {
  border_clr: 'rgba(0,0,0,0.1)',
  green: '#33907C',
  black: '#000',
  dimGray: '#0000001a',
  icon_bg_clr: 'rgba(200,200,200,0.4)',
  green_1: '#E3EFF2',
  grayComb: '#4A4A4A',
  bg: '#F3F7FD',
  blue: '#4EA0FF',
  grey: '#606A7B',
  neutral_03: '#B9B9B9',
  white: '#FFF',
  neutral: '#4F4F4F',
  input_clr: '#DBDBDE',
};

export const TEXT = {
  heading: {
    fontFamily: FONT_FAMILY.montserratBold,
    fontSize: fontPixel(24),
    color: COLOR.white,
  },
  faded: {
    fontFamily: FONT_FAMILY.montserratSemiBold,
    fontSize: fontPixel(14),
    color: COLOR.neutral,
    opacity: 0.2,
  },
  heading_2: {
    fontFamily: FONT_FAMILY.montserratSemiBold,
    fontSize: fontPixel(18),
    color: COLOR.neutral,
  },
  heading_2_white: {
    fontFamily: FONT_FAMILY.montserratSemiBold,
    fontSize: fontPixel(18),
    color: COLOR.white,
  },
  title: {
    fontFamily: FONT_FAMILY.montserratSemiBold,
    fontSize: fontPixel(18),
    color: COLOR.black,
    lineHeight: fontPixel(20),
    letterSpacing: fontPixel(-0.165),
    paddingVertical: pixelSizeVertical(15),
  },
  cardText: {
    fontFamily: FONT_FAMILY.montserratMedium,
    fontSize: fontPixel(14),
    color: COLOR.neutral,
  },
};
