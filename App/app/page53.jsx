import { SafeAreaView, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon8 from "react-native-vector-icons/EvilIcons";

import Icon10 from "react-native-vector-icons/FontAwesome6";
import Icon3 from "react-native-vector-icons/Entypo";
import Icon4 from "react-native-vector-icons/AntDesign";
import Icon5 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon7 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon16 from "react-native-vector-icons/FontAwesome6";
import Icon17 from "react-native-vector-icons/Feather";
import Icon18 from "react-native-vector-icons/Octicons";
import Icon19 from "react-native-vector-icons/Fontisto";
import Icon20 from "react-native-vector-icons/Entypo";
import Icon6 from "react-native-vector-icons/AntDesign";
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
                        <Text style={{ fontSize: 22, fontWeight: "bold", }}>Track Order</Text>
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
                            <View style={{ width: '34%', }}>
                                <Image source={require('./images/10 litre.jpg')} style={{ marginTop: 10, marginLeft: 30, marginRight: 50, paddingRight: 10, }} ></Image>
                            </View>
                            <View style={{ gap: 15, width: '33%', display: 'flex', }}>
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

                                <View style={{ display: 'flex', flexDirection: 'row', gap: 10, }}>
                                    <View>
                                        <Text>Quantity : 1</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ gap: 20, width: '33%', display: 'flex', alignItems: 'center', }}>
                                <View>
                                    <Text style={{ fontWeight: 'bold', fontSize: 20, }}>

                                        ₹25
                                    </Text>

                                </View>

                            </View>



                        </View>
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
                            <View style={{ width: '34%' }}>
                                <Image source={require('./images/20litre.jpg')} style={{ marginTop: 10, marginLeft: 30, marginRight: 50, paddingRight: 10, }} ></Image>
                            </View>
                            <View style={{ gap: 15, width: '33%', display: 'flex', }}>
                                <View >
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, }}>Water Can</Text>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', }}>
                                    <View>
                                        <Icon10 name='bottle-water' style={{ fontSize: 17, }}></Icon10>
                                    </View>
                                    <View>
                                        <Text> 20 Litres</Text>
                                    </View>
                                </View>

                                <View style={{ display: 'flex', flexDirection: 'row', gap: 10, }}>
                                    <View>
                                        <Text>Quantity : 2</Text>
                                    </View>

                                </View>
                            </View>
                            <View style={{ gap: 20, width: '33%', display: 'flex', alignItems: 'center', }}>
                                <View>
                                    <Text style={{ fontWeight: 'bold', fontSize: 20, }}>

                                        ₹60
                                    </Text>

                                </View>

                            </View>


                        </View>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', gap: 10, paddingTop: 15, }}>
                    <View style={{ display: 'flex', flexDirection: 'row', }}>
                        <View>
                            <Text>Order ID : </Text>
                        </View>
                        <View>
                            <Text>a123456</Text>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', }}>
                        <View>
                            <Text>Vendor : </Text>
                        </View>
                        <View>
                            <Text>Dwater</Text>
                        </View>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: 20, }}>
                    <View style={{ gap: 60, paddingRight: 20, paddingLeft: 20, }}>
                        <View>
                            <Icon6 name='android' style={{ fontSize: 17, }}></Icon6>
                        </View>
                        <View>
                            <Icon4 name='creditcard' style={{ fontSize: 17, }}></Icon4>
                        </View>
                        <View>
                            <Icon5 name='truck-delivery-outline' style={{ fontSize: 17, }}></Icon5>
                        </View>
                        <View>
                            <Icon7 name='sticker-check-outline' style={{ fontSize: 17, }}></Icon7>
                        </View>
                    </View>

                    <View style={{ gap: 5, paddingRight: 20, }}>
                        <View>
                            <Icon16 name='circle-check' style={{ fontSize: 17, color: '#3fbdf1' }}></Icon16>
                        </View>
                        <View>
                            <Image source={require('./images/Line 2.jpg')} style={{ marginLeft: 5, }} />
                        </View>
                        <View>
                            <Icon16 name='circle-check' style={{ fontSize: 17, color: '#3fbdf1' }}></Icon16>
                        </View>
                        <View>
                            <Image source={require('./images/Line 2.jpg')} style={{ marginLeft: 5, }} />
                        </View>
                        <View>
                            <Icon17 name='circle' style={{ fontSize: 17, color: '#3fbdf1' }}></Icon17>
                        </View>
                        <View>
                            <Image source={require('./images/Line 2.jpg')} style={{ marginLeft: 5, }} />
                        </View>
                        <View>
                            <Icon17 name='circle' style={{ fontSize: 17, color: '#3fbdf1' }}></Icon17>
                        </View>

                    </View>
                    <View style={{ gap: 32, }}>
                        <View style={{}}>

                            <View>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, }}>Order Confirmed</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 12, }}>Your order has been confirmed 29/06 11AM </Text>
                            </View>
                        </View>
                        <View>
                            <View>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, }}>Collecting Resource</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 12, }}>Picking and packing the items
                                </Text>
                                <Text style={{ fontSize: 12, }}>from the inventory  </Text>
                            </View>
                        </View>
                        <View>
                            <View>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, }}>On The Way</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 12, }}>Package has left the warehouse and is  </Text>
                                <Text style={{ fontSize: 12, }}>en route to the delivery address  </Text>
                            </View>
                        </View>
                        <View>
                            <View>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, }}>Delivery</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 12, }}>Delivery expected 29/06 12PM </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ width: '100%', padding: 10, flexDirection: 'row', gap: 5, paddingTop: 20, justifyContent: 'space-evenly', }}>
                    <View style={{ width: '40%', shadowColor: '#b3b3b3', shadowOffset: { width: 2, height: 2 }, color: "black", borderRadius: 8, fontSize: 14, backgroundColor: "#FFA500", padding: 10 }}>
                        <Text style={{ textAlign: 'center', }}>Cancel Order</Text>
                    </View>
                    <View style={{ width: '40%', shadowColor: '#b3b3b3', shadowOffset: { width: 2, height: 2 }, color: "black", borderRadius: 8, fontSize: 14, backgroundColor: "#FFA500", padding: 10 }}>
                        <Text style={{ textAlign: 'center', }}>Change Schedule</Text>
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






