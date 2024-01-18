import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLOR} from '../styles/GlobalStyles';
import ratio from '../styles/ratio';
import BottomNavigation from './BottomNavigation';
const {widthPixel, pixelSizeVertical} = ratio;
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLOR.white,
          height: widthPixel(53),
          paddingBottom: pixelSizeVertical(4),
        },
        tabBarActiveTintColor: COLOR.green,
      }}>
      {BottomNavigation?.map((item, i) => {
        return (
          <Tab.Screen
            key={i}
            name={item.screenName}
            component={item.component}
            options={() => ({
              tabBarIcon: ({focused}) => {
                return focused ? <item.iconImg /> : <item.icon />;
              },
            })}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomNavigator;
