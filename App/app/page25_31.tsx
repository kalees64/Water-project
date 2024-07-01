import { SafeAreaView, Text, View, Image } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon8 from "react-native-vector-icons/EvilIcons";
import Icon11 from "react-native-vector-icons/AntDesign";
import Icon12 from "react-native-vector-icons/AntDesign";
import Icon14 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon15 from "react-native-vector-icons/FontAwesome";
import Icon10 from "react-native-vector-icons/FontAwesome6";

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
                        <Text style={{ fontSize: 22, fontWeight: "bold", }}>Checkout</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', borderBottomColor: 'black', borderBottomWidth: 1, padding: 10, marginLeft: 15, marginRight: 15 }}>
                        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Image source={require('./images/Group 45.jpg')} />
                            <Text>Address</Text>
                        </View>
                        <Image style={{ backgroundColor: '#555' }} source={require('./images/Frame 49.jpg')} />
                        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bottom: 10 }}>
                            <Image source={require('./images/Group 45 (1).jpg')} />
                            <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Text style={{ top: 5 }}>Order</Text>
                                <Text style={{ top: 5 }}>Summary</Text>
                            </View>
                        </View>
                        <Image style={{ backgroundColor: '#555' }} source={require('./images/Frame 50.jpg')} />
                        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                            <Image source={require('./images/Group 45 (2).jpg')} />
                            <Text>Payment</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 20, marginTop: 10, }}>Dwater</Text>
                        <Text style={{ fontSize: 12, marginLeft: 20 }}>Perumal Puram,Tirunelveli</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: 'black', marginLeft: 20, marginTop: 20 }}>Delivery Location</Text>
                        <Text style={{ fontSize: 12, marginLeft: 20, }}>Robert - Samathanapuram,Tirunelveli,</Text>
                        <Text style={{ fontSize: 12, marginLeft: 20, }}>Tamilnadu - 600 005</Text>
                    </View>
                    <View>
                        <Text style={{ paddingRight: 15, height: 10, shadowColor: '#b3b3b3', shadowOffset: { width: 2, height: 2 }, color: "black", borderRadius: 8, fontSize: 14, backgroundColor: "#FFA500", paddingVertical: 10, paddingLeft: 20, width: 85, paddingBottom: 30, marginLeft: 260, marginTop: -50, }}>Change</Text>
                    </View>

                    <View style={{
                        display: 'flex',
                        marginTop: 15,
                        marginLeft: 17,
                        marginRight: 17,
                        flexDirection: 'row',
                        borderBottomColor: "black",
                        borderWidth: 1,
                        borderTopColor: "transparent",
                        borderLeftColor: "transparent",
                        borderRightColor: "transparent",
                    }}> </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: 'black', marginLeft: 20, marginTop: 10 }}>Delivery Schedule</Text>

                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', paddingBottom: 5, }}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            borderColor: "#aeaeae",
                            borderWidth: 1,
                            marginTop: 10,
                            marginLeft: 17,
                            marginRight: 17,
                            height: 80,
                            shadowColor: '#aeaeae',
                            shadowOffset: { width: 2, height: 2, },
                            borderRadius: 10,
                            width: "40%",

                        }}>
                            <View style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                                <View>
                                    <Icon15 name='check-circle' size={20} style={{ color: '#3fbdf1', paddingRight: 10, }}></Icon15>
                                </View>
                                <View style={{ alignItems: 'center', }}>
                                    <View>
                                        <Text style={{ fontSize: 15, fontWeight: 'black', }}> Standard</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 11, }}> 20 - 30mins</Text>
                                    </View>
                                </View>

                            </View>

                        </View>

                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            borderColor: "#aeaeae",
                            borderWidth: 1,
                            marginTop: 10,
                            marginLeft: 17,
                            marginRight: 17,
                            height: 80,
                            shadowColor: '#aeaeae',
                            shadowOffset: { width: 2, height: 2, },
                            borderRadius: 10,
                            width: "40%",

                        }}>
                            <View style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                                <View>
                                    <Icon15 name='circle-thin' size={20} style={{ color: '#3fbdf1', paddingRight: 10, }}></Icon15>

                                </View>
                                <View>
                                    <View>
                                        <Text style={{ fontSize: 15, fontWeight: 'black', }}>Scheduled Time</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 11, }}>Choose Time</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                    <View>
                        <View>
                            <TextInput placeholder="Set Date" style={{
                                display: 'flex',
                                flexDirection: 'row',
                                borderColor: "#aeaeae",
                                borderWidth: 1,
                                marginTop: 10,
                                marginLeft: 17,
                                marginRight: 17,
                                height: 80,
                                shadowColor: '#aeaeae',
                                shadowOffset: { width: 2, height: 2, },
                                borderRadius: 10,
                                height: 45,
                                fontWeight: 'black',
                                paddingLeft: 20,

                            }}>

                            </TextInput>
                        </View>
                        <View>
                            <View>
                                <TextInput placeholder="Set Time" style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    borderColor: "#aeaeae",
                                    borderWidth: 1,
                                    marginTop: 10,
                                    marginLeft: 17,
                                    marginRight: 17,
                                    height: 80,
                                    shadowColor: '#aeaeae',
                                    shadowOffset: { width: 2, height: 2, },
                                    borderRadius: 10,
                                    height: 45,
                                    fontWeight: 'black',
                                    paddingLeft: 20,

                                }}>

                                </TextInput>
                            </View>
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
                                        <Text>10 Litres</Text>
                                    </View>
                                </View>

                                <View style={{ display: 'flex', flexDirection: 'row', gap: 10, }}>
                                    <View>
                                        <Icon11 name='minuscircle' size={20} style={{}}></Icon11>
                                    </View>
                                    <View>
                                        <Text style={{ fontWeight: 'bold', }}>1</Text>
                                    </View>
                                    <View>
                                        <Icon12 name='pluscircle' size={20} style={{}}></Icon12>
                                    </View>
                                </View>
                            </View>
                            <View style={{ gap: 20, width: '33%', display: 'flex', alignItems: 'center', }}>
                                <View>
                                    <Text style={{ fontWeight: 'bold', fontSize: 20, }}>

                                        ₹25
                                    </Text>

                                </View>
                                <View>
                                    <Icon14 name='delete' size={25} style={{}}></Icon14>
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
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, fontFamily: 'anonymous pro', }}>Water Can</Text>
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
                                        <Icon11 name='minuscircle' size={20} style={{}}></Icon11>
                                    </View>
                                    <View>
                                        <Text style={{ fontWeight: 'bold', }}>2</Text>
                                    </View>
                                    <View>
                                        <Icon12 name='pluscircle' size={20} style={{}}></Icon12>
                                    </View>
                                </View>
                            </View>
                            <View style={{ gap: 20, width: '33%', display: 'flex', alignItems: 'center', }}>
                                <View>
                                    <Text style={{ fontWeight: 'bold', fontSize: 20, }}>

                                        ₹60
                                    </Text>

                                </View>
                                <View>
                                    <Icon14 name='delete' size={25} style={{}}></Icon14>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 19, marginTop: 20, marginLeft: 20, }}>Total Bill</Text>
                     <Text style={{ marginTop: 15, marginLeft: 27, }}>Sub Total</Text>
                    <Text style={{ marginLeft: 320, marginTop: -20, }}>₹ 85</Text>
                    <Text style={{ marginTop: 5, marginLeft: 27, }}>GST</Text>
                    <Text style={{ marginLeft: 320, marginTop: -20, }}>₹ 10</Text>
                    <Text style={{ marginTop: 5, marginLeft: 27, }}>Delivery Charges</Text>
                    <Text style={{ marginLeft: 327, marginTop: -20, }}>₹ 0</Text>
                    <View style={{
                        display: 'flex',
                        marginTop: 15,
                        marginLeft: 17,
                        marginRight: 17,
                        flexDirection: 'row',
                        borderBottomColor: "black",
                        borderWidth: 1,
                        borderTopColor: "transparent",
                        borderLeftColor: "transparent",
                        borderRightColor: "transparent",
                    }} ></View>

                    <Text style={{ fontWeight: 'bold', fontSize: 19, marginLeft: 25, marginTop: 10, }}>Total Amount</Text>
                    <Text style={{ marginLeft: 320, marginTop: -20, fontWeight: 'bold', }}>₹ 95</Text>
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

                }}
            >

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', padding: 10 }}>


                    <Text style={{ fontSize: 20, fontWeight: "bold", }}>    Total Bill  ₹ 95</Text>


                    <Text style={{ shadowColor: '#b3b3b3', shadowOffset: { width: 2, height: 2 }, color: "black", borderRadius: 8, fontSize: 14, backgroundColor: "#FFA500", padding: 10 }}>Continue</Text>

                </View>

            </View>

        </SafeAreaView>
    );
}