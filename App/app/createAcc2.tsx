import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text } from "react-native";
import { Link } from "expo-router";
import Icon1 from "react-native-vector-icons/EvilIcons";
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/Feather";
import Icon4 from "react-native-vector-icons/FontAwesome6";
// import Icon2 from "react-native-vector-icons/AntDesign";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.parent}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 29, fontWeight: "bold" }}>THANNICAN</Text>
      </View>
      <View style={{ paddingLeft: 20 }}>
        <Text style={{ justifyContent: "flex-start" }}>
          <Link href="/home">
            <Icon1 name="arrow-left" size={40} color="black" />
          </Link>
        </Text>
      </View>
      <View style={{ padding: 20, width: "100%" }}>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 35 }}>
          Create Account
        </Text>
      </View>

      <View style={styles.input}>
        <Icon3 name="phone-call" size={20}></Icon3>
        <TextInput
          style={{ paddingRight: 130 }}
          placeholder="Enter Your Mobile Number"
        />
      </View>

      <View style={styles.input}>
        <Icon2 name="location-pin" size={20}></Icon2>
        <TextInput
          style={{ paddingRight: 130 }}
          placeholder="Enter Your Address"
        />
      </View>
      <View style={styles.input}>
        <Icon4 name="earth-europe" size={20}></Icon4>
        <TextInput
          style={{ paddingRight: 130 }}
          placeholder="Enter Your Pincode"
        />
      </View>

      <Link
        href="/userInterFace1"
        style={{
          backgroundColor: "#3fbdf1",
          paddingVertical: 8,
          paddingHorizontal: 150,
          fontSize: 18,
          fontWeight: "bold",
          color: "white",
          borderRadius: 10,
          height: 40,
          marginTop: 120,
          marginBottom: 15,
          shadowColor: "#b3b3b3",
          shadowOffset: { width: 2, height: 4 },
        }}
      >
        <Text>Verify</Text>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 17,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#e6e6e6",
    borderColor: "transparent",
    shadowColor: "#b3b3b3",
    shadowOffset: { width: 2, height: 4 },
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  tittle: {
    color: "black",
  },
  parent: {
    height: "100%",
    width: "100%",
  },
});
