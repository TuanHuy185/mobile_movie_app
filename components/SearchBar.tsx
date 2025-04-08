import { TextInput, View, Image } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface Props {
  placeholader: string;
  onPress?: () => void;
}

const SearchBar = ({ placeholader, onPress }: Props) => {
  return (
    <View className="flex-row items-center bg-drak-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholader}
        value=""
        onChangeText={() => {}}
        placeholderTextColor={"#a8b5db"}
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
