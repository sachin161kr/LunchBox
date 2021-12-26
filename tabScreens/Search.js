import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View ,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

const foodList = [
  {
    key: 0,
    text: 'Bread',
  },
  {
    key: 1,
    text: 'Poha',
  },
  {
    key: 2,
    text: 'Aaloo\nParatha',
  },
];

const search = ({navigation}) => {
  return (
    <>
      <ScrollView style={
        {
          flex : 1,
          marginBottom : 40,
        }
      }>
        <Text style={styles.banner}>Banner</Text>
        <View style={styles.gridContainer}>
          {
             foodList.map(key=>(
                <TouchableOpacity 
                key={key.key} 
                onPress={()=>{
                   //Alert.alert(`${key.text} is Pressed`);
                   navigation.navigate('Screen 1');

                }} 
                >
                <Text
                 style={
                   {  
                      height : 120,
                      width : 120,
                      fontSize : 30,
                      borderWidth : 3,
                      margin : 30,
                      textAlign : "center",
                      textAlignVertical : "center",
                      
                   }
                 }
                >{key.text}</Text>  
               </TouchableOpacity>
             ))
          }
        </View>
      </ScrollView>
    </>
  );
};

export default search;

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
  gridContainer: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "flex-start",
    padding : 10,
    
  },
});
