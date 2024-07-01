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
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            Ratings & Reviews
          </Text>
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
        </View>
      </View>
      <ScrollView>
        <View
          style={{ gap: 20, paddingTop: 20, padding: 20, paddingBottom: 70 }}
        >
          <View
            style={{
              borderColor: "#aeaeae",
              borderWidth: 1,
              padding: 20,
              height: 190,
              shadowColor: "#aeaeae",
              shadowOffset: { width: 2, height: 4 },
              borderRadius: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 7,
                  justifyContent: "space-between",
                }}
              >
                <Icon10
                  style={{ color: "#FFB504" }}
                  name="star"
                  size={35}
                ></Icon10>
                <Icon10
                  style={{ color: "#FFB504" }}
                  name="star"
                  size={35}
                ></Icon10>
                <Icon10
                  style={{ color: "#FFB504" }}
                  name="star"
                  size={35}
                ></Icon10>
                <Icon10
                  style={{ color: "#FFB504" }}
                  name="star"
                  size={35}
                ></Icon10>
                <Icon10
                  style={{ color: "#FFB504" }}
                  name="star"
                  size={35}
                ></Icon10>
                <Text style={{ fontSize: 20 }}>(5 star)</Text>
              </View>
              <View>
                <Text>1d ago</Text>
              </View>
            </View>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Robert</Text>
            <Text style={{ paddingTop: 5, fontSize: 15 }}>
              "Fantastic service! The delivery was right on time, and the
              quality of water is exceptional. I love the convenience of
              scheduling deliveries through the app.“
            </Text>
          </View>

          <View
            style={{
              borderColor: "#aeaeae",
              borderWidth: 1,
              padding: 20,
              height: 190,
              shadowColor: "#aeaeae",
              shadowOffset: { width: 2, height: 4 },
              borderRadius: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 7,
                  justifyContent: "space-between",
                }}
              >
                <Icon10
                  style={{ color: "#FFB504" }}
                  name="star"
                  size={35}
                ></Icon10>
                <Icon10
                  style={{ color: "#FFB504" }}
                  name="star"
                  size={35}
                ></Icon10>
                <Icon10
                  style={{ color: "#FFB504" }}
                  name="star"
                  size={35}
                ></Icon10>
                <Icon10
                  style={{ color: "#FFB504" }}
                  name="star"
                  size={35}
                ></Icon10>
                <Icon10
                  style={{ color: "#FFB504" }}
                  name="star"
                  size={35}
                ></Icon10>
                <Text style={{ fontSize: 20 }}>(5 star)</Text>
              </View>
              <View>
                <Text>1d ago</Text>
              </View>
            </View>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Robert</Text>
            <Text style={{ paddingTop: 5, fontSize: 15 }}>
              "Fantastic service! The delivery was right on time, and the
              quality of water is exceptional. I love the convenience of
              scheduling deliveries through the app.“
            </Text>
          </View>

          <View
            style={{
              borderColor: "#aeaeae",
              borderWidth: 1,
              padding: 20,
              height: 190,
              shadowColor: "#aeaeae",
              shadowOffset: { width: 2, height: 4 },
              borderRadius: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 7,
                  justifyContent: "space-between",
                }}
              >
                <Icon10
                  style={{ color: "#FFB504" }}
                  name="star"
                  size={35}
                ></Icon10>
                <Icon10
                  style={{ color: "#FFB504" }}
                  name="star"
                  size={35}
                ></Icon10>
                <Icon10
                  style={{ color: "#FFB504" }}
                  name="star"
                  size={35}
                ></Icon10>
                <Icon10
                  style={{ color: "#FFB504" }}
                  name="star"
                  size={35}
                ></Icon10>
                <Icon10
                  style={{ color: "#FFB504" }}
                  name="star"
                  size={35}
                ></Icon10>
                <Text style={{ fontSize: 20 }}>(5 star)</Text>
              </View>
              <View>
                <Text>1d ago</Text>
              </View>
            </View>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Robert</Text>
            <Text style={{ paddingTop: 5, fontSize: 15 }}>
              "Fantastic service! The delivery was right on time, and the
              quality of water is exceptional. I love the convenience of
              scheduling deliveries through the app.“
            </Text>
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
