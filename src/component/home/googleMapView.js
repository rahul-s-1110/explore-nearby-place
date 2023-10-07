import { View, Text,StyleSheet, Dimensions, PermissionsAndroid } from 'react-native'
import React, { useState } from 'react'
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';

export default function GoogleMapView() {

    const [mapRegion,setMapRegion] = useState({
       lattitude:27.046111,
       longitude:76.578866,
       lattitudeDelta: 0.0522,
       longitudeDelta:0.0421
    })  

  return (
    <View>
      <MapView style={styles.mapView} 
      showsMyLocationButton = {true}
        provider={PROVIDER_GOOGLE}  
        showsUserLocation={true}
        region={mapRegion}
    />
    </View>
  )
}

const styles = StyleSheet.create({
    mapView:{
        height:Dimensions.get('screen').height*0.23,
        width:Dimensions.get('screen').width*0.89,
        borderRadius:20,marginTop:20
    }
})