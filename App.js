
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import VideosScreen from "./screens/VideosScreen";
import AudiobooksScreen from "./screens/AudiobooksScreen";
import LiveScreen from "./screens/LiveScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SubscriptionScreen from "./screens/SubscriptionScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: "#7C3AED",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ color, size }) => {
            let iconName = "ellipse-outline";
            if (route.name === "Видео") iconName = "film-outline";
            else if (route.name === "Аудиокниги") iconName = "book-outline";
            else if (route.name === "Трансляции") iconName = "radio-outline";
            else if (route.name === "Профиль") iconName = "person-outline";
            else if (route.name === "Подписки") iconName = "card-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Видео" component={VideosScreen} />
        <Tab.Screen name="Аудиокниги" component={AudiobooksScreen} />
        <Tab.Screen name="Трансляции" component={LiveScreen} />
        <Tab.Screen name="Профиль" component={ProfileScreen} />
        <Tab.Screen name="Подписки" component={SubscriptionScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
