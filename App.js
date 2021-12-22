import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyTab from './bottomNavigation';

const Stack = createNativeStackNavigator();

import screen1 from './screens/Screen1';

const MyStack = ()=>{
  return(
    <NavigationContainer>
      <MyTab/>
    </NavigationContainer>
  )
}

export default MyStack;