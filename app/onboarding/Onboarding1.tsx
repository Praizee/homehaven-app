import React from "react";
import { View, Text, Button, Image, Platform } from "react-native";
import { Link, useRouter } from "expo-router";
import { tw } from "../../src/utils/tailwind";
import { StatusBar } from "expo-status-bar";

const Onboarding1 = () => {
  const router = useRouter();

  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      {/* Curved Image Container */}
      <View style={tw`w-full h-1/2 overflow-hidden rounded-b-[80px]`}>
        <Image
          source={require("../../assets/images/onboarding-1.png")}
          style={tw`size-full`}
          resizeMode="cover"
        />
      </View>

      <View
        style={tw`flex-1 flex-col gap-6 justify-center items-center bg-white px-4`}
      >
        <Text style={tw`text-3xl text-text font-semibold mt-4 text-center`}>
          Online Home Store and Furniture
        </Text>
        <Text style={tw`text-lg text-neutral-70 text-center mt-2`}>
          Discover all style and budgets of furniture, appliances, kitchen, and
          more from 500+ brands in your hand.
        </Text>

        <View style={tw`flex-row mt-6`}>
          <View style={tw`w-2 h-2 bg-primary rounded-full mx-1`} />
          <View style={tw`w-2 h-2 bg-neutral-40 rounded-full mx-1`} />
          <View style={tw`w-2 h-2 bg-neutral-40 rounded-full mx-1`} />
        </View>

        <View style={tw`flex-row`}>
          <Link
            href="/onboarding/Onboarding2"
            style={tw`bg-primary w-full text-white px-8 py-3 rounded-lg text-center font-bold text-base`}
          >
            Next
          </Link>
        </View>
      </View>

      <StatusBar style={Platform.OS === "ios" ? "auto" : "dark"} />
    </View>
  );
};

export default Onboarding1;
