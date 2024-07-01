import { SafeAreaView, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import Icon4 from "react-native-vector-icons/Entypo";
import Icon5 from "react-native-vector-icons/Fontisto";
import Icon6 from "react-native-vector-icons/Octicons";
import Icon7 from "react-native-vector-icons/AntDesign";
import Icon8 from "react-native-vector-icons/EvilIcons";
import Icon9 from "react-native-vector-icons/FontAwesome6";
import Icon10 from "react-native-vector-icons/FontAwesome";
import Icon11 from "react-native-vector-icons/Feather";
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
          shadowOffset: { width: -2, height: 4 },
          shadowColor: "#171717",
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>THANNICAN</Text>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Icon1 name="search" size={25} color="white"></Icon1>
          <Icon2 name="notifications-active" size={25} color="white"></Icon2>
        </View>
      </View>
      <ScrollView>
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
            ></Icon8>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>My Reviews</Text>
          </View>
        </View>
        <View style={{ padding: 20, gap: 20, paddingBottom: 70 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              borderColor: "#aeaeae",
              borderWidth: 1,
              padding: 20,
              height: 160,
              shadowColor: "#aeaeae",
              shadowOffset: { width: 2, height: 4 },
              borderRadius: 10,
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: "30%" }}>
              <Image
                source={require("../assets/images/10 litre.png")}
                style={{}}
              ></Image>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                width: "70%",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{}}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      marginBottom: 7,
                    }}
                  >
                    Water Can
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: 8,
                    }}
                  >
                    <Icon9 name="bottle-water" style={{ fontSize: 17 }}></Icon9>
                    <Text style={{}}>10 Liters</Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Icon10
                    style={{ color: "#FFB504" }}
                    name="star"
                    size={20}
                  ></Icon10>
                  <Icon10
                    style={{ color: "#FFB504" }}
                    name="star"
                    size={20}
                  ></Icon10>
                  <Icon10
                    style={{ color: "#FFB504" }}
                    name="star"
                    size={20}
                  ></Icon10>
                  <Icon10
                    style={{ color: "#FFB504" }}
                    name="star"
                    size={20}
                  ></Icon10>
                  <Icon10
                    style={{ color: "#FFB504" }}
                    name="star"
                    size={20}
                  ></Icon10>
                </View>
              </View>
              <View style={{ paddingVertical: 20 }}>
                <Text style={{ fontSize: 15 }}>
                  "Fantastic service! The delivery{" "}
                </Text>
                <Text style={{ fontSize: 15 }}>
                  was right on time, and thequality of ....“
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              borderColor: "#aeaeae",
              borderWidth: 1,
              padding: 20,
              height: 160,
              shadowColor: "#aeaeae",
              shadowOffset: { width: 2, height: 4 },
              borderRadius: 10,
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: "30%" }}>
              <Image
                source={require("../assets/images/20litre.png")}
                style={{ width: 100, height: 100 }}
              ></Image>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                width: "70%",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{}}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      marginBottom: 7,
                    }}
                  >
                    Water Can
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: 8,
                    }}
                  >
                    <Icon9 name="bottle-water" style={{ fontSize: 17 }}></Icon9>
                    <Text style={{}}>20 Liters</Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Icon11 name="star" size={20}></Icon11>
                  <Icon11 name="star" size={20}></Icon11>
                  <Icon11 name="star" size={20}></Icon11>
                  <Icon11 name="star" size={20}></Icon11>
                  <Icon11 name="star" size={20}></Icon11>
                </View>
              </View>
              <View style={{ paddingVertical: 20 }}>
                <Text
                  style={{
                    shadowColor: "#b3b3b3",
                    shadowOffset: { width: 2, height: 4 },
                    color: "black",
                    borderRadius: 8,
                    fontSize: 17,
                    backgroundColor: "#FFA500",
                    height: 30,
                    textAlign: "center",
                    width: 160,
                    paddingTop: 2,
                  }}
                >
                  Write a Review
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              borderColor: "#aeaeae",
              borderWidth: 1,
              padding: 20,
              height: 160,
              shadowColor: "#aeaeae",
              shadowOffset: { width: 2, height: 4 },
              borderRadius: 10,
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: "30%" }}>
              <Image
                source={require("../assets/images/20litre.png")}
                style={{ width: 100, height: 100 }}
              ></Image>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                width: "70%",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{}}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      marginBottom: 7,
                    }}
                  >
                    Water Can
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: 8,
                    }}
                  >
                    <Icon9 name="bottle-water" style={{ fontSize: 17 }}></Icon9>
                    <Text style={{}}>20 Liters</Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Icon11 style={{}} name="star" size={20}></Icon11>
                  <Icon11 name="star" size={20}></Icon11>
                  <Icon11 name="star" size={20}></Icon11>
                  <Icon11 name="star" size={20}></Icon11>
                  <Icon11 name="star" size={20}></Icon11>
                </View>
              </View>
              <View style={{ paddingVertical: 20 }}>
                <Text
                  style={{
                    shadowColor: "#b3b3b3",
                    shadowOffset: { width: 2, height: 4 },
                    color: "black",
                    borderRadius: 8,
                    fontSize: 17,
                    backgroundColor: "#FFA500",
                    height: 30,
                    textAlign: "center",
                    width: 160,
                    paddingTop: 2,
                  }}
                >
                  Write a Review
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              borderColor: "#aeaeae",
              borderWidth: 1,
              padding: 20,
              height: 160,
              shadowColor: "#aeaeae",
              shadowOffset: { width: 2, height: 4 },
              borderRadius: 10,
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: "30%" }}>
              <Image
                source={require("../assets/images/20litre.png")}
                style={{ width: 100, height: 100 }}
              ></Image>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                width: "70%",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{}}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      marginBottom: 7,
                    }}
                  >
                    Water Can
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: 8,
                    }}
                  >
                    <Icon9 name="bottle-water" style={{ fontSize: 17 }}></Icon9>
                    <Text style={{}}>20 Liters</Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Icon11 style={{}} name="star" size={20}></Icon11>
                  <Icon11 name="star" size={20}></Icon11>
                  <Icon11 name="star" size={20}></Icon11>
                  <Icon11 name="star" size={20}></Icon11>
                  <Icon11 name="star" size={20}></Icon11>
                </View>
              </View>
              <View style={{ paddingVertical: 20 }}>
                <Text
                  style={{
                    shadowColor: "#b3b3b3",
                    shadowOffset: { width: 2, height: 4 },
                    color: "black",
                    borderRadius: 8,
                    fontSize: 17,
                    backgroundColor: "#FFA500",
                    height: 30,
                    textAlign: "center",
                    width: 160,
                    paddingTop: 2,
                  }}
                >
                  Write a Review
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              borderColor: "#aeaeae",
              borderWidth: 1,
              padding: 20,
              height: 160,
              shadowColor: "#aeaeae",
              shadowOffset: { width: 2, height: 4 },
              borderRadius: 10,
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: "30%" }}>
              <Image
                source={require("../assets/images/10 litre.png")}
                style={{}}
              ></Image>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                width: "70%",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{}}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      marginBottom: 7,
                    }}
                  >
                    Water Can
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: 8,
                    }}
                  >
                    <Icon9 name="bottle-water" style={{ fontSize: 17 }}></Icon9>
                    <Text style={{}}>10 Liters</Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Icon10
                    style={{ color: "#FFB504" }}
                    name="star"
                    size={20}
                  ></Icon10>
                  <Icon10
                    style={{ color: "#FFB504" }}
                    name="star"
                    size={20}
                  ></Icon10>
                  <Icon10
                    style={{ color: "#FFB504" }}
                    name="star"
                    size={20}
                  ></Icon10>
                  <Icon10
                    style={{ color: "#FFB504" }}
                    name="star"
                    size={20}
                  ></Icon10>
                  <Icon10
                    style={{ color: "#FFB504" }}
                    name="star"
                    size={20}
                  ></Icon10>
                </View>
              </View>
              <View style={{ paddingVertical: 20 }}>
                <Text style={{ fontSize: 15 }}>
                  "Fantastic service! The delivery{" "}
                </Text>
                <Text style={{ fontSize: 15 }}>
                  was right on time, and thequality of ....“
                </Text>
              </View>
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
        <Icon5
          name="nav-icon-grid-a"
          size={16}
          color="white"
          style={{ backgroundColor: "black", padding: 10, borderRadius: 50 }}
        ></Icon5>
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
          <Icon7 name="shoppingcart" size={30} color="black"></Icon7>
          <Text style={{ color: "black" }}>Cart</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
