import { SafeAreaView, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import Icon4 from "react-native-vector-icons/Entypo";
import Icon5 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon6 from "react-native-vector-icons/Octicons";
import Icon7 from "react-native-vector-icons/AntDesign";

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
        <View style={{ display: "flex", flexDirection: "row", gap: 15 }}></View>
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
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              Change Address
            </Text>
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
              marginLeft: 15,
              marginRight: 15,
            }}
          >
            <View style={{ marginTop: 15 }}></View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    top: 40,
                    left: 12,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon7 name="checkcircle" size={20} color="#3fbdf1"></Icon7>
                </View>
              </View>
              <View style={{ marginTop: 15, paddingBottom: 15, right: 20 }}>
                <Text
                  style={{ fontSize: 15, fontWeight: "bold", marginBottom: 10 }}
                >
                  Roboert
                </Text>
                <Text>Robert - Samathanapuram,</Text>
                <Text>Tirunelveli, Tamilnadu - 600 005</Text>
                <Text style={{ marginTop: 10 }}>9858462486</Text>
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
                  Edit
                </Text>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: 58,
                backgroundColor: "whitesmoke",
                borderRadius: 5,
                shadowColor: "gray",
                shadowOffset: { width: 2, height: 2 },
                padding: 20,
                marginLeft: 1,
                borderColor: "#aeaeae",
                borderWidth: 1,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Icon7
                  style={{ marginRight: 5 }}
                  name="plus"
                  size={20}
                  color="black"
                ></Icon7>
                <Text style={{ fontWeight: "bold" }}>Add a new address</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={{ margin: 10, padding: 5 }}>
        <View
          style={{
            width: "100%",
            height: 58,
            backgroundColor: "#3fbdf1",
            borderRadius: 5,
            shadowColor: "gray",
            shadowOffset: { width: 2, height: 2 },
            padding: 20,
            marginLeft: 1,
            borderColor: "#aeaeae",
            borderWidth: 1,
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>
            Deliver This Address
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
