import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../component/home/header'
import GoogleMapView from '../component/home/googleMapView'

const Home = () => {
  return (
    <View style={{paddingTop:30,paddingHorizontal:20}}>
      <Header />
      <GoogleMapView />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})