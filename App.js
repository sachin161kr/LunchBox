import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MyTab from './bottomNavigation';

const MyStack = ()=>{
  return(
    <NavigationContainer>
      <MyTab/>
    </NavigationContainer>
  )
}

export default MyStack;