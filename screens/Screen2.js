import React,{useState} from "react";
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
} from "react-native";

const screen2 = ({route})=>{
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

export default screen2;

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
        borderRadius: 15,
      },
})