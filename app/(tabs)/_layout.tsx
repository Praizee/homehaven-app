import React from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

// Custom component for MaterialIcons
function MaterialTabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>["name"];
  color: string;
}) {
  return <MaterialIcons size={24} style={{ marginBottom: -5 }} {...props} />;
}

// Custom component for Ionicons
function IoniconsTabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={24} style={{ marginBottom: -5 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#156651",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialTabBarIcon name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <IoniconsTabBarIcon name="cart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "My Account",
          tabBarIcon: ({ color }) => (
            <IoniconsTabBarIcon name="person-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
