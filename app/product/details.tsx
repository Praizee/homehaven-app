import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  SafeAreaView,
  Platform,
} from "react-native";
import { tw } from "@/src/utils/tailwind";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";

export default function ProductDetailsScreen() {
  const [heartFilled, setHeartFilled] = useState(false);
  const [sizeDetailsVisible, setSizeDetailsVisible] = useState(true);
  const [descriptionVisible, setDescriptionVisible] = useState(true);

  return (
    <SafeAreaView style={tw`flex-1 py-2 bg-neutral-20`}>
      <ScrollView contentContainerStyle={tw`pb-18`}>
        <View style={tw`pt-[72px] gap-4`}>
          <Image
            source={require("@/assets/images/ekero-preview.png")}
            style={tw`size-[264px] mx-auto`}
            resizeMode="contain"
          />

          {/* Thumbnail */}
          <View style={tw`flex-row gap-4 mx-auto p-3`}>
            <Pressable style={({ pressed }) => [pressed && tw`opacity-60`]}>
              <Image
                source={require("@/assets/images/thumbnail-0.png")}
                style={tw`size-[54px] border-[2px] border-primary rounded-xl`}
                resizeMode="cover"
              />
            </Pressable>
            <Pressable style={({ pressed }) => [pressed && tw`opacity-60`]}>
              <Image
                source={require("@/assets/images/thumbnail-2.png")}
                style={tw`size-[54px] rounded-xl`}
                resizeMode="cover"
              />
            </Pressable>
            <Pressable style={({ pressed }) => [pressed && tw`opacity-60`]}>
              <Image
                source={require("@/assets/images/thumbnail-3.png")}
                style={tw`size-[54px] rounded-xl`}
                resizeMode="cover"
              />
            </Pressable>
          </View>
        </View>

        <View
          style={tw`py-4 gap-4 bg-white rounded-t-[17px] shadow-lg shadow-[#0000001A]`}
        >
          {/* Product Title and Price */}
          <View style={tw`gap-1 pb-4 px-4 border-b border-neutral-40`}>
            <Text style={tw`text-neutral-90 text-base`}>EKERÖ</Text>
            <View style={tw`flex-row gap-2 items-center`}>
              <Text style={tw`text-3xl text-neutral-90 font-extrabold`}>
                $230.00
              </Text>
              <Text style={tw`text-neutral-90 line-through text-sm`}>
                $512.58
              </Text>
              <View
                style={tw`bg-red-500 px-[6px] py-[3px] rounded-br-xl rounded-tl-xl`}
              >
                <Text style={tw`text-white text-xs`}>45% OFF</Text>
              </View>
            </View>

            <View style={tw`flex-row items-center gap-1 bg-transparent`}>
              <FontAwesome name="star" size={18} color="#EBB65B" />
              <Text style={tw`text-neutral-90 text-xs`}>4.9</Text>
              <Text style={tw`text-neutral-90 text-xs`}>(256)</Text>
            </View>

            <Text style={tw`text-neutral-90 text-base`}>
              A minimalist chair with a reversible back cushion provides soft
              support for your back and has two sides to wear.
            </Text>
          </View>

          {/* Colors Section */}
          <View style={tw`gap-2 pb-4 px-4 border-b border-neutral-40`}>
            <Text style={tw`text-lg font-bold`}>Colors</Text>

            <View style={tw`flex-row gap-4 flex-wrap`}>
              <Pressable
                style={({ pressed }) => [
                  tw`bg-white border border-primary rounded-lg p-2 flex-row gap-2 items-center h-[51px] w-[153px]`,
                  pressed && tw`opacity-60`,
                ]}
              >
                <View style={tw`size-[35px] rounded-lg bg-harvest-gold`} />
                <Text style={tw`text-center text-sm text-neutral-90`}>
                  Harvest Gold
                </Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  tw`bg-white border border-neutral-40 rounded-lg p-2 flex-row gap-2 items-center h-[51px] w-[153px]`,
                  pressed && tw`opacity-60`,
                ]}
              >
                <View style={tw`size-[35px] rounded-lg bg-eerie-black`} />
                <Text style={tw`text-center text-sm text-neutral-90`}>
                  Eerie Black
                </Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  tw`bg-white border border-neutral-40 rounded-lg p-2 flex-row gap-2 items-center h-[51px] w-[153px]`,
                  pressed && tw`opacity-60`,
                ]}
              >
                <View style={tw`size-[35px] rounded-lg bg-flame`} />
                <Text style={tw`text-center text-sm text-neutral-90`}>
                  Flame
                </Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  tw`bg-white border border-neutral-40 rounded-lg p-2 flex-row gap-2 items-center h-[51px] w-[153px]`,

                  pressed && tw`opacity-60`,
                ]}
              >
                <View style={tw`size-[35px] rounded-lg bg-pakistan-green`} />
                <Text style={tw`text-center text-sm text-neutral-90`}>
                  Pakistan Green
                </Text>
              </Pressable>
            </View>
          </View>

          {/* Product Description */}
          <View style={tw`gap-2 pb-4 px-4 border-b border-neutral-40`}>
            <Pressable
              style={({ pressed }) => [
                tw`flex-row gap-8 items-center justify-between`,
                pressed && tw`opacity-60`,
              ]}
              onPress={() => setDescriptionVisible(!descriptionVisible)}
            >
              <Text style={tw`text-lg font-bold text-neutral-90`}>
                Product Description
              </Text>
              <FontAwesome
                name="chevron-down"
                size={18}
                color="#404040"
                style={{
                  transform: [
                    { rotate: descriptionVisible ? "180deg" : "0deg" },
                  ],
                }}
              />
            </Pressable>

            {descriptionVisible && (
              <Text style={tw`text-neutral-90`}>
                Choose a stylish dark color or brighten up your home with
                colorful sarongs. The EKERÖ armchair has a sleek and modern look
                with two sides that meet at the back – and a waist support for
                added comfort!
              </Text>
            )}
          </View>

          {/* Size Details */}
          <View style={tw`gap-2 pb-4 px-4`}>
            <Pressable
              style={({ pressed }) => [
                tw`flex-row gap-8 items-center justify-between`,
                pressed && tw`opacity-60`,
              ]}
              onPress={() => setSizeDetailsVisible(!sizeDetailsVisible)}
            >
              <Text style={tw`text-lg font-bold text-neutral-90`}>Size</Text>
              <FontAwesome
                name="chevron-down"
                size={18}
                color="#404040"
                style={{
                  transform: [
                    { rotate: sizeDetailsVisible ? "180deg" : "0deg" },
                  ],
                }}
              />
            </Pressable>
            {sizeDetailsVisible && (
              <View style={tw`gap-2`}>
                <View
                  style={tw`flex-row justify-between gap-4 pb-2 border-b border-neutral-40`}
                >
                  <Text style={tw`text-neutral-90`}>Width:</Text>
                  <Text style={tw`text-neutral-90`}>70 cm</Text>
                </View>
                <View
                  style={tw`flex-row justify-between gap-4 pb-2 border-b border-neutral-40`}
                >
                  <Text style={tw`text-neutral-90`}>Depth:</Text>
                  <Text style={tw`text-neutral-90`}>73 cm</Text>
                </View>
                <View
                  style={tw`flex-row justify-between gap-4 pb-2 border-b border-neutral-40`}
                >
                  <Text style={tw`text-neutral-90`}>Height:</Text>
                  <Text style={tw`text-neutral-90`}>75 cm</Text>
                </View>
                <View
                  style={tw`flex-row justify-between gap-4 pb-2 border-b border-neutral-40`}
                >
                  <Text style={tw`text-neutral-90`}>Seat Width:</Text>
                  <Text style={tw`text-neutral-90`}>57 cm</Text>
                </View>
                <View
                  style={tw`flex-row justify-between gap-4 pb-2 border-b border-neutral-40`}
                >
                  <Text style={tw`text-neutral-90`}>Seat Depth:</Text>
                  <Text style={tw`text-neutral-90`}>46 cm</Text>
                </View>
                <View
                  style={tw`flex-row justify-between gap-4 pb-2 border-b border-neutral-40`}
                >
                  <Text style={tw`text-neutral-90`}>Seat Height:</Text>
                  <Text style={tw`text-neutral-90`}>43 cm</Text>
                </View>
              </View>
            )}
          </View>

          {/* sketch image */}
          <View>
            <Image
              source={require("@/assets/images/sketch.png")}
              style={tw`w-[343px] h-[335px] mx-auto`}
              resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>

      {/* Add to Cart Button */}
      <View
        style={tw`absolute bottom-0 left-0 right-0 border-t border-neutral-40 flex-row gap-4 items-center bg-white p-4 shadow-lg shadow-[#00000024] rounded-t-[14px]`}
      >
        <Pressable
          style={({ pressed }) => [
            tw`border border-primary rounded-lg p-3`,
            pressed && tw`opacity-70`,
          ]}
          onPress={() => setHeartFilled(!heartFilled)}
        >
          <FontAwesome
            name={heartFilled ? "heart" : "heart-o"}
            size={20}
            color="#156651"
          />
        </Pressable>
        <Pressable
          onPress={() => router.push(`/(tabs)/cart`)}
          style={({ pressed }) => [
            tw`bg-primary rounded-lg py-3 px-6 flex-1`,
            pressed && tw`opacity-60`,
          ]}
        >
          <Text style={tw`text-white text-center font-bold text-base`}>
            Add to Cart
          </Text>
        </Pressable>
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "dark"} />
    </SafeAreaView>
  );
}
