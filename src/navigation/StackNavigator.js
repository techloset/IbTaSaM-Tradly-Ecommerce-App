import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NAVIGATION from '../library/NAVIGATION';
import SCREENS from '../library/SCREENS';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.ONBOARDING}
      screenOptions={{headerShown: false}}>
      {NAVIGATION.map((item, index) => {
        return (
          <Stack.Screen
            key={index}
            name={item.screenName}
            component={item.component}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default StackNavigator;
