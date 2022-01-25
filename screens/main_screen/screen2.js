import React,{useState} from "react";
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
} from "react-native";

import aloo1 from "../../assets/aloo1.png";
import aloo2 from "../../assets/aloo2.png";

const Screen2 = ({route})=>{
    var itemSelected = route.params.itemSelected;
    //const [item,setItem] = useState(`${itemSelected}`);
   
    return(
       <>
          <ScrollView
             style={
                 {
                     backgroundColor : "#FFFFFF",
                 }
             }
          >
          <View
            style = {
                {
                    flexDirection : "column",
                    height : 305,
                    width : 357,
                    alignSelf : "center",
                    backgroundColor : "#FFFFFF",
                    elevation : 10,
                    borderRadius : 20,
                    marginTop : 20,

                }
            }
          >
          <Image
              source={aloo1}
              style = {
                  {
                      height : 200,
                      width : 357,
                      
                      
                  }
              }
          /> 
          <View 
             style = {
                 {
                     flexDirection : "row",
                     justifyContent : "space-between",
                     marginTop : 11,
                 }
             }
          >
          <Text 
            style = {
                {
                    fontSize : 22,
                    marginLeft : 14,
                    color : "#000000",
                    height : 26,
                    width : 240,
                    fontWeight : "400",
                }
            }
          >Aloo Pratha x2 , Dahi</Text>
          <Text
          style={
              { 
                height : 25,
                width : 60,  
                fontSize : 16,
                marginRight : 13,
                color : "#FFFFFF",
                backgroundColor : "green",
                textAlign : "center",
                
              }
          }
          >⭐4.2</Text>
          </View>
          <View
            style = {
                {
                    flexDirection : "row",
                    justifyContent : "space-between",
                    marginLeft : 14,
                    marginTop : 7,
                }
            }
          >
          <Text
             style = {
                 { 
                    height : 18,
                    width : 210,  
                    fontWeight : "500",
                    // marginLeft : 15,
                    color : "#000000",
                    fontSize : 15,
                 }
             }
          >Shweta's Kitchen</Text>
          <Text
             style = {
                 {
                    marginRight : 13,
                    color : "#000000",
                    fontSize : 18,
                 }
             }
          >Rs. 25</Text>
          </View>
          <View
             style = {
                 {
                     flexDirection : "row",
                     marginTop : 5,  
                 } 
             }
          >
          <Text
             style={
                 {
                     marginLeft : 15,
                     fontSize : 13,
                     color : "#FFFFFF",
                     backgroundColor : "#002FA7", 
                     height : 20,
                     width : 148,
                     textAlign : "center",
                 }
             }
          >Popular for Breakfast</Text>
          <Text
             style = {
                 {   
                     height : 20,
                     width : 30,
                     marginLeft : 10,
                     fontSize : 13,
                     textAlign : "center",
                     color : "#FFFFFF",
                     backgroundColor : "#03A700", 
                 }
             }  
          >Veg</Text>
        <Text
          style={
              {
                marginLeft : 9,
                fontSize : 13,
                color : "#FFFFFF",
                backgroundColor : "#A70000",
                height : 20,
                width : 41,
                textAlign : "center",
              }
          }
        >Spicy</Text>
          </View>
          </View> 
          <View
            style = {
                {
                    flexDirection : "column",
                    height : 305,
                    width : 357,
                    alignSelf : "center",
                    backgroundColor : "#FFFFFF",
                    elevation : 10,
                    borderRadius : 20,
                    marginTop : 20,
                    marginBottom : 100,
                }
            }
          >






          <Image
              source={aloo2}
              style = {
                  {
                      height : 200,
                      width : 357,
                      
                      
                  }
              }
          /> 
          <View 
             style = {
                 {
                     flexDirection : "row",
                     justifyContent : "space-between",
                     marginTop : 11,
                 }
             }
          >
          <Text 
            style = {
                {
                    fontSize : 22,
                    marginLeft : 14,
                    color : "#000000",
                    height : 26,
                    width : 240,
                    fontWeight : "400",
                }
            }
          >Gobhi Pratha x2 , Dahi</Text>
          <Text
          style={
              {
                height : 25,
                width : 60,  
                fontSize : 16,
                marginRight : 13,
                color : "#FFFFFF",
                backgroundColor : "green",
                textAlign : "center",
              }
          }
          >⭐3.7</Text>
          </View>
          <View
            style = {
                {
                    flexDirection : "row",
                    justifyContent : "space-between",
                    marginLeft : 14,
                    marginTop : 7,
                }
            }
          >
          <Text
             style = {
                 {
                    height : 18,
                    width : 210,  
                    fontWeight : "500",
                    // marginLeft : 15,
                    color : "#000000",
                    fontSize : 15,
                 }
             }
          >Neha's Kitchen</Text>
          <Text
             style = {
                 {
                    marginRight : 13,
                    color : "#000000",
                    fontSize : 18,
                 }
             }
          >Rs. 35</Text>
          </View>
          <View
             style = {
                 {
                     flexDirection : "row",
                     marginTop : 5,  
                 } 
             }
          >
          <Text
             style={
                 {
                    marginLeft : 15,
                    fontSize : 13,
                    color : "#FFFFFF",
                    backgroundColor : "#002FA7", 
                    height : 20,
                    width : 148,
                    textAlign : "center",
                 }
             }
          >Popular for Breakfast</Text>
          {/* <Text
             style = {
                 {
                     marginLeft : 10,
                     fontSize : 16,
                     color : "#FFFFFF",
                     backgroundColor : "#03A700", 
                 }
             }  
          >Veg</Text> */}
        <Text
          style={
              {
                marginLeft : 9,
                fontSize : 13,
                color : "#FFFFFF",
                backgroundColor : "#A70000",
                height : 20,
                width : 41,
                textAlign : "center",

              }
          }
        >Spicy</Text>
          </View>
          </View> 
          </ScrollView>
       </>
   )
}

export default Screen2;

const styles = StyleSheet.create({
    banner: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 30,
        borderWidth: 3,
        paddingTop: 25,
        paddingBottom: 25,
        marginLeft: 15,
        marginRight: 15,
        color : "#000000",
        borderRadius: 15,
      },

      
})