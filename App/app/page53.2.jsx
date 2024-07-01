import { SafeAreaView, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Icon10 from "react-native-vector-icons/FontAwesome6";


export default function shops() {
    return (
        <SafeAreaView style={{ width: '100%', height: '100%', }} >

            <ScrollView style={{ backgroundColor: 'white', }}>

                <View >
                    <View style={{ padding: 25, alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', }}>Are you sure you want to cancel your order?</Text>
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
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, }}>Note: Cancelling your order means:</Text>
                </View>
                <View>
                    <View style={{ padding: 30, }}>
                        <View>
                            <Text>1. Any payments made will be refunded according to our refund policy.</Text></View>
                        <View><Text>2. You will not receive the items in this order.</Text></View>
                    </View>
                </View>
                <View>
                    <View style={{ padding: 20, }}>
                        <Text style={{
                            paddingTop: 10,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between', borderColor: "#aeaeae", borderWidth: 1, height: 115, shadowColor: '#aeaeae', shadowOffset: { width: 2, height: 2, }, borderRadius: 10,
                        }}>   Write a reason for cancellation </Text>

                    </View>
                </View>



                <View style={{ width: '100%', padding: 10, flexDirection: 'row', gap: 5, paddingTop: 20, justifyContent: 'space-evenly', }}>
                    <View style={{ borderColor: "#aeaeae", borderWidth: 1, width: '40%', shadowColor: '#b3b3b3', shadowOffset: { width: 2, height: 2 }, color: "black", borderRadius: 8, fontSize: 14, backgroundColor: 'white', padding: 10 }}>
                        <Text style={{ textAlign: 'center', }}>Back</Text>
                    </View>
                    <View style={{ width: '40%', shadowColor: '#b3b3b3', shadowOffset: { width: 2, height: 2 }, color: "black", borderRadius: 8, fontSize: 14, backgroundColor: "#3fbdf1", padding: 10 }}>
                        <Text style={{ textAlign: 'center', }}>Cancel Order</Text>
                    </View>
                </View>

            </ScrollView>

        </SafeAreaView >
    );
}






