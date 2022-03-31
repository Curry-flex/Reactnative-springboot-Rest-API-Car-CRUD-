/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { AsyncStorage, LogBox } from 'react-native';

// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();
 import { createDrawerNavigator } from '@react-navigation/drawer';
//import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import React,{useState,useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AsyncStorage1 from '@react-native-async-storage/async-storage'
import PushNotification from "react-native-push-notification";



import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
  Button,
  Modal,
  Platform,
  Linking,
  RefreshControl,
  FlatList,
  TextInput,
  Pressable,
  Image

} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';
import fav from './fav.jpeg'
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import Create from './src/views/Create';
import Home from './src/views/Home';





const Tab = createBottomTabNavigator()
const Stack =createStackNavigator()

const App = () => {
 

  return (
  
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen 
       name="home"
       component={Home}
       />
       <Stack.Screen 
       name="create"
       component={Create}
       />
     </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App

