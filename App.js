import "react-native-gesture-handler";
import React from "react";
import { StatusBar, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NewDeckScreen from "./src/components/screens/NewDeckScreen";
import HomeScreen from "./src/components/screens/HomeScreen";
import theme, { pallette } from "./src/theme";
import IconButton from "./src/components/IconButton";

const RootStack = createStackNavigator();

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
        <RootStack.Navigator
          mode="modal"
          screenOptions={{
            headerTitleStyle: {
              fontFamily: "Book",
              color: pallette.regularText,
            },
          }}
        >
          <RootStack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <IconButton
                  handleOnPress={() => navigation.navigate("Create")}
                />
              ),
              title: "Decks",
            })}
          />
          <RootStack.Screen
            name="Create"
            component={NewDeckScreen}
            options={{ title: "Create Deck" }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
