import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import search from '../tabScreens/Search';
import screen1 from './Screen1'; 

const MyStackNavigation = ()=>{
  return(
    <NavigationContainer>
     <Stack.Navigator>
         <Stack.Screen 
          name="Search" 
          component={search}
         />
          <Stack.Screen 
          name="Screen 1" 
          component={screen1}
         />
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MyStackNavigation;