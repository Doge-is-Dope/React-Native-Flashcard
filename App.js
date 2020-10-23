import "react-native-gesture-handler";
import React from "react";
import { StatusBar, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NewDeckScreen from "./src/components/screens/NewDeckScreen";
import HomeScreen from "./src/components/screens/HomeScreen";
import { pallette } from "./src/theme";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: pallette.accent,
        labelStyle: {
          fontFamily: "Book",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "home".toUpperCase(),
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="New Deck"
        component={NewDeckScreen}
        options={{
          tabBarLabel: "new deck".toUpperCase(),
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="plussquareo" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [loaded, error] = useFonts({
    Book: require("./assets/fonts/AirbnbCerealBook.ttf"),
    Bold: require("./assets/fonts/AirbnbCerealBold.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={Platform.OS === "android" ? "light-content" : "dark-content"}
      />
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
