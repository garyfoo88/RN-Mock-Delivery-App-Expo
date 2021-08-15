import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { data } from "../utils/dummyData";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin)

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => {
        return (
          /* disabled={!origin} */
          <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
            {/* style={tw`${!origin && "opacity-20"}`} */}
            <View>
              <Image
                style={{ width: 120, height: 120, resizeMode: "contain" }}
                source={item.image}
              />
              <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
              <Icon
                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                name="arrowright"
                color="white"
                type="antdesign"
              />
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
