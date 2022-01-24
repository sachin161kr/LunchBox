import React from "react";
import {
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Screen1 from "../screens/main_screen/screen1";
import Screen2 from "../screens/main_screen/screen2";
import Subscription1 from "../screens/subscripton_screen/subscription1";
import Wallet1 from "../screens/wallet_screen/wallet1";
import Offer1 from "../screens/offer_screen/offer1";


const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen 
         name="Screen 1" 
         component={Screen1} 
         options={
             {
                headerShown : false,
                 
                //  headerRight : ()=>{
                //     return(
                //       <TouchableOpacity
                //          onPress={()=>{
                //            Alert.alert("Button Pressed");
                //          }}
                //       >
                //         <Image
                //           source={profileIcon}
                //           height={30}
                //           width={30}
                //           style = {
                //             {
                //               marginBottom : 15,
                //             }
                //           }
                //       />
                //       </TouchableOpacity>
                //     )
                //  },

                 headerTitle : "",
                 
             }
         }
         />
        <Stack.Screen 
          name="Screen 2" 
          component={Screen2} 
          options={
            {
              headerShown : false,
              headerTitle : "",
            }
          }
          />
      </Stack.Navigator>
    );
  }

  const SubscriptionStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="My Subscriptions" component={Subscription1} 
          options={
            {
                headerShown : false
            }
        }
        />
      </Stack.Navigator>
    );
  }  
  
  const OfferStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Offers" component={Offer1} 
          options={
            {
                headerShown : false
            }
        }
        />
      </Stack.Navigator>
    );
  }  

  const WalletStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="My Wallet" component={Wallet1} 
          options={
            {
                headerShown : false
            }
        }
        />
      </Stack.Navigator>
    );
  }  
  
  export { MainStackNavigator , SubscriptionStackNavigator , WalletStackNavigator ,OfferStackNavigator};