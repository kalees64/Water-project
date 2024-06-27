import { SafeAreaView, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import Icon4 from "react-native-vector-icons/Entypo";
import Icon5 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon6 from "react-native-vector-icons/Octicons";
import Icon7 from "react-native-vector-icons/AntDesign";
import Icon9 from "react-native-vector-icons/FontAwesome6";
import Icon11 from "react-native-vector-icons/AntDesign";
import Icon12 from "react-native-vector-icons/AntDesign";
import Icon14 from "react-native-vector-icons/AntDesign";
export default function shops() {
  return (
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
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
        <View style={{ display: "flex", flexDirection: "row", gap: 15 }}>
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
              alignItems: "center",
              padding: 20,
              gap: 20,
            }}
          >
            <Icon7 name="leftcircleo" size={25} color="black"></Icon7>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Checkout</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              borderBottomColor: "black",
              borderBottomWidth: 1,
              padding: 10,
              marginLeft: 15,
              marginRight: 15,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image source={require("../assets/images/Group 45 (3).png")} />
              <Text>Address</Text>
            </View>
            <Image
              style={{ backgroundColor: "#555" }}
              source={require("../assets/images/Line 2.png")}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bottom: 10,
              }}
            >
              <Image source={require("../assets/images/Group 46.png")} />
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Text style={{ top: 5 }}>Order</Text>
                <Text style={{ top: 5 }}>Summary</Text>
              </View>
            </View>
            <Image
              style={{ backgroundColor: "#555" }}
              source={require("../assets/images/Line 2.png")}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image source={require("../assets/images/Group 47.png")} />
              <Text>Payment</Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              marginLeft: 15,
              marginRight: 15,
            }}
          >
            <View style={{ marginTop: 15 }}>
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>Dwater</Text>
              <Text style={{ fontSize: 13 }}>Perumal puram,Tirunelveli</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <View style={{ marginTop: 15, paddingBottom: 15 }}>
                <Text style={{ fontSize: 15, fontWeight: 500 }}>
                  Delivery Location
                </Text>
                <Text>Robert - Samathanapuram,Tirunelveli</Text>
                <Text>Tamilnadu - 600 005</Text>
              </View>
              <View>
                <Text
                  style={{
                    backgroundColor: "#ffb504",
                    width: 80,
                    height: 30,
                    borderRadius: 6,
                    textAlign: "center",
                    padding: 5,
                    shadowColor: "gray",
                    shadowOpacity: 0.7,
                    shadowOffset: { width: 2, height: 4 },
                  }}
                >
                  Change
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              padding: 15,
              paddingBottom: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                borderWidth: 1,
                borderColor: "#aeaeae",
                borderRadius: 10,
                shadowColor: "#aeaeae",
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.8,
              }}
            >
              <View style={{ width: "34%", padding: 17 }}>
                <Image
                  source={require("../assets/images/10 litre.png")}
                  style={{}}
                />
              </View>
              <View
                style={{
                  width: "33%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 22, fontWeight: 500 }}>Water Can</Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 10,
                  }}
                >
                  <Icon9 name="bottle-water" size={20} color="black"></Icon9>
                  <Text style={{ color: "black", textAlign: "left" }}>
                    10 Liters
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon7
                    name="minuscircle"
                    size={20}
                    color="black"
                    style={{ padding: 5 }}
                  ></Icon7>
                  <Text style={{ padding: 5, fontSize: 15, fontWeight: 500 }}>
                    1
                  </Text>
                  <Icon7
                    name="pluscircle"
                    size={20}
                    color="black"
                    style={{ padding: 5 }}
                  ></Icon7>
                </View>
              </View>
              <View
                style={{
                  width: "33%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 35,
                }}
              >
                <Text style={{ fontSize: 22, fontWeight: "500" }}>
                  &#8377; 25
                </Text>
                <Icon2 name="delete" size={25} color="black"></Icon2>
              </View>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              padding: 15,
              paddingTop: 0,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingTop: 10,
                borderWidth: 1,
                borderColor: "#aeaeae",
                borderRadius: 10,
                shadowColor: "#aeaeae",
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.8,
              }}
            >
              <View style={{ width: "34%", padding: 15 }}>
                <Image
                  source={require("../assets/images/20litre.png")}
                  //   style={{ width: "100%", height: "100%" }}
                />
              </View>
              <View
                style={{
                  width: "33%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 22, fontWeight: 500 }}>Water Can</Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 10,
                  }}
                >
                  <Icon9 name="bottle-water" size={20} color="black"></Icon9>
                  <Text style={{ color: "black", textAlign: "left" }}>
                    20 Liters
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon7
                    name="minuscircle"
                    size={20}
                    color="black"
                    style={{ padding: 5 }}
                  ></Icon7>
                  <Text style={{ padding: 5, fontSize: 15, fontWeight: 500 }}>
                    2
                  </Text>
                  <Icon7
                    name="pluscircle"
                    size={20}
                    color="black"
                    style={{ padding: 5 }}
                  ></Icon7>
                </View>
              </View>
              <View
                style={{
                  width: "33%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 35,
                }}
              >
                <Text style={{ fontSize: 22, fontWeight: "500" }}>
                  &#8377; 60
                </Text>
                <Icon2 name="delete" size={25} color="black"></Icon2>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            padding: 15,
          }}
        >
          <View>
            <Text style={{ fontSize: 25, fontWeight: "500" }}>Total Bill</Text>
          </View>
          <View style={{ width: "100%", padding: 10 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontWeight: 400, fontSize: 18 }}>Sub Total</Text>
              <Text style={{ fontWeight: 400, fontSize: 18 }}>&#8377; 85</Text>
            </View>
          </View>
          <View style={{ width: "100%", padding: 10, paddingTop: 0 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontWeight: 400, fontSize: 18 }}>GST</Text>
              <Text style={{ fontWeight: 400, fontSize: 18 }}>&#8377; 10</Text>
            </View>
          </View>
          <View style={{ width: "100%", padding: 10, paddingTop: 0 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingBottom: 15,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontWeight: 400, fontSize: 18 }}>
                Delivery Charges
              </Text>
              <Text style={{ fontWeight: 400, fontSize: 18 }}>&#8377; 0</Text>
            </View>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: "#aeaeae",
            }}
          ></View>
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 25,
                paddingBottom: 100,
              }}
            >
              <Text style={{ fontWeight: 500, fontSize: 25 }}>
                Total Amount
              </Text>
              <Text style={{ fontWeight: 500, fontSize: 25 }}>&#8377; 95</Text>
            </View>
          </View>
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
          padding: 20,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ paddingEnd: 95 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Total Bill &#8377;95
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  backgroundColor: "#ffb504",
                  width: 100,
                  height: 40,
                  borderRadius: 10,
                  textAlign: "center",
                  padding: 9,
                  shadowColor: "gray",
                  shadowOpacity: 0.7,
                  shadowOffset: { width: 2, height: 4 },
                }}
              >
                Continue
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
