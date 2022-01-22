import React,{useState} from "react";
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
} from "react-native";

const Screen2 = ({route})=>{
    var itemSelected = route.params.itemSelected;
    //const [item,setItem] = useState(`${itemSelected}`);
   
    return(
       <>
          <ScrollView>
          <Text
             style = {
                 {
                     fontSize : 20,
                     textAlign : "center",
                     marginTop : 20,
                     color : "#000000"
                 }
             }
          >Kitchens with {itemSelected} in their Menu</Text>    
          <Text style={styles.banner}>Shweta Kitchen</Text>
          <Text style={styles.banner}>Rahul's Kitchen</Text>
          <Text style={styles.banner}>Aman's Kitchen</Text>
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