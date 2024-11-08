import {
  Image,
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
} from "react-native";

import { Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { tw } from "@/src/utils/tailwind";
import { StatusBar } from "expo-status-bar";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function AccountScreen() {
  return (
    <ScrollView style={tw`flex-1 bg-neutral-20`}>
      <View style={tw`w-full h-1/4 max-h-[152px]`}>
        <ImageBackground
          source={require("@/assets/images/profile-bg.png")}
          style={tw`size-full`}
          resizeMode="cover"
        >
          <View style={tw`bg-transparent relative size-full`}>
            <SafeAreaView
              style={tw`px-4 pt-2 bg-transparent flex-row items-center gap-4 justify-between`}
            >
              <Text style={tw`text-white text-2xl  font-semibold`}>
                My Account
              </Text>

              <Pressable style={({ pressed }) => [pressed && tw`opacity-60`]}>
                <FontAwesome name="bell-o" size={24} color="white" />
              </Pressable>
            </SafeAreaView>

            {/* profile */}
            <View
              style={tw`bg-white w-[343px] flex-row items-center justify-between gap-8 rounded-2xl p-4 bg-white shadow shadow-[#0000001A] absolute left-2 -bottom-10`}
            >
              <View style={tw`flex-row gap-4 items-center bg-transparent`}>
                <Image
                  source={require("@/assets/images/user-profile.png")}
                  style={tw`size-[58px] rounded-full`}
                  resizeMode="contain"
                />
                <View style={tw`flex-col gap-1 bg-transparent`}>
                  <Text style={tw`text-neutral-90 text-xl font-bold`}>
                    Claire Cooper
                  </Text>
                  <Text style={tw`text-neutral-70 text-sm`}>
                    claire.cooper@mail.com
                  </Text>
                </View>
              </View>

              <Pressable style={({ pressed }) => [pressed && tw`opacity-60`]}>
                <FontAwesome name="edit" size={24} color="#404040" />
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View style={tw`px-4 pt-14 bg-transparent`}>
        {/* general */}
        <View style={tw`gap-4 bg-transparent`}>
          <Text style={tw`text-neutral-90 text-base font-bold`}>General</Text>

          <Pressable
            style={({ pressed }) => [
              tw`bg-white shadow-lg shadow-[#0000001A] rounded-xl p-4 w-full flex-row gap-4 items-center`,
              pressed && tw`opacity-70`,
            ]}
          >
            <Ionicons name="receipt-outline" size={24} color="#404040" />
            <Text style={tw`text-neutral-90 text-base flex-1`}>
              Transaction
            </Text>
            <Ionicons name="chevron-forward" size={24} color="#404040" />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              tw`bg-white shadow-lg shadow-[#0000001A] rounded-xl p-4 w-full flex-row gap-4 items-center`,
              pressed && tw`opacity-70`,
            ]}
          >
            <FontAwesome name="heart-o" size={24} color="#404040" />
            <Text style={tw`text-neutral-90 text-base flex-1`}>Wishlist</Text>
            <Ionicons name="chevron-forward" size={24} color="#404040" />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              tw`bg-white shadow-lg shadow-[#0000001A] rounded-xl p-4 w-full flex-row gap-4 items-center`,
              pressed && tw`opacity-70`,
            ]}
          >
            <Ionicons name="bookmark-outline" size={24} color="#404040" />
            <Text style={tw`text-neutral-90 text-base flex-1`}>
              Saved Address
            </Text>
            <Ionicons name="chevron-forward" size={24} color="#404040" />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              tw`bg-white shadow-lg shadow-[#0000001A] rounded-xl p-4 w-full flex-row gap-4 items-center`,
              pressed && tw`opacity-70`,
            ]}
          >
            <Ionicons name="card-outline" size={24} color="#404040" />
            <Text style={tw`text-neutral-90 text-base flex-1`}>
              Payment Methods
            </Text>
            <Ionicons name="chevron-forward" size={24} color="#404040" />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              tw`bg-white shadow-lg shadow-[#0000001A] rounded-xl p-4 w-full flex-row gap-4 items-center`,
              pressed && tw`opacity-70`,
            ]}
          >
            <FontAwesome name="bell-o" size={24} color="#404040" />
            <Text style={tw`text-neutral-90 text-base flex-1`}>
              Notification
            </Text>
            <Ionicons name="chevron-forward" size={24} color="#404040" />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              tw`bg-white shadow-lg shadow-[#0000001A] rounded-xl p-4 w-full flex-row gap-4 items-center`,
              pressed && tw`opacity-70`,
            ]}
          >
            <Ionicons name="lock-closed-outline" size={24} color="#404040" />
            <Text style={tw`text-neutral-90 text-base flex-1`}>Security</Text>
            <Ionicons name="chevron-forward" size={24} color="#404040" />
          </Pressable>
        </View>

        {/* Help */}
        <View style={tw`gap-4 bg-transparent mt-4`}>
          <Text style={tw`text-neutral-90 text-base font-bold`}>Help</Text>
        </View>
      </View>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ScrollView>
  );
}
