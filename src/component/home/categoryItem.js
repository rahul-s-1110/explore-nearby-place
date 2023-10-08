import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { colors } from '../../globalConstant/colors'

const CategoryItem = ({category}) => {
  return (
    <View style={{padding:5,alignItems:"center",margin:5,width:100,height:100,backgroundColor:colors.white_six,justifyContent:"center",borderRadius:15,elevation:1}}>
        <Image style={{width:50,height:50}} source={category?.icon} />
      <Text style={{fontSize:13,fontFamily:'raleway'}}>{category?.name}</Text>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({})