import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { View, Text } from "react-native";

const EntranceScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/images/background_2.jpg")}
      style={{ width: "100%", height: "100%" }}
      resizeMode="cover"
    >
      <View
        style={{
          padding: 20,
          gap: 10,
          position: "absolute",
          width: "100%",
          bottom: 60,
        }}
      >
        <Text
          style={{
            backgroundColor: "transparent",
            textAlign: "center",
            fontSize: 35,
            fontWeight: "bold",
            paddingBottom: 25,
          }}
        >
          Welcome
        </Text>
        <Text
          style={{
            backgroundColor: "#d9d9d9",
            padding: 10,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
            borderRadius: 10,
            borderColor: "gray",
            borderWidth: 2,
            shadowColor: "gray",
            shadowOffset: { width: 2, height: 3 },
            shadowOpacity: 0.5,
          }}
          onPress={() => navigation.navigate("createAcc")}
        >
          Create an Account
        </Text>
        <Text
          style={{
            backgroundColor: "#d9d9d9",
            padding: 10,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
            borderRadius: 10,
            borderColor: "gray",
            borderWidth: 2,
            shadowColor: "gray",
            shadowOffset: { width: 2, height: 3 },
            shadowOpacity: 0.5,
          }}
          onPress={() => navigation.navigate("signin")}
        >
          Sign in
        </Text>
      </View>
    </ImageBackground>
  );
};

export default EntranceScreen;
