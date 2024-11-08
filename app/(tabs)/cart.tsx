import { Platform, Pressable, Image, ScrollView } from "react-native";
import { useState } from "react";

import { Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { tw } from "@/src/utils/tailwind";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { products } from "@/data/products";

export default function CartScreen() {
  const [quantity, setQuantity] = useState(1);
  const [heartFilled, setHeartFilled] = useState(false);

  return (
    <SafeAreaView style={tw`flex-1 bg-neutral-20 px-4 pt-2`}>
      <ScrollView style={tw``}>
        {/* heading */}
        <View
          style={tw`bg-transparent flex-row items-center gap-4 justify-between`}
        >
          <Text style={tw`text-neutral-90 text-2xl  font-semibold`}>
            My Cart
          </Text>

          <Pressable style={({ pressed }) => [pressed && tw`opacity-60`]}>
            <FontAwesome name="bell-o" size={24} color="#404040" />
          </Pressable>
        </View>

        {/* Cart Items */}
        <View style={tw`gap-4 bg-transparent mt-6 pb-4`}>
          {products.map((product) => (
            <View
              key={product.id}
              style={tw`bg-white p-4 rounded-lg flex-row gap-5 items-center`}
            >
              <Image
                source={product.image}
                style={tw`size-[100px]`}
                resizeMode="contain"
              />

              <View style={tw`gap-1 bg-transparent flex-1`}>
                <Text style={tw`text-neutral-90 text-base font-medium`}>
                  {product.title}
                </Text>
                <Text style={tw`text-neutral-90 font-bold text-2xl`}>
                  ${product.price.toFixed(2)}
                </Text>
                <View style={tw`flex-row gap-2 items-center bg-transparent`}>
                  <Text style={tw`text-neutral-90 line-through text-sm`}>
                    ${product.originalPrice.toFixed(2)}
                  </Text>
                  <View
                    style={tw`bg-red-500 px-[6px] py-[3px] rounded-br-xl rounded-tl-xl`}
                  >
                    <Text style={tw`text-white text-xs`}>
                      {product.discount}% OFF
                    </Text>
                  </View>
                </View>

                <Text style={tw`text-neutral-60 text-sm`}>Color</Text>

                <View
                  style={tw`flex-row items-center gap-8 justify-between bg-transparent`}
                >
                  <Pressable
                    style={({ pressed }) => [
                      tw`flex-none`,
                      pressed && tw`opacity-70`,
                    ]}
                    onPress={() => setHeartFilled(!heartFilled)}
                  >
                    <FontAwesome
                      name={heartFilled ? "heart" : "heart-o"}
                      size={20}
                      color="#9E9E9E"
                    />
                  </Pressable>

                  {/* Increment */}
                  <View
                    style={tw`flex-1 w-full flex-row items-center gap-2 justify-between bg-transparent border border-neutral-40 rounded-lg p-2 px-3`}
                  >
                    <Pressable
                      onPress={() => setQuantity(quantity - 1)}
                      style={({ pressed }) => [pressed && tw`opacity-60`]}
                      disabled={quantity <= 1}
                    >
                      <FontAwesome name="minus" size={24} color="#156651" />
                    </Pressable>
                    <Text style={tw`text-base text-neutral-90 font-medium`}>
                      {quantity}
                    </Text>
                    <Pressable
                      onPress={() => setQuantity(quantity + 1)}
                      style={({ pressed }) => [pressed && tw`opacity-60`]}
                    >
                      <FontAwesome name="plus" size={24} color="#156651" />
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <StatusBar style={Platform.OS === "ios" ? "light" : "dark"} />
    </SafeAreaView>
  );
}
