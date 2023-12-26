import SCREENS from './SCREENS';
import HomeScreen from '../screens/HomeScreen';
import BrowseScreen from '../screens/BrowseScreen';
import StoreScreen from '../screens/StoreScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import ProfileScreen from '../screens/ProfileScreen';

import HomeScreenIcon from '../assets/images/icons/home.svg';
import HomeScreenIconGreen from '../assets/images/icons/homeGreen.svg';
import BrowseScreenIcon from '../assets/images/icons/browse.svg';
import BrowseScreenIconGreen from '../assets/images/icons/browseGreen.svg';
import StoreScreenIcon from '../assets/images/icons/store.svg';
import StoreScreenIconGreen from '../assets/images/icons/storeGreen.svg';
import OrderHistoryScreenIcon from '../assets/images/icons/order.svg';
import OrderHistoryScreenIconGreen from '../assets/images/icons/orderGreen.svg';
import ProfileScreenIcon from '../assets/images/icons/profile.svg';
import ProfileScreenIconGreen from '../assets/images/icons/profileGreen.svg';

const BOTTOM_NAVIGATION = [
  {
    screenName: SCREENS.HOME,
    component: HomeScreen,
    icon: HomeScreenIcon,
    iconImg: HomeScreenIconGreen,
  },
  {
    screenName: SCREENS.BROWSE,
    component: BrowseScreen,
    icon: BrowseScreenIcon,
    iconImg: BrowseScreenIconGreen,
  },
  {
    screenName: SCREENS.STORE,
    component: StoreScreen,
    icon: StoreScreenIcon,
    iconImg: StoreScreenIconGreen,
  },
  {
    screenName: SCREENS.ORDER,
    component: OrderHistoryScreen,
    icon: OrderHistoryScreenIcon,
    iconImg: OrderHistoryScreenIconGreen,
  },
  {
    screenName: SCREENS.PROFILE,
    component: ProfileScreen,
    icon: ProfileScreenIcon,
    iconImg: ProfileScreenIconGreen,
  },
];

export default BOTTOM_NAVIGATION;
