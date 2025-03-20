import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
// import { useEffect } from "react";
import { SystemBars } from "react-native-edge-to-edge";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { StyleSheet } from "react-native-unistyles";

import { HomeScreen } from "@/screens/Home/HomeScreen";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  //   const [loaded, error] = useFonts({
  //     AmericanTypewriterBold: require("../assets/fonts/AmericanTypewriter-Bold.ttf"),
  //     SatoshiBold: require("../assets/fonts/Satoshi-Bold.otf"),
  //   });

  //   // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  //   useEffect(() => {
  //     if (error) throw error;
  //   }, [error]);

  //   useEffect(() => {
  //     if (loaded) {
  //       SplashScreen.hideAsync();
  //     }
  //   }, [loaded]);

  //   if (!loaded) {
  //     return null;
  //   }

  return <RootLayoutNav />;
}

const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Home: { screen: HomeScreen },
  },
});

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Navigation = createStaticNavigation(RootStack);

function RootLayoutNav() {
  return (
    <KeyboardProvider>
      <SystemBars style="dark" />
      <Navigation />
    </KeyboardProvider>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    //backgroundColor: theme.black,
  },
}));
