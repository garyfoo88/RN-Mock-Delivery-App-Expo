import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { navFavData } from "../utils/dummyData";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const NavFavourites = () => {
  return (
    <FlatList
      data={navFavData}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity style={tw`mr-4 rounded-full bg-gray-300 p-3`}>
            <Icon
              style={tw`mr-4 rounded-full bg-gray-300 p-3`}
              name={item.icon}
              type="ionicon"
              color="white"
              size={18}
            />
            <View>
              <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
              <Text style={tw`text-gray-500`}>{item.destination}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
