import React,{useState} from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View ,
  TouchableOpacity,
  ScrollView,
} from 'react-native';



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

const screen1 = ({navigation}) => {
  var hours = new Date().getHours();
  var min = new Date().getMinutes();
  var currentTime = "";
  
  //console.log(min);
  //var currentTime = "";
  if(hours>=6 && (hours<=11 && min<59))
  {
     currentTime = "breakfast";
     //setItem('breakfast');
  }
  else if(hours>=12 && (hours<=16 && min<59))
  {
     currentTime = "lunch";
     //setItem('lunch');
  }
  else
  {
     currentTime = "dinner";
     //setItem('dinner');
  }
  const [itemSelected,setItem] = useState(`${currentTime}`);


  //console.log(hours);
  
  return (
    <>
      <ScrollView style={
        {
          flex : 1,
          marginBottom : 40,
        }
      }>
        <ScrollView
           horizontal = {true}
           pagingEnabled = {true}
           style = {
             {
                flexDirection : 'row',
             }
           }
        >
        <Text style={styles.banner}>Banner1/Swipe Right</Text>
        <Text style={styles.banner}>Banner2</Text>
        <Text style={styles.banner}>Banner3</Text>
        </ScrollView>
        <View style={
          {  
             marginTop : 25, 
             flexDirection : 'row',
             justifyContent : 'space-evenly',
             borderWidth : 3,
             borderColor : '#000000',
             marginLeft: 25,
             marginRight: 25,
             borderRadius: 5,
             paddingBottom : 5,
          }
        }>
          <TouchableOpacity
             onPress={
               ()=>{
                 setItem('breakfast');
                //setItem(`${currentTime}`);
                //currentTime = "breakfast";
               }
             }
          >
            <Text
               style = {
                 {
                   fontSize : 20,
                   color : 
                     itemSelected=="breakfast"?
                     "red":
                     "#000000"
                    ,
                    paddingRight : 15,                   
                 }
               }
            >Breakfast</Text>
          </TouchableOpacity>
          <TouchableOpacity
             onPress={
              ()=>{
                setItem('lunch');
                //setItem(`${currentTime}`);
                 //currentTime = "lunch";
              }
            }
          >
            <Text
              style = {
                {
                  fontSize : 20,
                  color : 
                     itemSelected=="lunch"?
                     "red":
                     "#000000"
                }
              }
            >Lunch    </Text>
          </TouchableOpacity>
          <TouchableOpacity
             onPress={
              ()=>{
                setItem('dinner');
                 //setItem(`${currentTime}`);
                 //currentTime = "dinner";
              }
            }
          >
            <Text
              style = {
                {
                  fontSize : 20,
                  color : 
                     itemSelected=="dinner"?
                     "red":
                     "#000000"
                }
              }
            >Dinner   </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.gridContainer}>
          {
             itemSelected=='breakfast'?
             breakfast.map(key=>(
              <TouchableOpacity 
              key={key.key} 
              onPress={()=>{
                 navigation.navigate('Screen 2',
                 {
                    itemSelected : `${key.text}`
                 }
                 );


              }} 
              >
              <Text
               style={
                 {  
                    height : 130,
                    width : 130,
                    fontSize : 30,
                    borderWidth : 3,
                    margin : 20,
                    textAlign : "center",
                    textAlignVertical : "center",
                    color : '#000000'
                    
                 }
               }
              >{key.text}</Text>  
             </TouchableOpacity>
           )):
           itemSelected=='lunch'?
           lunch.map(key=>(
            <TouchableOpacity 
            key={key.key} 
            onPress={()=>{
               navigation.navigate('Screen 2',
               {
                itemSelected : `${key.text}`
               }
               );

            }} 
            >
            <Text
             style={
               {  
                  height : 130,
                  width : 130,
                  fontSize : 30,
                  borderWidth : 3,
                  margin : 20,
                  textAlign : "center",
                  textAlignVertical : "center",
                  color : '#000000'
                  
               }
             }
            >{key.text}</Text>  
           </TouchableOpacity>
         )):
         dinner.map(key=>(
          <TouchableOpacity 
          key={key.key} 
          onPress={()=>{
             navigation.navigate('Screen 2',
             {
              itemSelected : `${key.text}`
             }
             );

          }} 
          >
          <Text
           style={
             {  
                height : 130,
                width : 130,
                fontSize : 30,
                borderWidth : 3,
                margin : 20,
                textAlign : "center",
                textAlignVertical : "center",
                color : '#000000'
                
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

export default screen1;

const styles = StyleSheet.create({
  banner: {
    height : 120,
    width : 365,
    fontSize: 30,
    textAlign: 'center',
    color : "#000000",
    marginTop: 30,
    borderWidth: 3,
    // paddingTop: 25,
    // paddingBottom: 25,
    marginLeft: 15,
    marginRight :12,
    borderRadius: 15,
  },
  gridContainer: {
    flex: 1,
    margin: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "flex-start",
    padding : 10,
    
  },
});
