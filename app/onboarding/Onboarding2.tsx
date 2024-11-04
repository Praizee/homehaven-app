import React from "react";
import { View, Text, Image, Button, Platform } from "react-native";
import { Link, useRouter } from "expo-router";
import { tw } from "../../src/utils/tailwind";
import { StatusBar } from "expo-status-bar";

const Onboarding2 = () => {
  const router = useRouter();

  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      {/* Curved Image Container */}
      <View style={tw`w-full h-1/2 overflow-hidden rounded-b-[80px]`}>
        <Image
          source={require("../../assets/images/onboarding-2.png")}
          style={tw`size-full`}
          resizeMode="cover"
        />
      </View>

      <View
        style={tw`flex-1 flex-col gap-6 justify-center items-center bg-white px-4`}
      >
        <Text style={tw`text-3xl text-text font-semibold mt-4 text-center`}>
          Get Support From Our Skilled Team
        </Text>
        <Text style={tw`text-lg text-neutral-70 text-center mt-2`}>
          If our products don’t meet your expectations, we’re available 24/7 to
          assist you.
        </Text>
        <View style={tw`flex-row mt-6`}>
          <View style={tw`w-2 h-2 bg-neutral-40 rounded-full mx-1`} />
          <View style={tw`w-2 h-2 bg-primary rounded-full mx-1`} />
          <View style={tw`w-2 h-2 bg-neutral-40 rounded-full mx-1`} />
        </View>

        <View style={tw`flex-row gap-4 justify-between`}>
          <Link
            href="/onboarding/Onboarding1"
            style={tw`bg-white flex-none text-primary px-8 py-3 rounded-none text-center font-bold text-base`}
          >
            Back
          </Link>
          <Link
            href="/onboarding/Onboarding3"
            style={tw`bg-primary flex-1 text-white px-8 py-3 rounded-lg text-center font-bold text-base`}
          >
            Next
          </Link>
        </View>
      </View>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default Onboarding2;
