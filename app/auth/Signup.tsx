import React, { useState } from "react";
import {
  View,
  Text,
  Platform,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { tw } from "@/src/utils/tailwind";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const Signup = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={tw`flex-1 px-4 py-2 pb-8 bg-neutral-20`}>
      <ScrollView>
        <View style={tw`flex-col gap-2 w-full mb-4`}>
          <Text style={tw`text-3xl text-neutral-90 font-semibold`}>
            Create Account
          </Text>
          <Text style={tw`text-base text-neutral-70`}>
            Fill in your details below to get started on a seamless shopping
            experience.
          </Text>
        </View>

        {/* Login form components */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={tw`flex-col gap-4`}>
              {/* First Name Input */}
              <View
                style={tw`w-full bg-white flex-row items-center p-3 rounded-lg border border-neutral-40`}
              >
                <Ionicons
                  name="person-outline"
                  size={20}
                  color="#757575"
                  style={tw`mr-2`}
                />
                <TextInput
                  placeholder="First Name"
                  value={firstName}
                  onChangeText={setfirstName}
                  style={tw`flex-1 text-base text-neutral-90`}
                  keyboardType="default"
                  autoCapitalize="words"
                />
              </View>

              {/* Last Name Input */}
              <View
                style={tw`w-full bg-white flex-row items-center p-3 rounded-lg border border-neutral-40`}
              >
                <Ionicons
                  name="person-outline"
                  size={20}
                  color="#757575"
                  style={tw`mr-2`}
                />
                <TextInput
                  placeholder="Last Name"
                  value={lastName}
                  onChangeText={setlastName}
                  style={tw`flex-1 text-base text-neutral-90`}
                  keyboardType="default"
                  autoCapitalize="words"
                />
              </View>

              {/* Email Input */}
              <View
                style={tw`w-full bg-white flex-row items-center p-3 rounded-lg border border-neutral-40`}
              >
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color="#757575"
                  style={tw`mr-2`}
                />
                <TextInput
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                  style={tw`flex-1 text-base text-neutral-90`}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              {/* Password Input */}
              <View
                style={tw`w-full bg-white flex-row items-center p-3 rounded-lg border border-neutral-40`}
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color="#757575"
                  style={tw`mr-2`}
                />
                <TextInput
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  style={tw`flex-1 text-base text-neutral-90`}
                />
                <Pressable
                  onPress={() => setShowPassword(!showPassword)}
                  style={({ pressed }) => [pressed && tw`opacity-60`]}
                >
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={20}
                    color="#9E9E9E"
                  />
                </Pressable>
              </View>

              {/* Terms */}
              <View style={tw`flex-row flex-wrap gap-1`}>
                <Text style={tw`text-base text-neutral-70`}>
                  By clicking Create Account, you acknowledge you have read and
                  agreed to our
                </Text>
                <Pressable
                  style={({ pressed }) => [
                    tw`items-start`,
                    pressed && tw`opacity-50`,
                  ]}
                >
                  <Text style={tw`text-base text-primary`}>Terms of Use</Text>
                </Pressable>
                <Text style={tw`text-base text-neutral-70`}>and</Text>
                <Pressable
                  style={({ pressed }) => [
                    tw`items-start`,
                    pressed && tw`opacity-50`,
                  ]}
                >
                  <Text style={tw`text-base text-primary`}>Privacy Policy</Text>
                </Pressable>
              </View>

              {/* Continue Button */}
              <View style={tw`flex-row`}>
                <Pressable
                  onPress={() => router.push("(tabs)")}
                  style={({ pressed }) => [
                    tw`bg-primary w-full px-8 py-3 rounded-lg`,
                    pressed && tw`opacity-70`,
                  ]}
                >
                  <Text style={tw`text-white text-base font-bold text-center`}>
                    Create Account
                  </Text>
                </Pressable>
              </View>

              {/* OR Divider */}
              <View style={tw`flex-row items-center w-full my-4`}>
                <View style={tw`flex-1 h-px bg-neutral-50`} />
                <Text style={tw`mx-3 text-neutral-90`}>OR</Text>
                <View style={tw`flex-1 h-px bg-neutral-50`} />
              </View>

              {/* Google Continue Button */}
              <Pressable
                style={({ pressed }) => [
                  tw`w-full flex-row items-center justify-center border border-primary p-3 rounded-lg`,
                  pressed && tw`opacity-50`,
                ]}
              >
                <Image
                  source={require("../../assets/images/google-icon.png")}
                  style={tw`size-[16px] mr-2`}
                  resizeMode="contain"
                />
                {/* <FontAwesome
                name="google"
                size={16}
                color="#DB4437"
                style={tw`mr-3`}
              /> */}
                <Text style={tw`text-primary text-base font-bold`}>
                  Continue with Google
                </Text>
              </Pressable>

              {/* Facebook Continue Button */}

              <Pressable
                style={({ pressed }) => [
                  tw`w-full flex-row items-center justify-center border border-primary p-3 rounded-lg`,
                  pressed && tw`opacity-50`,
                ]}
              >
                <FontAwesome
                  name="facebook"
                  size={16}
                  color="#4267B2"
                  style={tw`mr-2`}
                />
                <Text style={tw`text-primary text-base font-bold`}>
                  Continue with Facebook
                </Text>
              </Pressable>

              {/* link to register */}
              <View style={tw`flex-row gap-1`}>
                <Text style={tw`text-base text-neutral-70`}>
                  Already have an account?
                </Text>

                <Pressable
                  onPress={() => router.push("/auth/Login")}
                  style={({ pressed }) => [
                    tw`items-start`,
                    pressed && tw`opacity-50`,
                  ]}
                >
                  <Text style={tw`text-base text-primary`}>Log In</Text>
                </Pressable>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

        <StatusBar style={Platform.OS === "ios" ? "auto" : "dark"} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
