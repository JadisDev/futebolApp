import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Provider } from 'react-redux';
import { Store } from '../store'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './Login';
import Home from './Home';
import SignUp from './SignUp';
import MenuConfig from './MenuConfig';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Navigation;