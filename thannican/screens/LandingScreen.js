import React from "react";
import { Link } from "expo-router";
import { StyleSheet, ImageBackground } from "react-native";
import { View, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/EvilIcons";

const LandingScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/images/bg.jpg")}
      style={styles.bgimg}
    >
      <View>
        <Text style={styles.tittle}>THANNICAN</Text>
        <Text
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <FontAwesome
            name="play"
            size={45}
            color="white"
            onPress={() => navigation.navigate("one")}
          />
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgimg: {
    height: "100%",
    width: "100%",
  },
  tittle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 550,
  },
});

export default LandingScreen;
