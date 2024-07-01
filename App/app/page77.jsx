import { SafeAreaView, Text, View, TextInput, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon8 from "react-native-vector-icons/EvilIcons";
import Icon11 from "react-native-vector-icons/AntDesign";

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
                <View >
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20, marginLeft: 17, paddingBottom: 20, }} >
                        <Icon8 name='arrow-left' style={{ fontSize: 30, fontWeight: "bold", marginRight: 17 }}></Icon8>
                        <Text style={{ fontSize: 22, fontWeight: "bold", }}>Main Menu</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <TextInput placeholder="Order History"
                            style={{
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
                            <TextInput placeholder="Wishlist" style={{
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
                    <View>
                        <View>
                            <TextInput placeholder="Notifications" style={{
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
                    <View>
                        <View>
                            <TextInput placeholder="Reviews" style={{
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

        </SafeAreaView>
    );
}