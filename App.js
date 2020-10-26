import "react-native-gesture-handler";
import React from "react";
import { StatusBar, Platform } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AddDeck from "./src/components/AddDeck";
import Home from "./src/components/Home";
import IconButton from "./src/components/IconButton";
import theme, { pallette } from "./src/theme";
import reducer from "./src/reducers";

const RootStack = createStackNavigator();
const store = createStore(reducer);

export default function App() {
  const [loaded, error] = useFonts({
    Book: require("./assets/fonts/AirbnbCerealBook.ttf"),
    Bold: require("./assets/fonts/AirbnbCerealBold.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar
          barStyle={
            Platform.OS === "android" ? "light-content" : "dark-content"
          }
        />
        <NavigationContainer>
          <RootStack.Navigator
            screenOptions={{
              headerTitleStyle: {
                fontFamily: "Book",
                color: pallette.regularText,
              },
            }}
          >
            <RootStack.Screen
              name="Home"
              component={Home}
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
              component={AddDeck}
              options={{ title: "Create Deck" }}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
