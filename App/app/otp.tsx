import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
// import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/EvilIcons";
import { Link } from "expo-router";

export default function Home() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>THANNICAN</Text>
        </View>
        <View style={{ paddingLeft: 20 }}>
          <Text style={{ justifyContent: "flex-start" }}>
            <Link href="/">
              <Icon1 name="arrow-left" size={45} color="black" />
            </Link>
          </Text>
        </View>
        <View style={{ padding: 20, width: "100%" }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 35 }}
          >
            Enter OTP
          </Text>
          <Text style={{ textAlign: "center" }}>OTP sent to ********86</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 10,
            paddingTop: 100,
          }}
        >
          <TextInput
            style={{
              borderBottomColor: "black",
              borderWidth: 2,
              borderTopColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              width: 50,
              height: 40,
              padding: 10,
              paddingBottom: 20,
              fontSize: 40,
              fontWeight: "bold",
            }}
          />
          <TextInput
            style={{
              borderBottomColor: "black",
              borderWidth: 2,
              borderTopColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              width: 50,
              height: 40,
              padding: 10,
              paddingBottom: 20,
              fontSize: 40,
              fontWeight: "bold",
            }}
          />
          <TextInput
            style={{
              borderBottomColor: "black",
              borderWidth: 2,
              borderTopColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              width: 50,
              height: 40,
              padding: 10,
              paddingBottom: 20,
              fontSize: 40,
              fontWeight: "bold",
            }}
          />
          <TextInput
            style={{
              borderBottomColor: "black",
              borderWidth: 2,
              borderTopColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              width: 50,
              height: 40,
              padding: 10,
              paddingBottom: 20,
              fontSize: 40,
              fontWeight: "bold",
            }}
          />
        </View>
        <View
          style={{
            width: "100%",
            paddingHorizontal: 20,
            paddingTop: 15,
            paddingBottom: 150,
          }}
        >
          <Text style={{ textAlign: "center" }}>
            Did not receive OTP in 60s?{" "}
            <Link href="/" style={{ fontWeight: "bold" }}>
              Resend
            </Link>
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <Link
            href="/"
            style={{
              backgroundColor: "#3fbdf1",
              paddingVertical: 15,
              paddingHorizontal: 100,
              fontSize: 18,
              fontWeight: "bold",
              color: "white",
              borderRadius: 10,
            }}
          >
            <Text>Submit</Text>
          </Link>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "blue",
    width: "100%",
    height: "100%",
  },
});
