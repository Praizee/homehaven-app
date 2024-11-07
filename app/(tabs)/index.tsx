import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  TextInput,
  Modal,
} from "react-native";
import { useState } from "react";

import { Text, View } from "@/components/Themed";
import { tw } from "@/src/utils/tailwind";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const products = [
  {
    id: "1",
    title: "EKERÖ",
    price: 230.0,
    originalPrice: 419.58,
    rating: 4.9,
    reviews: 256,
    discount: 45,
    image: require("@/assets/images/ekero.png"),
  },
  {
    id: "2",
    title: "STRANDMON",
    price: 274.13,
    originalPrice: 856.6,
    rating: 4.8,
    reviews: 128,
    discount: 45,
    image: require("@/assets/images/strandmon.png"),
  },
  {
    id: "3",
    title: "STRANDMON",
    price: 24.99,
    originalPrice: 69.99,
    rating: 4.4,
    reviews: 189,
    discount: 45,
    image: require("@/assets/images/plattlans.png"),
  },
  {
    id: "4",
    title: "STRANDMON",
    price: 139.99,
    originalPrice: 254.53,
    rating: 4.3,
    reviews: 156,
    discount: 45,
    image: require("@/assets/images/malm.png"),
  },
];

export default function HomeScreen() {
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(
    "3517 W. Gray St. Utica, Penn..."
  );

  return (
    <SafeAreaView style={tw`flex-1 bg-neutral-20`}>
      <View style={tw`bg-transparent gap-2 mb-4`}>
        {/* Header Section */}
        <View
          style={tw`px-4 flex-row items-center gap-4 justify-between bg-transparent`}
        >
          <View style={tw`flex-1 flex-row items-center gap-4 bg-transparent`}>
            <View
              style={tw`flex-1 flex-row items-center bg-white border border-neutral-40 rounded-full px-4 py-2`}
            >
              <Pressable style={({ pressed }) => [pressed && tw`opacity-60`]}>
                <Ionicons name="search-sharp" size={20} color="black" />
              </Pressable>
              <TextInput
                placeholder="Search candles"
                placeholderTextColor="#9E9E9E"
                style={tw`flex-1 ml-2 text-neutral-90`}
              />
            </View>
            <Pressable style={({ pressed }) => [pressed && tw`opacity-60`]}>
              <Ionicons name="camera-outline" size={20} color="#404040" />
            </Pressable>
          </View>
          <Pressable style={({ pressed }) => [pressed && tw`opacity-60`]}>
            <FontAwesome name="bell-o" size={20} color="#404040" />
          </Pressable>
        </View>

        {/* Delivery Location Section */}
        <View style={tw`px-4 flex-row items-center gap-2 bg-transparent`}>
          <Ionicons name="location-outline" size={20} color="#404040" />
          <Pressable
            onPress={() => setIsLocationModalOpen(true)}
            style={({ pressed }) => [
              tw`flex-1 flex-row items-center justify-between`,
              pressed && tw`opacity-60`,
            ]}
          >
            <View style={tw`flex-row items-center gap-1 bg-transparent flex-1`}>
              <Text style={tw`text-neutral-90 text-sm`}>Deliver to</Text>
              <Text
                style={tw`text-neutral-90 font-bold text-sm flex-1`}
                numberOfLines={1}
              >
                {selectedLocation}
              </Text>
            </View>
            <Ionicons name="chevron-down" size={20} color="#404040" />
          </Pressable>
        </View>
      </View>

      {/* Location Selection Modal */}
      <Modal
        visible={isLocationModalOpen}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsLocationModalOpen(false)}
      >
        <Pressable
          style={tw`flex-1 bg-black/50`}
          onPress={() => setIsLocationModalOpen(false)}
        >
          <View style={tw`mt-auto bg-white rounded-t-3xl p-4`}>
            <View
              style={tw`flex-row justify-between items-center mb-4 bg-transparent`}
            >
              <Text style={tw`text-xl font-semibold text-neutral-90`}>
                Choose a delivery location
              </Text>
              <Pressable onPress={() => setIsLocationModalOpen(false)}>
                <Ionicons name="close" size={20} color="#404040" />
              </Pressable>
            </View>

            {/* 'Placeholder location options */}
            {[
              "3517 W. Gray St. Utica, Pennsylvania",
              "2715 Ash Dr. San Jose, South Dakota",
              "2972 Westheimer Rd. Santa Ana, Illinois",
            ].map((address, index) => (
              <Pressable
                key={index}
                style={({ pressed }) => [
                  tw`flex-row items-center gap-2 py-4 border-b border-neutral-40`,
                  pressed && tw`opacity-50`,
                ]}
                onPress={() => {
                  setSelectedLocation(
                    address.length > 35
                      ? address.substring(0, 35) + "..."
                      : address
                  );
                  setIsLocationModalOpen(false);
                }}
              >
                <Ionicons name="location-outline" size={20} color="#404040" />
                <Text style={tw`text-neutral-90`}>{address}</Text>
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>

      <ScrollView>
        {/* Banner Section */}
        <View style={tw`bg-primary p-6 h-[199px]`}>
          <Text style={tw`text-white text-3xl font-bold`}>
            Celebrate The{"\n"}Season With Us!
          </Text>
          <Text style={tw`text-white mt-2`}>
            Get discounts up to 75% for{"\n"}furniture & decoration
          </Text>

          <Pressable
            onPress={() => router.push("/(tabs)/cart")}
            style={({ pressed }) => [
              tw`bg-white rounded-full px-6 py-2 mt-4 self-start`,
              pressed && tw`opacity-50`,
            ]}
          >
            <Text style={tw`text-primary font-semibold`}>Shop Now</Text>
          </Pressable>
        </View>

        <View style={tw`p-4 pb-6 bg-transparent gap-6`}>
          {/* Special Offers Section */}
          <View style={tw`bg-transparent gap-3`}>
            <View
              style={tw`flex-row justify-between items-center bg-transparent`}
            >
              <Text style={tw`text-2xl font-semibold text-neutral-90`}>
                Special Offers
              </Text>

              <Pressable style={({ pressed }) => [pressed && tw`opacity-60`]}>
                <Text style={tw`text-primary underline font-semibold`}>
                  See More
                </Text>
              </Pressable>
            </View>

            {/* products list */}
            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
              {products.map((product) => (
                <View
                  key={product.id}
                  style={tw`mr-4 bg-white rounded-lg p-4 shadow-md shadow-[#0000001A] w-[152px]`}
                >
                  <View style={tw`bg-transparent relative`}>
                    <View
                      style={tw`absolute -bottom-2 left-0 z-10 bg-red-500 px-[6px] py-[3px] rounded-br-xl rounded-tl-xl`}
                    >
                      <Text style={tw`text-white text-[10px]`}>
                        {product.discount}% OFF
                      </Text>
                    </View>
                    <Image
                      source={product.image}
                      style={tw`size-[112px] mb-2`}
                      resizeMode="contain"
                    />
                  </View>

                  <View style={tw`flex-col gap-0.5 bg-transparent mt-4`}>
                    <Text style={tw`text-neutral-90 text-sm`}>
                      {product.title}
                    </Text>
                    <Text style={tw`text-lg text-neutral-90 font-bold`}>
                      ${product.price.toFixed(2)}
                    </Text>
                    <Text style={tw`text-neutral-90 line-through text-xs`}>
                      ${product.originalPrice.toFixed(2)}
                    </Text>
                    <View
                      style={tw`flex-row items-center gap-1 mt-1 bg-transparent`}
                    >
                      <FontAwesome name="star" size={18} color="#EBB65B" />
                      <Text style={tw`text-neutral-90 text-xs`}>
                        {product.rating}
                      </Text>
                      <Text style={tw`text-neutral-90 text-xs`}>
                        ({product.reviews})
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>

          {/* Shop by categories */}
          <View style={tw`bg-transparent`}>
            <Text style={tw`text-2xl font-semibold text-neutral-90 mb-4`}>
              Shop by Categories
            </Text>

            <View style={tw`flex-row flex-wrap gap-4 bg-transparent`}>
              {/* Outdoor Category */}
              <Pressable
                style={({ pressed }) => [
                  tw`bg-[#E0F0E3] rounded-2xl p-4 flex-row items-center justify-center gap-2 w-[153px] h-[100px]`,
                  pressed && tw`opacity-60`,
                ]}
              >
                <Image
                  source={require("@/assets/images/grill-icon.png")}
                  style={tw`size-[28px]`}
                  resizeMode="contain"
                />
                <Text style={tw`text-[#3E7F4A] font-medium`}>Outdoor</Text>
              </Pressable>

              {/* Appliances Category */}
              <Pressable
                style={({ pressed }) => [
                  tw`bg-[#DEEBFF] rounded-2xl p-4 flex-row items-center justify-center gap-2 w-[153px] h-[100px]`,
                  pressed && tw`opacity-60`,
                ]}
              >
                <Image
                  source={require("@/assets/images/appliance-icon.png")}
                  style={tw`size-[28px]`}
                  resizeMode="contain"
                />
                <Text style={tw`text-[#1565C0] font-medium`}>Appliances</Text>
              </Pressable>

              {/* Furniture Category */}
              <Pressable
                style={({ pressed }) => [
                  tw`bg-[#FFEBC2] rounded-2xl p-4 flex-row items-center justify-center gap-2 w-[153px] h-[100px]`,
                  pressed && tw`opacity-60`,
                ]}
              >
                <Ionicons name="bed-outline" size={32} color="#E65100" />
                <Text style={tw`text-[#E65100] font-medium text-sm`}>
                  Furniture
                </Text>
              </Pressable>

              {/* See More Category */}
              <Pressable
                style={({ pressed }) => [
                  tw`bg-[#EEEEEE] rounded-2xl p-4 flex-row items-center justify-center gap-2 w-[153px] h-[100px]`,
                  pressed && tw`opacity-60`,
                ]}
              >
                <Ionicons
                  name="ellipsis-horizontal"
                  size={24}
                  color="#424242"
                  style={tw`p-1 bg-[#E0E0E0] rounded-full`}
                />
                <Text style={tw`text-[#424242] font-medium`}>See More</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>

      <StatusBar style={Platform.OS === "ios" ? "light" : "dark"} />
    </SafeAreaView>
  );
}
