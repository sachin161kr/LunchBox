import React from "react";
import {
    View,
    Image,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ProfileStackNavigator } from "./StackNavigator";

import profileIcon from "../assets/profileIcon.png";
import searchIcon from "../assets/searchIcon.png"


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={ 
        {   
            tabBarStyle : {
                position : "absolute",
                backgroundColor : "#FFFFFF",
                borderRadius : 15,
                height : 80,
            },

            tabBarLabelStyle : {
                fontSize : 20,
                padding : 5,
            }
            
        }
    }
    >
      <Tab.Screen 
        name="Lunch Box" 
        component={MainStackNavigator} 
        options={
            {  
               tabBarIcon : ({focused})=>(
                    <View style={
                        {
                            marginTop : 10,
                        }
                    }>
                        <Image
                           source={searchIcon}
                           style = {
                               {
                                   height : 50,
                                   width : 50,
                                   
                               }
                           }
                        />
                    </View>
                )
            }
        }
        />
      <Tab.Screen 
      name="Profile"
      component={ProfileStackNavigator} 
      options={
        {
            tabBarIcon : ({focused})=>(
                <View style={
                    {
                        marginTop : 10,
                    }
                }>
                    <Image
                       source={profileIcon}
                       style = {
                           {
                               height : 45,
                               width : 45,
                           }
                       }
                    />
                </View>
            )
        }
    }
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;