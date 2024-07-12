import {
    SafeAreaView,
    Text,
    View,
    Image,
    ScrollView,
    StatusBar,
    TextInput,
} from "react-native";
import { Iconify } from "react-native-iconify";
import { useFonts } from "expo-font";

export default function Admin6() {
    const [loaded] = useFonts({ poppins: require('../../assets/fonts/Poppins-Black.ttf') });
    if (!loaded) {
        return null
    }
    return (
        <SafeAreaView style={{ width: "100%", height: "100%" }}>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    height: "100%",
                }}
            >
                <View
                    style={{
                        width: "15%",
                        backgroundColor: "white",
                        height: "100%",
                        paddingTop: 20,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 35,
                            fontWeight: "bold",
                            color: "#2B3674",
                            paddingVertical: 20,
                            alignItems: "center",
                            textAlign: "center",
                            height: 120,
                            fontFamily: "poppins",
                        }}
                    >
                        THANNI CAN
                    </Text>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            height: 60,
                            alignItems: "center",
                            gap: 20,
                            paddingHorizontal: 25,
                            backgroundColor: "#E2E3E6",
                            paddingVertical: 35,
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: "white",
                                padding: 10,
                                borderRadius: 50,
                            }}
                        >
                            <Iconify icon="solar:home-2-bold" size={30} color="#2B3674" />
                        </View>
                        <Text
                            style={{
                                color: "#2B3674",
                                fontSize: 20,
                                fontWeight: "bold",
                                fontFamily: "poppins",
                            }}
                        >
                            Dashboard
                        </Text>
                    </View>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            height: 60,
                            alignItems: "center",
                            gap: 20,
                            paddingHorizontal: 25,
                            paddingVertical: 35,
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: "#E2E3E6",
                                padding: 10,
                                borderRadius: 50,
                            }}
                        >
                            <Iconify icon="solar:user-bold" size={30} color="grey" />
                        </View>
                        <Text
                            style={{
                                color: "grey",
                                fontSize: 20,
                                fontWeight: "bold",
                                fontFamily: "poppins",
                            }}
                        >
                            Manage Users
                        </Text>
                    </View>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            height: 60,
                            alignItems: "center",
                            gap: 20,
                            paddingHorizontal: 25,
                            paddingVertical: 35,
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: "#E2E3E6",
                                padding: 10,
                                borderRadius: 50,
                            }}
                        >
                            <Iconify icon="uil:package" size={30} color="grey" />
                        </View>
                        <Text
                            style={{
                                color: "grey",
                                fontSize: 20,
                                fontWeight: "bold",
                                fontFamily: "poppins",
                            }}
                        >
                            Manager Orders
                        </Text>
                    </View>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            height: 60,
                            alignItems: "center",
                            gap: 20,
                            paddingHorizontal: 25,
                            paddingVertical: 35,
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: "#E2E3E6",
                                padding: 10,
                                borderRadius: 50,
                            }}
                        >
                            <Iconify icon="dashicons:businessperson" size={30} color="grey" />
                        </View>
                        <Text
                            style={{
                                color: "grey",
                                fontSize: 20,
                                fontWeight: "bold",
                                fontFamily: "poppins",
                            }}
                        >
                            Manager Vendors
                        </Text>
                    </View>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            height: 60,
                            alignItems: "center",
                            gap: 20,
                            paddingHorizontal: 25,
                            paddingVertical: 35,
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: "#E2E3E6",
                                padding: 10,
                                borderRadius: 50,
                            }}
                        >
                            <Iconify icon="solar:home-2-bold" size={30} color="grey" />
                        </View>
                        <Text
                            style={{
                                color: "grey",
                                fontSize: 20,
                                fontWeight: "bold",
                                fontFamily: "poppins",
                            }}
                        >
                            Requests
                        </Text>
                    </View>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            height: 60,
                            alignItems: "center",
                            gap: 20,
                            paddingHorizontal: 25,
                            paddingVertical: 35,
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: "#E2E3E6",
                                padding: 10,
                                borderRadius: 50,
                            }}
                        >
                            <Iconify icon="uis:graph-bar" size={30} color="grey" />
                        </View>
                        <Text
                            style={{
                                color: "grey",
                                fontSize: 20,
                                fontWeight: "bold",
                                fontFamily: "poppins",
                            }}
                        >
                            Earnings summary
                        </Text>
                    </View>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            height: 60,
                            alignItems: "center",
                            gap: 20,
                            paddingHorizontal: 25,
                            paddingVertical: 35,
                            fontFamily: "poppins",
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: "#E2E3E6",
                                padding: 10,
                                borderRadius: 50,
                            }}
                        >
                            <Iconify icon="solar:home-2-bold" size={30} color="grey" />
                        </View>
                        <Text style={{ color: "grey", fontSize: 20, fontWeight: "bold", fontFamily: "poppins", }}>
                            Payments
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        width: "85%",
                        backgroundColor: "white",
                        height: "100%",
                    }}
                >
                    <View
                        style={{
                            backgroundColor: "#E2E3E6",
                            height: 120,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingHorizontal: 30,
                            paddingVertical: 25,
                        }}
                    >
                        <View>
                            <Text
                                style={{ fontSize: 45, fontWeight: "bold", color: "#2B3674", fontFamily: "poppins", }}
                            >
                                Dashboard
                            </Text>
                            <Text
                                style={{ fontSize: 15, fontWeight: "bold", color: "#2B3674", fontFamily: "poppins", }}
                            >
                                Dashboard
                            </Text>
                        </View>

                        <View
                            style={{
                                height: 70,
                                backgroundColor: "white",
                                width: 450,
                                display: "flex",
                                flexDirection: "row",
                                borderRadius: 50,
                                justifyContent: "space-evenly",
                                paddingVertical: 12,
                            }}
                        >
                            <View
                                style={{
                                    height: 45,
                                    backgroundColor: "#E2E3E6",
                                    display: "flex",
                                    flexDirection: "row",
                                    width: 300,
                                    borderRadius: 50,
                                    gap: 10,
                                    paddingLeft: 20,
                                    alignItems: "center",
                                }}
                            >
                                <Iconify icon="fluent:search-12-regular" size={25} color="black" />
                                <TextInput
                                    placeholder="Search"
                                    style={{
                                        width: "100%",
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        color: "grey",
                                        height: 45,
                                    }}
                                ></TextInput>
                            </View>
                            <View
                                style={{
                                    backgroundColor: "#E2E3E6",
                                    padding: 10,
                                    borderRadius: 50,
                                    height: 45,
                                }}
                            >
                                <Iconify
                                    icon="iconamoon:notification-fill"
                                    size={25}
                                    color="grey"
                                />
                            </View>
                            <View>
                                <Image
                                    source={require("../../assets/images/avatar.png")}
                                    style={{ borderRadius: 50 }}
                                ></Image>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            padding: 10,
                            top: 20,
                        }}
                    >
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: 10,
                                alignItems: "center",
                                backgroundColor: "#e2e3e6",
                                borderRadius: 20,
                                width: "18%",
                                height: 100,
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: "white",
                                    padding: 10,
                                    borderRadius: 50,
                                }}
                            >
                                <Iconify icon="uis:graph-bar" size={30} color="#4318ff" />
                            </View>
                            <View style={{ padding: 10, paddingLeft: 20, }}>
                                <Text
                                    style={{ color: "grey", fontSize: 20, fontWeight: "bold", fontFamily: "poppins", }}
                                >
                                    Total Earnings
                                </Text>
                                <Text
                                    style={{ fontSize: 25, fontWeight: "bold", color: "#2B3674", fontFamily: "poppins", }}
                                >
                                    &#8377;350
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: 10,
                                alignItems: "center",
                                backgroundColor: "#e2e3e6",
                                borderRadius: 20,
                                width: "18%",
                                height: 100,
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: "white",
                                    padding: 10,
                                    borderRadius: 50,
                                }}
                            >
                                <Iconify icon="solar:user-bold" size={30} color="#4318ff" />
                            </View>
                            <View style={{ padding: 10, paddingLeft: 20, }}>
                                <Text
                                    style={{ color: "grey", fontSize: 20, fontWeight: "bold", fontFamily: "poppins", }}
                                >
                                    Total Users
                                </Text>
                                <Text
                                    style={{ fontSize: 25, fontWeight: "bold", color: "#2B3674", fontFamily: "poppins", }}
                                >
                                    &#8377;350
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: 10,
                                alignItems: "center",
                                backgroundColor: "#e2e3e6",
                                borderRadius: 20,
                                width: "18%",
                                height: 100,
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: "white",
                                    padding: 10,
                                    borderRadius: 50,
                                }}
                            >
                                <Iconify
                                    icon="dashicons:businessperson"
                                    size={30}
                                    color="#4318ff"
                                />
                            </View>
                            <View style={{ padding: 10, paddingLeft: 20, }}>
                                <Text
                                    style={{ color: "grey", fontSize: 20, fontWeight: "bold", fontFamily: "poppins", }}
                                >
                                    Total Vendors
                                </Text>
                                <Text
                                    style={{ fontSize: 25, fontWeight: "bold", color: "#2B3674", fontFamily: "poppins", }}
                                >
                                    &#8377;350
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: 10,
                                alignItems: "center",
                                backgroundColor: "#e2e3e6",
                                borderRadius: 20,
                                width: "18%",
                                height: 100,
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: "white",
                                    padding: 10,
                                    borderRadius: 50,
                                    paddingLeft: 10,
                                }}
                            >
                                <Iconify icon="uil:package" size={30} color="#4318ff" />
                            </View>
                            <View style={{ padding: 10, paddingLeft: 20, }}>
                                <Text
                                    style={{ color: "grey", fontSize: 20, fontWeight: "bold", fontFamily: "poppins", }}
                                >
                                    Total Orders
                                </Text>
                                <Text
                                    style={{ fontSize: 25, fontWeight: "bold", color: "#2B3674", fontFamily: "poppins", }}
                                >
                                    &#8377;350
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: 10,
                                alignItems: "center",
                                backgroundColor: "#e2e3e6",
                                borderRadius: 20,
                                width: "18%",
                                height: 100,
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: "white",
                                    padding: 10,
                                    borderRadius: 50,
                                }}
                            >
                                <Iconify
                                    icon="ic:round-account-balance"
                                    size={30}
                                    color="#4318ff"
                                />
                            </View>
                            <View style={{ padding: 10, paddingLeft: 20, }}>
                                <Text
                                    style={{ color: "grey", fontSize: 20, fontWeight: "bold", fontFamily: "poppins", }}
                                >
                                    Balance Amount
                                </Text>
                                <Text
                                    style={{ fontSize: 25, fontWeight: "bold", color: "#2B3674", fontFamily: "poppins", }}
                                >
                                    &#8377;350
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}