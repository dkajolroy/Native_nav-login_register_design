import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ROUTES } from '../Constants/Routes';
import HomeScreen from './../Screen/HomeScreen';
import { Image } from 'react-native';
import ProfileScreen from "../Screen/ProfileScreen";
import CartScreen from "../Screen/CartScreen";
import WishlistScreen from "../Screen/WishlistScreen";

export default function BottomNav() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false
        }} >

            <Tab.Screen
                name={ROUTES.HOME}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Image style={{
                            width: size,
                            height: size,
                            tintColor: color
                        }} source={require('../assets/home.png')} />
                    )
                }}
                component={HomeScreen}
            />
          <Tab.Screen
            name={ROUTES.WISHLIST}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image style={{
                  width: size,
                  height: size,
                  tintColor: color
                }} source={require('../assets/love.png')} />
              )
            }}
            component={WishlistScreen}
          />
          <Tab.Screen
            name={ROUTES.CART}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image style={{
                  width: size,
                  height: size,
                  tintColor: color
                }} source={require('../assets/bag.png')} />
              )
            }}
            component={CartScreen}
          />
          <Tab.Screen
            name={ROUTES.PROFILE}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image style={{
                  width: size,
                  height: size,
                  tintColor: color
                }} source={require('../assets/user.png')} />
              )
            }}
            component={ProfileScreen}
          />
        </Tab.Navigator>
    )
}
