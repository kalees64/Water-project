import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LandingScreen from "./screens/LandingScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ThanniCan APP Vanakkam</Text>
      <StatusBar style="auto" />
      {/* <LandingScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
