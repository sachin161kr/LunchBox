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
                     marginTop : 10,
                 }
             }
          >
          <Text 
            style = {
                {
                    fontSize : 20,
                    marginLeft : 15,
                    color : "#000000",
                }
            }
          >Aloo Pratha x2 , Dahi</Text>
          <Text
          style={
              {
                fontSize : 20,
                marginRight : 10,
                color : "#FFFFFF",
                backgroundColor : "green",
                paddingLeft : 6,
                paddingRight : 6,
              }
          }
          >4.2</Text>
          </View>
          <View
            style = {
                {
                    flexDirection : "row",
                    justifyContent : "space-between",
                    marginTop : 5,
                }
            }
          >
          <Text
             style = {
                 {
                    marginLeft : 15,
                    color : "#000000",
                    fontSize : 18,
                 }
             }
          >Shweta's Kitchen</Text>
          <Text
             style = {
                 {
                    marginRight : 10,
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
                     fontSize : 16,
                     color : "#FFFFFF",
                     backgroundColor : "#002FA7", 
                 }
             }
          >Popular for Breakfast</Text>
          <Text
             style = {
                 {
                     marginLeft : 10,
                     fontSize : 16,
                     color : "#FFFFFF",
                     backgroundColor : "#03A700", 
                 }
             }  
          >Veg</Text>
        <Text
          style={
              {
                marginLeft : 10,
                fontSize : 16,
                color : "#FFFFFF",
                backgroundColor : "#A70000",

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
                     marginTop : 10,
                 }
             }
          >
          <Text 
            style = {
                {
                    fontSize : 20,
                    marginLeft : 15,
                    color : "#000000",
                }
            }
          >Gobhi Pratha x2 , Dahi</Text>
          <Text
          style={
              {
                fontSize : 20,
                marginRight : 10,
                color : "#FFFFFF",
                backgroundColor : "green",
                paddingLeft : 6,
                paddingRight : 6,
              }
          }
          >4.2</Text>
          </View>
          <View
            style = {
                {
                    flexDirection : "row",
                    justifyContent : "space-between",
                    marginTop : 5,
                }
            }
          >
          <Text
             style = {
                 {
                    marginLeft : 15,
                    color : "#000000",
                    fontSize : 18,
                 }
             }
          >Neha's Kitchen</Text>
          <Text
             style = {
                 {
                    marginRight : 10,
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
                     fontSize : 16,
                     color : "#FFFFFF",
                     backgroundColor : "#002FA7", 
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
                marginLeft : 10,
                fontSize : 16,
                color : "#FFFFFF",
                backgroundColor : "#A70000",

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