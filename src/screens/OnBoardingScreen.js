import {
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  Animated,
  StatusBar,
  FlatList,
} from 'react-native';
import React, {useState, useRef} from 'react';
import ratio from '../styles/ratio';
import Slides from '../library/Slides';
import OnBoardingItem from '../(components)/OnBoardingItem';

import SCREENS from '../navigation/Screens';
import GreenBtn from '../(components)/GreenBtn';
import {COLOR} from '../styles/GlobalStyles';
const {pixelSizeVertical, widthPixel, SCREEN_WIDTH} = ratio;

const OnBoardingScreen = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const scrollToNext = () => {
    if (currentIndex < Slides.length - 1) {
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate(SCREENS.LOGIN);
    }
  };

  const handleMomentumScrollEnd = event => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / ratio.SCREEN_WIDTH);
    setCurrentIndex(index);
  };

  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.container}
        source={require('../assets/images/onbBg.png')}>
        <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
        <FlatList
          data={Slides}
          renderItem={({item}) => <OnBoardingItem item={item} />}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          keyExtractor={item => item.id}
          ref={slidesRef}
          onMomentumScrollEnd={handleMomentumScrollEnd}
        />
        <View style={styles.bottomContainer}>
          {/* <OnboardingPaginator data={Slides} scrollX={scrollX} /> */}
          <View style={{flexDirection: 'row'}}>
            {Slides?.map((_, i) => {
              const inputRange = [
                (i - 1) * SCREEN_WIDTH,
                i * SCREEN_WIDTH,
                (i + i) * SCREEN_WIDTH,
              ];
              const dotOpacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.3, 1, 0.3],
                extrapolate: 'clamp',
              });
              return (
                <Animated.View
                  style={[styles.dot, {opacity: dotOpacity}]}
                  key={i}
                />
              );
            })}
          </View>
          <GreenBtn
            text={currentIndex == 2 ? 'Finish' : 'Next'}
            handleFunc={scrollToNext}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: pixelSizeVertical(15),
    gap: pixelSizeVertical(45),
  },
  dot: {
    height: widthPixel(13),
    width: widthPixel(13),
    borderRadius: 13,
    backgroundColor: COLOR.green,
    marginHorizontal: 6,
  },
});
