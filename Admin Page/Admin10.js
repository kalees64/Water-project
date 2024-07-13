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

export default function Admin9() {
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
                            paddingTop: 30,
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
                            <Iconify icon="solar:user-bold" size={30} color="#2B3674" />
                        </View>
                        <Text
                            style={{
                                color: "#2B3674",
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
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <View style={{ paddingTop: 20, paddingRight: 10 }}>
                                <View
                                    style={{
                                        backgroundColor: "white",
                                        padding: 10,
                                        borderRadius: 50,
                                        height: 45,
                                        color: "#2b3674",
                                    }}
                                >
                                    <Iconify
                                        icon="fluent-emoji-high-contrast:left-arrow"
                                        size={25}
                                        color="#2b3674"
                                    />
                                </View>
                            </View>

                            <View>
                                <Text
                                    style={{
                                        fontSize: 35,
                                        fontWeight: "bold",
                                        color: "#2B3674",
                                        fontFamily: "poppins",
                                    }}
                                >
                                    Manage Users
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        color: "#2B3674",
                                        fontFamily: "poppins",
                                    }}
                                >
                                    Manage Users/ User Profile
                                </Text>
                            </View>
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
                                    shadowOpacity: 0.6,
                                }}
                            >
                                <Iconify
                                    icon="fluent:search-12-regular"
                                    size={25}
                                    color="black"
                                />
                                <TextInput
                                    placeholder="Search"
                                    style={{
                                        width: "100%",
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        color: "grey",
                                        height: 45,
                                        fontFamily: "poppins",
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
                    <ScrollView>
                        <View
                            style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                gap: 10,
                            }}
                        >
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "50%",
                                }}
                            >
                                <View>
                                    <Text
                                        style={{
                                            fontSize: 30,
                                            fontWeight: "bold",
                                            color: "#2b3674",
                                            padding: 20,
                                            gap: 10,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        User Profile
                                    </Text>
                                </View>
                                <View style={{ width: "100%", padding: 10 }}>
                                    <View
                                        style={{
                                            width: "100%",
                                            backgroundColor: "#e2e3e6",
                                            padding: 15,
                                            height: 400,
                                            borderRadius: 10,
                                            shadowColor: "#aeaeae",
                                            shadowOffset: { width: 2, height: 4 },
                                        }}
                                    >
                                        <View
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Image
                                                source={require("../../assets/images/manageuser.png")}
                                                style={{ borderRadius: 50 }}
                                            ></Image>
                                            <Text
                                                style={{
                                                    padding: 10,
                                                    color: "#2b3674",
                                                    fontFamily: "poppins",
                                                }}
                                            >
                                                Active 1hr ago
                                            </Text>
                                            <Text
                                                style={{
                                                    color: "#2b3674",
                                                    fontSize: 18,
                                                    fontWeight: "bold",
                                                    fontFamily: "poppins",
                                                }}
                                            >
                                                Name: Robert
                                            </Text>
                                            <Text
                                                style={{
                                                    color: "#2b3674",
                                                    fontSize: 18,
                                                    fontWeight: "bold",
                                                    fontFamily: "poppins",
                                                }}
                                            >
                                                Address:
                                            </Text>
                                            <Text style={{ color: "#2b3674", fontFamily: "poppins" }}>
                                                Robert - Samathanapuram, Tirunelveli
                                            </Text>
                                            <Text style={{ color: "#2b3674", fontFamily: "poppins" }}>
                                                Tamilnadu - 600 005
                                            </Text>
                                            <View
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    gap: 5,
                                                }}
                                            >
                                                <Iconify
                                                    icon="mingcute:phone-fill"
                                                    size={25}
                                                    color="#2b3674"
                                                />
                                                <Text
                                                    style={{ color: "#2b3674", fontFamily: "poppins" }}
                                                >
                                                    1234567890
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    gap: 5,
                                                }}
                                            >
                                                <Iconify
                                                    icon="ic:baseline-mail"
                                                    size={25}
                                                    color="#2b3674"
                                                />
                                                <Text
                                                    style={{ color: "#2b3674", fontFamily: "poppins" }}
                                                >
                                                    aaa2gmail.com
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    justifyContent: "center",
                                                    gap: 20,
                                                }}
                                            >
                                                <View
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        backgroundColor: "#2b3674",
                                                        color: "white",
                                                        width: 150,
                                                        height: 40,
                                                        borderRadius: 10,
                                                        gap: 5,
                                                    }}
                                                >
                                                    <Iconify
                                                        icon="ic:sharp-block"
                                                        size={25}
                                                        color="white"
                                                    />
                                                    <Text
                                                        style={{ color: "white", fontFamily: "poppins" }}
                                                    >
                                                        Block user
                                                    </Text>
                                                </View>
                                                <View
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        backgroundColor: "#2b3674",
                                                        color: "white",
                                                        width: 150,
                                                        height: 40,
                                                        borderRadius: 10,
                                                        gap: 5,
                                                    }}
                                                >
                                                    <Iconify
                                                        icon="tabler:message"
                                                        size={25}
                                                        color="white"
                                                    />
                                                    <Text
                                                        style={{ color: "white", fontFamily: "poppins" }}
                                                    >
                                                        Notify user
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <Text
                                        style={{
                                            fontSize: 25,
                                            fontWeight: "bold",
                                            color: "#2b3674",
                                            padding: 20,
                                            gap: 10,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Ratings & Reviews:
                                    </Text>
                                </View>
                                <View style={{ paddingTop: 10, gap: 20, paddingBottom: 50 }}>
                                    <View
                                        style={{
                                            width: "100%",
                                            backgroundColor: "#e2e3e6",
                                            padding: 15,
                                            height: 200,
                                            borderRadius: 10,
                                            shadowColor: "#aeaeae",
                                            shadowOffset: { width: 2, height: 4 },
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <View style={{ width: "20%", alignItems: "center" }}>
                                            <Image
                                                source={require("../../assets/images/10_litre.png")}
                                            ></Image>
                                        </View>
                                        <View
                                            style={{
                                                width: "60%",
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <View
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    gap: 20,
                                                    padding: 10,
                                                }}
                                            >
                                                <Text style={{ fontWeight: "bold", color: "#2b3674", fontFamily: "poppins", fontSize: 18, }}>
                                                    Vendor:
                                                </Text>
                                                <Text style={{ fontWeight: "bold", color: "#2b3674", fontFamily: "poppins", fontSize: 18, }}>
                                                    Ratings:
                                                </Text>
                                                <Text style={{ fontWeight: "bold", color: "#2b3674", fontFamily: "poppins", fontSize: 18, }}>
                                                    Items:
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    gap: 20,
                                                    padding: 10,
                                                }}
                                            >
                                                <Text style={{ color: "#2b3674", fontFamily: "poppins", }}>Dwater</Text>
                                                <Text>
                                                    <Iconify
                                                        icon="ant-design:star-filled"
                                                        size={25}
                                                        color="#ffb504"
                                                    />
                                                    <Iconify
                                                        icon="ant-design:star-filled"
                                                        size={25}
                                                        color="#ffb504"
                                                    />
                                                    <Iconify
                                                        icon="ant-design:star-filled"
                                                        size={25}
                                                        color="#ffb504"
                                                    />
                                                    <Iconify
                                                        icon="ant-design:star-filled"
                                                        size={25}
                                                        color="#ffb504"
                                                    />
                                                    <Iconify
                                                        icon="ant-design:star-filled"
                                                        size={25}
                                                        color="#ffb504"
                                                    />
                                                </Text>
                                                <View
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <Iconify
                                                        icon="fa6-solid:bottle-water"
                                                        size={25}
                                                        color="#2b3674"
                                                    />
                                                    <Text style={{ color: "#2b3674", fontFamily: "poppins", }}>10L</Text>
                                                </View>
                                            </View>
                                            <View>
                                                <Text style={{ fontWeight: "bold", color: "#2b3674", fontFamily: "poppins", paddingLeft: 11 }}>
                                                    Review:
                                                </Text>
                                                <Text style={{ color: "#2b3674", padding: 10, fontFamily: "poppins", }}>
                                                    “ Fantastic service! The delivery was right on time,
                                                    and the quality of water is exceptional. I love the
                                                    convenience of scheduling...”
                                                </Text>
                                            </View>
                                        </View>
                                        <View
                                            style={{
                                                width: "20%",
                                                paddingTop: 130,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    color: "white",
                                                    backgroundColor: "#2b3674",
                                                    width: 100,
                                                    padding: 10,
                                                    borderRadius: 10,
                                                    textAlign: "center",
                                                    fontFamily: "poppins",
                                                }}
                                            >
                                                Remove
                                            </Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            width: "100%",
                                            backgroundColor: "#e2e3e6",
                                            padding: 15,
                                            height: 200,
                                            borderRadius: 10,
                                            shadowColor: "#aeaeae",
                                            shadowOffset: { width: 2, height: 4 },
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <View style={{ width: "20%", alignItems: "center" }}>
                                            <Image
                                                source={require("../../assets/images/10_litre.png")}
                                            ></Image>
                                        </View>
                                        <View
                                            style={{
                                                width: "60%",
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <View
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    gap: 20,
                                                    padding: 10,
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        fontWeight: "bold",
                                                        color: "#2b3674",
                                                        fontFamily: "poppins",
                                                        fontSize: 18,
                                                    }}
                                                >
                                                    Vendor:
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontWeight: "bold",
                                                        color: "#2b3674",
                                                        fontFamily: "poppins",
                                                        fontSize: 18,
                                                    }}
                                                >
                                                    Ratings:
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontWeight: "bold",
                                                        color: "#2b3674",
                                                        fontFamily: "poppins",
                                                        fontSize: 18,
                                                    }}
                                                >
                                                    Items:
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    gap: 20,
                                                    padding: 10,
                                                }}
                                            >
                                                <Text
                                                    style={{ color: "#2b3674", fontFamily: "poppins" }}
                                                >
                                                    Dwater
                                                </Text>
                                                <Text>
                                                    <Iconify
                                                        icon="ant-design:star-filled"
                                                        size={25}
                                                        color="#ffb504"
                                                    />
                                                    <Iconify
                                                        icon="ant-design:star-filled"
                                                        size={25}
                                                        color="#ffb504"
                                                    />
                                                    <Iconify
                                                        icon="ant-design:star-filled"
                                                        size={25}
                                                        color="#ffb504"
                                                    />
                                                    <Iconify
                                                        icon="ant-design:star-filled"
                                                        size={25}
                                                        color="#ffb504"
                                                    />
                                                    <Iconify
                                                        icon="ant-design:star-filled"
                                                        size={25}
                                                        color="#ffb504"
                                                    />
                                                </Text>
                                                <View
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <Iconify
                                                        icon="fa6-solid:bottle-water"
                                                        size={25}
                                                        color="#2b3674"
                                                    />
                                                    <Text
                                                        style={{ color: "#2b3674", fontFamily: "poppins" }}
                                                    >
                                                        10L
                                                    </Text>
                                                </View>
                                            </View>
                                            <View>
                                                <Text
                                                    style={{
                                                        fontWeight: "bold",
                                                        color: "#2b3674",
                                                        fontFamily: "poppins",
                                                        paddingLeft: 11
                                                    }}
                                                >
                                                    Review:
                                                </Text>
                                                <Text
                                                    style={{
                                                        color: "#2b3674",
                                                        padding: 10,
                                                        fontFamily: "poppins",
                                                    }}
                                                >
                                                    “ Fantastic service! The delivery was right on time,
                                                    and the quality of water is exceptional. I love the
                                                    convenience of scheduling...”
                                                </Text>
                                            </View>
                                        </View>
                                        <View
                                            style={{
                                                width: "20%",
                                                paddingTop: 130,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    color: "white",
                                                    backgroundColor: "#2b3674",
                                                    width: 100,
                                                    padding: 10,
                                                    borderRadius: 10,
                                                    textAlign: "center",
                                                    fontFamily: "poppins",
                                                }}
                                            >
                                                View
                                            </Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            width: "100%",
                                            backgroundColor: "#e2e3e6",
                                            padding: 15,
                                            height: 200,
                                            borderRadius: 10,
                                            shadowColor: "#aeaeae",
                                            shadowOffset: { width: 2, height: 4 },
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <View
                                            style={{
                                                width: "20%",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Image
                                                source={require("../../assets/images/10_litre.png")}
                                            ></Image>
                                        </View>
                                        <View
                                            style={{
                                                width: "60%",
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <View
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    gap: 20,
                                                    padding: 10,
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        fontWeight: "bold",
                                                        color: "#2b3674",
                                                        fontFamily: "poppins",
                                                        fontSize: 18,
                                                    }}
                                                >
                                                    Vendor:
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontWeight: "bold",
                                                        color: "#2b3674",
                                                        fontFamily: "poppins",
                                                        fontSize: 18,
                                                    }}
                                                >
                                                    Ratings:
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontWeight: "bold",
                                                        color: "#2b3674",
                                                        fontFamily: "poppins",
                                                        fontSize: 18,
                                                    }}
                                                >
                                                    Items:
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    gap: 20,
                                                    padding: 10,
                                                }}
                                            >
                                                <Text
                                                    style={{ color: "#2b3674", fontFamily: "poppins" }}
                                                >
                                                    Dwater
                                                </Text>
                                                <Text>
                                                    <Iconify
                                                        icon="ant-design:star-filled"
                                                        size={25}
                                                        color="#ffb504"
                                                    />
                                                    <Iconify
                                                        icon="ant-design:star-filled"
                                                        size={25}
                                                        color="#ffb504"
                                                    />
                                                    <Iconify
                                                        icon="ant-design:star-filled"
                                                        size={25}
                                                        color="#ffb504"
                                                    />
                                                    <Iconify
                                                        icon="ant-design:star-filled"
                                                        size={25}
                                                        color="#ffb504"
                                                    />
                                                    <Iconify
                                                        icon="ant-design:star-filled"
                                                        size={25}
                                                        color="#ffb504"
                                                    />
                                                </Text>
                                                <View
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <Iconify
                                                        icon="fa6-solid:bottle-water"
                                                        size={25}
                                                        color="#2b3674"
                                                    />
                                                    <Text
                                                        style={{ color: "#2b3674", fontFamily: "poppins" }}
                                                    >
                                                        10L
                                                    </Text>
                                                </View>
                                            </View>
                                            <View>
                                                <Text
                                                    style={{
                                                        fontWeight: "bold",
                                                        color: "#2b3674",
                                                        fontFamily: "poppins",
                                                        paddingLeft: 11
                                                    }}
                                                >
                                                    Review:
                                                </Text>
                                                <Text
                                                    style={{
                                                        color: "#2b3674",
                                                        padding: 10,
                                                        fontFamily: "poppins",
                                                    }}
                                                >
                                                    “ Fantastic service! The delivery was right on time,
                                                    and the quality of water is exceptional. I love the
                                                    convenience of scheduling...”
                                                </Text>
                                            </View>
                                        </View>
                                        <View
                                            style={{
                                                width: "20%",
                                                paddingTop: 130,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    color: "white",
                                                    backgroundColor: "#2b3674",
                                                    width: 100,
                                                    padding: 10,
                                                    borderRadius: 10,
                                                    textAlign: "center",
                                                    fontFamily: "poppins",
                                                }}
                                            >
                                                View
                                            </Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            width: "100%",
                                            backgroundColor: "#e2e3e6",
                                            padding: 15,
                                            height: 200,
                                            borderRadius: 10,
                                            shadowColor: "#aeaeae",
                                            shadowOffset: { width: 2, height: 4 },
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <View
                                            style={{
                                                width: "20%",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Image
                                                source={require("../../assets/images/10_litre.png")}
                                            ></Image>
                                        </View>
                                        <View
                                            style={{
                                                width: "60%",
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <View
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    gap: 20,
                                                    padding: 10,
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        fontWeight: "bold",
                                                        color: "#2b3674",
                                                        fontFamily: "poppins",
                                                        fontSize: 18,
                                                    }}
                                                >
                                                    Vendor:
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontWeight: "bold",
                                                        color: "#2b3674",
                                                        fontFamily: "poppins",
                                                        fontSize: 18,
                                                    }}
                                                >
                                                    Ratings:
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontWeight: "bold",
                                                        color: "#2b3674",
                                                        fontFamily: "poppins",
                                                        fontSize: 18,
                                                    }}
                                                >
                                                    Items:
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    gap: 20,
                                                    padding: 10,
                                                }}
                                            >
                                                <Text
                                                    style={{ color: "#2b3674", fontFamily: "poppins" }}
                                                >
                                                    Dwater
                                                </Text>
                                                <Text>
                                                    <Iconify
                                                        icon="ant-design:star-filled"
                                                        size={25}
                                                        color="#ffb504"
                                                    />
                                                    <Iconify
                                                        icon="ant-design:star-filled"
                                                        size={25}
                                                        color="#ffb504"
                                                    />
                                                    <Iconify
                                                        icon="ant-design:star-filled"
                                                        size={25}
                                                        color="#ffb504"
                                                    />
                                                    <Iconify
                                                        icon="ant-design:star-filled"
                                                        size={25}
                                                        color="#ffb504"
                                                    />
                                                    <Iconify
                                                        icon="ant-design:star-filled"
                                                        size={25}
                                                        color="#ffb504"
                                                    />
                                                </Text>
                                                <View
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <Iconify
                                                        icon="fa6-solid:bottle-water"
                                                        size={25}
                                                        color="#2b3674"
                                                    />
                                                    <Text
                                                        style={{ color: "#2b3674", fontFamily: "poppins" }}
                                                    >
                                                        10L
                                                    </Text>
                                                </View>
                                            </View>
                                            <View>
                                                <Text
                                                    style={{
                                                        fontWeight: "bold",
                                                        color: "#2b3674",
                                                        fontFamily: "poppins",
                                                        paddingLeft: 11,
                                                    }}
                                                >
                                                    Review:
                                                </Text>
                                                <Text
                                                    style={{
                                                        color: "#2b3674",
                                                        padding: 10,
                                                        fontFamily: "poppins",
                                                    }}
                                                >
                                                    “ Fantastic service! The delivery was right on time,
                                                    and the quality of water is exceptional. I love the
                                                    convenience of scheduling...”
                                                </Text>
                                            </View>
                                        </View>
                                        <View
                                            style={{
                                                width: "20%",
                                                paddingTop: 130,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    color: "white",
                                                    backgroundColor: "#2b3674",
                                                    width: 100,
                                                    padding: 10,
                                                    borderRadius: 10,
                                                    textAlign: "center",
                                                    fontFamily: "poppins",
                                                }}
                                            >
                                                View
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: "50%", paddingTop: 100 }}>
                                <View
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#e2e3e6",
                                        padding: 15,
                                        height: 270,
                                        borderRadius: 10,
                                        shadowColor: "#aeaeae",
                                        shadowOffset: { width: 2, height: 4 },
                                    }}
                                >
                                    <View>
                                        <Text
                                            style={{
                                                fontSize: 25,
                                                fontWeight: "bold",
                                                color: "#2b3674",
                                                padding: 10,
                                                fontFamily: "poppins",
                                            }}
                                        >
                                            Delivery Address:
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                        }}
                                    >
                                        <Iconify icon="ph:dot-bold" size={40} color="#2b3674" />
                                        <View style={{ display: "flex", flexDirection: "column" }}>
                                            <Text
                                                style={{
                                                    fontSize: 20,
                                                    color: "#2b3674",
                                                    fontFamily: "poppins",
                                                }}
                                            >
                                                Robert - 4a/60, Samathanapuram, Tirunelveli,
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 20,
                                                    color: "#2b3674",
                                                    fontFamily: "poppins",
                                                }}
                                            >
                                                Tamilnadu - 600 005
                                            </Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            paddingTop: 20,
                                        }}
                                    >
                                        <Iconify icon="ph:dot-bold" size={40} color="#2b3674" />
                                        <View style={{ display: "flex", flexDirection: "column" }}>
                                            <Text
                                                style={{
                                                    fontSize: 20,
                                                    color: "#2b3674",
                                                    fontFamily: "poppins",
                                                }}
                                            >
                                                Robert - 4a/60, Samathanapuram, Tirunelveli,
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 20,
                                                    color: "#2b3674",
                                                    fontFamily: "poppins",
                                                }}
                                            >
                                                Tamilnadu - 600 005
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <Text
                                        style={{
                                            fontSize: 25,
                                            fontWeight: "bold",
                                            color: "#2b3674",
                                            padding: 20,
                                            paddingTop: 40,
                                            gap: 10,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Order & History:
                                    </Text>
                                </View>
                                <View style={{ gap: 20, paddingBottom: 15 }}>
                                    <View
                                        style={{
                                            height: 200,
                                            padding: 20,
                                            shadowColor: "#131842",
                                            shadowOffset: { width: 2, height: 4 },
                                            shadowOpacity: 0.4,
                                            shadowRadius: 3,
                                            borderRadius: 10,
                                            justifyContent: "space-between",
                                            backgroundColor: "#e2e3e6",
                                        }}
                                    >
                                        <View
                                            style={{
                                                width: "100%",
                                                display: "flex",
                                                flexDirection: "row",
                                            }}
                                        >
                                            <View
                                                style={{
                                                    width: "50%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 10,
                                                }}
                                            >
                                                <View>
                                                    <Text
                                                        style={{
                                                            fontSize: 17,
                                                            fontWeight: "bold",
                                                            color: "#2b3674",
                                                            fontFamily: "poppins",
                                                        }}
                                                    >
                                                        Order ID: 84161
                                                    </Text>
                                                </View>

                                                <View>
                                                    <Text
                                                        style={{
                                                            fontSize: 17,
                                                            fontWeight: "bold",
                                                            color: "#2b3674",
                                                            gap: 5,
                                                            fontFamily: "poppins",
                                                        }}
                                                    >
                                                        Order to:
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            fontSize: 17,
                                                            fontWeight: "bold",
                                                            color: "#2b3674",
                                                            fontFamily: "poppins",
                                                        }}
                                                    >
                                                        Dwater
                                                    </Text>
                                                    <Text style={{ color: "#2b3674", fontFamily: "poppins", }}>
                                                        2/E Samathanapuram, Tirunelveli,
                                                    </Text>
                                                    <Text style={{ color: "#2b3674", fontFamily: "poppins", }}>
                                                        Tamilnadu - 628005
                                                    </Text>
                                                </View>
                                                <View
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <Iconify
                                                        icon="fa6-solid:bottle-water"
                                                        size={25}
                                                        color="#2b3674"
                                                    />
                                                    <Text style={{ color: "#2b3674", fontFamily: "poppins", }}>
                                                        10L - 2Qts, 20L - 3Qts
                                                    </Text>
                                                </View>
                                            </View>
                                            <View
                                                style={{
                                                    width: "10%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "space-evenly",
                                                }}
                                            >
                                                <Iconify icon="mdi:heart" size={25} color="#ff0000" />
                                                <View
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                    }}
                                                >
                                                    <Text style={{ color: "#2b3674", fontFamily: "poppins", }}>Paid</Text>
                                                    <Iconify
                                                        icon="icons8:checked"
                                                        size={25}
                                                        color="#2b3674"
                                                    />
                                                </View>
                                            </View>
                                            <View
                                                style={{
                                                    width: "40%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "space-between",
                                                    // alignItems: "flex-end",
                                                    paddingLeft: 200,
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        fontSize: 20,
                                                        color: "#2b3674",
                                                        paddingLeft: 30,
                                                        fontFamily: "poppins",
                                                    }}
                                                >
                                                    &#8377; 175
                                                </Text>
                                                <Text
                                                    style={{
                                                        color: "white",
                                                        backgroundColor: "#2b3674",
                                                        width: 100,
                                                        padding: 10,
                                                        borderRadius: 10,
                                                        textAlign: "center",
                                                        fontFamily: "poppins",
                                                    }}
                                                >
                                                    View
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View
                                        style={{
                                            height: 200,
                                            padding: 20,
                                            shadowColor: "#131842",
                                            shadowOffset: { width: 2, height: 4 },
                                            shadowOpacity: 0.4,
                                            shadowRadius: 3,
                                            borderRadius: 10,
                                            justifyContent: "space-between",
                                            backgroundColor: "#e2e3e6",
                                        }}
                                    >
                                        <View
                                            style={{
                                                width: "100%",
                                                display: "flex",
                                                flexDirection: "row",
                                            }}
                                        >
                                            <View
                                                style={{
                                                    width: "50%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 10,
                                                }}
                                            >
                                                <View>
                                                    <Text
                                                        style={{
                                                            fontSize: 17,
                                                            fontWeight: "bold",
                                                            color: "#2b3674",
                                                            fontFamily: "poppins",
                                                        }}
                                                    >
                                                        Order ID: 84161
                                                    </Text>
                                                </View>

                                                <View>
                                                    <Text
                                                        style={{
                                                            fontSize: 17,
                                                            fontWeight: "bold",
                                                            color: "#2b3674",
                                                            gap: 5,
                                                            fontFamily: "poppins",
                                                        }}
                                                    >
                                                        Order to:
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            fontSize: 17,
                                                            fontWeight: "bold",
                                                            color: "#2b3674",
                                                            fontFamily: "poppins",
                                                        }}
                                                    >
                                                        Dwater
                                                    </Text>
                                                    <Text style={{ color: "#2b3674", fontFamily: "poppins", }}>
                                                        2/E Samathanapuram, Tirunelveli,
                                                    </Text>
                                                    <Text style={{ color: "#2b3674", fontFamily: "poppins", }}>
                                                        Tamilnadu - 628005
                                                    </Text>
                                                </View>
                                                <View
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <Iconify
                                                        icon="fa6-solid:bottle-water"
                                                        size={30}
                                                        color="#2b3674"
                                                    />
                                                    <Text style={{ color: "#2b3674", fontFamily: "poppins", }}>
                                                        10L - 2Qts, 20L - 3Qts
                                                    </Text>
                                                </View>
                                            </View>
                                            <View
                                                style={{
                                                    width: "10%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "space-evenly",
                                                }}
                                            >
                                                <Iconify icon="mdi:heart" size={25} color="#ff0000" />
                                                <View
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                    }}
                                                >
                                                    <Text style={{ color: "#2b3674", fontFamily: "poppins", }}>Paid</Text>
                                                    <Iconify
                                                        icon="icons8:checked"
                                                        size={25}
                                                        color="#2b3674"
                                                    />
                                                </View>
                                            </View>
                                            <View
                                                style={{
                                                    width: "40%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "space-between",
                                                    // alignItems: "flex-end",
                                                    paddingLeft: 200,
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        fontSize: 20,
                                                        color: "#2b3674",
                                                        paddingLeft: 30,
                                                        fontFamily: "poppins",
                                                    }}
                                                >
                                                    &#8377; 175
                                                </Text>
                                                <Text
                                                    style={{
                                                        color: "white",
                                                        backgroundColor: "#2b3674",
                                                        width: 100,
                                                        padding: 10,
                                                        borderRadius: 10,
                                                        textAlign: "center",
                                                        fontFamily: "poppins",
                                                    }}
                                                >
                                                    View
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View
                                        style={{
                                            height: 200,
                                            padding: 20,
                                            shadowColor: "#131842",
                                            shadowOffset: { width: 2, height: 4 },
                                            shadowOpacity: 0.4,
                                            shadowRadius: 3,
                                            borderRadius: 10,
                                            justifyContent: "space-between",
                                            backgroundColor: "#e2e3e6",
                                        }}
                                    >
                                        <View
                                            style={{
                                                width: "100%",
                                                display: "flex",
                                                flexDirection: "row",
                                            }}
                                        >
                                            <View
                                                style={{
                                                    width: "50%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 10,
                                                }}
                                            >
                                                <View>
                                                    <Text
                                                        style={{
                                                            fontSize: 17,
                                                            fontWeight: "bold",
                                                            color: "#2b3674",
                                                            fontFamily: "poppins",
                                                        }}
                                                    >
                                                        Order ID: 84161
                                                    </Text>
                                                </View>

                                                <View>
                                                    <Text
                                                        style={{
                                                            fontSize: 17,
                                                            fontWeight: "bold",
                                                            color: "#2b3674",
                                                            gap: 5,
                                                            fontFamily: "poppins",
                                                        }}
                                                    >
                                                        Order to:
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            fontSize: 17,
                                                            fontWeight: "bold",
                                                            color: "#2b3674",
                                                            fontFamily: "poppins",
                                                        }}
                                                    >
                                                        Dwater
                                                    </Text>
                                                    <Text style={{ color: "#2b3674", fontFamily: "poppins", }}>
                                                        2/E Samathanapuram, Tirunelveli,
                                                    </Text>
                                                    <Text style={{ color: "#2b3674", fontFamily: "poppins", }}>
                                                        Tamilnadu - 628005
                                                    </Text>
                                                </View>
                                                <View
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <Iconify
                                                        icon="fa6-solid:bottle-water"
                                                        size={25}
                                                        color="#2b3674"
                                                    />
                                                    <Text style={{ color: "#2b3674", fontFamily: "poppins", }}>
                                                        10L - 2Qts, 20L - 3Qts
                                                    </Text>
                                                </View>
                                            </View>
                                            <View
                                                style={{
                                                    width: "10%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "space-evenly",
                                                }}
                                            >
                                                <Iconify
                                                    icon="mdi:heart-outline"
                                                    size={25}
                                                    color="#2b3674"
                                                />
                                                <View
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                    }}
                                                >
                                                    <Text style={{ color: "#2b3674", fontFamily: "poppins", }}>COD</Text>
                                                    <Iconify
                                                        icon="icons8:checked"
                                                        size={25}
                                                        color="#2b3674"
                                                    />
                                                </View>
                                            </View>
                                            <View
                                                style={{
                                                    width: "40%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "space-between",
                                                    // alignItems: "flex-end",
                                                    paddingLeft: 200,
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        fontSize: 20,
                                                        color: "#2b3674",
                                                        paddingLeft: 30,
                                                        fontFamily: "poppins",
                                                    }}
                                                >
                                                    &#8377; 175
                                                </Text>
                                                <Text
                                                    style={{
                                                        color: "white",
                                                        backgroundColor: "#2b3674",
                                                        width: 100,
                                                        padding: 10,
                                                        borderRadius: 10,
                                                        textAlign: "center",
                                                        fontFamily: "poppins",
                                                    }}
                                                >
                                                    View
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View
                                        style={{
                                            height: 200,
                                            padding: 20,
                                            shadowColor: "#131842",
                                            shadowOffset: { width: 2, height: 4 },
                                            shadowOpacity: 0.4,
                                            shadowRadius: 3,
                                            borderRadius: 10,
                                            justifyContent: "space-between",
                                            backgroundColor: "#e2e3e6",
                                        }}
                                    >
                                        <View
                                            style={{
                                                width: "100%",
                                                display: "flex",
                                                flexDirection: "row",
                                            }}
                                        >
                                            <View
                                                style={{
                                                    width: "50%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 10,
                                                }}
                                            >
                                                <View>
                                                    <Text
                                                        style={{
                                                            fontSize: 17,
                                                            fontWeight: "bold",
                                                            color: "#2b3674",
                                                            fontFamily: "poppins",
                                                        }}
                                                    >
                                                        Order ID: 84161
                                                    </Text>
                                                </View>

                                                <View>
                                                    <Text
                                                        style={{
                                                            fontSize: 17,
                                                            fontWeight: "bold",
                                                            color: "#2b3674",
                                                            gap: 5,
                                                            fontFamily: "poppins",
                                                        }}
                                                    >
                                                        Order to:
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            fontSize: 17,
                                                            fontWeight: "bold",
                                                            color: "#2b3674",
                                                            fontFamily: "poppins",
                                                        }}
                                                    >
                                                        Dwater
                                                    </Text>
                                                    <Text style={{ color: "#2b3674", fontFamily: "poppins", }}>
                                                        2/E Samathanapuram, Tirunelveli,
                                                    </Text>
                                                    <Text style={{ color: "#2b3674", fontFamily: "poppins", }}>
                                                        Tamilnadu - 628005
                                                    </Text>
                                                </View>
                                                <View
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <Iconify
                                                        icon="fa6-solid:bottle-water"
                                                        size={25}
                                                        color="#2b3674"
                                                    />
                                                    <Text style={{ color: "#2b3674", fontFamily: "poppins", }}>
                                                        10L - 2Qts, 20L - 3Qts
                                                    </Text>
                                                </View>
                                            </View>
                                            <View
                                                style={{
                                                    width: "10%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "space-evenly",
                                                }}
                                            >
                                                <Iconify
                                                    icon="mdi:heart-outline"
                                                    size={25}
                                                    color="#2b3674"
                                                />
                                                <View
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                    }}
                                                >
                                                    <Text style={{ color: "#2b3674", fontFamily: "poppins", }}>Cancel</Text>
                                                    <Iconify
                                                        icon="icons8:checked"
                                                        size={25}
                                                        color="#2b3674"
                                                    />
                                                </View>
                                            </View>
                                            <View
                                                style={{
                                                    width: "40%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "space-between",
                                                    // alignItems: "flex-end",
                                                    paddingLeft: 200,
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        fontSize: 20,
                                                        color: "#2b3674",
                                                        paddingLeft: 30,
                                                        fontFamily: "poppins",
                                                    }}
                                                >
                                                    &#8377; 175
                                                </Text>
                                                <Text
                                                    style={{
                                                        color: "white",
                                                        backgroundColor: "#2b3674",
                                                        width: 100,
                                                        padding: 10,
                                                        borderRadius: 10,
                                                        textAlign: "center",
                                                        fontFamily: "poppins",
                                                    }}
                                                >
                                                    View
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View
                                        style={{
                                            height: 200,
                                            padding: 20,
                                            shadowColor: "#131842",
                                            shadowOffset: { width: 2, height: 4 },
                                            shadowOpacity: 0.4,
                                            shadowRadius: 3,
                                            borderRadius: 10,
                                            justifyContent: "space-between",
                                            backgroundColor: "#e2e3e6",
                                        }}
                                    >
                                        <View
                                            style={{
                                                width: "100%",
                                                display: "flex",
                                                flexDirection: "row",
                                            }}
                                        >
                                            <View
                                                style={{
                                                    width: "50%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 10,
                                                }}
                                            >
                                                <View>
                                                    <Text
                                                        style={{
                                                            fontSize: 17,
                                                            fontWeight: "bold",
                                                            color: "#2b3674",
                                                            fontFamily: "poppins",
                                                        }}
                                                    >
                                                        Order ID: 84161
                                                    </Text>
                                                </View>

                                                <View>
                                                    <Text
                                                        style={{
                                                            fontSize: 17,
                                                            fontWeight: "bold",
                                                            color: "#2b3674",
                                                            gap: 5,
                                                            fontFamily: "poppins",
                                                        }}
                                                    >
                                                        Order to:
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            fontSize: 17,
                                                            fontWeight: "bold",
                                                            color: "#2b3674",
                                                            fontFamily: "poppins",
                                                        }}
                                                    >
                                                        Dwater
                                                    </Text>
                                                    <Text style={{ color: "#2b3674", fontFamily: "poppins", }}>
                                                        2/E Samathanapuram, Tirunelveli,
                                                    </Text>
                                                    <Text style={{ color: "#2b3674", fontFamily: "poppins", }}>
                                                        Tamilnadu - 628005
                                                    </Text>
                                                </View>
                                                <View
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <Iconify
                                                        icon="fa6-solid:bottle-water"
                                                        size={30}
                                                        color="#2b3674"
                                                    />
                                                    <Text style={{ color: "#2b3674", fontFamily: "poppins", }}>
                                                        10L - 2Qts, 20L - 3Qts
                                                    </Text>
                                                </View>
                                            </View>
                                            <View
                                                style={{
                                                    width: "10%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "space-evenly",
                                                }}
                                            >
                                                <Iconify icon="mdi:heart" size={25} color="#ff0000" />
                                                <View
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                    }}
                                                >
                                                    <Text style={{ color: "#2b3674", fontFamily: "poppins", }}>Paid</Text>
                                                    <Iconify
                                                        icon="icons8:checked"
                                                        size={25}
                                                        color="#2b3674"
                                                    />
                                                </View>
                                            </View>
                                            <View
                                                style={{
                                                    width: "40%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "space-between",
                                                    // alignItems: "flex-end",
                                                    paddingLeft: 200,
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        fontSize: 20,
                                                        color: "#2b3674",
                                                        paddingLeft: 30,
                                                        fontFamily: "poppins",
                                                    }}
                                                >
                                                    &#8377; 175
                                                </Text>
                                                <Text
                                                    style={{
                                                        color: "white",
                                                        backgroundColor: "#2b3674",
                                                        width: 100,
                                                        padding: 10,
                                                        borderRadius: 10,
                                                        textAlign: "center",
                                                        fontFamily: "poppins",
                                                    }}
                                                >
                                                    View
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}
