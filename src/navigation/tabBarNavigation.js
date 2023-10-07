import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Fev from "../screens/fev";
import Profile from "../screens/profile";
import Search from "../screens/search";
import { Entypo,MaterialIcons,EvilIcons,FontAwesome,Feather,AntDesign    } from "@expo/vector-icons";
import { colors } from "../globalConstant/colors";

const Tab = createBottomTabNavigator();
const TabNavigtion = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          headerShown:false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color={colors.darkBlack} />
            ) : (
                <AntDesign name="home" size={24} color={colors.darkBlack} />
            ),
        }}
      />
      <Tab.Screen name="fev" component={Fev}
       options={{
        tabBarLabel: "Favorite",
        headerShown:false,
        tabBarIcon: ({ focused }) =>
          focused ? (
            <MaterialIcons name="favorite" size={24} color={colors.darkBlack} />
          ) : (
            <MaterialIcons name="favorite-border" size={24} color={colors.darkBlack} />
          ),
      }}
      />
      <Tab.Screen name="profile" component={Profile}
      options={{
        tabBarLabel: "Profile",
        headerShown:false,
        tabBarIcon: ({ focused }) =>
          focused ? (
            <FontAwesome name="user" size={24} color={colors.darkBlack} />
          ) : (
            <EvilIcons name="user" size={24} color={colors.darkBlack} />
          ),
      }}
      />
      <Tab.Screen name="search" component={Search}
      options={{
        tabBarLabel: "Search",
        headerShown:false,
        tabBarIcon: ({ focused }) =>
          focused ? (
            <FontAwesome name="search" size={24} color={colors.darkBlack} />
          ) : (
            <Feather name="search" size={24} color={colors.darkBlack} />
          ),
      }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigtion;