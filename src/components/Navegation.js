import React from 'react';
import { Provider } from 'react-redux';
import { Store } from '../store'
import styles from '../styles';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';
import Home from './Home';
import SignUp from './SignUp';

const Stack = createStackNavigator();

const Navigation = () => {

  const bar = styles.customBar;

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{
          headerStyle: {
            backgroundColor: '#FFD700',
          },
          headerTintColor: '#008000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Cadastre-se' }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Navigation;