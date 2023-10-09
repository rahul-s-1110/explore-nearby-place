import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Images } from "../../globalConstant/imagePath";
import CategoryItem from "./categoryItem";

const CategoryList = () => {
  const categoryList = [
    {
      id: 1,
      name: "Gas Station",
      value: "gas_station",
      icon: Images.petrolPum,
    },
    {
      id: 2,
      name: "Resturants",
      value: "resturants",
      icon: Images.food,
    },
    {
      id: 3,
      name: "Cafe",
      value: "cafe",
      icon: Images.cafe,
    },
  ];

  return (
    <View>
      <Text style={styles.head}>Select Top Category</Text>
      <FlatList
        horizontal={true}
        data={categoryList}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity >
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  head: {
    fontSize: 20,
    fontFamily: "raleway",
    marginTop: 15,
  },
});
