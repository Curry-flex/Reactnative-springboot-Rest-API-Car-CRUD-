import { SafeAreaView, StatusBar, StyleSheet, Text, View,Image, ScrollView, FlatList, Dimensions, Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput,Button } from 'react-native-paper'

const {width} =Dimensions.get("screen")
import CarService from './Serive'

export default function Create({navigation,route}) {
  const carInfo= route.params
 // console.log(carData)
  const[carName,setCarName]=useState('')
  const[carModel,setCarModel]=useState('')
  const[carPrice,setCarPrice]=useState('')
  const[carNumber,setCarNumber]=useState('')

  useEffect(()=>{
  
    if(carInfo.update ==false)
    {
      return
    }
    else{
      CarService.getCarByID(carInfo.id).then((res)=>{
        let carData =res.data
       // console.log("car info " + carData)
        setCarName(carData.car_name)
        setCarModel(carData.car_model)
        setCarPrice(carData.car_price)
        setCarNumber(carData.car_number)
      })
    }
  },[])

  const createNewCar=()=>{

    
    if(carInfo.update ==true)
    {
      let car={
        car_name:carName,
        car_model:carModel,
        car_price:carPrice,
        car_number:carNumber 
    }
      if(carName=="" || carModel =="" || carPrice =="" || carNumber=="")
      {
        alert("input all required filed")
      }
      else{
        CarService.updateCar(car,carInfo.id).then((res)=>{
          Alert.alert("success","Record updatetd successfully",[{text:"ok",onPress:()=>navigation.navigate("home")}])
        }).catch(error=>console.log(error.message))
       
        setCarName("")
        setCarModel("")
        setCarPrice("")
        setCarNumber("")
  
      }
      
    }else if(carInfo.update==false){
      let car={
        car_name:carName,
        car_model:carModel,
        car_price:carPrice,
        car_number:carNumber 
    }
      if(carName=="" || carModel =="" || carPrice =="" || carNumber=="")
      {
        alert("input all required filed")
      }
      else{
        CarService.createCar(car).then((res)=>{
          Alert.alert("success","Record added successfully",[{text:"ok",onPress:()=>navigation.navigate("home")}])
        }).catch(error=>console.log(error.message))
       
        setCarName("")
        setCarModel("")
        setCarPrice("")
        setCarNumber("")
  
      }
     

    }
   
 
     
  }
  return (
    <SafeAreaView style={{backgroundColor:"white" ,flex:1}}>
    <View style={styles.container}>
      <View style={{alignItems:"center",justifyContent:"center"}}>
        <Text style={{color:"black",fontSize:30,fontWeight:"bold"}}>Fill Car Details</Text>
      </View>
    <TextInput  
      label="car name"
       value={carName}
       mode="outlined"
      onChangeText={(carName)=>setCarName(carName)}
      style={styles.input}
      />
      <TextInput  
      label="car model"
      value={carModel}
      mode="outlined"
      onChangeText={(carModel)=>setCarModel(carModel)}
      style={styles.input}
      />
      <TextInput  
     label="car Price"
     value={carPrice}
     mode="outlined"
      onChangeText={(carPrice)=>setCarPrice(carPrice)}
      style={styles.input}
      />
      <TextInput  
      label="car number"
      value={carNumber}
      mode="outlined"
      onChangeText={(carNumber)=>setCarNumber(carNumber)}
      style={styles.input}
      />

   <Button  mode="contained" onPress={() => createNewCar()}>
    {carInfo.update ? "update car" : "save car"}
  </Button>
     
      
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    input:{
      marginBottom:10,
      color:"black"
    },
    container:{
      paddingHorizontal:20,
   
    }
})