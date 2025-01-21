import { View, Text, SafeAreaView, ScrollView, Image, Platform } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import icons from '@/constants/icons'
import images from '@/constants/images'
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Property = () => {
    const { id } = useLocalSearchParams()
  return (
    <ScrollView>
    <View className='relative w-full' style={{height: windowHeight/2}}>
      <Image source={images.japan} className='size-full' resizeMode='cover'/>
      <Image
        source={images.whiteGradient}
        className="absolute top-0 w-full z-40"
      />
      <View
        className="z-50 absolute inset-x-7"
        style={{
          top: Platform.OS === "ios" ? 70 : 20,
        }}
      >

      <View className='flex flex-row justify-between'>
        <View className='flex flex-row items-center'>
            <Image source={icons.backArrow} className='size-8'/>
        </View>
        <View className='flex flex-row items-center justify-between gap-5'>
            <Image source={icons.send} className='size-8'/>
            <Image source={icons.heart} className='size-8' tintColor={"#191D31"}/>
        </View>
      </View>
      </View>
    </View>

    <View className='w-full flex flex-col gap-5 mt-5 ml-5'>
      <Text className='text-xl font-rubik-extrabold text-black-300'>
        Property Name
      </Text>

      <View className='flex flex-row items-center'>
        <View className="items-start mr-4 px-4 py-2 rounded-full bg-slate-200">
          <Text className="text-sm text-blue-700 font-rubik-bold">Apartment</Text>
        </View>
        <View className='flex flex-row items-center gap-2'>
          <Image source={icons.star} />
          <Text className='text-slate-600 font-rubik-medium'>4.8(1000 reviews)</Text>
        </View>
      </View>

      <View className='flex flex-row items-center justify-start gap-7'>
        <View className='flex flex-row items-center'>
          <View className='rounded-full bg-slate-300 w-10 h-10 justify-center items-center'>
            <Image source={icons.bed} className='size-5'/>
          </View>
          <Text className='text-black-600 font-rubik-medium ml-3'>8 Beds</Text>
        </View>
        <View className='flex flex-row items-center'>
          <View className='rounded-full bg-slate-300 w-10 h-10 justify-center items-center'>
            <Image source={icons.bed} className='size-5'/>
          </View>
          <Text className='text-black-600 font-rubik-medium ml-3'>8 Beds</Text>
        </View>
        <View className='flex flex-row items-center'>
          <View className='rounded-full bg-slate-300 w-10 h-10 justify-center items-center'>
            <Image source={icons.bed} className='size-5'/>
          </View>
          <Text className='text-black-600 font-rubik-medium ml-3'>8 Beds</Text>
        </View>
      </View>
    </View>

    <View className='px-5'>
      <View className="w-full border-t border-primary-200 pt-7 mt-5">
        <Text className="text-black-300 text-xl font-rubik-bold">
          Agent
        </Text>

        <View className="flex flex-row items-center justify-between mt-4">
          <View className="flex flex-row items-center">
            <Image
              source={images.avatar}
              className="size-14 rounded-full"
            />

            <View className="flex flex-col items-start justify-center ml-3">
              <Text className="text-lg text-black-300 text-start font-rubik-bold">
                Agent Name
              </Text>
              <Text className="text-sm text-black-200 text-start font-rubik-medium">
                agent@gmail.com
              </Text>
            </View>
          </View>

          <View className="flex flex-row items-center justify-between gap-3">
            <Image
              source={icons.chat}
              className="size-7"
            />
            <Image
              source={icons.phone}
              className="size-7"
            />
          </View>
        </View>
      </View>

      <View className='mt-7'>
        <Text className='text-black-300 text-xl font-rubik-bold'>Overview</Text>
        <Text className='text-black-200 text-base font-rubik mt-2'>
          This is the desciprion
        </Text>
      </View>
    </View>

    
    </ScrollView>
  )
}

export default Property