const Menu = [
  {
    title: 'Beverages',
    img: require('../assets/images/menu/1.png'),
    onPress: navigation => navigation.navigate('Beverages'),
  },
  {
    title: 'Bread & Bakery',
    img: require('../assets/images/menu/2.png'),
    onPress: navigation => navigation.navigate('BreadBakery'),
  },
  {
    title: 'Vegetable',
    img: require('../assets/images/menu/3.png'),
    onPress: navigation => navigation.navigate('Vegetable'),
  },
  {
    title: 'Fruit',
    img: require('../assets/images/menu/4.png'),
    onPress: navigation => navigation.navigate('Fruit'),
  },
  {
    title: 'Egg',
    img: require('../assets/images/menu/5.png'),
    onPress: navigation => navigation.navigate('Egg'),
  },
  {
    title: 'Frozen Veg',
    img: require('../assets/images/menu/6.png'),
    onPress: navigation => navigation.navigate('FrozenVeg'),
  },
  {
    title: 'Homecare',
    img: require('../assets/images/menu/7.png'),
    onPress: navigation => navigation.navigate('HomeCare'),
  },
  {
    title: 'Pet Care',
    img: require('../assets/images/menu/8.png'),
    onPress: navigation => navigation.navigate('PetCare'),
  },
];

export default Menu;
