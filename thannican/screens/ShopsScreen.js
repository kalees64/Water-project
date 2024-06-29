import React from "react";
import TopBar from "./TopBar";
import BottomTabBar from "./BottomTabBar";
import { SafeAreaView, Text, View, Image, ScrollView } from "react-native";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import Icon4 from "react-native-vector-icons/Entypo";
import Icon5 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon6 from "react-native-vector-icons/Octicons";
import Icon7 from "react-native-vector-icons/AntDesign";
import Icon9 from "react-native-vector-icons/Fontisto";
import Icon8 from "react-native-vector-icons/FontAwesome";
import Icon10 from "react-native-vector-icons/FontAwesome6";
import Icon11 from "react-native-vector-icons/EvilIcons";

const ShopsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
      <TopBar navigation={navigation} />

      <ScrollView>
        <View>
          <View
            style={{
              display: "flex",
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Icon7
              name="leftcircleo"
              size={30}
              color="black"
              onPress={() => navigation.goBack()}
            ></Icon7>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              Nearest Shops
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Recommanded</Text>
        </View>
        <View
          style={{ width: "100%", paddingHorizontal: 15, paddingVertical: 5 }}
        >
          <View
            style={{
              width: "100%",
              borderWidth: 1,
              padding: 10,
              borderColor: "gray",
              borderRadius: 5,
            }}
          >
            <View style={{ width: "100%", flexDirection: "row" }}>
              <View style={{ width: "42%" }}>
                <View style={{ width: "100%" }}>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      gap: 10,
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ fontWeight: "bold", fontSize: 25 }}>
                      Dwater
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <Icon8 name="circle" size={11} color="green"></Icon8>
                      <Text>Open</Text>
                    </View>
                  </View>
                </View>
                <View style={{ width: "100%" }}>
                  <Text style={{ fontSize: 10 }}>
                    Perumal puram, Tirunelveli
                  </Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    gap: 7,
                    paddingVertical: 5,
                  }}
                >
                  <Icon8 name="star" size={20} color="orange"></Icon8>
                  <Icon8 name="star" size={20} color="orange"></Icon8>
                  <Icon8 name="star" size={20} color="orange"></Icon8>
                  <Icon8 name="star" size={20} color="orange"></Icon8>
                  <Icon8 name="star-half-full" size={20} color="orange"></Icon8>
                </View>
              </View>

              <View
                style={{
                  width: "15%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon4 name="heart" size={24} color="red"></Icon4>
              </View>

              <View style={{ width: "42%" }}>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "baseline",
                    justifyContent: "space-evenly",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "baseline",
                    }}
                  >
                    <Icon10
                      name="bottle-water"
                      size={15}
                      color="black"
                    ></Icon10>
                    <Text>5L</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "baseline",
                    }}
                  >
                    <Icon10
                      name="bottle-water"
                      size={20}
                      color="black"
                    ></Icon10>
                    <Text>10L</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "baseline",
                    }}
                  >
                    <Icon10
                      name="bottle-water"
                      size={25}
                      color="black"
                    ></Icon10>
                    <Text>20L</Text>
                  </View>
                </View>
                <View style={{ width: "100%", padding: 15 }}>
                  <Text
                    style={{
                      backgroundColor: "orange",
                      textAlign: "center",
                      padding: 5,
                      borderRadius: 5,
                    }}
                    onPress={() => navigation.navigate("shopview")}
                  >
                    Order now
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{ width: "100%", paddingHorizontal: 15, paddingVertical: 5 }}
        >
          <View
            style={{
              width: "100%",
              borderWidth: 1,
              padding: 10,
              borderColor: "gray",
              borderRadius: 5,
            }}
          >
            <View style={{ width: "100%", flexDirection: "row" }}>
              <View style={{ width: "42%" }}>
                <View style={{ width: "100%" }}>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      gap: 10,
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ fontWeight: "bold", fontSize: 25 }}>
                      Dwater
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <Icon8 name="circle" size={11} color="green"></Icon8>
                      <Text>Open</Text>
                    </View>
                  </View>
                </View>
                <View style={{ width: "100%" }}>
                  <Text style={{ fontSize: 10 }}>
                    Perumal puram, Tirunelveli
                  </Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    gap: 7,
                    paddingVertical: 5,
                  }}
                >
                  <Icon8 name="star" size={20} color="orange"></Icon8>
                  <Icon8 name="star" size={20} color="orange"></Icon8>
                  <Icon8 name="star" size={20} color="orange"></Icon8>
                  <Icon8 name="star" size={20} color="orange"></Icon8>
                  <Icon8 name="star-half-full" size={20} color="orange"></Icon8>
                </View>
              </View>

              <View
                style={{
                  width: "15%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon4 name="heart" size={24} color="red"></Icon4>
              </View>

              <View style={{ width: "42%" }}>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "baseline",
                    justifyContent: "space-evenly",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "baseline",
                    }}
                  >
                    <Icon10
                      name="bottle-water"
                      size={15}
                      color="black"
                    ></Icon10>
                    <Text>5L</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "baseline",
                    }}
                  >
                    <Icon10
                      name="bottle-water"
                      size={20}
                      color="black"
                    ></Icon10>
                    <Text>10L</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "baseline",
                    }}
                  >
                    <Icon10
                      name="bottle-water"
                      size={25}
                      color="black"
                    ></Icon10>
                    <Text>20L</Text>
                  </View>
                </View>
                <View style={{ width: "100%", padding: 15 }}>
                  <Text
                    style={{
                      backgroundColor: "orange",
                      textAlign: "center",
                      padding: 5,
                      borderRadius: 5,
                    }}
                    onPress={() => navigation.navigate("shopview")}
                  >
                    Order now
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <BottomTabBar navigation={navigation} />
    </SafeAreaView>
  );
};

export default ShopsScreen;
