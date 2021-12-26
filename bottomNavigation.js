import React from "react";
import {View,Image} from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import search from "./tabScreens/Search";
import profile from "./tabScreens/Profile";


import searchIcon from "./assets/searchIcon.png";
import profileIcon from "./assets/profileIcon.png"

const MyTab = ()=>{
    return(
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
            name="Search" 
            component={search} 
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
          component={profile} 
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
}

export default MyTab;