import { Link } from "expo-router";
import { StyleSheet, ImageBackground } from "react-native";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/images/background_2.jpg")}
      style={{ width: "100%", height: "100%" }}
      resizeMode="cover"
    >
      <View style={styles.par}>
        <Text style={styles.tittle}>Welcome</Text>
        <Link href="/createAcc1" style={styles.account}>
          <Text>Create an Account</Text>
        </Link>
        <Link href="/signin" style={styles.account}>
          <Text>Sign in</Text>
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  par: {
    // padding: 20,
  },

  tittle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 480,
    paddingBottom: 20,
  },

  account: {
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    color: "black",
    fontSize: 20,
    padding: 15,
    margin: 7,
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
  },
});
