import { SafeAreaView, Text, View, } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";

import Icon15 from "react-native-vector-icons/FontAwesome";


export default function shops() {
    return (
        <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: 'white' }}>

            <ScrollView>

                <View style={{ paddingTop: 30, }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 20, marginTop: 10 }}>Change Delivery Schedule</Text>

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
                                <Icon15 name='circle-thin' size={20} style={{ color: '#3fbdf1', paddingRight: 10, }}></Icon15>
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
                                <Icon15 name='check-circle' size={20} style={{ color: '#3fbdf1', paddingRight: 10, }}></Icon15>

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


            </ScrollView>


        </SafeAreaView >
    );
}






