import { Image, Text, Touchable, View, TouchableOpacity } from "react-native";
import {Link} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import FeaturedCard from "@/components/FeaturedCard";
import Card from "@/components/Card";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center">
            <Image source={images.avatar} className="size-12 rounded-full"/>
            <View className="flex flex-col items-start ml-2 justify-center">
              <Text className="text-xs font-rubik text-black-100">Good mornig</Text>
              <Text className="text-base font-rubik-medium text-black-300">Viet</Text>
            </View>
          </View>
          <Image source={icons.bell} className="size-6"/>
        </View>

        <Search/>

        <View className="my-5">
          <View className="flex flex-row items-center justify-between">
              <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
              <TouchableOpacity>
                <Text className="text-base font-rubik-bold text-primary-300">See all</Text>
              </TouchableOpacity>
          </View>
        </View>

      </View>

      <FeaturedCard/>
      <Card/>
    </SafeAreaView>
  );
}
