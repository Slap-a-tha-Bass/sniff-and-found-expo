import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import Icon from "react-native-ico-material-design";

const Logo =
  "https://res.cloudinary.com/slapathabass/image/upload/c_crop,h_2576,w_1874/v1646146133/sniff_and_found/Transparency_Grey_pyicci.png";

export default function FooterNav() {
  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <View style={styles.navBar}>
          <Pressable onPress={() => console.log("Pressed")}>
            <Icon
              name="view-list-button"
              width="35"
              height="35"
              color="#86E9E4"
            />
          </Pressable>
          <Pressable onPress={() => console.log("Pressed")}>
            <Image style={{ width: 45, height: 45 }} source={{ uri: Logo }} />
          </Pressable>
          <Pressable onPress={() => console.log("Pressed")}>
            <Icon name="front-store" width="35" height="35" color="#86E9E4" />
          </Pressable>
          <Pressable onPress={() => console.log("Pressed")}>
            <Icon name="chat-bubbles" width="35" height="35" color="#86E9E4" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  navContainer: {
    position: "absolute",
    bottom: 20,
    width: "90%",
  },
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "grey",
    borderRadius: 40,
    padding: 10,
  },
});
