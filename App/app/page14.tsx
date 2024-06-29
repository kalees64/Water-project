import { SafeAreaView, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
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
            <Icon7 name="leftcircleo" size={30} color="black"></Icon7>
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
        <View style={{ padding: 15 }}>
          <View
            style={{
              width: "100%",
              borderColor: "#aeaeae",
              borderWidth: 1,
              padding: 15,
              height: 120,
              shadowColor: "#aeaeae",
              shadowOffset: { width: 2, height: 4 },
              borderRadius: 10,
            }}
          >
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View>
                <View
                  style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 70,
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                      Dwater
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <Icon8 name="circle" size={11} color="green"></Icon8>
                    <Text>Open</Text>
                  </View>
                </View>
                <View>
                  <Text style={{ fontSize: 14 }}>
                    Perumal puram, Tirunelveli
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 5,
                    paddingTop: 14,
                  }}
                >
                  <Icon8 name="star" size={25} color="orange"></Icon8>
                  <Icon8 name="star" size={25} color="orange"></Icon8>
                  <Icon8 name="star" size={25} color="orange"></Icon8>
                  <Icon8 name="star" size={25} color="orange"></Icon8>
                  <Icon8 name="star-half-full" size={25} color="orange"></Icon8>
                </View>
              </View>

              <View style={{ width: "10%", padding: 10 }}>
                <Icon4 name="heart" size={24} color="red"></Icon4>
              </View>

              <View
                style={{
                  width: "40%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 15,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    gap: 6,
                  }}
                >
                  <View style={{ display: "flex", flexDirection: "row" }}>
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
                    <Text>10</Text>
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
                    <Text>20</Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      backgroundColor: "orange",
                      padding: 15,
                      borderRadius: 10,
                    }}
                  >
                    Order now
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ padding: 15, paddingTop: 0 }}>
          <View
            style={{
              width: "100%",
              borderColor: "#aeaeae",
              borderWidth: 1,
              padding: 15,
              height: 120,
              shadowColor: "#aeaeae",
              shadowOffset: { width: 2, height: 4 },
              borderRadius: 10,
            }}
          >
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View>
                <View
                  style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 70,
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                      Dwater
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <Icon8 name="circle" size={11} color="red"></Icon8>
                    <Text style={{ color: "red" }}>Closed</Text>
                  </View>
                </View>
                <View>
                  <Text style={{ fontSize: 14 }}>
                    Perumal puram, Tirunelveli
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 5,
                    paddingTop: 14,
                  }}
                >
                  <Icon8 name="star" size={25} color="orange"></Icon8>
                  <Icon8 name="star" size={25} color="orange"></Icon8>
                  <Icon8 name="star" size={25} color="orange"></Icon8>
                  <Icon8 name="star" size={25} color="orange"></Icon8>
                  <Icon8 name="star-half-full" size={25} color="orange"></Icon8>
                </View>
              </View>

              <View style={{ width: "10%", padding: 10 }}>
                <Icon8 name="heart-o" size={24} color="black"></Icon8>
              </View>

              <View
                style={{
                  width: "40%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 15,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    gap: 6,
                  }}
                >
                  <View style={{ display: "flex", flexDirection: "row" }}>
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
                    <Text>10</Text>
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
                    <Text>20</Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      backgroundColor: "orange",
                      padding: 15,
                      borderRadius: 10,
                    }}
                  >
                    Order now
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ padding: 15, paddingTop: 0 }}>
          <View
            style={{
              width: "100%",
              borderColor: "#aeaeae",
              borderWidth: 1,
              padding: 15,
              height: 120,
              shadowColor: "#aeaeae",
              shadowOffset: { width: 2, height: 4 },
              borderRadius: 10,
            }}
          >
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View>
                <View
                  style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 70,
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                      Dwater
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <Icon8 name="circle" size={11} color="green"></Icon8>
                    <Text>Open</Text>
                  </View>
                </View>
                <View>
                  <Text style={{ fontSize: 14 }}>
                    Perumal puram, Tirunelveli
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 5,
                    paddingTop: 14,
                  }}
                >
                  <Icon8 name="star" size={25} color="orange"></Icon8>
                  <Icon8 name="star" size={25} color="orange"></Icon8>
                  <Icon8 name="star" size={25} color="orange"></Icon8>
                  <Icon8 name="star" size={25} color="orange"></Icon8>
                  <Icon8 name="star-half-full" size={25} color="orange"></Icon8>
                </View>
              </View>

              <View style={{ width: "10%", padding: 10 }}>
                <Icon4 name="heart" size={24} color="red"></Icon4>
              </View>

              <View
                style={{
                  width: "40%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 15,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    gap: 6,
                  }}
                >
                  <View style={{ display: "flex", flexDirection: "row" }}>
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
                    <Text>10</Text>
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
                    <Text>20</Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      backgroundColor: "orange",
                      padding: 15,
                      borderRadius: 10,
                    }}
                  >
                    Order now
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            borderBottomColor: "black",
            borderWidth: 1,
            borderTopColor: "transparent",
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            margin: 15,
          }}
        ></View>
        <View style={{ padding: 15, paddingTop: 0 }}>
          <View
            style={{
              width: "100%",
              borderColor: "#aeaeae",
              borderWidth: 1,
              padding: 15,
              height: 120,
              shadowColor: "#aeaeae",
              shadowOffset: { width: 2, height: 4 },
              borderRadius: 10,
            }}
          >
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View>
                <View
                  style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 70,
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                      Dwater
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <Icon8 name="circle" size={11} color="green"></Icon8>
                    <Text>Open</Text>
                  </View>
                </View>
                <View>
                  <Text style={{ fontSize: 14 }}>
                    Perumal puram, Tirunelveli
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 5,
                    paddingTop: 14,
                  }}
                >
                  <Icon8 name="star" size={25} color="orange"></Icon8>
                  <Icon8 name="star" size={25} color="orange"></Icon8>
                  <Icon8 name="star" size={25} color="orange"></Icon8>
                  <Icon8 name="star" size={25} color="orange"></Icon8>
                  <Icon8 name="star-half-full" size={25} color="orange"></Icon8>
                </View>
              </View>

              <View style={{ width: "10%", padding: 10 }}>
                <Icon4 name="heart" size={24} color="red"></Icon4>
              </View>

              <View
                style={{
                  width: "40%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 15,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    gap: 6,
                  }}
                >
                  <View style={{ display: "flex", flexDirection: "row" }}>
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
                    <Text>10</Text>
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
                    <Text>20</Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      backgroundColor: "orange",
                      padding: 15,
                      borderRadius: 10,
                    }}
                  >
                    Order now
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ padding: 15, paddingTop: 0, paddingBottom: 100 }}>
          <View
            style={{
              width: "100%",
              borderColor: "#aeaeae",
              borderWidth: 1,
              padding: 15,
              height: 120,
              shadowColor: "#aeaeae",
              shadowOffset: { width: 2, height: 4 },
              borderRadius: 10,
            }}
          >
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View>
                <View
                  style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 70,
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                      Dwater
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <Icon8 name="circle" size={11} color="green"></Icon8>
                    <Text>Open</Text>
                  </View>
                </View>
                <View>
                  <Text style={{ fontSize: 14 }}>
                    Perumal puram, Tirunelveli
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 5,
                    paddingTop: 14,
                  }}
                >
                  <Icon8 name="star" size={25} color="orange"></Icon8>
                  <Icon8 name="star" size={25} color="orange"></Icon8>
                  <Icon8 name="star" size={25} color="orange"></Icon8>
                  <Icon8 name="star" size={25} color="orange"></Icon8>
                  <Icon8 name="star-half-full" size={25} color="orange"></Icon8>
                </View>
              </View>

              <View style={{ width: "10%", padding: 10 }}>
                <Icon4 name="heart" size={24} color="red"></Icon4>
              </View>

              <View
                style={{
                  width: "40%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 15,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    gap: 6,
                  }}
                >
                  <View style={{ display: "flex", flexDirection: "row" }}>
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
                    <Text>10</Text>
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
                    <Text>20</Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      backgroundColor: "orange",
                      padding: 15,
                      borderRadius: 10,
                    }}
                  >
                    Order now
                  </Text>
                </View>
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
          <Icon4 name="shop" size={30} color="white"></Icon4>
          <Text style={{ color: "white" }}>Shop</Text>
        </View>
        <Icon9
          name="nav-icon-grid-a"
          size={16}
          color="white"
          style={{ backgroundColor: "black", padding: 10, borderRadius: 50 }}
        ></Icon9>
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
