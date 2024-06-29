import React from "react";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import { Text, View } from "react-native";

const TopBar = ({ navigation }) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#3fbdf1",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        shadowOffset: { width: -2, height: 4 },
        shadowColor: "#171717",
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }}
    >
      <Text
        style={{ fontSize: 30, letterSpacing: 1 }}
        onPress={() => navigation.navigate("home")}
      >
        THANNICAN
      </Text>
      <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        <Icon1 name="search" size={25} color="white"></Icon1>
        <Icon2 name="notifications-active" size={25} color="white"></Icon2>
      </View>
    </View>
  );
};

export default TopBar;
