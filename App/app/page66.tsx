import { SafeAreaView, Text, View, Image } from "react-native";
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
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>About Us</Text>
        </View>
        <View style={{ padding: 25, gap: 16 }}>
          <Image
            source={require("../assets/images/file 1.png")}
            style={{}}
          ></Image>
          <Text style={{ fontSize: 22 }}>
            Welcome to Thanni Can, India's pioneering water supply application,
            dedicated to delivering the highest quality water right to your
            doorstep. As the first of its kind in India, we strive to
            revolutionize the way you access and enjoy clean water.
          </Text>
          <Text style={{ fontSize: 28, fontWeight: "bold" }}>
            What We Offer
          </Text>
          <Text style={{ fontSize: 22 }}>
            Choose from our range of 20L, 10L, 5L and dispenser cans, along with
            convenient water pumps to meet your needs.
          </Text>
          <Image source={require("../assets/images/Slide 1.png")}></Image>
          <Text style={{ fontSize: 22 }}>
            We ensure that every drop of water we deliver meets the highest
            standards of purity and taste.
          </Text>
          <Image source={require("../assets/images/slide 2.png")}></Image>
          <Text style={{ fontSize: 22 }}>
            Select a delivery time that suits your schedule, making it easier
            than ever to stay hydrated
          </Text>
          <Image source={require("../assets/images/slide 3.png")}></Image>
          <Text style={{ fontSize: 22 }}>
            Experience quick and efficient delivery services, ensuring you never
            run out of water.
          </Text>
          <Image source={require("../assets/images/slide 4.png.png")}></Image>
          <Text style={{ fontSize: 22 }}>
            Enjoy peace of mind with our safe and reliable payment options.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
