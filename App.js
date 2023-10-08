import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TabNavigtion from "./src/navigation/tabBarNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import * as Location from 'expo-location';
import { useFonts } from 'expo-font';
import { userLocationContext } from "./src/context/userLocationContext";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [fontsLoaded] = useFonts({
    'raleway': require('./src/assets/Fonts/Raleway-Regular.ttf'),
    'raleway-bold': require('./src/assets/Fonts/Raleway-SemiBold.ttf'),

  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <userLocationContext.Provider value={{location,setLocation}}>
      <NavigationContainer>
        <TabNavigtion />
      </NavigationContainer>
      </userLocationContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
