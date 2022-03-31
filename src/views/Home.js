import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Feather from "react-native-vector-icons/Feather"
import CarService from './Serive'
import Card from './Card'
import { useFocusEffect } from '@react-navigation/native'


export default function Home({navigation}) {
    const [cars,setCars] =useState("")
    useEffect(()=>{
        CarService.getCar().then(res=>{
            setCars(res.data)  
        })
      
    },[])

    const deleteCar=(id)=>{
        CarService.deleteCar(id).then((res)=>{
            setCars(cars.filter((car)=>car.id !=id))
            console.log("dleted record with id " + id)
        })
        //console.log(id)
    }
     
  return (
    <View style={{backgroundColor:"white",flex:1}}>
       <View style={{justifyContent:"center",alignItems:"center",marginVertical:20}}>
           <Text style={{color:"black",fontSize:20,fontWeight:"bold"}}>Cars List</Text>
       </View>
      <FlatList 
      keyExtractor={(item,index)=> index.toString()}
      data={cars}
      renderItem={({item})=><Card cars={item} navigation={navigation} deleteCar={deleteCar}/>}
      />
        <TouchableOpacity
      style={styles.button}
      onPress={()=>navigation.navigate("create",{...cars,update:false})}
      >
      <Feather  name="plus-circle" size={30} color="white"/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button:{
        width:60,
        height:60,
        backgroundColor:"blue",
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        bottom:20,
        right:10

    }
})