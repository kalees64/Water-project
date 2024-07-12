import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
} from "react-native";
import { Iconify } from "react-native-iconify";
import { useFonts } from "expo-font";

export default function Admin4() {
    const [loaded] = useFonts({ poppins: require('../../assets/fonts/Poppins-Black.ttf') });
    if (!loaded) {
        return null
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                <View style={{ width: "50%" }}>
                    <View
                        style={{ padding: 10, width: "100%", paddingTop: 230, gap: 30 }}
                    >
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: "center",
                                    fontSize: 35,
                                    fontWeight: "bold",
                                    paddingBottom: 30,
                                    color: "black",
                                    fontFamily: "poppins",
                                }}
                            >
                                Change Password
                            </Text>
                            <Text
                                style={{
                                    textAlign: "center",
                                    bottom: 20,
                                    color: "black",
                                    fontFamily: "poppins",
                                    fontSize: 20,
                                }}
                            >
                                Enter your new password and confirm it.
                            </Text>
                        </View>

                        <View
                            style={{
                                width: "60%",
                                paddingHorizontal: 10,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                shadowColor: "grey",
                                shadowOffset: { width: 2, height: 2 },
                                borderRadius: 20,
                                backgroundColor: "#e2e3e6",
                                paddingTop: 4,
                                marginHorizontal: "auto",
                                top: 15,
                                gap: 10,
                                shadowOpacity: 0.6,
                                paddingLeft: 20,
                            }}
                        >
                            <Iconify icon="ic:baseline-lock" size={28} color="black" />
                            <TextInput
                                placeholder="Create New Password"
                                style={{
                                    width: "100%",
                                    fontSize: 18,
                                    height: 50,
                                    fontFamily: "poppins",
                                    fontWeight: "bold",
                                }}
                            ></TextInput>
                            <Iconify icon="mdi:eye-off" size={28} color="black" />
                        </View>
                        <View
                            style={{
                                width: "60%",
                                paddingHorizontal: 10,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                shadowColor: "grey",
                                shadowOffset: { width: 2, height: 2 },
                                borderRadius: 20,
                                backgroundColor: "#e2e3e6",
                                paddingTop: 4,
                                marginHorizontal: "auto",
                                top: 30,
                                gap: 10,
                                shadowOpacity: 0.6,
                                paddingLeft: 20,
                            }}
                        >
                            <Iconify icon="ic:baseline-lock" size={28} color="black" />
                            <TextInput
                                placeholder="Confirm Password"
                                style={{
                                    width: "100%",
                                    fontSize: 18,
                                    height: 50,
                                    fontFamily: "poppins",
                                    fontWeight: "bold",
                                }}
                            ></TextInput>
                            <Iconify icon="mdi:eye-off" size={28} color="black" />
                        </View>
                    </View>
                    <View
                        style={{
                            width: "100%",
                            paddingHorizontal: 40,
                            paddingBottom: 180,
                        }}
                    ></View>
                    <View
                        style={{
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingVertical: 10,
                            paddingBottom: 20,
                        }}
                    >
                        <View style={{ width: "60%", padding: 20 }}>
                            <Text
                                style={{
                                    width: "100%",
                                    textAlign: "center",
                                    color: "black",
                                    borderRadius: 20,
                                    fontSize: 18,
                                    padding: 10,
                                    paddingRight: 10,
                                    bottom: 100,
                                    backgroundColor: "white",
                                    borderWidth: 1,
                                    borderColor: "black",
                                    fontWeight: "bold",
                                    fontFamily: "poppins",
                                }}
                            >
                                Back
                            </Text>
                        </View>
                        <View style={{ width: "60%", padding: 20, bottom: 20 }}>
                            <Text
                                style={{
                                    width: "100%",
                                    textAlign: "center",
                                    color: "white",
                                    borderRadius: 20,
                                    fontSize: 18,
                                    padding: 10,
                                    paddingRight: 10,
                                    bottom: 100,
                                    backgroundColor: "black",
                                    borderWidth: 1,
                                    fontWeight: "bold",
                                    fontFamily: "poppins",
                                }}
                            >
                                Submit
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: "50%" }}>
                    <View style={{ width: "100%" }}>
                        <Image
                            source={require("../../assets/images/image.png")}
                            style={{ width: "100%" }}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        width: "100%",
        height: "100%",
    },
});