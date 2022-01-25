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

import pratha from "../../assets/Pratha.png";
import { clearErrors } from 'react-native/Libraries/LogBox/Data/LogBoxData';

const breakfast = [
  {
    key: 0,
    text: 'Parathas',
    image : pratha,
    description : "Aloo Pratha , Paneer Pratha , Pyaz Pratha",
    price : 25,
    bestSeller : true,
  },
  {
    key: 1,
    text: 'Poha',
    image : pratha,
    description : "Aloo Pratha , Paneer Pratha , Pyaz Pratha",
    price : 25,
    bestSeller : false,
  },
  {
    key: 2,
    text: 'Aaloo Paratha',
    image : pratha,
    description : "Aloo Pratha , Paneer Pratha , Pyaz Pratha",
    price : 25,
    bestSeller : true,
  },
];

const lunch = [
  {
    key: 0,
    text: 'Chicken',
    image : pratha,
    description : "Aloo Pratha , Paneer Pratha , Pyaz Pratha",
    price : 25,
    bestSeller : false,
  },
  {
    key: 1,
    text: 'Fish',
    image : pratha,
    description : "Aloo Pratha , Paneer Pratha , Pyaz Pratha",
    price : 25,
    bestSeller : true,
  },
  {
    key: 2,
    text: 'Veg Thali',
    image : pratha,
    description : "Aloo Pratha , Paneer Pratha , Pyaz Pratha",
    price : 25,
    bestSeller : false,
  },
];

