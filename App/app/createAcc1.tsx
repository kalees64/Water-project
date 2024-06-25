import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
} from "react-native";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/EvilIcons";

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
      <View style={styles.child}>
        <Icon
          name="user"
          style={{ textAlign: "right", fontWeight: "bold", fontSize: 25 }}
        ></Icon>
        <TextInput
          style={{ paddingLeft: 80 }}
          placeholder="Enter Your Email"
        ></TextInput>
      </View>
      <View style={styles.child}>
        <Icon
          name="envelope-o"
          style={{ textAlign: "right", fontWeight: "bold", fontSize: 25 }}
        ></Icon>
        <TextInput style={{ paddingLeft: 80 }} placeholder="Enter Your Email" />
      </View>
      <View style={styles.child}>
        <Icon
          name="lock"
          style={{ textAlign: "right", fontWeight: "bold", fontSize: 25 }}
        ></Icon>
        <TextInput style={{ paddingLeft: 80 }} placeholder="Create Password" />
        <Icon
          name="eye"
          style={{
            textAlign: "left",
            fontWeight: "bold",
            fontSize: 25,
            marginLeft: 30,
          }}
        ></Icon>
      </View>
      <View style={styles.child}>
        <Icon
          name="lock"
          style={{ textAlign: "right", fontWeight: "bold", fontSize: 25 }}
        ></Icon>
        <TextInput style={{ paddingLeft: 80 }} placeholder="Confirm Password" />
        <Icon
          name="eye"
          style={{
            textAlign: "left",
            fontWeight: "bold",
            fontSize: 25,
            marginLeft: 30,
          }}
        ></Icon>
      </View>
      <Link
        href="/createAcc2"
        style={{
          backgroundColor: "#3fbdf1",
          paddingVertical: 8,
          paddingHorizontal: 130,
          fontSize: 18,
          fontWeight: "bold",
          color: "white",
          borderRadius: 10,
          marginLeft: 10,
          marginRight: 10,
          height: 40,
          marginTop: 20,
          marginBottom: 8,
          shadowColor: "#b3b3b3",
          shadowOffset: { width: 2, height: 4 },
        }}
      >
        <Text>Submit</Text>
      </Link>
      <Text style={{ textAlign: "center" }}>
        Already have an account?{" "}
        <Link href="/signin" style={{ fontWeight: "bold" }}>
          Sign in
        </Link>
      </Text>
      <Text style={{ textAlign: "center", marginTop: 20 }}>
        Sign up with social Account?{" "}
      </Text>
      <View style={styles.bottom}>
        <Icon name="google" style={{ fontSize: 30, marginRight: 30 }}></Icon>
        <Icon name="facebook-square" style={{ fontSize: 30 }}></Icon>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  child: {
    height: 40,
    margin: 17,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#e6e6e6",
    borderColor: "transparent",
    shadowColor: "#b3b3b3",
    shadowOffset: { width: 2, height: 4 },
    display: "flex",
    width: "90%",
    flexDirection: "row",
  },
  tittle: {
    color: "black",
  },
  parent: {
    height: "100%",
    width: "100%",
  },
  bottom: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    marginLeft: 150,
    marginTop: 25,
  },
});
