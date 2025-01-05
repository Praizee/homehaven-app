import React, { useEffect, useState } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/components/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const [isReady, setIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    Manrope: require("../assets/fonts/Manrope-Regular.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      setIsReady(true);
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    if (isReady) {
      // Navigate to Onboarding1 after everything is ready
      router.replace("/onboarding/Onboarding1");
    }
  }, [isReady]);

  if (!fontsLoaded || !isReady) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "light" ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Onboarding screens */}
        <Stack.Screen
          name="onboarding/Onboarding1"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="onboarding/Onboarding2"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="onboarding/Onboarding3"
          options={{ headerShown: false }}
        />

        {/* Auth screens */}
        <Stack.Screen name="auth/Login" options={{ headerShown: false }} />
        <Stack.Screen name="auth/Signup" options={{ headerShown: false }} />

        {/* Tabs and others */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        <Stack.Screen
          name="product/details"
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
