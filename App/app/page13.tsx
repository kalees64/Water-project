import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import Icon4 from "react-native-vector-icons/Entypo";
import Icon5 from "react-native-vector-icons/Fontisto";
import Icon6 from "react-native-vector-icons/Octicons";
import Icon7 from "react-native-vector-icons/AntDesign";
import Icon8 from "react-native-vector-icons/FontAwesome";
import Icon9 from "react-native-vector-icons/Octicons";

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

      <ScrollView
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          flex: 1,
          marginBottom: 50,
        }}
      >
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <Image
            source={require("../assets/images/scroll_1.jpeg")}
            style={{ borderRadius: 15, width: "95%" }}
          />
          <Text
            style={{
              position: "absolute",
              left: "10%",
              top: "65%",
              width: "50%",
            }}
          >
            One small step is all that it takes. Save water. Save our planet.
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <Icon9 name="dot-fill" size={30}></Icon9>
          <Icon9 name="dot" size={30}></Icon9>
        </View>

        <View
          style={{ width: "100%", paddingHorizontal: 20, paddingVertical: 5 }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>Top Vendors</Text>
        </View>

        <View
          style={{
            width: "100%",
            padding: 20,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 20,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "40%",
              padding: 7,
              shadowColor: "gray",
              shadowOffset: { width: 2, height: 4 },
              shadowOpacity: 0.5,
              borderRadius: 10,
              borderColor: "gray",
              borderWidth: 1,
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>Dwater</Text>
            <Text style={{ fontSize: 13 }}>Perumal Puram,</Text>
            <Text style={{ fontSize: 13 }}>Tirunelveli</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingVertical: 10,
                justifyContent: "center",
              }}
            >
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star-half-full" color="#ffb504" size={20}></Icon8>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  backgroundColor: "#ffb504",
                  padding: 10,
                  borderRadius: 40,
                  shadowColor: "gray",
                  shadowOffset: { width: 2, height: 2 },
                }}
              >
                Shop Now
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "40%",
              padding: 7,
              shadowColor: "gray",
              shadowOffset: { width: 2, height: 4 },
              shadowOpacity: 0.5,
              borderRadius: 10,
              borderColor: "gray",
              borderWidth: 1,
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>Dwater</Text>
            <Text style={{ fontSize: 13 }}>Perumal Puram,</Text>
            <Text style={{ fontSize: 13 }}>Tirunelveli</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingVertical: 10,
                justifyContent: "center",
              }}
            >
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star-half-full" color="#ffb504" size={20}></Icon8>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  backgroundColor: "#ffb504",
                  padding: 10,
                  borderRadius: 40,
                  shadowColor: "gray",
                  shadowOffset: { width: 2, height: 2 },
                }}
              >
                Shop Now
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "40%",
              padding: 7,
              shadowColor: "gray",
              shadowOffset: { width: 2, height: 4 },
              shadowOpacity: 0.5,
              borderRadius: 10,
              borderColor: "gray",
              borderWidth: 1,
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>Dwater</Text>
            <Text style={{ fontSize: 13 }}>Perumal Puram,</Text>
            <Text style={{ fontSize: 13 }}>Tirunelveli</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingVertical: 10,
                justifyContent: "center",
              }}
            >
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star-half-full" color="#ffb504" size={20}></Icon8>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  backgroundColor: "#ffb504",
                  padding: 10,
                  borderRadius: 40,
                  shadowColor: "gray",
                  shadowOffset: { width: 2, height: 2 },
                }}
              >
                Shop Now
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "40%",
              padding: 7,
              shadowColor: "gray",
              shadowOffset: { width: 2, height: 4 },
              shadowOpacity: 0.5,
              borderRadius: 10,
              borderColor: "gray",
              borderWidth: 1,
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>Dwater</Text>
            <Text style={{ fontSize: 13 }}>Perumal Puram,</Text>
            <Text style={{ fontSize: 13 }}>Tirunelveli</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingVertical: 10,
                justifyContent: "center",
              }}
            >
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star-half-full" color="#ffb504" size={20}></Icon8>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  backgroundColor: "#ffb504",
                  padding: 10,
                  borderRadius: 40,
                  shadowColor: "gray",
                  shadowOffset: { width: 2, height: 2 },
                }}
              >
                Shop Now
              </Text>
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
          <Icon3 name="home" size={30} color="white"></Icon3>
          <Text style={{ color: "white" }}>Home</Text>
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
