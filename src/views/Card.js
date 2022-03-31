import { ScrollView, StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import React from 'react'
import Fontawesome5 from "react-native-vector-icons/FontAwesome5"

export default function Card({cars,deleteCar,navigation}) {
  return (
    <View style={{flex:1}}>
    <ScrollView >
      <View style={styles.container}>
        <Text style={{color:"darkblue",fontSize:16,fontWeight:"bold"}}>Car Name: {cars.car_name}</Text>
        <Text style={{color:"grey",fontSize:16,fontWeight:"bold"}}>Car Model: {cars.car_model}</Text>
        <Text style={{color:"grey",fontSize:14,fontWeight:"bold"}}>Car Price: {cars.car_price}</Text>
        <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:10}}>
          <TouchableOpacity style={styles.icon}
           onPress={()=> navigation.navigate("create",{...cars,update:true})}
          >
          <Fontawesome5 name="pen" size={18} color="blue"/>   
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.icon}
          onPress={()=>deleteCar(cars.id)}
          >
          <Fontawesome5 name="trash" size={18} color="red"/>
          </TouchableOpacity>
         
         
        </View>
      
      </View>
    </ScrollView>

      </View>
  
  )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal:20,
        marginVertical:5,
        elevation:15,
        height:120,
        backgroundColor:"white",
        padding:10,
        zIndex:100
    },
    
    icon:{
        width:50,
        height:35,
        backgroundColor:"transparent",
        alignItems:"center",
        justifyContent:"center"
    }
})