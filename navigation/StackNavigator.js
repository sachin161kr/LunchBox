import React from "react";

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import screen1 from "../screens/Screen1";
import screen2 from "../screens/Screen2";
import profile from "../tabScreens/Profile"

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen 
         name="Screen 1" 
         component={screen1} 
         options={
             {
                 headerShown : false
             }
         }
         />
        <Stack.Screen 
          name="Screen 2" 
          component={screen2} 
         
          />
      </Stack.Navigator>
    );
  }

  const ProfileStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="My Profile" component={profile} 
          options={
            {
                headerShown : false
            }
        }
        />
      </Stack.Navigator>
    );
  }  
  
  export { MainStackNavigator , ProfileStackNavigator };