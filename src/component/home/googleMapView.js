import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  PermissionsAndroid,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { userLocationContext } from "../../context/userLocationContext";

export default function GoogleMapView() {
  const [mapRegion, setMapRegion] = useState([]);

  const { location, setLocation } = useContext(userLocationContext);

  useEffect(()=>{
    if(location)
    {
      setMapRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0422,
            longitudeDelta: 0.0421,
        })
    }
  },[location])

  return (
    <View style={{marginTop:20}} >
      <Text style={{fontSize:20,fontWeight:"600"}}>Top NearBy Places</Text>
      <MapView
        style={styles.mapView}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={mapRegion}
      >
        {console.log("mapRegion",mapRegion)}
        <Marker title="You" coordinate={mapRegion}  />
      </MapView>
    </View>
  );
} 

const styles = StyleSheet.create({
  mapView: {
    height: Dimensions.get("screen").height * 0.23,
    width: Dimensions.get("screen").width * 0.89,
    borderRadius: 20,
    marginTop: 20,
  },
});
