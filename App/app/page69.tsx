import { SafeAreaView, Text, View } from "react-native";
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
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Terms Of Use</Text>
        </View>
        <View style={{ padding: 16, gap: 16 }}>
          <Text style={{ fontSize: 22 }}>
            you agree to comply with and be bound by the following terms and
            conditions. Please review them carefully.
          </Text>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            1. Acceptance of Terms
          </Text>
          <Text style={{ fontSize: 22 }}>
            By accessing and using the Thanni Can application, you accept and
            agree to be bound by the terms and provisions of this agreement. In
            addition, when using these particular services, you shall be subject
            to any posted guidelines or rules applicable to such services. Any
            participation in this service will constitute acceptance of this
            agreement
          </Text>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            2. User Responsibilities
          </Text>
          <Text style={{ fontSize: 22 }}>
            Users agree to provide accurate, current, and complete information
            during the registration process and to update such information to
            keep it accurate, current, and complete. Users are responsible for
            maintaining the confidentiality of their account and password and
            for restricting access to their device.
          </Text>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            3. Payment Terms
          </Text>
          <Text style={{ fontSize: 22 }}>
            All purchases and transactions for services and products through
            Thanni Can are final. Users agree to provide valid payment
            information. Thanni Can reserves the right to cancel any order if
            fraudulent activity is suspected
          </Text>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            4. Delivery Terms
          </Text>
          <Text style={{ fontSize: 22 }}>
            Delivery times are scheduled based on user preferences and
            availability. Thanni Can strives to meet the scheduled delivery
            times but does not guarantee timely delivery due to factors beyond
            our control, such as traffic, weather conditions, or unforeseen
            circumstances
          </Text>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            5. Privacy Policy
          </Text>
          <Text style={{ fontSize: 22 }}>
            Your use of the Thanni Can application and services is also governed
            by our Privacy Policy, which is incorporated by reference into these
            Terms of Use.
          </Text>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            6. Contact Information
          </Text>
          <Text style={{ fontSize: 22 }}>
            For any questions or concerns about these Terms of Use, please
            contact us at support@thannican.com.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
