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
export default function Admin13() {
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
                            //   backgroundColor: "red",
                            alignItems: "center",
                            //   justifyContent: "center",
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
                            Deshboard
                        </Text>
                    </View>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            height: 60,
                            //   backgroundColor: "red",
                            alignItems: "center",
                            //   justifyContent: "center",
                            gap: 20,
                            paddingHorizontal: 25,
                            //   backgroundColor: "#E2E3E6",
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
                            //   backgroundColor: "red",
                            alignItems: "center",
                            //   justifyContent: "center",
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
                            //   backgroundColor: "red",
                            alignItems: "center",
                            //   justifyContent: "center",
                            gap: 20,
                            paddingHorizontal: 25,
                            paddingVertical: 35,
                            backgroundColor: "#E2E3E6",
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
                                color="#2B3674"
                            />
                        </View>
                        <Text
                            style={{
                                color: "#2B3674",
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
                            //   backgroundColor: "red",
                            alignItems: "center",
                            //   justifyContent: "center",
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
                            //   backgroundColor: "red",
                            alignItems: "center",
                            //   justifyContent: "center",
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
                            //   backgroundColor: "red",
                            alignItems: "center",
                            //   justifyContent: "center",
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
                        // display: "flex",
                        // flexDirection: "row",
                    }}
                >
                    <View
                        style={{
                            backgroundColor: "#E2E3E6",
                            height: 120,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            gap: 435,
                            paddingHorizontal: 30,
                            paddingVertical: 25,
                        }}
                    >
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <View style={{ paddingTop: 10, paddingRight: 10 }}>
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
                                    style={{ fontFamily: "poppins", fontSize: 35, fontWeight: "bold", color: "#2B3674" }}
                                >
                                    Manage vendor
                                </Text>
                                <Text
                                    style={{ fontFamily: "poppins", fontSize: 16, fontWeight: "bold", color: "#2B3674" }}
                                >
                                    Manage vendor
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                height: 70,
                                backgroundColor: "white",
                                width: 450,
                                // justifyContent: "center",
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
                                    //   justifyContent: "center",
                                    display: "flex",
                                    flexDirection: "row",
                                    //   alignContent: "center",
                                    width: 300,
                                    borderRadius: 50,
                                    gap: 10,
                                    paddingLeft: 20,
                                    alignItems: "center",
                                }}
                            >
                                <Iconify
                                    icon="fluent:search-12-regular"
                                    size={25}
                                    color="black"
                                //   style={{ paddingTop: 20 }}
                                />
                                <TextInput
                                    placeholder="Search"
                                    style={{
                                        width: "100%",
                                        fontSize: 16,
                                        // height: 50,
                                        // justifyContent: "center",
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
                    {/* <View
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
                            <View style={{ paddingTop: 10, paddingRight: 10 }}>
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
                                    Manage Vendors
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        color: "#2B3674",
                                        fontFamily: "poppins",
                                    }}
                                >
                                    Manage Vendors
                                </Text>
                            </View>

                            <View
                                style={{
                                    height: 70,
                                    backgroundColor: "white",
                                    width: 450,
                                    // justifyContent: "center",
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
                                        //   justifyContent: "center",
                                        display: "flex",
                                        flexDirection: "row",
                                        //   alignContent: "center",
                                        width: 300,
                                        borderRadius: 50,
                                        gap: 10,
                                        paddingLeft: 20,
                                        alignItems: "center",
                                    }}
                                >
                                    <Iconify
                                        icon="line-md:search"
                                        size={25}
                                        color="black"
                                    //   style={{ paddingTop: 20 }}
                                    />
                                    <TextInput
                                        placeholder="Search"
                                        style={{
                                            width: "100%",
                                            fontSize: 16,
                                            // height: 50,
                                            // justifyContent: "center",
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
                        </View> */}
                    {/* <Text style={{ color: "white", backgroundColor: "red" }}>gsdfau</Text> */}
                    <ScrollView>
                        <View
                            style={{
                                paddingVertical: 50,
                                //   justifyContent: "center",
                                //   alignContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <View
                                style={{
                                    height: 60,
                                    backgroundColor: "#E2E3E6",
                                    //   justifyContent: "center",
                                    display: "flex",
                                    flexDirection: "row",
                                    //   alignContent: "center",
                                    width: 800,
                                    borderRadius: 50,
                                    gap: 10,
                                    paddingLeft: 20,
                                    alignItems: "center",
                                }}
                            >
                                <Iconify
                                    icon="line-md:search"
                                    size={30}
                                    color="black"
                                //   style={{ paddingTop: 20 }}
                                />
                                <TextInput
                                    placeholder="Chennai"
                                    style={{
                                        width: "100%",
                                        fontSize: 16,
                                        // height: 50,
                                        // justifyContent: "center",
                                        fontWeight: "bold",
                                        color: "grey",
                                        height: 60,
                                        fontFamily: "poppins",
                                    }}
                                ></TextInput>
                            </View>
                        </View>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                paddingHorizontal: 20,
                            }}
                        >
                            <View>
                                <Text
                                    style={{
                                        color: "#2B3674",
                                        fontSize: 30,
                                        fontWeight: "bold",
                                        paddingLeft: 20,
                                        fontFamily: "poppins",
                                    }}
                                >
                                    Chennai
                                </Text>
                            </View>
                            <View>
                                <Text
                                    style={{
                                        color: "#2B3674",
                                        fontSize: 25,
                                        fontWeight: "bold",
                                        paddingRight: 20,
                                        fontFamily: 'poppins',
                                    }}
                                >
                                    Total Vendors: 55
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: 30,
                            }}
                        >
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    backgroundColor: "#E2E3E6",
                                    width: "48%",
                                    padding: 20,
                                    // justifyContent: "space-between",
                                    borderRadius: 10,
                                    color: "white",
                                }}
                            >
                                <View style={{ width: "20%", paddingVertical: 20 }}>
                                    <Image
                                        source={require("../../assets/images/manageuser.png")}
                                        style={{
                                            borderRadius: 50,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            display: "flex",
                                        }}
                                    ></Image>
                                </View>
                                <View
                                    style={{ width: "47%", color: "#2B3674", paddingLeft: 20 }}
                                >
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            paddingBottom: 10,
                                            fontSize: 22,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Name: Robert
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            fontSize: 22,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Shop Address
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontSize: 16,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        2/E samathanapuram,Tirunelveli
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            paddingBottom: 20,
                                            fontSize: 16,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Tamilnadu-600 005
                                    </Text>
                                    <View style={{ display: "flex", flexDirection: "row" }}>
                                        <Iconify icon="solar:user-bold" size={25} color="#2B3674" />
                                        <Text
                                            style={{
                                                color: "#2B3674",
                                                fontSize: 16,
                                                fontFamily: "poppins",
                                            }}
                                        >
                                            ab66541
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        width: "33%",
                                        // justifyContent: "space-between",
                                        paddingLeft: 0,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Shop Name: Dwater
                                    </Text>
                                    <View>
                                        <Text
                                            style={{
                                                color: "#2B3674",
                                                fontWeight: "bold",
                                                fontSize: 20,
                                                fontFamily: "poppins",
                                                paddingTop: 15
                                            }}
                                        >
                                            Included Items
                                        </Text>
                                        <View
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                paddingTop: 10,
                                            }}
                                        >
                                            <Iconify
                                                icon="mingcute:bottle-line"
                                                size={25}
                                                color="#2B3674"
                                            />
                                            <Text
                                                style={{
                                                    color: "#2B3674",
                                                    // fontWeight: "bold",
                                                    fontSize: 16,
                                                    fontFamily: "poppins",
                                                }}
                                            >
                                                10L,20L,Can,Pump
                                            </Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            //   justifyContent: "flex-end",
                                            //   alignContent: "flex-end",
                                            //
                                            paddingLeft: 50,
                                            paddingTop: 30
                                        }}
                                    >
                                        <Text
                                            style={{
                                                backgroundColor: "#2B3674",
                                                width: 80,
                                                height: 30,
                                                borderRadius: 6,
                                                textAlign: "center",
                                                paddingVertical: 2,
                                                shadowColor: "gray",
                                                shadowOpacity: 0.7,
                                                color: "white",
                                                fontFamily: "poppins",
                                                fontSize: 18,
                                                paddingBottom: 10,


                                            }}
                                        >
                                            View
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    backgroundColor: "#E2E3E6",
                                    width: "48%",
                                    padding: 20,
                                    // justifyContent: "space-between",
                                    borderRadius: 10,
                                    color: "white",
                                }}
                            >
                                <View style={{ width: "20%", paddingVertical: 20 }}>
                                    <Image
                                        source={require("../../assets/images/manageuser.png")}
                                        style={{
                                            borderRadius: 50,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            display: "flex",
                                        }}
                                    ></Image>
                                </View>
                                <View
                                    style={{ width: "47%", color: "#2B3674", paddingLeft: 20 }}
                                >
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            paddingBottom: 10,
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Name: Robert
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Shop Address
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontSize: 16,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        2/E samathanapuram,Tirunelveli
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            paddingBottom: 20,
                                            fontSize: 16,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Tamilnadu-600 005
                                    </Text>
                                    <View style={{ display: "flex", flexDirection: "row" }}>
                                        <Iconify icon="solar:user-bold" size={25} color="#2B3674" />
                                        <Text
                                            style={{
                                                color: "#2B3674",
                                                fontSize: 16,
                                                fontFamily: "poppins",
                                            }}
                                        >
                                            ab66541
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        width: "33%",
                                        // justifyContent: "space-between",
                                        paddingLeft: 0,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Shop Name: Dwater
                                    </Text>
                                    <View>
                                        <Text
                                            style={{
                                                color: "#2B3674",
                                                fontWeight: "bold",
                                                fontSize: 20,
                                                fontFamily: "poppins",
                                                paddingTop: 15
                                            }}
                                        >
                                            Included Items
                                        </Text>
                                        <View
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                paddingTop: 10,
                                            }}
                                        >
                                            <Iconify
                                                icon="mingcute:bottle-line"
                                                size={25}
                                                color="#2B3674"
                                            />
                                            <Text
                                                style={{
                                                    color: "#2B3674",
                                                    // fontWeight: "bold",
                                                    fontSize: 16,
                                                    fontFamily: "poppins",
                                                }}
                                            >
                                                10L,20L,Can,Pump
                                            </Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            //   justifyContent: "flex-end",
                                            //   alignContent: "flex-end",
                                            //
                                            paddingLeft: 50,
                                            paddingTop: 30
                                        }}
                                    >
                                        <Text
                                            style={{
                                                backgroundColor: "#2B3674",
                                                width: 80,
                                                height: 30,
                                                borderRadius: 6,
                                                textAlign: "center",
                                                paddingVertical: 2,
                                                shadowColor: "gray",
                                                shadowOpacity: 0.7,
                                                color: "white",
                                                fontSize: 18,
                                                fontFamily: "poppins",

                                                //   shadowOffset: { width: 2, height: 4 },
                                                // justifyContent: "flex-end",
                                                // alignContent: "flex-end",
                                                // alignItems: "flex-end",
                                                // paddingLeft: 30,
                                            }}
                                        >
                                            View
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: 30,
                            }}
                        >
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    backgroundColor: "#E2E3E6",
                                    width: "48%",
                                    padding: 20,
                                    // justifyContent: "space-between",
                                    borderRadius: 10,
                                    color: "white",
                                }}
                            >
                                <View style={{ width: "20%", paddingVertical: 20 }}>
                                    <Image
                                        source={require("../../assets/images/manageuser.png")}
                                        style={{
                                            borderRadius: 50,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            display: "flex",
                                        }}
                                    ></Image>
                                </View>
                                <View
                                    style={{ width: "47%", color: "#2B3674", paddingLeft: 20 }}
                                >
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            paddingBottom: 10,
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Name: Robert
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Shop Address
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontSize: 16,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        2/E samathanapuram,Tirunelveli
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            paddingBottom: 20,
                                            fontSize: 16,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Tamilnadu-600 005
                                    </Text>
                                    <View style={{ display: "flex", flexDirection: "row" }}>
                                        <Iconify icon="solar:user-bold" size={25} color="#2B3674" />
                                        <Text
                                            style={{
                                                color: "#2B3674",
                                                fontSize: 16,
                                                fontFamily: "poppins",
                                            }}
                                        >
                                            ab66541
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        width: "33%",
                                        justifyContent: "space-between",
                                        paddingLeft: 0,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Shop Name: Dwater
                                    </Text>
                                    <View>
                                        <Text
                                            style={{
                                                color: "#2B3674",
                                                fontWeight: "bold",
                                                fontSize: 20,
                                                fontFamily: "poppins", paddingTop: 15
                                            }}
                                        >
                                            Included Items
                                        </Text>
                                        <View
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                paddingTop: 10,
                                            }}
                                        >
                                            <Iconify
                                                icon="mingcute:bottle-line"
                                                size={25}
                                                color="#2B3674"
                                            />
                                            <Text
                                                style={{
                                                    color: "#2B3674",
                                                    // fontWeight: "bold",
                                                    fontSize: 16,
                                                    fontFamily: "poppins",
                                                }}
                                            >
                                                10L,20L,Can,Pump
                                            </Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            //   justifyContent: "flex-end",
                                            //   alignContent: "flex-end",
                                            //
                                            paddingLeft: 50, paddingTop: 30
                                        }}
                                    >
                                        <Text
                                            style={{
                                                backgroundColor: "#2B3674",
                                                width: 80,
                                                height: 30,
                                                borderRadius: 6,
                                                textAlign: "center",
                                                paddingVertical: 2,
                                                shadowColor: "gray",
                                                shadowOpacity: 0.7,
                                                color: "white",
                                                fontSize: 18,
                                                fontFamily: "poppins",
                                                //   shadowOffset: { width: 2, height: 4 },
                                                // justifyContent: "flex-end",
                                                // alignContent: "flex-end",
                                                // alignItems: "flex-end",
                                                // paddingLeft: 30,
                                            }}
                                        >
                                            View
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    backgroundColor: "#E2E3E6",
                                    width: "48%",
                                    padding: 20,
                                    // justifyContent: "space-between",
                                    borderRadius: 10,
                                    color: "white",
                                }}
                            >
                                <View style={{ width: "20%", paddingVertical: 20 }}>
                                    <Image
                                        source={require("../../assets/images/manageuser.png")}
                                        style={{
                                            borderRadius: 50,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            display: "flex",
                                        }}
                                    ></Image>
                                </View>
                                <View
                                    style={{ width: "47%", color: "#2B3674", paddingLeft: 20 }}
                                >
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            paddingBottom: 10,
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Name: Robert
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            fontSize: 22,
                                        }}
                                    >
                                        Shop Address
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontSize: 16,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        2/E samathanapuram,Tirunelveli
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            paddingBottom: 20,
                                            fontSize: 16,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Tamilnadu-600 005
                                    </Text>
                                    <View style={{ display: "flex", flexDirection: "row" }}>
                                        <Iconify icon="solar:user-bold" size={25} color="#2B3674" />
                                        <Text
                                            style={{
                                                color: "#2B3674",
                                                fontSize: 16,
                                                fontFamily: "poppins",
                                            }}
                                        >
                                            ab66541
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        width: "33%",
                                        justifyContent: "space-between",
                                        paddingLeft: 0,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Shop Name: Dwater
                                    </Text>
                                    <View>
                                        <Text
                                            style={{
                                                color: "#2B3674",
                                                fontWeight: "bold",
                                                fontSize: 20,
                                                fontFamily: "poppins", paddingTop: 15
                                            }}
                                        >
                                            Included Items
                                        </Text>
                                        <View
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                paddingTop: 10,
                                            }}
                                        >
                                            <Iconify
                                                icon="mingcute:bottle-line"
                                                size={25}
                                                color="#2B3674"
                                            />
                                            <Text
                                                style={{
                                                    color: "#2B3674",
                                                    // fontWeight: "bold",
                                                    fontSize: 16,
                                                    fontFamily: "poppins",
                                                }}
                                            >
                                                10L,20L,Can,Pump
                                            </Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            //   justifyContent: "flex-end",
                                            //   alignContent: "flex-end",
                                            //
                                            paddingLeft: 50, paddingTop: 30
                                        }}
                                    >
                                        <Text
                                            style={{
                                                backgroundColor: "#2B3674",
                                                width: 80,
                                                height: 30,
                                                borderRadius: 6,
                                                textAlign: "center",
                                                paddingVertical: 2,
                                                shadowColor: "gray",
                                                shadowOpacity: 0.7,
                                                color: "white",
                                                fontSize: 18,
                                                fontFamily: "poppins",
                                                //   shadowOffset: { width: 2, height: 4 },
                                                // justifyContent: "flex-end",
                                                // alignContent: "flex-end",
                                                // alignItems: "flex-end",
                                                // paddingLeft: 30,
                                            }}
                                        >
                                            View
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: 30,
                            }}
                        >
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    backgroundColor: "#E2E3E6",
                                    width: "48%",
                                    padding: 20,
                                    // justifyContent: "space-between",
                                    borderRadius: 10,
                                    color: "white",
                                }}
                            >
                                <View style={{ width: "20%", paddingVertical: 20 }}>
                                    <Image
                                        source={require("../../assets/images/manageuser.png")}
                                        style={{
                                            borderRadius: 50,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            display: "flex",
                                        }}
                                    ></Image>
                                </View>
                                <View
                                    style={{ width: "47%", color: "#2B3674", paddingLeft: 20 }}
                                >
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            paddingBottom: 10,
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Name: Robert
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Shop Address
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontSize: 16,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        2/E samathanapuram,Tirunelveli
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            paddingBottom: 20,
                                            fontSize: 16,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Tamilnadu-600 005
                                    </Text>
                                    <View style={{ display: "flex", flexDirection: "row" }}>
                                        <Iconify icon="solar:user-bold" size={25} color="#2B3674" />
                                        <Text
                                            style={{
                                                color: "#2B3674",
                                                fontSize: 16,
                                                fontFamily: "poppins",
                                            }}
                                        >
                                            ab66541
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        width: "33%",
                                        justifyContent: "space-between",
                                        paddingLeft: 0,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Shop Name: Dwater
                                    </Text>
                                    <View>
                                        <Text
                                            style={{
                                                color: "#2B3674",
                                                fontWeight: "bold",
                                                fontSize: 20,
                                                fontFamily: "poppins", paddingTop: 15
                                            }}
                                        >
                                            Included Items
                                        </Text>
                                        <View
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                paddingTop: 10,
                                            }}
                                        >
                                            <Iconify
                                                icon="mingcute:bottle-line"
                                                size={25}
                                                color="#2B3674"
                                            />
                                            <Text
                                                style={{
                                                    color: "#2B3674",
                                                    // fontWeight: "bold",
                                                    fontSize: 16,
                                                    fontFamily: "poppins",
                                                }}
                                            >
                                                10L,20L,Can,Pump
                                            </Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            //   justifyContent: "flex-end",
                                            //   alignContent: "flex-end",
                                            //
                                            paddingLeft: 50, paddingTop: 30
                                        }}
                                    >
                                        <Text
                                            style={{
                                                backgroundColor: "#2B3674",
                                                width: 80,
                                                height: 30,
                                                borderRadius: 6,
                                                textAlign: "center",
                                                paddingVertical: 2,
                                                shadowColor: "gray",
                                                shadowOpacity: 0.7,
                                                color: "white",
                                                fontSize: 18,
                                                fontFamily: "poppins",
                                                //   shadowOffset: { width: 2, height: 4 },
                                                // justifyContent: "flex-end",
                                                // alignContent: "flex-end",
                                                // alignItems: "flex-end",
                                                // paddingLeft: 30,
                                            }}
                                        >
                                            View
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    backgroundColor: "#E2E3E6",
                                    width: "48%",
                                    padding: 20,
                                    // justifyContent: "space-between",
                                    borderRadius: 10,
                                    color: "white",
                                }}
                            >
                                <View style={{ width: "20%", paddingVertical: 20 }}>
                                    <Image
                                        source={require("../../assets/images/manageuser.png")}
                                        style={{
                                            borderRadius: 50,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            display: "flex",
                                        }}
                                    ></Image>
                                </View>
                                <View
                                    style={{ width: "47%", color: "#2B3674", paddingLeft: 20 }}
                                >
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            paddingBottom: 10,
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Name: Robert
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Shop Address
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontSize: 16,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        2/E samathanapuram,Tirunelveli
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            paddingBottom: 20,
                                            fontSize: 16,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Tamilnadu-600 005
                                    </Text>
                                    <View style={{ display: "flex", flexDirection: "row" }}>
                                        <Iconify icon="solar:user-bold" size={25} color="#2B3674" />
                                        <Text
                                            style={{
                                                color: "#2B3674",
                                                fontSize: 16,
                                                fontFamily: "poppins",
                                            }}
                                        >
                                            ab66541
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        width: "33%",
                                        justifyContent: "space-between",
                                        paddingLeft: 0,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Shop Name: Dwater
                                    </Text>
                                    <View>
                                        <Text
                                            style={{
                                                color: "#2B3674",
                                                fontWeight: "bold",
                                                fontSize: 20,
                                                fontFamily: "poppins", paddingTop: 15
                                            }}
                                        >
                                            Included Items
                                        </Text>
                                        <View
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                paddingTop: 10,
                                            }}
                                        >
                                            <Iconify
                                                icon="mingcute:bottle-line"
                                                size={25}
                                                color="#2B3674"
                                            />
                                            <Text
                                                style={{
                                                    color: "#2B3674",
                                                    // fontWeight: "bold",
                                                    fontSize: 16,
                                                    fontFamily: "poppins",
                                                }}
                                            >
                                                10L,20L,Can,Pump
                                            </Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            //   justifyContent: "flex-end",
                                            //   alignContent: "flex-end",
                                            //
                                            paddingLeft: 50, paddingTop: 30
                                        }}
                                    >
                                        <Text
                                            style={{
                                                backgroundColor: "#2B3674",
                                                width: 80,
                                                height: 30,
                                                borderRadius: 6,
                                                textAlign: "center",
                                                paddingVertical: 2,
                                                shadowColor: "gray",
                                                shadowOpacity: 0.7,
                                                color: "white",
                                                fontSize: 18,
                                                fontFamily: "poppins",
                                                //   shadowOffset: { width: 2, height: 4 },
                                                // justifyContent: "flex-end",
                                                // alignContent: "flex-end",
                                                // alignItems: "flex-end",
                                                // paddingLeft: 30,
                                            }}
                                        >
                                            View
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: 30,
                            }}
                        >
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    backgroundColor: "#E2E3E6",
                                    width: "48%",
                                    padding: 20,
                                    // justifyContent: "space-between",
                                    borderRadius: 10,
                                    color: "white",
                                }}
                            >
                                <View style={{ width: "20%", paddingVertical: 20 }}>
                                    <Image
                                        source={require("../../assets/images/manageuser.png")}
                                        style={{
                                            borderRadius: 50,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            display: "flex",
                                        }}
                                    ></Image>
                                </View>
                                <View
                                    style={{ width: "47%", color: "#2B3674", paddingLeft: 20 }}
                                >
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            paddingBottom: 10,
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Name: Robert
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Shop Address
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontSize: 16,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        2/E samathanapuram,Tirunelveli
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            paddingBottom: 20,
                                            fontSize: 16,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Tamilnadu-600 005
                                    </Text>
                                    <View style={{ display: "flex", flexDirection: "row" }}>
                                        <Iconify icon="solar:user-bold" size={25} color="#2B3674" />
                                        <Text
                                            style={{
                                                color: "#2B3674",
                                                fontSize: 16,
                                                fontFamily: "poppins",
                                            }}
                                        >
                                            ab66541
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        width: "33%",
                                        justifyContent: "space-between",
                                        paddingLeft: 0,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Shop Name: Dwater
                                    </Text>
                                    <View>
                                        <Text
                                            style={{
                                                color: "#2B3674",
                                                fontWeight: "bold",
                                                fontSize: 20,
                                                fontFamily: "poppins", paddingTop: 15
                                            }}
                                        >
                                            Included Items
                                        </Text>
                                        <View
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                paddingTop: 10,
                                            }}
                                        >
                                            <Iconify
                                                icon="mingcute:bottle-line"
                                                size={25}
                                                color="#2B3674"
                                            />
                                            <Text
                                                style={{
                                                    color: "#2B3674",
                                                    // fontWeight: "bold",
                                                    fontSize: 16,
                                                    fontFamily: "poppins",
                                                }}
                                            >
                                                10L,20L,Can,Pump
                                            </Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            //   justifyContent: "flex-end",
                                            //   alignContent: "flex-end",
                                            //
                                            paddingLeft: 50, paddingTop: 30
                                        }}
                                    >
                                        <Text
                                            style={{
                                                backgroundColor: "#2B3674",
                                                width: 80,
                                                height: 30,
                                                borderRadius: 6,
                                                textAlign: "center",
                                                paddingVertical: 2,
                                                shadowColor: "gray",
                                                shadowOpacity: 0.7,
                                                color: "white",
                                                fontFamily: "poppins",
                                                fontSize: 18,
                                                //   shadowOffset: { width: 2, height: 4 },
                                                // justifyContent: "flex-end",
                                                // alignContent: "flex-end",
                                                // alignItems: "flex-end",
                                                // paddingLeft: 30,
                                            }}
                                        >
                                            View
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    backgroundColor: "#E2E3E6",
                                    width: "48%",
                                    padding: 20,
                                    // justifyContent: "space-between",
                                    borderRadius: 10,
                                    color: "white",
                                }}
                            >
                                <View style={{ width: "20%", paddingVertical: 20 }}>
                                    <Image
                                        source={require("../../assets/images/manageuser.png")}
                                        style={{
                                            borderRadius: 50,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            display: "flex",
                                        }}
                                    ></Image>
                                </View>
                                <View
                                    style={{ width: "47%", color: "#2B3674", paddingLeft: 20 }}
                                >
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            paddingBottom: 10,
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Name: Robert
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Shop Address
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontSize: 16,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        2/E samathanapuram,Tirunelveli
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            paddingBottom: 20,
                                            fontSize: 16,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Tamilnadu-600 005
                                    </Text>
                                    <View style={{ display: "flex", flexDirection: "row" }}>
                                        <Iconify icon="solar:user-bold" size={25} color="#2B3674" />
                                        <Text
                                            style={{
                                                color: "#2B3674",
                                                fontSize: 16,
                                                fontFamily: "poppins",
                                            }}
                                        >
                                            ab66541
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        width: "33%",
                                        justifyContent: "space-between",
                                        paddingLeft: 0,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Shop Name: Dwater
                                    </Text>
                                    <View>
                                        <Text
                                            style={{
                                                color: "#2B3674",
                                                fontWeight: "bold",
                                                fontSize: 20,
                                                fontFamily: "poppins", paddingTop: 15
                                            }}
                                        >
                                            Included Items
                                        </Text>
                                        <View
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                paddingTop: 10,
                                            }}
                                        >
                                            <Iconify
                                                icon="mingcute:bottle-line"
                                                size={25}
                                                color="#2B3674"
                                            />
                                            <Text
                                                style={{
                                                    color: "#2B3674",
                                                    // fontWeight: "bold",
                                                    fontSize: 16,
                                                    fontFamily: "poppins",
                                                }}
                                            >
                                                10L,20L,Can,Pump
                                            </Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{

                                            paddingLeft: 50, paddingTop: 30
                                        }}
                                    >
                                        <Text
                                            style={{
                                                backgroundColor: "#2B3674",
                                                width: 80,
                                                height: 30,
                                                borderRadius: 6,
                                                textAlign: "center",
                                                paddingVertical: 2,
                                                shadowColor: "gray",
                                                shadowOpacity: 0.7,
                                                color: "white",
                                                fontFamily: "poppins",
                                                fontSize: 18,

                                            }}
                                        >
                                            View
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: 30,
                            }}
                        >
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    backgroundColor: "#E2E3E6",
                                    width: "48%",
                                    padding: 20,
                                    // justifyContent: "space-between",
                                    borderRadius: 10,
                                    color: "white",
                                }}
                            >
                                <View style={{ width: "20%", paddingVertical: 20 }}>
                                    <Image
                                        source={require("../../assets/images/manageuser.png")}
                                        style={{
                                            borderRadius: 50,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            display: "flex",
                                        }}
                                    ></Image>
                                </View>
                                <View
                                    style={{ width: "47%", color: "#2B3674", paddingLeft: 20 }}
                                >
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            paddingBottom: 10,
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Name: Robert
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Shop Address
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontSize: 16,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        2/E samathanapuram,Tirunelveli
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            paddingBottom: 20,
                                            fontSize: 16,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Tamilnadu-600 005
                                    </Text>
                                    <View style={{ display: "flex", flexDirection: "row" }}>
                                        <Iconify icon="solar:user-bold" size={25} color="#2B3674" />
                                        <Text
                                            style={{
                                                color: "#2B3674",
                                                fontSize: 16,
                                                fontFamily: "poppins",
                                            }}
                                        >
                                            ab66541
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        width: "33%",
                                        justifyContent: "space-between",
                                        paddingLeft: 0,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Shop Name:Dwater
                                    </Text>
                                    <View>
                                        <Text
                                            style={{
                                                color: "#2B3674",
                                                fontWeight: "bold",
                                                fontSize: 20,
                                                fontFamily: "poppins", paddingTop: 15
                                            }}
                                        >
                                            Included Items
                                        </Text>
                                        <View
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                paddingTop: 10,
                                            }}
                                        >
                                            <Iconify
                                                icon="mingcute:bottle-line"
                                                size={25}
                                                color="#2B3674"
                                            />
                                            <Text
                                                style={{
                                                    color: "#2B3674",
                                                    // fontWeight: "bold",
                                                    fontSize: 16,
                                                    fontFamily: "poppins",
                                                }}
                                            >
                                                10L,20L,Can,Pump
                                            </Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            //   justifyContent: "flex-end",
                                            //   alignContent: "flex-end",
                                            //
                                            paddingLeft: 50, paddingTop: 30
                                        }}
                                    >
                                        <Text
                                            style={{
                                                backgroundColor: "#2B3674",
                                                width: 80,
                                                height: 30,
                                                borderRadius: 6,
                                                textAlign: "center",
                                                paddingVertical: 2,
                                                shadowColor: "gray",
                                                shadowOpacity: 0.7,
                                                color: "white",
                                                fontFamily: "poppins",
                                                fontSize: 18,
                                                //   shadowOffset: { width: 2, height: 4 },
                                                // justifyContent: "flex-end",
                                                // alignContent: "flex-end",
                                                // alignItems: "flex-end",
                                                // paddingLeft: 30,
                                            }}
                                        >
                                            View
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    backgroundColor: "#E2E3E6",
                                    width: "48%",
                                    padding: 20,
                                    // justifyContent: "space-between",
                                    borderRadius: 10,
                                    color: "white",
                                }}
                            >
                                <View style={{ width: "20%", paddingVertical: 20 }}>
                                    <Image
                                        source={require("../../assets/images/manageuser.png")}
                                        style={{
                                            borderRadius: 50,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            display: "flex",
                                        }}
                                    ></Image>
                                </View>
                                <View
                                    style={{ width: "47%", color: "#2B3674", paddingLeft: 20 }}
                                >
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            paddingBottom: 10,
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Name: Robert
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Shop Address
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontSize: 16,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        2/E samathanapuram,Tirunelveli
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            paddingBottom: 20,
                                            fontSize: 16,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Tamilnadu-600 005
                                    </Text>
                                    <View style={{ display: "flex", flexDirection: "row" }}>
                                        <Iconify icon="solar:user-bold" size={25} color="#2B3674" />
                                        <Text
                                            style={{
                                                color: "#2B3674",
                                                fontSize: 16,
                                                fontFamily: "poppins",
                                            }}
                                        >
                                            ab66541
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        width: "33%",
                                        justifyContent: "space-between",
                                        paddingLeft: 0,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "#2B3674",
                                            fontWeight: "bold",
                                            fontSize: 20,
                                            fontFamily: "poppins",
                                        }}
                                    >
                                        Shop Name: Dwater
                                    </Text>
                                    <View>
                                        <Text
                                            style={{
                                                color: "#2B3674",
                                                fontWeight: "bold",
                                                fontSize: 20,
                                                fontFamily: "poppins", paddingTop: 15
                                            }}
                                        >
                                            Included Items
                                        </Text>
                                        <View
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                paddingTop: 10,
                                            }}
                                        >
                                            <Iconify
                                                icon="mingcute:bottle-line"
                                                size={25}
                                                color="#2B3674"
                                            />
                                            <Text
                                                style={{
                                                    color: "#2B3674",
                                                    // fontWeight: "bold",
                                                    fontSize: 16,
                                                    fontFamily: "poppins",
                                                }}
                                            >
                                                10L,20L,Can,Pump
                                            </Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            //   justifyContent: "flex-end",
                                            //   alignContent: "flex-end",
                                            //
                                            paddingLeft: 50, paddingTop: 30
                                        }}
                                    >
                                        <Text
                                            style={{
                                                backgroundColor: "#2B3674",
                                                width: 80,
                                                height: 30,
                                                borderRadius: 6,
                                                textAlign: "center",
                                                paddingVertical: 2,
                                                shadowColor: "gray",
                                                shadowOpacity: 0.7,
                                                color: "white",
                                                fontFamily: "poppins",
                                                fontSize: 18,
                                                //   shadowOffset: { width: 2, height: 4 },
                                                // justifyContent: "flex-end",
                                                // alignContent: "flex-end",
                                                // alignItems: "flex-end",
                                                // paddingLeft: 30,
                                            }}
                                        >
                                            View
                                        </Text>
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
