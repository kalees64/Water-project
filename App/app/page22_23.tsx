import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/FontAwesome6";
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
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              Add Address
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
              height: 70,
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
        </View>
        <View style={{ paddingVertical: 20, gap: 15 }}>
          <View
            style={{
              width: "100%",
              height: 40,
              paddingHorizontal: 20,
            }}
          >
            <TextInput
              placeholder="Full Name"
              style={{
                width: "100%",
                height: 50,
                fontSize: 15,
                shadowColor: "#b3b3b3",
                shadowOffset: { width: 2, height: 4 },
                borderRadius: 10,
                borderColor: "#aeaeae",
                borderWidth: 1,
                paddingLeft: 13,
              }}
            ></TextInput>
          </View>
          <View
            style={{
              width: "100%",
              height: 40,
              paddingHorizontal: 20,
            }}
          >
            <TextInput
              placeholder="Mobile Number*"
              style={{
                width: "100%",
                height: 50,
                fontSize: 15,
                shadowColor: "#b3b3b3",
                shadowOffset: { width: 2, height: 4 },
                borderRadius: 10,
                borderColor: "#aeaeae",
                borderWidth: 1,
                paddingLeft: 13,
              }}
            ></TextInput>
          </View>

          <View
            style={{
              width: "100%",
              height: 40,
              paddingHorizontal: 20,
            }}
          >
            <TextInput
              placeholder="Door No*"
              style={{
                width: "45%",
                height: 50,
                fontSize: 15,
                shadowColor: "#b3b3b3",
                shadowOffset: { width: 2, height: 4 },
                borderRadius: 10,
                borderColor: "#aeaeae",
                borderWidth: 1,
                paddingLeft: 13,
              }}
            ></TextInput>
          </View>

          <View
            style={{
              width: "100%",
              height: 40,
              paddingHorizontal: 20,
            }}
          >
            <TextInput
              placeholder="Street Name*"
              style={{
                width: "100%",
                height: 50,
                fontSize: 15,
                shadowColor: "#b3b3b3",
                shadowOffset: { width: 2, height: 4 },
                borderRadius: 10,
                borderColor: "#aeaeae",
                borderWidth: 1,
                paddingLeft: 13,
              }}
            ></TextInput>
          </View>

          <View
            style={{
              width: "100%",
              height: 40,
              paddingHorizontal: 20,
            }}
          >
            <TextInput
              placeholder="City Name*"
              style={{
                width: "100%",
                height: 50,
                fontSize: 15,
                shadowColor: "#b3b3b3",
                shadowOffset: { width: 2, height: 4 },
                borderRadius: 10,
                borderColor: "#aeaeae",
                borderWidth: 1,
                paddingLeft: 13,
              }}
            ></TextInput>
          </View>
          {/* <View style={{ display: "flex", flexDirection: "row" }}>
            <View
              style={{
                width: "100%",
                height: 40,
                paddingHorizontal: 20,
              }}
            >
              <TextInput
                placeholder="State*"
                style={{
                  width: "50%",
                  height: 50,
                  fontSize: 20,
                  shadowColor: "#b3b3b3",
                  shadowOffset: { width: 2, height: 4 },
                  borderRadius: 10,
                  borderColor: "#aeaeae",
                  borderWidth: 1,
                }}
              ></TextInput>
            </View>

            <View
              style={{
                width: "100%",
                height: 40,
                paddingHorizontal: 20,
              }}
            >
              <TextInput
                placeholder="Pin Code*"
                style={{
                  width: "50%",
                  height: 50,
                  fontSize: 20,
                  shadowColor: "#b3b3b3",
                  shadowOffset: { width: 2, height: 4 },
                  borderRadius: 10,
                  borderColor: "#aeaeae",
                  borderWidth: 1,
                }}
              ></TextInput>
            </View>
          </View> */}
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              paddingHorizontal: 20,
              justifyContent: "space-between",
              // gap: 30,
            }}
          >
            <View style={{ width: "45%" }}>
              <TextInput
                placeholder="State*"
                style={{
                  height: 40,
                  fontSize: 15,
                  shadowColor: "#b3b3b3",
                  shadowOffset: { width: 2, height: 4 },
                  borderRadius: 10,
                  borderColor: "#aeaeae",
                  borderWidth: 1,
                  paddingLeft: 13,
                }}
              ></TextInput>
            </View>
            <View style={{ width: "45%" }}>
              <TextInput
                placeholder="Pin Code*"
                style={{
                  height: 40,
                  fontSize: 15,
                  shadowColor: "#b3b3b3",
                  shadowOffset: { width: 2, height: 4 },
                  borderRadius: 10,
                  borderColor: "#aeaeae",
                  borderWidth: 1,
                  paddingLeft: 13,
                }}
              ></TextInput>
            </View>
          </View>
        </View>
        <View style={{ gap: 20 }}>
          <View
            style={{
              width: "100%",
              paddingHorizontal: 20,
            }}
          >
            <View
              style={{
                height: 40,
                borderWidth: 1,
                borderRadius: 8,
                backgroundColor: "#FFB504",
                // border: "none",
                borderColor: "transparent",
                shadowColor: "#b3b3b3",
                shadowOffset: { width: 2, height: 4 },
                display: "flex",
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon3
                name="location-crosshairs"
                style={{
                  textAlign: "right",
                  fontWeight: "bold",
                  fontSize: 25,
                }}
              ></Icon3>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                }}
              >
                Use My Location
              </Text>
            </View>
          </View>
          <View style={{ width: "100%", paddingHorizontal: 20 }}>
            <Text
              style={{
                shadowColor: "#b3b3b3",
                shadowOffset: { width: 2, height: 4 },
                // color: "black",
                borderRadius: 8,
                fontSize: 22,
                backgroundColor: "#3fbdf1",
                height: 40,
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 5,
              }}
            >
              Add Address
            </Text>
          </View>
        </View>
        {/* <View>
          <Icon6 name="location-crosshairs"></Icon6>
          <View>
            <Text
              style={{
                shadowColor: "#b3b3b3",
                shadowOffset: { width: 2, height: 4 },
                color: "black",
                borderRadius: 8,
                fontSize: 18,
                backgroundColor: "#FFB504",
                height: 40,
                color: "black",
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 5,
              }}
            >
              Use My Location
            </Text>
          </View>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
