import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/EvilIcons";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import Icon4 from "react-native-vector-icons/AntDesign";
import Icon5 from "react-native-vector-icons/AntDesign";
import Icon6 from "react-native-vector-icons/Octicons";
import Icon7 from "react-native-vector-icons/AntDesign";
import Icon8 from "react-native-vector-icons/FontAwesome5";
import Icon9 from "react-native-vector-icons/Octicons";
import { Link } from "expo-router";
import RadioButtonAndroid from "react-native-paper/lib/typescript/components/RadioButton/RadioButtonAndroid";

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
        }}
      >
        <View
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Text
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href="/">
              <Icon
                name="arrow-left"
                size={40}
                color="black"
                style={{ fontWeight: "bold" }}
              />
            </Link>
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>Payments</Text>
        </View>
        <View
          style={{
            width: "100%",
            padding: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: 5,
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../assets/images/i1.png")} />
            <Text>Address</Text>
          </View>
          <Image source={require("../assets/images/line.png")} />
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../assets/images/i2.png")} />
            <Text>Order</Text>
            <Text>Summary</Text>
          </View>
          <Image source={require("../assets/images/line.png")} />
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../assets/images/i3.png")} />
            <Text>Payment</Text>
          </View>
        </View>

        <View
          style={{
            width: "90%",
            borderWidth: 1,
            marginHorizontal: "auto",
            borderColor: "gray",
          }}
        ></View>

        <View
          style={{
            width: "100%",
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>UPI Payment</Text>
        </View>

        <View style={{ width: "100%", padding: 20, display: "flex", gap: 15 }}>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              padding: 15,
              borderRadius: 10,
              borderColor: "gray",
              shadowColor: "gray",
              shadowOffset: { width: 2, height: 3 },
            }}
          >
            <View style={{ width: "15%" }}>
              <Image
                source={require("../assets/images/gpay_icon.png")}
                style={{ width: 25, height: 25 }}
              />
            </View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Google Pay
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              padding: 15,
              borderRadius: 10,
              borderColor: "gray",
              shadowColor: "gray",
              shadowOffset: { width: 2, height: 3 },
            }}
          >
            <View style={{ width: "15%" }}>
              <Image
                source={require("../assets/images/paytm_icon.png")}
                style={{ width: 25, height: 25 }}
              />
            </View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Paytm
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              padding: 15,
              borderRadius: 10,
              borderColor: "gray",
              shadowColor: "gray",
              shadowOffset: { width: 2, height: 3 },
            }}
          >
            <View style={{ width: "15%" }}>
              <Image
                source={require("../assets/images/phonepe_icon.png")}
                style={{ width: 25, height: 25 }}
              />
            </View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              PhonePe
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              padding: 15,
              borderRadius: 10,
              borderColor: "gray",
              shadowColor: "gray",
              shadowOffset: { width: 2, height: 3 },
            }}
          >
            <Icon5
              name="plus"
              size={25}
              color="#7fd3f6"
              style={{ width: "15%" }}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Add New UPI ID
            </Text>
          </View>
        </View>
        {/* <View style={{ width: "100%", padding: 20, paddingTop: 30 }}>
          <Text
            style={{
              backgroundColor: "#3fbdf1",
              padding: 10,
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 18,
              color: "white",
              borderRadius: 8,
            }}
          >
            Pay &#8377; 95
          </Text>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
