import { SafeAreaView, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import Icon4 from "react-native-vector-icons/Entypo";
import Icon14 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon6 from "react-native-vector-icons/Octicons";
import Icon7 from "react-native-vector-icons/AntDesign";
import Icon8 from "react-native-vector-icons/Fontisto";
import Icon9 from "react-native-vector-icons/EvilIcons";
import Icon10 from "react-native-vector-icons/FontAwesome6";
import Icon11 from "react-native-vector-icons/AntDesign";
import Icon12 from "react-native-vector-icons/AntDesign";

export default function shops() {
  return (
    <SafeAreaView
      style={{ width: "100%", height: "100%", backgroundColor: "white" }}
    >
      <View
        style={{
          width: "100%",
          backgroundColor: "#3fbdf1",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>THANNICAN</Text>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Icon1 name="search" size={25} color="white"></Icon1>
          <Icon2 name="notifications-active" size={25} color="white"></Icon2>
        </View>
      </View>
      <ScrollView>
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 20,
              marginLeft: 17,
            }}
          >
            <Icon9
              name="arrow-left"
              style={{ fontSize: 30, fontWeight: "bold", marginRight: 17 }}
            ></Icon9>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>Cart</Text>
          </View>
          <View style={{ gap: 25 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                borderColor: "#aeaeae",
                borderWidth: 1,
                height: 115,
                shadowColor: "#aeaeae",
                shadowOffset: { width: 2, height: 2 },
                borderRadius: 10,
                // gap: 20,
              }}
            >
              <View style={{ width: "34%" }}>
                <Image
                  source={require("../assets/images/10 litre.jpg")}
                  style={{
                    marginTop: 10,
                    marginLeft: 30,
                    marginRight: 50,
                    paddingRight: 10,
                  }}
                ></Image>
              </View>
              <View style={{ gap: 15, width: "33%", display: "flex" }}>
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                    Water Can
                  </Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <View>
                    <Icon10
                      name="bottle-water"
                      style={{ fontSize: 17 }}
                    ></Icon10>
                  </View>
                  <View>
                    <Text>10 Litres</Text>
                  </View>
                </View>

                <View
                  style={{ display: "flex", flexDirection: "row", gap: 10 }}
                >
                  <View>
                    <Icon11 name="minuscircle" size={20} style={{}}></Icon11>
                  </View>
                  <View>
                    <Text style={{ fontWeight: "bold" }}>1</Text>
                  </View>
                  <View>
                    <Icon12 name="pluscircle" size={20} style={{}}></Icon12>
                  </View>
                </View>
              </View>
              <View
                style={{
                  gap: 20,
                  width: "33%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>₹25</Text>
                </View>
                <View>
                  <Icon14 name="delete" size={25} style={{}}></Icon14>
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
                height: 115,
                shadowColor: "#aeaeae",
                shadowOffset: { width: 2, height: 2 },
                borderRadius: 10,
                // gap: 20,
              }}
            >
              <View style={{ width: "34%" }}>
                <Image
                  source={require("../assets/images/20litre.jpg")}
                  style={{
                    marginTop: 10,
                    marginLeft: 30,
                    marginRight: 50,
                    paddingRight: 10,
                  }}
                ></Image>
              </View>
              <View style={{ gap: 15, width: "33%", display: "flex" }}>
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                    Water Can
                  </Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <View>
                    <Icon10
                      name="bottle-water"
                      style={{ fontSize: 17 }}
                    ></Icon10>
                  </View>
                  <View>
                    <Text> 20 Litres</Text>
                  </View>
                </View>

                <View
                  style={{ display: "flex", flexDirection: "row", gap: 10 }}
                >
                  <View>
                    <Icon11 name="minuscircle" size={20} style={{}}></Icon11>
                  </View>
                  <View>
                    <Text style={{ fontWeight: "bold" }}>2</Text>
                  </View>
                  <View>
                    <Icon12 name="pluscircle" size={20} style={{}}></Icon12>
                  </View>
                </View>
              </View>
              <View
                style={{
                  gap: 20,
                  width: "33%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>₹60</Text>
                </View>
                <View>
                  <Icon14 name="delete" size={25} style={{}}></Icon14>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 19,
              marginTop: 20,
              marginLeft: 20,
            }}
          >
            Total Bill
          </Text>
          <Text style={{ marginTop: 15, marginLeft: 27 }}>Sub Total</Text>
          <Text style={{ marginLeft: 320, marginTop: -20 }}>₹ 85</Text>
          <Text style={{ marginTop: 5, marginLeft: 27 }}>GST</Text>
          <Text style={{ marginLeft: 320, marginTop: -20 }}>₹ 10</Text>
          <Text style={{ marginTop: 5, marginLeft: 27 }}>Delivery Charges</Text>
          <Text style={{ marginLeft: 327, marginTop: -20 }}>₹ 0</Text>
          <View
            style={{
              display: "flex",
              marginTop: 15,
              marginLeft: 17,
              marginRight: 17,
              flexDirection: "row",
              borderBottomColor: "black",
              borderWidth: 1,
              borderTopColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
            }}
          ></View>

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 19,
              marginLeft: 25,
              marginTop: 10,
            }}
          >
            Total Amount
          </Text>
          <Text style={{ marginLeft: 320, marginTop: -20, fontWeight: "bold" }}>
            ₹ 95
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              width: 320,
              color: "white",
              fontSize: 15,
              shadowColor: "#b3b3b3",
              shadowOffset: { width: 2, height: 4 },
              borderRadius: 8,
              paddingVertical: 14,
              //   paddingLeft: 17,
              backgroundColor: "#3fbdf1",
              justifyContent: "center",
              alignItems: "center",
              //   paddingLeft: 120,
              marginLeft: 30,
              marginTop: 15,
              textAlign: "center",
            }}
          >
            Checkout
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "row",
          width: "100%",
          bottom: 0,
          backgroundColor: "#3fbdf1",
          padding: 5,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon3 name="home" size={30} color="black"></Icon3>
          <Text style={{ color: "black" }}>Home</Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon4 name="shop" size={30} color="black"></Icon4>
          <Text style={{ color: "black" }}>Shop</Text>
        </View>
        <Icon8
          name="nav-icon-grid-a"
          size={16}
          color="white"
          style={{ backgroundColor: "black", padding: 10, borderRadius: 50 }}
        ></Icon8>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon6 name="person" size={30} color="black"></Icon6>
          <Text style={{ color: "black" }}>Account</Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon7 name="shoppingcart" size={30} color="white"></Icon7>
          <Text style={{ color: "white" }}>Cart</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