const dinner = [
  {
    key: 0,
    text: 'Egg Curry',
    image : pratha,
    description : "Aloo Pratha , Paneer Pratha , Pyaz Pratha",
    price : 25,
    bestSeller : true
  },
  {
    key: 1,
    text: 'Palak Paneer',
    image : pratha,
    description : "Aloo Pratha , Paneer Pratha , Pyaz Pratha",
    price : 30,
    bestSeller : false,
  },
  {
    key: 2,
    text: 'Biryani',
    image : pratha,
    description : "Aloo Pratha , Paneer Pratha , Pyaz Pratha",
    price : 25,
    bestSeller : false,
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
            marginLeft : 16.38,
          }}>
            
            <Image
               source={location}
               style={
                 {
                   height : 35.54,
                   width : 29.25,
                   resizeMode : "stretch",
                  
                  //  borderWidth : 1,
                  //  borderColor : "#000000",
                   
                 }
               }
            /> 
            <View 
               style = {  
                 {
                      flexDirection : "column",
                      marginLeft : 9.37
                     
                 }
               }
            >
            <Text
              style={
                {
                  height : 23,
                  width : 57,
                  fontWeight : "500",
                  fontSize : 20,
                 
                  color : "#FFCB00",
                  //textAlignVertical : "center",
                }
              } 
            >HOME</Text>
             <Text
              style={
                {
                  height : 16,
                  width : 233,
                  fontSize : 14,
                  fontWeight : "400",
                 
                  color : "#000000"
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
                              height : 32.5,
                              width : 32.5,
                              marginTop : 1.87,
                              marginLeft : 52.25,
                              
                              
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
               height : 42,
               width : 357,
               marginTop : 16,
               //borderWidth: 1,
               elevation : 10,
               marginBottom  : 23,
               borderRadius : 10,
              
               
            }
          }
          onChangeText={text => console.log(text)}
        />
        
        <ScrollView
          horizontal={true}
          style={{
            flexDirection: 'row',
          }}>
          <View style={
            {
               height : 185,
               width : 194,
               borderRadius : 5,
               backgroundColor : "#f757da",
               elevation :10,
               marginLeft : 16,
               marginRight : 29,
               
            }
          }>
          <View
             style = {
               {
                  // height : 35,
                  // width : 109,
                  marginTop : 106,
                  justifyContent : "center",
                  // marginLeft : 43,
                  
               }
             }
          >
          <Text
           style = {
             {
               fontSize : 19,
               textAlign : "center",
               color : "#FFFFFF",
               fontWeight : "700",
             }
           }
          >Get 50% OFF</Text>
          <Text
            style={
              {
                fontSize : 12,
                textAlign : "center",
                color : "#FFFFFF",
                fontWeight : "400",
              }
            }
          >on your first order</Text>
          </View>
           </View> 

           <View style={
            {
               height : 185,
               width : 194,
               borderRadius : 5,
               backgroundColor : "#f5dd58",
               elevation :10,
               marginRight : 16,
            }
          }>
           <View
             style = {
               {
                  // height : 35,
                  // width : 109,
                  marginTop : 106,
                  justifyContent : "center",
                  // marginLeft : 43,
                  
               }
             }
          >
          <Text
           style = {
             {
               fontSize : 19,
               textAlign : "center",
               color : "#FFFFFF",
               fontWeight : "700",
             }
           }
          >Get 50% OFF</Text>
          <Text
            style={
              {
                fontSize : 12,
                textAlign : "center",
                color : "#FFFFFF",
                fontWeight : "400",
              }
            }
          >on your first order</Text>
          </View>
          </View>
        </ScrollView>
        <View
          style={{
            marginTop: 26,
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
            height :21,
           
            marginLeft : 17,
            fontWeight : "400",
            color : "#000000",
            //fontWeight : "300",
            fontSize: 18,
            marginTop : 27,
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
                  <View
                    style={{
                      height: 164,
                      width: 344.4,
                      marginBottom : 32,
                      borderRadius: 20,
                      flexDirection : "row",
                      elevation : 10,
                      backgroundColor : "#FFFFFF",
                      
                    }}>
                     <View 
                      style={
                        {
                           flexDirection : "column",
                           flex : 1,
                           marginTop : 10,
                           marginLeft : 20,
                           
                        }
                      }
                    >
                    <Text
                       style={
                         {
                           fontSize : 24,
                           color : "#000000"
                           
                         }
                       }
                    >{key.text}</Text>
                    <Text
                       style={
                         {   
                            height : 36,
                            width : 168,
                            marginTop : 8,
                            fontSize : 15,
                            color : "#000000"
                         }
                       }
                    >{key.description}</Text>
                    <Text
                      style={
                        {
                          marginTop : 15,
                          color : "#000000",
                          height : 21,
                          width : 125,

                        }
                      }
                    >Starting at Rs.{key.price}</Text>
                    {
                       key.bestSeller==true?
                       <Text
                          style={
                            {
                              color : "#FFFFFF",
                              backgroundColor : "red",
                              marginRight : 120,
                              padding : 5,
                              marginTop : 5,
                            }
                          }
                       >Bestseller</Text>
                       :
                       <></>
                    }
                    </View>
                    <Image
                      source={pratha}
                      style = {
                        {
                           height : 140,
                           resizeMode : "stretch",
                           width : 130,
                           marginTop : 15,
                           
                        }
                      }
                    />
                  </View>
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
                 <View
                    style={{
                      height: 164,
                      width: 344.4,
                      
                      borderRadius: 20,
                      // fontSize: 30,
                      //borderWidth: 3,
                      flexDirection : "row",
                      elevation : 5,
                      backgroundColor : "#FFFFFF",
                      // textAlign: 'center',
                      // textAlignVertical: 'center',
                      // color: '#000000',
                      margin: 15,
                    }}>
                     <View 
                      style={
                        {
                           flexDirection : "column",
                           flex : 1,
                           marginTop : 10,
                           marginLeft : 20,
                           
                        }
                      }
                    >
                    <Text
                       style={
                         {
                           fontSize : 24,
                           color : "#000000"
                           
                         }
                       }
                    >{key.text}</Text>
                    <Text
                       style={
                         {
                            fontSize : 18,
                            color : "#000000"
                         }
                       }
                    >{key.description}</Text>
                    <Text
                      style={
                        {
                          marginTop : 5,
                          color : "#000000"
                        }
                      }
                    >Starting at Rs.{key.price}</Text>
                    {
                       key.bestSeller==true?
                       <Text
                          style={
                            {
                              color : "#FFFFFF",
                              backgroundColor : "red",
                              marginRight : 120,
                              padding : 5,
                              marginTop : 5,
                            }
                          }
                       >Bestseller</Text>
                       :
                       <></>
                    }
                    </View>
                    <Image
                      source={pratha}
                      style = {
                        {
                           height : 140,
                           resizeMode : "stretch",
                           width : 130,
                           marginTop : 15,
                           
                        }
                      }
                    />
                  </View>
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
                  <View
                    style={{
                      height: 164,
                      width: 344.4,
                      
                      borderRadius: 20,
                      // fontSize: 30,
                      //borderWidth: 3,
                      flexDirection : "row",
                      elevation : 5,
                      backgroundColor : "#FFFFFF",
                      // textAlign: 'center',
                      // textAlignVertical: 'center',
                      // color: '#000000',
                      margin: 15,
                    }}>
                     <View 
                      style={
                        {
                           flexDirection : "column",
                           flex : 1,
                           marginTop : 10,
                           marginLeft : 20,
                           
                        }
                      }
                    >
                    <Text
                       style={
                         {
                           fontSize : 24,
                           color : "#000000"
                           
                         }
                       }
                    >{key.text}</Text>
                    <Text
                       style={
                         {
                            fontSize : 18,
                            color : "#000000"
                         }
                       }
                    >{key.description}</Text>
                    <Text
                      style={
                        {
                          marginTop : 5,
                          color : "#000000"
                        }
                      }
                    >Starting at Rs.{key.price}</Text>
                    {
                       key.bestSeller==true?
                       <Text
                          style={
                            {
                              color : "#FFFFFF",
                              backgroundColor : "red",
                              marginRight : 120,
                              padding : 5,
                              marginTop : 5,
                            }
                          }
                       >Bestseller</Text>
                       :
                       <></>
                    }
                    </View>
                    <Image
                      source={pratha}
                      style = {
                        {
                           height : 140,
                           resizeMode : "stretch",
                           width : 130,
                           marginTop : 15,
                           
                        }
                      }
                    />
                  </View>
                </TouchableOpacity>
              ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  
  gridContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop : 21,
    marginBottom: 40,

  },
});
