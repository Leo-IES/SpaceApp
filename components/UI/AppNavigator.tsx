/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  IconElement,
} from '@ui-kitten/components';
import {HomePage} from '../../pages/Home/HomePage';
import {ProfilePage} from '../../pages/Profile/ProfilePage';
import {StyleSheet} from 'react-native';
import {ListProductPage} from '../../pages/Product/List/ListProductPage';
import {AddProductPage} from '../../pages/Product/Add/AddProductPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createBottomTabNavigator();

const HomeIcon = (props: any): IconElement => (
  <Icon {...props} name="home-outline" />
);
const ProductIcon = (props: any): IconElement => (
  <Icon {...props} name="shopping-cart-outline" />
);
const UserIcon = (props: any): IconElement => (
  <Icon {...props} name="person-outline" />
);

const BottomTabBar = ({navigation, state}: any) => (
  <BottomNavigation
    style={styles.bottomNavigation}
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Inicio" icon={HomeIcon} />
    <BottomNavigationTab title="Productos" icon={ProductIcon} />
    <BottomNavigationTab title="Perfil" icon={UserIcon} />
  </BottomNavigation>
);

const ProductStack = createNativeStackNavigator();

const ProductTabs = () => {
  return (
    <ProductStack.Navigator>
      <ProductStack.Screen
        name="Lista de Productos"
        component={ListProductPage}
      />
      <ProductStack.Screen name="Añadir Productos" component={AddProductPage} />
    </ProductStack.Navigator>
  );
};

const TabNavigator = () => (
  <Navigator tabBar={(props: any) => <BottomTabBar {...props} />}>
    <Screen
      name="Inicio"
      component={HomePage}
      options={{
        headerShown: false,
      }}
    />
    <Screen
      name="Productos"
      component={ProductTabs}
      options={{
        headerShown: false,
      }}
    />
    <Screen
      name="Perfil"
      component={ProfilePage}
      options={{
        headerShown: false,
      }}
    />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);

const styles = StyleSheet.create({
  bottomNavigation: {
    marginBottom: 20,
  },
});
