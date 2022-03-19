import { StyleSheet, Image } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import { useFonts, Caveat_400Regular } from "@expo-google-fonts/caveat";
import Home from "./views/Home";
import FooterNav from "./components/footerNav";

const Stack = createNativeStackNavigator();
const Logo =
  "https://res.cloudinary.com/slapathabass/image/upload/v1646146133/sniff_and_found/Transparency_Blue_zk7wme.png";

function LogoTitle() {
  return <Image style={{ width: 50, height: 50 }} source={{ uri: Logo}} />;
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Caveat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => <LogoTitle />,
            headerStyle: {
              backgroundColor: "#0dd3c9",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    <FooterNav />
    </>
  );
}

const styles = StyleSheet.create({
  global: {
    fontFamily: "Monospace",
  },
});
