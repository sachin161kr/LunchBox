import React from "react";
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
} from "react-native";

const screen2 = ()=>{
   return(
       <>
          <ScrollView>
          <Text style={styles.banner}>Shweta Kitchen</Text>
          <Text style={styles.banner}></Text>
          <Text style={styles.banner}></Text>
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