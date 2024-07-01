import { SafeAreaView, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon8 from "react-native-vector-icons/EvilIcons";
import Icon11 from "react-native-vector-icons/AntDesign";
import Icon12 from "react-native-vector-icons/AntDesign";
import Icon14 from "react-native-vector-icons/MaterialCommunityIcons";
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
                        <Text style={{ fontSize: 22, fontWeight: "bold", }}>Order History</Text>
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

                                <View>
                                    <Text>Quantity : 1</Text>
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

                                <View>
                                    <Text>Quantity : 2</Text>
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


            </ScrollView>


        </SafeAreaView >
    );
}






