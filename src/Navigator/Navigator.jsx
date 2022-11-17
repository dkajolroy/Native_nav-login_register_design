import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { ROUTES } from './../Constants/Routes';
import SplashScreen from '../Screen/SplashScreen';
import BottomNav from './BottomNav';
import LoginScreen from "../Screen/LoginScreen";
import RegisterScreen from "../Screen/RegisterScreen";

export default function Navigator() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName={ROUTES.SPLASH}>
                <Stack.Screen
                    name={ROUTES.SPLASH}
                    component={SplashScreen} />
              <Stack.Screen
                name={ROUTES.LOGIN}
                component={LoginScreen} />
              <Stack.Screen
                name={ROUTES.REGISTER}
                component={RegisterScreen} />
              <Stack.Screen
                    name={ROUTES.TAB}
                    component={BottomNav} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
