import React from "react";
import {
    View,
    Image,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, SubscriptionStackNavigator , WalletStackNavigator , OfferStackNavigator } from "./StackNavigator";

import walletIcon from "../assets/walleticon.png";
import searchIcon from "../assets/searchIcon.png"

import offers from "../assets/offers.png";
import subs from "../assets/subs.png";


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
                fontSize : 13,
                padding : 5,
            }
            
        }
    }
    >
      <Tab.Screen 
        name="ZOOD" 
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
      name="Subscriptions"
      component={SubscriptionStackNavigator} 
      options={
        {
            tabBarIcon : ({focused})=>(
                <View style={
                    {
                        marginTop : 10,
                    }
                }>
                    <Image
                       source={subs}
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
       <Tab.Screen 
      name="Offers"
      component={OfferStackNavigator} 
      options={
        {
            tabBarIcon : ({focused})=>(
                <View style={
                    {
                        marginTop : 10,
                    }
                }>
                    <Image
                       source={offers}
                       style = {
                           {
                               height : 55,
                               width : 55,
                           }
                       }
                    />
                </View>
            )
        }
    }
      />
       <Tab.Screen 
        name="Wallet" 
        component={WalletStackNavigator} 
        options={
            {  
               tabBarIcon : ({focused})=>(
                    <View style={
                        {
                            marginTop : 10,
                        }
                    }>
                        <Image
                           source={walletIcon}
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
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;