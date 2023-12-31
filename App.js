import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {   View } from 'react-native';
import React from 'react';
import Login from './src/pages/Login';
import Register from './src/pages/Register';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}  />
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />

      </Stack.Navigator>
    </NavigationContainer>
      

  );
}



