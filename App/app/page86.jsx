import { SafeAreaView, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon8 from "react-native-vector-icons/EvilIcons";
import Icon14 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon10 from "react-native-vector-icons/FontAwesome6";
import Icon3 from "react-native-vector-icons/Entypo";
import Icon4 from "react-native-vector-icons/AntDesign";
// import Icon5 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon7 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon16 from "react-native-vector-icons/FontAwesome6";
import Icon17 from "react-native-vector-icons/FontAwesome6";
import Icon18 from "react-native-vector-icons/Octicons";
import Icon19 from "react-native-vector-icons/Fontisto";
import Icon20 from "react-native-vector-icons/Entypo";
import Icon6 from "react-native-vector-icons/AntDesign";
import Icon9 from "react-native-vector-icons/FontAwesome";
export default function shops() {
    return (
        <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: 'white', paddingBottom: 80 }}>
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

                <View >
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20, marginLeft: 17 }} >
                        <Icon8 name='arrow-left' style={{ fontSize: 30, fontWeight: "bold", marginRight: 17 }}></Icon8>
                        <Text style={{ fontSize: 22, fontWeight: "bold", }}>Write a Review</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 25, }} >
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, }}>Rate this product & vendor </Text>
                        </View>
                    </View>

                    <View style={{ gap: 25, paddingTop: 20, padding: 20, }}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            borderColor: "#aeaeae",
                            borderWidth: 1,
                            height: 115,
                            shadowColor: '#aeaeae',
                            shadowOffset: { width: 2, height: 2, },
                            borderRadius: 10,

                        }}>
                            <View style={{ width: '50%', }}>
                                <Image source={require('./images/20litre.jpg')} style={{ marginTop: 10, marginLeft: 30, marginRight: 50, paddingRight: 10, }} ></Image>
                            </View>
                            <View style={{ gap: 15, width: '50%', display: 'flex', }}>
                                <View >
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, }}>Water Can</Text>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', }}>
                                    <View>
                                        <Icon10 name='bottle-water' style={{ fontSize: 17, }}></Icon10>
                                    </View>
                                    <View>
                                        <Text> 10 Litres</Text>
                                    </View>
                                </View>


                            </View>




                        </View>
                    </View>
                </View>



                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, paddingTop: 10, }}>
                    <Icon9 name='star-o' style={{ fontSize: 20, }}></Icon9>
                    <Icon9 name='star-o' style={{ fontSize: 20, }}></Icon9>
                    <Icon9 name='star-o' style={{ fontSize: 20, }}></Icon9>
                    <Icon9 name='star-o' style={{ fontSize: 20, }}></Icon9>
                    <Icon9 name='star-o' style={{ fontSize: 20, }}></Icon9>

                </View>
                <View style={{ gap: 25, paddingTop: 20, padding: 20, }}>
                    <Text style={{
                        paddingTop: 10,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between', borderColor: "#aeaeae", borderWidth: 1, height: 115, shadowColor: '#aeaeae', shadowOffset: { width: 2, height: 2, }, borderRadius: 10,
                    }}>   Write a Review</Text>

                </View>
                <View style={{ width: '100%', padding: 20, }}>
                    <Text style={{ width: '100%', textAlign: 'center', shadowColor: '#b3b3b3', shadowOffset: { width: 2, height: 2 }, color: "white", borderRadius: 8, fontSize: 15, backgroundColor: "#3fbdf1", padding: 10, paddingRight: 10, }}>Post Review</Text>
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
                    <Icon20 name="shop" size={30} color="black"></Icon20>
                    <Text style={{ color: "black" }}>Shop</Text>
                </View>
                <Icon19
                    name="nav-icon-grid-a"
                    size={16}
                    color="white"
                    style={{ backgroundColor: "black", padding: 10, borderRadius: 50 }}
                ></Icon19>
                <View
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Icon18 name="person" size={30} color="black"></Icon18>
                    <Text style={{ color: "black" }}>Account</Text>
                </View>
                <View
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Icon4 name="shoppingcart" size={30} color="black"></Icon4>
                    <Text style={{ color: "black" }}>Cart</Text>
                </View>
            </View>
        </SafeAreaView >
    );
}






