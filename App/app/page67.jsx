import { SafeAreaView, Text, View, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";

export default function shops() {
    return (
        <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: 'white', }}>
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
                <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                    <Icon1 name="search" size={25} color="white"></Icon1>
                    <Icon2 name="notifications-active" size={25} color="white"></Icon2>
                </View>
            </View>
            <ScrollView>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 25, paddingTop: 10, padding: 10, }}>Why Choose Thanni Can?</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 18, padding: 10, }}>1. We are committed to sustainability, using reusable cans and promoting eco -friendly practices. Our priority is your satisfaction. </Text>
                </View>
                <View>
                    <Text style={{ fontSize: 18, padding: 10, }}>2. We offer exceptional customer service to address all your needs and concerns.  </Text>
                </View>
                <View>
                    <Text style={{ fontSize: 18, padding: 10, }}>3. Leveraging the latest technology, we provide a seamless and user-friendly app experience for all your water supply needs.   </Text>
                </View>
                <View>
                    <Text style={{ fontSize: 18, padding: 10, }}>4. We aim to support local communities by providing accessible and affordable clean water solutions.  </Text>
                </View>
                <View>
                    <Text style={{ fontSize: 18, padding: 10, }}>Join the Thanni Can community today and experience the convenience of having premium quality water delivered right to your doorstep. We are dedicated to ensuring you and your family stay hydrated, healthy, and happy. </Text>
                </View>
                <View>
                    <Text style={{ fontSize: 18, padding: 10, }}> Thank you for choosing Thanni Can – your trusted partner in water supply. </Text>
                </View>

            </ScrollView>


        </SafeAreaView >
    );
}






