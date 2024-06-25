import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
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
            <Link href="/page2">
              <Icon1 name="arrow-left" size={45} color="black" />
            </Link>
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/images/page_3.png")} />
        </View>
        <View
          style={{
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontWeight: "bold", fontSize: 22, textAlign: "center" }}
          >
            We provide best quality water
          </Text>
          <Text
            style={{
              paddingHorizontal: 45,
              fontSize: 14,
              paddingTop: 5,
              textAlign: "center",
            }}
          >
            Water is life, and clean water means health
          </Text>
        </View>
        <View style={{ width: "100%" }}>
          <Text
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              gap: 20,
            }}
          >
            <Icon name="circle-o" size={20} color="black" />
            <Icon name="circle-o" size={20} color="black" />
            <Icon name="circle" size={20} color="black" />
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
            href="/home"
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
            <Text>Get Started</Text>
          </Link>
        </View>
        {/* <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]}>
        <Text>Sign in with Facebook</Text>
      </LinearGradient> */}
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
