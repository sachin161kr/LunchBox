import React, {useState} from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  StatusBar,
} from 'react-native';

import SearchBar from 'react-native-dynamic-search-bar';
import profileIcon from "../../assets/profileIcon.png";
import location from "../../assets/location.png";

const breakfast = [
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

const lunch = [
  {
    key: 0,
    text: 'Chicken',
  },
  {
    key: 1,
    text: 'Fish',
  },
  {
    key: 2,
    text: 'Veg\nThali',
  },
];

const dinner = [
  {
    key: 0,
    text: 'Egg Curry',
  },
  {
    key: 1,
    text: 'Palak\nPaneer',
  },
  {
    key: 2,
    text: 'Biryani',
  },
];

const Screen1 = ({navigation}) => {
  var hours = new Date().getHours();
  var min = new Date().getMinutes();
  var currentTime = '';

  //console.log(min);
  //var currentTime = "";
  if (hours >= 6 && hours <= 11 && min < 59) {
    currentTime = 'breakfast';
    //setItem('breakfast');
  } else if (hours >= 12 && hours <= 16 && min < 59) {
    currentTime = 'lunch';
    //setItem('lunch');
  } else {
    currentTime = 'dinner';
    //setItem('dinner');
  }
  const [itemSelected, setItem] = useState(`${currentTime}`);

  //console.log(hours);

  return (
    <>
      <StatusBar
         backgroundColor="#FFCB00"
      />
      <ScrollView
        style={{
          flex: 1,
          marginBottom: 40,
          backgroundColor: '#FFFFFF',
        }}>
          <View
          style={{
            flexDirection: 'row',
            justifyContent : "flex-start",
          }}>
            
            <Image
               source={location}
               style={
                 {
                   height : 50,
                   width : 40,
                   resizeMode : "stretch",
                   marginLeft : 15
                  //  borderWidth : 1,
                  //  borderColor : "#000000",
                   
                 }
               }
            /> 
            <View 
               style = {  
                 {
                      flexDirection : "column",
                 }
               }
            >
            <Text
              style={
                {
                  
                  fontSize : 20,
                  marginLeft : 10,
                  color : "#FFCB00",
                  //textAlignVertical : "center",
                }
              } 
            >HOME</Text>
             <Text
              style={
                {
                  
                  fontSize : 20,
                  marginLeft : 10,
                  color : "#777777"
                  //textAlignVertical : "center",
                }
              } 
            >1080 Kshudiram Nagar</Text>
            </View>
            <TouchableOpacity
                         onPress={()=>{
                           Alert.alert("Button Pressed");
                         }}
                      >
                        <Image
                          source={profileIcon}
                          
                          resizeMode="contain"
                          style = {
                            { 
                              height : 40,
                              width : 40,
                              marginTop : 10,
                              marginBottom : 15,
                              marginLeft : 55,
                              marginRight : 5,
                            }
                          }
                      />
                      </TouchableOpacity>
          
        </View>
        <SearchBar
          placeholder="Search meal, category, kitchens..."
          onPress={() => alert('onPress')}

          style={
            {
               marginTop : 5,
               //borderWidth: 1,
               elevation : 10,
               marginBottom  : 25,
              
               
            }
          }
          onChangeText={text => console.log(text)}
        />
        
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          style={{
            flexDirection: 'row',
          }}>
          <Text style={styles.banner}>Get 50% OFF on your first order</Text>
          <Text style={
            {
              height: 185,
              width: 194,
              fontSize: 25,
              padding : 10,
              textAlign: 'center',
              color: '#FFFFFF',
              elevation : 10,
              fontWeight : "bold",
              backgroundColor : "#f5dd58",
             
              //borderWidth: 3,
              marginLeft: 15,
              marginRight: 12,
              borderRadius: 5,
              textAlignVertical: 'center', 
            }
          }>Get 50% OFF on your first order</Text>
          <Text style={styles.banner}>Get 50% OFF on your first order</Text>
        </ScrollView>
        <View
          style={{
            marginTop: 25,
            height: 38,
            width: 357,
            
            flexDirection: 'row',
            justifyContent : 'center',
            // borderWidth: 3,
            paddingTop : 4,
            // borderColor: '#777777',
            borderRadius: 33,
            //backgroundColor : "rgba(229, 229, 229, 0.35)",
            backgroundColor : "#FFFFFF",
            elevation : 3,
            alignSelf: 'center',
          
          }}>
          <TouchableOpacity
            onPress={() => {
              setItem('breakfast');
              //setItem(`${currentTime}`);
              //currentTime = "breakfast";
            }}>
            <Text
              style={{
                fontSize: 20,
                color: itemSelected == 'breakfast' ? '#FFCB00' : '#777777',
                // backgroundColor:
                //   itemSelected == 'breakfast' ? '#FFFFFF' : "rgba(229, 229, 229, 0.35)",
                // paddingRight : 20,
                // paddingLeft : 20,
                borderRadius: 20,
                height: '100%',
                width: 123,
                
                textAlign: 'center',
              }}>
              Breakfast
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setItem('lunch');
              //setItem(`${currentTime}`);
              //currentTime = "lunch";
            }}>
            <Text
              style={{
                fontSize: 20,
                color: itemSelected == 'lunch' ? '#FFCB00' : '#777777',
                borderRadius: 20,
                // backgroundColor:
                //   itemSelected == 'lunch' ? '#FFFFFF' : "rgba(229, 229, 229, 0.35)",
                // paddingLeft : 30,
                height: '100%',
                width: 110,
                textAlign: 'center',
              }}>
              Lunch
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setItem('dinner');
              //setItem(`${currentTime}`);
              //currentTime = "dinner";
            }}>
            <Text
              style={{
                fontSize: 20,
                color: itemSelected == 'dinner' ? '#FFCB00' : '#777777',
                borderRadius: 20,
                // backgroundColor:
                //   itemSelected == 'dinner' ? '#FFFFFF' : "rgba(229, 229, 229, 0.35)",
                height: '100%',
                width: 116,
                textAlign: 'center',
              }}>
              Dinner
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            marginLeft: 25,
            color : "#777777",
            //fontWeight : "300",
            fontSize: 20,
            marginTop : 20,
          }}>
          Choose from a variety of taste !
        </Text>
        <View style={styles.gridContainer}>
          {itemSelected == 'breakfast'
            ? breakfast.map(key => (
                <TouchableOpacity
                  key={key.key}
                  onPress={() => {
                    navigation.navigate('Screen 2', {
                      itemSelected: `${key.text}`,
                    });
                  }}>
                  <Text
                    style={{
                      height: 164,
                      width: 344.4,
                      borderRadius: 20,
                      fontSize: 30,
                      //borderWidth: 3,
                      elevation : 5,
                      backgroundColor : "#FFFFFF",
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      color: '#000000',
                      margin: 15,
                    }}>
                    {key.text}
                  </Text>
                </TouchableOpacity>
              ))
            : itemSelected == 'lunch'
            ? lunch.map(key => (
                <TouchableOpacity
                  key={key.key}
                  onPress={() => {
                    navigation.navigate('Screen 2', {
                      itemSelected: `${key.text}`,
                    });
                  }}>
                  <Text
                    style={{
                      height: 164,
                      width: 344.4,
                      borderRadius: 20,
                      fontSize: 30,
                      //borderWidth: 3,
                      elevation : 5,
                      backgroundColor : "#FFFFFF",
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      color: '#000000',
                      margin: 15,
                    }}>
                    {key.text}
                  </Text>
                </TouchableOpacity>
              ))
            : dinner.map(key => (
                <TouchableOpacity
                  key={key.key}
                  onPress={() => {
                    navigation.navigate('Screen 2', {
                      itemSelected: `${key.text}`,
                    });
                  }}>
                  <Text
                    style={{
                      height: 164,
                      width: 344.4,
                      borderRadius: 20,
                      fontSize: 30,
                      // borderWidth: 3,
                      elevation : 5,
                      backgroundColor : "#FFFFFF",
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      color: '#000000',
                      margin: 15,
                    }}>
                    {key.text}
                  </Text>
                </TouchableOpacity>
              ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  banner: {
    height: 185,
    width: 194,
    fontSize: 25,
    padding : 10,
    textAlign: 'center',
    color: '#FFFFFF',
    elevation : 10,
    fontWeight : "bold",
    backgroundColor : "#f757da",
   
    //borderWidth: 3,
    marginLeft: 15,
    marginRight: 12,
    borderRadius: 5,
    textAlignVertical: 'center',
  },
  gridContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 40,

  },
});
