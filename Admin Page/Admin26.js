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

export default function Admin26() {
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
                <ScrollView style={{
                    width: "15%",
                    backgroundColor: "white",
                    height: "100%",
                }}>
                    <View
                        style={{
                            width: "100%",
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
                                fontFamily: 'poppins',
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
                            <Text style={{ fontFamily: "poppins", color: "grey", fontSize: 20, fontWeight: "bold" }}>
                                Dashboard
                            </Text>
                        </View>
                        <View style={{ width: "100%", gap: 10 }}>
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
                                    <Iconify icon="solar:user-bold" size={30} color="grey" />
                                </View>
                                <Text
                                    style={{ fontFamily: "poppins", color: "grey", fontSize: 20, fontWeight: "bold" }}
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
                                    backgroundColor: "#E2E3E6",
                                    alignItems: "center",
                                    //   justifyContent: "center",
                                    gap: 20,
                                    paddingHorizontal: 25,
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
                                    <Iconify icon="uil:package" size={30} color="#2b3674" />
                                </View>
                                <Text style={{ fontFamily: "poppins", color: "#2b3674", fontSize: 20, fontWeight: "bold" }}>
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
                                    backgroundColor: "#E2E3E6",
                                    // gap: 20,
                                    paddingVertical: 35,
                                }}
                            >

                                <Text style={{ fontFamily: "poppins", width: "100%", paddingLeft: 60, color: "#2b3674", fontSize: 20, fontWeight: "bold" }}>
                                    Today Orders
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

                                <Text style={{ fontFamily: "poppins", width: "100%", paddingLeft: 30, color: "grey", fontSize: 20, fontWeight: "bold" }}>
                                    Unreserved Orders
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

                                <Text style={{ fontFamily: "poppins", width: "100%", paddingLeft: 30, color: "grey", fontSize: 20, fontWeight: "bold" }}>
                                    Reserved Orders
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

                                <Text style={{ fontFamily: "poppins", width: "100%", paddingLeft: 30, color: "grey", fontSize: 20, fontWeight: "bold" }}>
                                    Completed Orders
                                </Text>
                            </View>
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

                            <Text style={{ fontFamily: "poppins", width: "100%", paddingLeft: 30, color: "grey", fontSize: 20, fontWeight: "bold" }}>
                                Cancelled Orders
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
                            <Text style={{ fontFamily: "poppins", color: "grey", fontSize: 20, fontWeight: "bold" }}>
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
                            <Text style={{ fontFamily: "poppins", color: "grey", fontSize: 20, fontWeight: "bold" }}>
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
                            <Text style={{ fontFamily: "poppins", color: "grey", fontSize: 20, fontWeight: "bold" }}>
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
                            <Text style={{ fontFamily: "poppins", color: "grey", fontSize: 20, fontWeight: "bold" }}>
                                Payments
                            </Text>
                        </View>
                    </View>
                </ScrollView>
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
                                    Manage Orders
                                </Text>
                                <Text
                                    style={{ fontFamily: "poppins", fontSize: 16, fontWeight: "bold", color: "#2B3674" }}
                                >
                                    Manage Orders/Today Orders
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
                    <ScrollView>

                        <View style={{ paddingVertical: 50 }}>
                            <View
                                style={{
                                    width: "100%",
                                    height: 60,
                                    backgroundColor: "#E2E3E6",
                                    marginHorizontal: 'auto',
                                    display: "flex",
                                    flexDirection: "row",
                                    width: 600,
                                    borderRadius: 50,
                                    gap: 25,
                                    paddingLeft: 20,
                                    alignItems: "center",
                                }}
                            >
                                <Iconify
                                    icon="fluent:search-12-regular"
                                    size={35}
                                    color="black"
                                />
                                <TextInput
                                    placeholder="Chennai"
                                    style={{
                                        width: "100%",
                                        fontSize: 16,
                                        color: "grey",
                                        height: 45,
                                    }}
                                ></TextInput>
                            </View>

                            <View style={{ width: "100%", padding: 10, paddingBottom: 100, display: "flex", flexDirection: "row" }}>
                                <View style={{ width: "50%" }}>
                                    <View style={{ padding: 30 }}>
                                        <Text style={{ fontFamily: "poppins", fontSize: 35, color: "#2b3674", fontWeight: 'bold' }}>
                                            Chennai
                                        </Text>
                                    </View>
                                    <View style={{ paddingHorizontal: 15, paddingVertical: 15, gap: 10 }}>
                                        <View style={{ width: "100%", height: 260, backgroundColor: "#e2e3e6", shadowColor: "#aeaeae", shadowOffset: { width: 2, height: 2, }, borderRadius: 10, padding: 10, paddingVertical: 15, gap: 15 }}>
                                            <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10, gap: 20 }}>
                                                <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                    Order ID: 84161
                                                </Text>
                                                <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                    &#8377; 175
                                                </Text>
                                            </View>
                                            <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
                                                <View style={{ paddingHorizontal: 5, width: "40%" }}>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                        Order to:
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Dwater - 2/E
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Samathanapuram,Tirunelveli,
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Tamilnadu - 628005
                                                    </Text>
                                                </View>
                                                <View style={{ paddingHorizontal: 5, width: "60%" }}>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                        Deliver to:
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Robert -  Samathanapuram,
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Tirunelveli, Tamilnadu - 628005
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={{ paddingHorizontal: 10, display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                                <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: 'center' }}>
                                                    <Iconify icon="fa6-solid:bottle-water" size={25} color='#2b3674' />
                                                    <Text style={{ fontFamily: "poppins", color: "#2b3674" }}>10L - 2Qts,20L - 3Qts</Text>
                                                </View>
                                                <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: 'center' }}>
                                                    <Text style={{ fontFamily: "poppins", color: "#2b3674" }}>Paid</Text>
                                                    <Iconify icon="icons8:checked" size={25} color="#2b3674" />
                                                </View>
                                                <View>
                                                    <Text style={{ fontFamily: "poppins", backgroundColor: "#2b3674", paddingHorizontal: 20, paddingVertical: 5, color: "white", borderRadius: 10 }}>View</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ width: "100%", height: 260, backgroundColor: "#e2e3e6", shadowColor: "#aeaeae", shadowOffset: { width: 2, height: 2, }, borderRadius: 10, padding: 10, paddingVertical: 15, gap: 15 }}>
                                            <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10, gap: 20 }}>
                                                <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                    Order ID: 84161
                                                </Text>
                                                <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                    &#8377; 175
                                                </Text>
                                            </View>
                                            <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
                                                <View style={{ paddingHorizontal: 5, width: "40%" }}>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                        Order to:
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Dwater - 2/E
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Samathanapuram,Tirunelveli,
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Tamilnadu - 628005
                                                    </Text>
                                                </View>
                                                <View style={{ paddingHorizontal: 10, width: "60%" }}>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                        Deliver to:
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Robert -  Samathanapuram,
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Tirunelveli, Tamilnadu - 628005
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={{ paddingHorizontal: 10, display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                                <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: 'center' }}>
                                                    <Iconify icon="fa6-solid:bottle-water" size={25} color='#2b3674' />
                                                    <Text style={{ fontFamily: "poppins", color: "#2b3674" }}>10L - 2Qts,20L - 3Qts</Text>
                                                </View>
                                                <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: 'center' }}>
                                                    <Text style={{ fontFamily: "poppins", color: "#2b3674" }}>Paid</Text>
                                                    <Iconify icon="icons8:checked" size={25} color="#2b3674" />
                                                </View>
                                                <View>
                                                    <Text style={{ fontFamily: "poppins", backgroundColor: "#2b3674", paddingHorizontal: 20, paddingVertical: 5, color: "white", borderRadius: 10 }}>View</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ width: "100%", height: 260, backgroundColor: "#e2e3e6", shadowColor: "#aeaeae", shadowOffset: { width: 2, height: 2, }, borderRadius: 10, padding: 10, paddingVertical: 15, gap: 15 }}>
                                            <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10, gap: 20 }}>
                                                <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                    Order ID: 84161
                                                </Text>
                                                <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                    &#8377; 175
                                                </Text>
                                            </View>
                                            <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
                                                <View style={{ paddingHorizontal: 5, width: "40%" }}>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                        Order to:
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Dwater - 2/E
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Samathanapuram,Tirunelveli,
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Tamilnadu - 628005
                                                    </Text>
                                                </View>
                                                <View style={{ paddingHorizontal: 10, width: "60%" }}>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                        Deliver to:
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Robert -  Samathanapuram,
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Tirunelveli, Tamilnadu - 628005
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={{ paddingHorizontal: 10, display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                                <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: 'center' }}>
                                                    <Iconify icon="fa6-solid:bottle-water" size={25} color='#2b3674' />
                                                    <Text style={{ fontFamily: "poppins", color: "#2b3674" }}>10L - 2Qts,20L - 3Qts</Text>
                                                </View>
                                                <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: 'center' }}>
                                                    <Text style={{ fontFamily: "poppins", color: "#2b3674" }}>Paid</Text>
                                                    <Iconify icon="icons8:checked" size={25} color="#2b3674" />
                                                </View>
                                                <View>
                                                    <Text style={{ fontFamily: "poppins", backgroundColor: "#2b3674", paddingHorizontal: 20, paddingVertical: 5, color: "white", borderRadius: 10 }}>View</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ width: "100%", height: 260, backgroundColor: "#e2e3e6", shadowColor: "#aeaeae", shadowOffset: { width: 2, height: 2, }, borderRadius: 10, padding: 10, paddingVertical: 15, gap: 15 }}>
                                            <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10, gap: 20 }}>
                                                <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                    Order ID: 84161
                                                </Text>
                                                <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                    &#8377; 175
                                                </Text>
                                            </View>
                                            <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
                                                <View style={{ paddingHorizontal: 5, width: "40%" }}>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                        Order to:
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Dwater - 2/E
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Samathanapuram,Tirunelveli,
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Tamilnadu - 628005
                                                    </Text>
                                                </View>
                                                <View style={{ paddingHorizontal: 10, width: "60%" }}>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                        Deliver to:
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Robert -  Samathanapuram,
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Tirunelveli, Tamilnadu - 628005
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={{ paddingHorizontal: 10, display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                                <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: 'center' }}>
                                                    <Iconify icon="fa6-solid:bottle-water" size={25} color='#2b3674' />
                                                    <Text style={{ fontFamily: "poppins", color: "#2b3674" }}>10L - 2Qts,20L - 3Qts</Text>
                                                </View>
                                                <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: 'center' }}>
                                                    <Text style={{ fontFamily: "poppins", color: "#2b3674" }}>Paid</Text>
                                                    <Iconify icon="icons8:checked" size={25} color="#2b3674" />
                                                </View>
                                                <View>
                                                    <Text style={{ fontFamily: "poppins", backgroundColor: "#2b3674", paddingHorizontal: 20, paddingVertical: 5, color: "white", borderRadius: 10 }}>View</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ width: "100%", height: 260, backgroundColor: "#e2e3e6", shadowColor: "#aeaeae", shadowOffset: { width: 2, height: 2, }, borderRadius: 10, padding: 10, paddingVertical: 15, gap: 15 }}>
                                            <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10, gap: 20 }}>
                                                <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                    Order ID: 84161
                                                </Text>
                                                <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                    &#8377; 175
                                                </Text>
                                            </View>
                                            <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
                                                <View style={{ paddingHorizontal: 5, width: "40%" }}>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                        Order to:
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Dwater - 2/E
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Samathanapuram,Tirunelveli,
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Tamilnadu - 628005
                                                    </Text>
                                                </View>
                                                <View style={{ paddingHorizontal: 10, width: "60%" }}>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                        Deliver to:
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Robert -  Samathanapuram,
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Tirunelveli, Tamilnadu - 628005
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={{ paddingHorizontal: 10, display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                                <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: 'center' }}>
                                                    <Iconify icon="fa6-solid:bottle-water" size={25} color='#2b3674' />
                                                    <Text style={{ fontFamily: "poppins", color: "#2b3674" }}>10L - 2Qts,20L - 3Qts</Text>
                                                </View>
                                                <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: 'center' }}>
                                                    <Text style={{ fontFamily: "poppins", color: "#2b3674" }}>Paid</Text>
                                                    <Iconify icon="icons8:checked" size={25} color="#2b3674" />
                                                </View>
                                                <View>
                                                    <Text style={{ fontFamily: "poppins", backgroundColor: "#2b3674", paddingHorizontal: 20, paddingVertical: 5, color: "white", borderRadius: 10 }}>View</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>

                                </View>
                                <View style={{ width: "50%" }}>
                                    <View style={{ padding: 30, width: "100%" }}>
                                        <Text style={{ fontFamily: "poppins", fontSize: 35, color: "#2b3674", fontWeight: 'bold', textAlign: "right" }}>
                                            Total Orders: 55
                                        </Text>
                                    </View>
                                    <View style={{ paddingHorizontal: 15, paddingVertical: 15, gap: 10 }}>
                                        <View style={{ width: "100%", height: 260, backgroundColor: "#e2e3e6", shadowColor: "#aeaeae", shadowOffset: { width: 2, height: 2, }, borderRadius: 10, padding: 10, paddingVertical: 15, gap: 15 }}>
                                            <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10, gap: 20 }}>
                                                <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                    Order ID: 84161
                                                </Text>
                                                <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                    &#8377; 175
                                                </Text>
                                            </View>
                                            <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
                                                <View style={{ paddingHorizontal: 5, width: "40%" }}>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                        Order to:
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Dwater - 2/E
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Samathanapuram,Tirunelveli,
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Tamilnadu - 628005
                                                    </Text>
                                                </View>
                                                <View style={{ paddingHorizontal: 10, width: "60%" }}>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                        Deliver to:
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Robert -  Samathanapuram,
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Tirunelveli, Tamilnadu - 628005
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={{ paddingHorizontal: 10, display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                                <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: 'center' }}>
                                                    <Iconify icon="fa6-solid:bottle-water" size={25} color='#2b3674' />
                                                    <Text style={{ fontFamily: "poppins", color: "#2b3674" }}>10L - 2Qts,20L - 3Qts</Text>
                                                </View>
                                                <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: 'center' }}>
                                                    <Text style={{ fontFamily: "poppins", color: "#2b3674" }}>COD</Text>
                                                </View>
                                                <View>
                                                    <Text style={{ fontFamily: "poppins", backgroundColor: "#2b3674", paddingHorizontal: 20, paddingVertical: 5, color: "white", borderRadius: 10 }}>View</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ width: "100%", height: 260, backgroundColor: "#e2e3e6", shadowColor: "#aeaeae", shadowOffset: { width: 2, height: 2, }, borderRadius: 10, padding: 10, paddingVertical: 15, gap: 15 }}>
                                            <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10, gap: 20 }}>
                                                <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                    Order ID: 84161
                                                </Text>
                                                <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                    &#8377; 175
                                                </Text>
                                            </View>
                                            <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
                                                <View style={{ paddingHorizontal: 5, width: "40%" }}>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                        Order to:
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Dwater - 2/E
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Samathanapuram,Tirunelveli,
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Tamilnadu - 628005
                                                    </Text>
                                                </View>
                                                <View style={{ paddingHorizontal: 10, width: "60%" }}>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                        Deliver to:
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Robert -  Samathanapuram,
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Tirunelveli, Tamilnadu - 628005
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={{ paddingHorizontal: 10, display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                                <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: 'center' }}>
                                                    <Iconify icon="fa6-solid:bottle-water" size={25} color='#2b3674' />
                                                    <Text style={{ fontFamily: "poppins", color: "#2b3674" }}>10L - 2Qts,20L - 3Qts</Text>
                                                </View>
                                                <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: 'center' }}>
                                                    <Text style={{ fontFamily: "poppins", color: "#2b3674" }}>COD</Text>
                                                </View>
                                                <View>
                                                    <Text style={{ fontFamily: "poppins", backgroundColor: "#2b3674", paddingHorizontal: 20, paddingVertical: 5, color: "white", borderRadius: 10 }}>View</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ width: "100%", height: 260, backgroundColor: "#e2e3e6", shadowColor: "#aeaeae", shadowOffset: { width: 2, height: 2, }, borderRadius: 10, padding: 10, paddingVertical: 15, gap: 15 }}>
                                            <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10, gap: 20 }}>
                                                <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                    Order ID: 84161
                                                </Text>
                                                <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                    &#8377; 175
                                                </Text>
                                            </View>
                                            <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
                                                <View style={{ paddingHorizontal: 5, width: "40%" }}>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                        Order to:
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Dwater - 2/E
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Samathanapuram,Tirunelveli,
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Tamilnadu - 628005
                                                    </Text>
                                                </View>
                                                <View style={{ paddingHorizontal: 10, width: "60%" }}>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                        Deliver to:
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Robert -  Samathanapuram,
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Tirunelveli, Tamilnadu - 628005
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={{ paddingHorizontal: 10, display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                                <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: 'center' }}>
                                                    <Iconify icon="fa6-solid:bottle-water" size={25} color='#2b3674' />
                                                    <Text style={{ fontFamily: "poppins", color: "#2b3674" }}>10L - 2Qts,20L - 3Qts</Text>
                                                </View>
                                                <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: 'center' }}>
                                                    <Text style={{ fontFamily: "poppins", color: "#2b3674" }}>COD</Text>
                                                </View>
                                                <View>
                                                    <Text style={{ fontFamily: "poppins", backgroundColor: "#2b3674", paddingHorizontal: 20, paddingVertical: 5, color: "white", borderRadius: 10 }}>View</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ width: "100%", height: 260, backgroundColor: "#e2e3e6", shadowColor: "#aeaeae", shadowOffset: { width: 2, height: 2, }, borderRadius: 10, padding: 10, paddingVertical: 15, gap: 15 }}>
                                            <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10, gap: 20 }}>
                                                <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                    Order ID: 84161
                                                </Text>
                                                <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                    &#8377; 175
                                                </Text>
                                            </View>
                                            <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
                                                <View style={{ paddingHorizontal: 5, width: "40%" }}>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                        Order to:
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Dwater - 2/E
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Samathanapuram,Tirunelveli,
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Tamilnadu - 628005
                                                    </Text>
                                                </View>
                                                <View style={{ paddingHorizontal: 10, width: "60%" }}>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                        Deliver to:
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Robert -  Samathanapuram,
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Tirunelveli, Tamilnadu - 628005
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={{ paddingHorizontal: 10, display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                                <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: 'center' }}>
                                                    <Iconify icon="fa6-solid:bottle-water" size={25} color='#2b3674' />
                                                    <Text style={{ fontFamily: "poppins", color: "#2b3674" }}>10L - 2Qts,20L - 3Qts</Text>
                                                </View>
                                                <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: 'center' }}>
                                                    <Text style={{ fontFamily: "poppins", color: "#2b3674" }}>COD</Text>
                                                </View>
                                                <View>
                                                    <Text style={{ fontFamily: "poppins", backgroundColor: "#2b3674", paddingHorizontal: 20, paddingVertical: 5, color: "white", borderRadius: 10 }}>View</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ width: "100%", height: 260, backgroundColor: "#e2e3e6", shadowColor: "#aeaeae", shadowOffset: { width: 2, height: 2, }, borderRadius: 10, padding: 10, paddingVertical: 15, gap: 15 }}>
                                            <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10, gap: 20 }}>
                                                <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                    Order ID: 84161
                                                </Text>
                                                <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                    &#8377; 175
                                                </Text>
                                            </View>
                                            <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
                                                <View style={{ paddingHorizontal: 5, width: "40%" }}>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                        Order to:
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Dwater - 2/E
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Samathanapuram,Tirunelveli,
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Tamilnadu - 628005
                                                    </Text>
                                                </View>
                                                <View style={{ paddingHorizontal: 10, width: "60%" }}>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 20, color: "#2b3674", fontWeight: 'bold' }}>
                                                        Deliver to:
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Robert -  Samathanapuram,
                                                    </Text>
                                                    <Text style={{ fontFamily: "poppins", fontSize: 16, color: "#2b3674" }}>
                                                        Tirunelveli, Tamilnadu - 628005
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={{ paddingHorizontal: 10, display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                                <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: 'center' }}>
                                                    <Iconify icon="fa6-solid:bottle-water" size={25} color='#2b3674' />
                                                    <Text style={{ fontFamily: "poppins", color: "#2b3674" }}>10L - 2Qts,20L - 3Qts</Text>
                                                </View>
                                                <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: 'center' }}>
                                                    <Text style={{ fontFamily: "poppins", color: "#2b3674" }}>COD</Text>
                                                </View>
                                                <View>
                                                    <Text style={{ fontFamily: "poppins", backgroundColor: "#2b3674", paddingHorizontal: 20, paddingVertical: 5, color: "white", borderRadius: 10 }}>View</Text>
                                                </View>
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