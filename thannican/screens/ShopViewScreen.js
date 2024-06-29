import React from "react";
import TopBar from "./TopBar";
import BottomTabBar from "./BottomTabBar";
import { SafeAreaView, Text, View, Image, ScrollView } from "react-native";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import Icon4 from "react-native-vector-icons/Entypo";
import Icon5 from "react-native-vector-icons/Fontisto";
import Icon6 from "react-native-vector-icons/Octicons";
import Icon7 from "react-native-vector-icons/AntDesign";
import Icon8 from "react-native-vector-icons/EvilIcons";
import Icon9 from "react-native-vector-icons/FontAwesome6";

const ShopViewScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
      <TopBar navigation={navigation} />
      <View style={{ position: "relative" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 20,
            marginLeft: 17,
          }}
        >
          <Icon8
            name="arrow-left"
            style={{ fontSize: 30, fontWeight: "bold", marginRight: 17 }}
            onPress={() => navigation.goBack()}
          ></Icon8>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>Order Items</Text>
        </View>
        <View
          style={{
            display: "flex",
            marginTop: 20,
            marginLeft: 17,
            marginRight: 17,
            flexDirection: "row",
            borderBottomColor: "black",
            borderWidth: 1,
            borderTopColor: "transparent",
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            justifyContent: "space-between",
          }}
        >
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>Dwater</Text>
            <Text style={{ fontSize: 13 }}>Perumal Puram,Tirunelveli</Text>
          </View>
          <View>
            <Icon7
              name="heart"
              color="red"
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginRight: 17,
                marginLeft: 175,
                marginTop: 10,
              }}
            ></Icon7>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 20,
            marginRight: 20,
            marginTop: 15,
          }}
        >
          <View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Icon1
                name="star"
                color="#FFA500"
                style={{ fontSize: 20, fontWeight: "bold", marginRight: 10 }}
              ></Icon1>
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>4.5</Text>
            </View>
            <Text>1K Reviews</Text>
          </View>
          <View>
            <Text style={{ fontSize: 16, color: "green" }}>Timings</Text>
            <Text>7am-7pm</Text>
          </View>
          <View>
            <Text style={{ fontSize: 16, color: "green" }}>Open</Text>
            <Text>For Delivery</Text>
          </View>
        </View>
      </View>

      <ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            borderColor: "#aeaeae",
            borderWidth: 1,
            marginTop: 20,
            marginLeft: 17,
            marginRight: 17,
            height: 160,
            shadowColor: "#aeaeae",
            shadowOffset: { width: 2, height: 4 },
            borderRadius: 10,
            justifyContent: "space-between",
          }}
        >
          <View>
            <Image
              source={require("../assets/images/5litre.png")}
              style={{ marginTop: 20, marginLeft: 30, marginRight: 40 }}
            ></Image>
          </View>
          <View style={{ marginTop: 25, marginLeft: 30, marginRight: 40 }}>
            <View style={{ marginBottom: 30 }}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginBottom: 7 }}
              >
                Water Can
              </Text>
              <View
                style={{ display: "flex", flexDirection: "row", marginLeft: 8 }}
              >
                <Icon9 name="bottle-water" style={{ fontSize: 17 }}></Icon9>
                <Text style={{}}>05 Liters</Text>
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginRight: 30,
                }}
              >
                <Icon9
                  name="indian-rupee-sign"
                  style={{ fontSize: 20, fontWeight: "bold" }}
                ></Icon9>
                <Text
                  style={{ fontSize: 23, fontWeight: "bold", marginTop: -7 }}
                >
                  60
                </Text>
              </View>
              <Text
                style={{
                  shadowColor: "#b3b3b3",
                  shadowOffset: { width: 2, height: 4 },
                  color: "black",
                  borderRadius: 8,
                  fontSize: 17,
                  backgroundColor: "#FFA500",
                  width: 80,
                  height: 30,
                  paddingLeft: 20,
                  marginRight: 8,
                  paddingTop: 4,
                }}
              >
                Add
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderColor: "#aeaeae",
            borderWidth: 1,
            marginTop: 20,
            marginLeft: 17,
            marginRight: 17,
            height: 160,
            shadowColor: "#b3b3b3",
            shadowOffset: { width: 2, height: 4 },
            borderRadius: 10,
          }}
        >
          <View>
            <Image
              source={require("../assets/images/10 litre.png")}
              style={{ marginTop: 20, marginLeft: 30, marginRight: 40 }}
            ></Image>
          </View>
          <View style={{ marginTop: 25, marginLeft: 30, marginRight: 40 }}>
            <View style={{ marginBottom: 30 }}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginBottom: 7 }}
              >
                Water Can
              </Text>
              <View
                style={{ display: "flex", flexDirection: "row", marginLeft: 8 }}
              >
                <Icon9 name="bottle-water" style={{ fontSize: 17 }}></Icon9>
                <Text style={{}}>10 Liters</Text>
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginRight: 30,
                }}
              >
                <Icon9
                  name="indian-rupee-sign"
                  style={{ fontSize: 20, fontWeight: "bold" }}
                ></Icon9>
                <Text
                  style={{ fontSize: 23, fontWeight: "bold", marginTop: -7 }}
                >
                  25
                </Text>
              </View>
              <Text
                style={{
                  shadowColor: "#b3b3b3",
                  shadowOffset: { width: 2, height: 4 },
                  color: "black",
                  borderRadius: 8,
                  fontSize: 17,
                  backgroundColor: "#FFA500",
                  width: 80,
                  height: 30,
                  paddingLeft: 14,
                  marginRight: 8,
                  paddingTop: 4,
                }}
              >
                Added
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            borderColor: "#aeaeae",
            justifyContent: "space-between",
            borderWidth: 1,
            marginTop: 20,
            marginLeft: 17,
            marginRight: 17,
            height: 160,
            shadowColor: "#b3b3b3",
            shadowOffset: { width: 2, height: 4 },
            borderRadius: 10,
          }}
        >
          <View>
            <Image
              source={require("../assets/images/20litre.png")}
              style={{
                marginTop: 20,
                marginLeft: 30,
                marginRight: 40,
                width: 100,
                height: 100,
              }}
            ></Image>
          </View>
          <View style={{ marginTop: 25, marginLeft: 0, marginRight: 40 }}>
            <View style={{ marginBottom: 30 }}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginBottom: 7 }}
              >
                Water Can
              </Text>
              <View
                style={{ display: "flex", flexDirection: "row", marginLeft: 8 }}
              >
                <Icon9 name="bottle-water" style={{ fontSize: 17 }}></Icon9>
                <Text style={{}}>20 Liters</Text>
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginRight: 30,
                }}
              >
                <Icon9
                  name="indian-rupee-sign"
                  style={{ fontSize: 20, fontWeight: "bold" }}
                ></Icon9>
                <Text
                  style={{ fontSize: 23, fontWeight: "bold", marginTop: -7 }}
                >
                  30
                </Text>
              </View>
              <Text
                style={{
                  shadowColor: "#b3b3b3",
                  shadowOffset: { width: 2, height: 4 },
                  color: "black",
                  borderRadius: 8,
                  fontSize: 17,
                  backgroundColor: "#FFA500",
                  width: 80,
                  height: 30,
                  paddingLeft: 14,
                  marginRight: 8,
                  paddingTop: 4,
                }}
              >
                Added
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderColor: "#aeaeae",
            borderWidth: 1,
            marginTop: 20,
            marginLeft: 17,
            marginRight: 17,
            height: 160,
            shadowColor: "#b3b3b3",
            shadowOffset: { width: 2, height: 4 },
            borderRadius: 10,
          }}
        >
          <View>
            <Image
              source={require("../assets/images/dispenser can.png")}
              style={{
                marginTop: 20,
                marginLeft: 30,
                marginRight: 40,
                width: 100,
                height: 100,
              }}
            ></Image>
          </View>
          <View style={{ marginTop: 25, marginLeft: 0, marginRight: 40 }}>
            <View style={{ marginBottom: 30 }}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginBottom: 7 }}
              >
                Dispenser Can
              </Text>

              <View
                style={{ display: "flex", flexDirection: "row", marginLeft: 8 }}
              >
                <Icon9 name="bottle-water" style={{ fontSize: 17 }}></Icon9>
                <Text style={{}}>10 Liters</Text>
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginRight: 30,
                }}
              >
                <Icon9
                  name="indian-rupee-sign"
                  style={{ fontSize: 20, fontWeight: "bold" }}
                ></Icon9>
                <Text
                  style={{ fontSize: 23, fontWeight: "bold", marginTop: -7 }}
                >
                  90
                </Text>
              </View>
              <Text
                style={{
                  shadowColor: "#b3b3b3",
                  shadowOffset: { width: 2, height: 4 },
                  color: "black",
                  borderRadius: 8,
                  fontSize: 17,
                  backgroundColor: "#FFA500",
                  width: 80,
                  height: 30,
                  paddingLeft: 14,
                  marginRight: 8,
                  paddingTop: 4,
                }}
              >
                Added
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            borderColor: "#aeaeae",
            justifyContent: "space-between",
            borderWidth: 1,
            marginTop: 20,
            marginLeft: 17,
            marginRight: 17,
            height: 160,
            shadowColor: "#b3b3b3",
            shadowOffset: { width: 2, height: 4 },
            borderRadius: 10,
          }}
        >
          <View>
            <Image
              source={require("../assets/images/dispenser pump.png")}
              style={{
                marginTop: 20,
                marginLeft: 30,
                marginRight: 40,
                width: 100,
                height: 100,
              }}
            ></Image>
          </View>
          <View style={{ marginTop: 25, marginLeft: 0, marginRight: 40 }}>
            <View style={{ marginBottom: 30 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 7,
                  marginRight: -20,
                }}
              >
                Dispenser Pump
              </Text>

              <View
                style={{ display: "flex", flexDirection: "row", marginLeft: 8 }}
              >
                <Icon9 name="bottle-water" style={{ fontSize: 17 }}></Icon9>
                <Text style={{}}>20 Liters</Text>
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginRight: 30,
                }}
              >
                <Icon9
                  name="indian-rupee-sign"
                  style={{ fontSize: 20, fontWeight: "bold" }}
                ></Icon9>
                <Text
                  style={{ fontSize: 23, fontWeight: "bold", marginTop: -7 }}
                >
                  90
                </Text>
              </View>
              <Text
                style={{
                  shadowColor: "#b3b3b3",
                  shadowOffset: { width: 2, height: 4 },
                  color: "black",
                  borderRadius: 8,
                  fontSize: 17,
                  backgroundColor: "#FFA500",
                  width: 80,
                  height: 30,
                  paddingLeft: 14,
                  marginRight: 8,
                  paddingTop: 4,
                }}
              >
                Added
              </Text>
            </View>
          </View>
        </View>

        <Text
          style={{
            marginTop: 12,
            shadowColor: "#b3b3b3",
            shadowOffset: { width: 2, height: 4 },
            color: "white",
            borderRadius: 8,
            fontSize: 22,
            backgroundColor: "#3fbdf1",
            textAlign: "center",
            paddingTop: 4,
            marginBottom: 70,
            height: 40,
            marginLeft: 17,
            marginRight: 17,
            fontWeight: "bold",
            paddingHorizontal: 30,
          }}
          onPress={() => navigation.navigate("cart")}
        >
          Go To Cart
        </Text>
      </ScrollView>
      <BottomTabBar navigation={navigation} />
    </SafeAreaView>
  );
};

export default ShopViewScreen;
