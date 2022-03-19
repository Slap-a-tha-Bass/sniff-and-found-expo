import React from "react";
import { View, Text } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Caveat_400Regular } from "@expo-google-fonts/caveat";

export default function Home() {
  let [fontsLoaded] = useFonts({
    Caveat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
      <Text
        style={{
          fontFamily: "Caveat_400Regular",
          fontSize: 40,
          color: "#0DD3C9",
        }}
      >
        {" "}
        Sniff & Found{" "}
      </Text>
    </View>
  );
}
