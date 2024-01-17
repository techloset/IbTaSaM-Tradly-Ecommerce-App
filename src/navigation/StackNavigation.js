import SCREENS from './Screens';
import BottomNavigator from './BottomNavigator';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import OtpScreen from '../screens/auth/OtpScreen';
import OtpVerficationScreen from '../screens/auth/OtpVerficationScreen';
import WishlistScreen from '../screens/WishlistScreen';
import CartScreen from '../screens/CartScreen';
import AddAddressScreen from '../screens/AddAddressScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import PaymentOptionScreen from '../screens/PaymentOptionScreen';
import AddCardScreen from '../screens/AddCardScreen';
import PaymentOptionFinalScreen from '../screens/PaymentOptionFinalScreen';
import CheckoutSuccessScreen from '../screens/CheckoutSuccessScreen';
import CreateStoreScreen from '../screens/CreateStoreScreen';
import AddProductScreen from '../screens/AddProductScreen';
import MyStoreScreen from '../screens/MyStoreScreen';
import MyStoreProductScreen from '../screens/MyStoreProductScreen';
import Beverages from '../screens/ProductScreen/Beverages';
import Vegetable from '../screens/ProductScreen/Vegetable';
import BreadBakery from '../screens/ProductScreen/BreadBakery';
import Egg from '../screens/ProductScreen/Egg';
import Fruit from '../screens/ProductScreen/Fruit';
import FrozenVeg from '../screens/ProductScreen/FrozenVeg';
import HomeCare from '../screens/ProductScreen/HomeCare';
import PetCare from '../screens/ProductScreen/PetCare';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import TradlyStore from '../screens/TradlyStore';
import TradlyStoreSearch from '../screens/TradlyStoreSearch';

const StackNavigation = [
  {
    screenName: SCREENS.ONBOARDING,
    component: OnBoardingScreen,
  },
  {
    screenName: SCREENS.LOGIN,
    component: LoginScreen,
  },
  {
    screenName: SCREENS.SIGN_UP,
    component: SignUpScreen,
  },
  {
    screenName: SCREENS.OTP,
    component: OtpScreen,
  },
  {
    screenName: SCREENS.OTP_VERIFICATION,
    component: OtpVerficationScreen,
  },
  {
    screenName: SCREENS.WISHLIST,
    component: WishlistScreen,
  },
  {
    screenName: SCREENS.CART,
    component: CartScreen,
  },
  {
    screenName: SCREENS.ADD_ADDRESS,
    component: AddAddressScreen,
  },
  {
    screenName: SCREENS.CHECKOUT,
    component: CheckoutScreen,
  },
  {
    screenName: SCREENS.PAYMENT,
    component: PaymentOptionScreen,
  },
  {
    screenName: SCREENS.ADD_CARD,
    component: AddCardScreen,
  },
  {
    screenName: SCREENS.PAYMENT_FINAL,
    component: PaymentOptionFinalScreen,
  },
  {
    screenName: SCREENS.CHECKOUT_SUCCESS,
    component: CheckoutSuccessScreen,
  },
  {
    screenName: SCREENS.CREATE_STORE,
    component: CreateStoreScreen,
  },
  {
    screenName: SCREENS.MY_STORE,
    component: MyStoreScreen,
  },
  {
    screenName: SCREENS.ADD_PRODUCT,
    component: AddProductScreen,
  },
  {
    screenName: SCREENS.MYSTORE_PRODUCTS,
    component: MyStoreProductScreen,
  },
  {
    screenName: SCREENS.BEVERAGES,
    component: Beverages,
  },
  {
    screenName: SCREENS.BREADBAKERY,
    component: BreadBakery,
  },
  {
    screenName: SCREENS.VEGETABLE,
    component: Vegetable,
  },
  {
    screenName: SCREENS.FRUIT,
    component: Fruit,
  },
  {
    screenName: SCREENS.EGG,
    component: Egg,
  },
  {
    screenName: SCREENS.FROZENVEG,
    component: FrozenVeg,
  },
  {
    screenName: SCREENS.HOMECARE,
    component: HomeCare,
  },
  {
    screenName: SCREENS.PETCARE,
    component: PetCare,
  },
  {
    screenName: SCREENS.PRODUCT_DETAIL,
    component: ProductDetailScreen,
  },
  {
    screenName: SCREENS.TRADLYSTORE,
    component: TradlyStore,
  },
  {
    screenName: SCREENS.TRADLYSTORESEARCH,
    component: TradlyStoreSearch,
  },
  {
    screenName: SCREENS.BOTTOM_NAVIGATOR,
    component: BottomNavigator,
  },
];

export default StackNavigation;
