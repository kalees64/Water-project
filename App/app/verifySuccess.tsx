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
import Icon from "react-native-vector-icons/FontAwesome5";
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
        <View
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 70,
            paddingBottom: 150,
          }}
        >
          <Icon name="check-circle" size={70} color="#3fbdf1"></Icon>
          <Text style={{ paddingTop: 30, fontSize: 23, fontWeight: "bold" }}>
            Mobile Number
          </Text>
          <Text style={{ fontSize: 23, fontWeight: "bold" }}>Verified</Text>
          <Text style={{ fontSize: 23, fontWeight: "bold" }}>Successfully</Text>
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
