import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Favorite from '../Screens/Favorite';
import Home from '../Screens/Home';
import Detail from '../Screens/Detail';
import Search from '../Screens/Search';


const Stack = createStackNavigator();
export default function Navigation() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator:
          CardStyleInterpolators.forHorizontalIOS
      }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
