import React from "react";
import {
  Text,
} from "react-native";

const profile = ()=>{
  return (
    <>
         <Text
           style={
             {
               fontSize : 30,
               color : "#000000",
               textAlign : "center",
               marginTop : 20,
             }
           }
         >User Profile</Text>
    </>
  )
}

export default profile;