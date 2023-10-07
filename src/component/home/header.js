import { Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Images } from '../../globalConstant/imagePath'
import { colors } from '../../globalConstant/colors'

const Header = () => {
  return (
    <View style={{flexDirection:"row",display:"flex",justifyContent:"space-evenly",gap:10,alignItems:"center"}}>
      <Image source={Images.logo} style={styles.logo} />
      <View>
        <TextInput placeholder='Search..' style={styles.searchBar} />
      </View>
      <Image source={Images.placeholder} style={styles.userImg} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  logo:{
    height:50,width:50
  },
  searchBar:{
    borderWidth:1,
    borderColor:colors.blackfour80,
    padding:4,
    borderRadius:20,
    paddingLeft:10,
    width:Dimensions.get('screen').width*0.6
  },
  userImg:{
    width:50,height:50,
    borderRadius:25
  }
})