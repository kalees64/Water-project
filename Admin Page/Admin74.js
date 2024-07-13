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

export default function Page17() {
  const [loaded] = useFonts({
    poppins: require("../assets/fonts/Poppins-Black.ttf"),
  });
  if (!loaded) {
    return null;
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
            width: "20%",
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
                fontFamily: "poppins",
                color: "grey",
                fontSize: 20,
                fontWeight: "bold",
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
                backgroundColor: "#e2e3e6",
                padding: 10,
                borderRadius: 50,
              }}
            >
              <Iconify icon="solar:user-bold" size={30} color="grey" />
            </View>
            <Text
              style={{
                fontFamily: "poppins",
                color: "grey",
                fontSize: 20,
                fontWeight: "bold",
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
                fontFamily: "poppins",
                color: "grey",
                fontSize: 20,
                fontWeight: "bold",
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
              backgroundColor: "white",
              alignItems: "center",
              //   justifyContent: "center",
              gap: 20,
              paddingHorizontal: 25,
              paddingVertical: 35,
            }}
          >
            <View
              style={{
                // backgroundColor: "white",
                padding: 10,
                borderRadius: 50,
                backgroundColor: "#e2e3e6",
              }}
            >
              <Iconify icon="dashicons:businessperson" size={30} color="grey" />
            </View>
            <Text
              style={{
                fontFamily: "poppins",
                color: "grey",
                fontSize: 20,
                fontWeight: "bold",
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
                fontFamily: "poppins",
                color: "grey",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Requsets
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
                fontFamily: "poppins",
                color: "grey",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Earnings summary
            </Text>
          </View>
          <View style={{ gap: 10 }}>
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
                backgroundColor: "#e2e3e6",
                borderRightWidth: 2,
                borderRightColor: "#2b3674",
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  padding: 10,
                  borderRadius: 50,
                }}
              >
                <Iconify icon="solar:home-2-bold" size={30} color="#2b3674" />
              </View>
              <Text
                style={{
                  fontFamily: "poppins",
                  color: "#2b3674",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Payments
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
                // backgroundColor: "#e2e3e6",
                //   borderRightWidth: 2,
                //   borderRightColor: "#2b3674",
              }}
            >
              {/* <View
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 50,
              }}
            >
              <Iconify icon="solar:home-2-bold" size={30} color="#2b3674" />
            </View> */}
              <Text
                style={{
                  fontFamily: "poppins",
                  color: "grey",
                  fontSize: 20,
                  fontWeight: "bold",
                  paddingHorizontal: 66,
                }}
              >
                Settlements
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
                //   backgroundColor: "#e2e3e6",
                //   borderRightWidth: 2,
                //   borderRightColor: "#2b3674",
              }}
            >
              {/* <View
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 50,
              }}
            >
              <Iconify icon="solar:home-2-bold" size={30} color="#2b3674" />
            </View> */}
              <Text
                style={{
                  fontFamily: "poppins",
                  color: "grey",
                  fontSize: 20,
                  fontWeight: "bold",
                  paddingHorizontal: 66,
                }}
              >
                Refunds
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
                backgroundColor: "#e2e3e6",
                //   borderRightWidth: 2,
                //   borderRightColor: "#2b3674",
                borderRightWidth: 2,
                borderRightColor: "#2b3674",
              }}
            >
              {/* <View
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 50,
              }}
            >
              <Iconify icon="solar:home-2-bold" size={30} color="#2b3674" />
            </View> */}
              <Text
                style={{
                  fontFamily: "poppins",
                  color: "#2b3674",
                  fontSize: 20,
                  fontWeight: "bold",
                  paddingHorizontal: 66,
                }}
              >
                Reimbursement
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "80%",
            backgroundColor: "white",
            height: "100%",
            // display: "flex",
            // flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "100%",
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
                    color="grey"
                  />
                </View>
              </View>

              <View>
                <Text
                  style={{
                    fontFamily: "poppins",
                    fontSize: 45,
                    fontWeight: "bold",
                    color: "#2B3674",
                  }}
                >
                  Payments
                </Text>
                <Text
                  style={{
                    fontFamily: "poppins",
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "#2B3674",
                  }}
                >
                  Payments/ Settlements/Current Week Earnings
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
                  source={require("../assets/images/Elipse 5.png")}
                  style={{ borderRadius: 50 }}
                ></Image>
              </View>
            </View>
          </View>
          <ScrollView style={{ paddingBottom: 100 }}>
            <View style={{ padding: 30 }}>
              <Text
                style={{
                  fontFamily: "poppins",
                  fontSize: 45,
                  fontWeight: "bold",
                  color: "#2B3674",
                }}
              >
                Last Week Earnings
              </Text>
            </View>
            <View
              style={{ width: "100%", display: "flex", flexDirection: "row" }}
            >
              <View style={{ width: "50%", height: "100%", gap: 10 }}>
                <View style={{ width: "100%" }}>
                  <View
                    style={{ width: "100%", paddingHorizontal: 20, gap: 10 }}
                  >
                    <Text
                      style={{
                        fontFamily: "poppins",
                        fontSize: 25,
                        fontWeight: "bold",
                        color: "#2b3674",
                      }}
                    >
                      18 June:
                    </Text>
                    <View style={{ paddingHorizontal: 15 }}>
                      <View
                        style={{
                          width: "100%",
                          height: 230,
                          backgroundColor: "#e2e3e6",
                          shadowColor: "#aeaeae",
                          shadowOffset: { width: 2, height: 2 },
                          borderRadius: 10,
                          padding: 10,
                          paddingVertical: 15,
                          gap: 15,
                        }}
                      >
                        <View
                          style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: 10,
                            gap: 20,
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 20,
                              color: "#2b3674",
                              fontWeight: "bold",
                            }}
                          >
                            Order ID: 84161
                          </Text>
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 20,
                              color: "#2b3674",
                              fontWeight: "bold",
                            }}
                          >
                            &#8377; 175
                          </Text>
                        </View>
                        <View style={{ paddingHorizontal: 10 }}>
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 20,
                              color: "#2b3674",
                              fontWeight: "bold",
                            }}
                          >
                            Deliver to:
                          </Text>
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 16,
                              color: "#2b3674",
                            }}
                          >
                            Robert - Samathanapuram, Tirunelveli, Tamilnadu -
                          </Text>
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 16,
                              color: "#2b3674",
                            }}
                          >
                            628005
                          </Text>
                        </View>
                        <View
                          style={{
                            paddingHorizontal: 10,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              gap: 5,
                              alignItems: "center",
                            }}
                          >
                            <Iconify
                              icon="fa6-solid:bottle-water"
                              size={25}
                              color="#2b3674"
                            />
                            <Text
                              style={{
                                fontFamily: "poppins",
                                color: "#2b3674",
                                fontSize: 16,
                              }}
                            >
                              10L - 2Qts,20L - 3Qts
                            </Text>
                          </View>
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              gap: 5,
                              alignItems: "center",
                            }}
                          >
                            <Text
                              style={{
                                fontFamily: "poppins",
                                color: "#2b3674",
                                fontSize: 16,
                              }}
                            >
                              Paid
                            </Text>
                            <Iconify
                              icon="icons8:checked"
                              size={25}
                              color="#2b3674"
                            />
                          </View>
                          <View>
                            <Text
                              style={{
                                fontFamily: "poppins",
                                backgroundColor: "#2b3674",
                                paddingHorizontal: 20,
                                paddingVertical: 5,
                                color: "white",
                                borderRadius: 10,
                                fontSize: 18,
                              }}
                            >
                              View
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>

                    <View style={{ paddingHorizontal: 15 }}>
                      <View
                        style={{
                          width: "100%",
                          height: 230,
                          backgroundColor: "#e2e3e6",
                          shadowColor: "#aeaeae",
                          shadowOffset: { width: 2, height: 2 },
                          borderRadius: 10,
                          padding: 10,
                          paddingVertical: 15,
                          gap: 15,
                        }}
                      >
                        <View
                          style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: 10,
                            gap: 20,
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 20,
                              color: "#2b3674",
                              fontWeight: "bold",
                            }}
                          >
                            Order ID: 84161
                          </Text>
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 20,
                              color: "#2b3674",
                              fontWeight: "bold",
                            }}
                          >
                            &#8377; 175
                          </Text>
                        </View>
                        <View style={{ paddingHorizontal: 10 }}>
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 20,
                              color: "#2b3674",
                              fontWeight: "bold",
                            }}
                          >
                            Deliver to:
                          </Text>
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 16,
                              color: "#2b3674",
                            }}
                          >
                            Robert - Samathanapuram, Tirunelveli, Tamilnadu -
                          </Text>
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 16,
                              color: "#2b3674",
                            }}
                          >
                            628005
                          </Text>
                        </View>
                        <View
                          style={{
                            paddingHorizontal: 10,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              gap: 5,
                              alignItems: "center",
                            }}
                          >
                            <Iconify
                              icon="fa6-solid:bottle-water"
                              size={25}
                              color="#2b3674"
                            />
                            <Text
                              style={{
                                fontFamily: "poppins",
                                color: "#2b3674",
                                fontSize: 16,
                              }}
                            >
                              10L - 2Qts,20L - 3Qts
                            </Text>
                          </View>
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              gap: 5,
                              alignItems: "center",
                            }}
                          >
                            <Text
                              style={{
                                fontFamily: "poppins",
                                color: "#2b3674",
                                fontSize: 16,
                              }}
                            >
                              COD
                            </Text>
                            <Iconify
                              icon="icons8:checked"
                              size={25}
                              color="#2b3674"
                            />
                          </View>
                          <View>
                            <Text
                              style={{
                                fontFamily: "poppins",
                                backgroundColor: "#2b3674",
                                paddingHorizontal: 20,
                                paddingVertical: 5,
                                color: "white",
                                borderRadius: 10,
                                fontSize: 18,
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
                <View style={{ width: "100%" }}>
                  <View
                    style={{ width: "100%", paddingHorizontal: 20, gap: 10 }}
                  >
                    <Text
                      style={{
                        fontFamily: "poppins",
                        fontSize: 25,
                        fontWeight: "bold",
                        color: "#2b3674",
                      }}
                    >
                      17 June:
                    </Text>
                    <View style={{ paddingHorizontal: 15 }}>
                      <View
                        style={{
                          width: "100%",
                          height: 230,
                          backgroundColor: "#e2e3e6",
                          shadowColor: "#aeaeae",
                          shadowOffset: { width: 2, height: 2 },
                          borderRadius: 10,
                          padding: 10,
                          paddingVertical: 15,
                          gap: 15,
                        }}
                      >
                        <View
                          style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: 10,
                            gap: 20,
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 20,
                              color: "#2b3674",
                              fontWeight: "bold",
                            }}
                          >
                            Order ID: 84161
                          </Text>
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 20,
                              color: "#2b3674",
                              fontWeight: "bold",
                            }}
                          >
                            &#8377; 175
                          </Text>
                        </View>
                        <View style={{ paddingHorizontal: 10 }}>
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 20,
                              color: "#2b3674",
                              fontWeight: "bold",
                            }}
                          >
                            Deliver to:
                          </Text>
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 16,
                              color: "#2b3674",
                            }}
                          >
                            Robert - Samathanapuram, Tirunelveli, Tamilnadu -
                          </Text>
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 16,
                              color: "#2b3674",
                            }}
                          >
                            628005
                          </Text>
                        </View>
                        <View
                          style={{
                            paddingHorizontal: 10,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              gap: 5,
                              alignItems: "center",
                            }}
                          >
                            <Iconify
                              icon="fa6-solid:bottle-water"
                              size={25}
                              color="#2b3674"
                            />
                            <Text
                              style={{
                                fontFamily: "poppins",
                                color: "#2b3674",
                                fontSize: 16,
                              }}
                            >
                              10L - 2Qts,20L - 3Qts
                            </Text>
                          </View>
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              gap: 5,
                              alignItems: "center",
                            }}
                          >
                            <Text
                              style={{
                                fontFamily: "poppins",
                                color: "#2b3674",
                                fontSize: 16,
                              }}
                            >
                              Paid
                            </Text>
                            <Iconify
                              icon="icons8:checked"
                              size={25}
                              color="#2b3674"
                            />
                          </View>
                          <View>
                            <Text
                              style={{
                                fontFamily: "poppins",
                                backgroundColor: "#2b3674",
                                paddingHorizontal: 20,
                                paddingVertical: 5,
                                color: "white",
                                borderRadius: 10,
                                fontSize: 18,
                              }}
                            >
                              View
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>

                    <View style={{ paddingHorizontal: 15 }}>
                      <View
                        style={{
                          width: "100%",
                          height: 230,
                          backgroundColor: "#e2e3e6",
                          shadowColor: "#aeaeae",
                          shadowOffset: { width: 2, height: 2 },
                          borderRadius: 10,
                          padding: 10,
                          paddingVertical: 15,
                          gap: 15,
                        }}
                      >
                        <View
                          style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: 10,
                            gap: 20,
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 20,
                              color: "#2b3674",
                              fontWeight: "bold",
                            }}
                          >
                            Order ID: 84161
                          </Text>
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 20,
                              color: "#2b3674",
                              fontWeight: "bold",
                            }}
                          >
                            &#8377; 175
                          </Text>
                        </View>
                        <View style={{ paddingHorizontal: 10 }}>
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 20,
                              color: "#2b3674",
                              fontWeight: "bold",
                            }}
                          >
                            Deliver to:
                          </Text>
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 16,
                              color: "#2b3674",
                            }}
                          >
                            Robert - Samathanapuram, Tirunelveli, Tamilnadu -
                          </Text>
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 16,
                              color: "#2b3674",
                            }}
                          >
                            628005
                          </Text>
                        </View>
                        <View
                          style={{
                            paddingHorizontal: 10,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              gap: 5,
                              alignItems: "center",
                            }}
                          >
                            <Iconify
                              icon="fa6-solid:bottle-water"
                              size={25}
                              color="#2b3674"
                            />
                            <Text
                              style={{
                                fontFamily: "poppins",
                                color: "#2b3674",
                                fontSize: 16,
                              }}
                            >
                              10L - 2Qts,20L - 3Qts
                            </Text>
                          </View>
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              gap: 5,
                              alignItems: "center",
                            }}
                          >
                            <Text
                              style={{
                                fontFamily: "poppins",
                                color: "#2b3674",
                                fontSize: 16,
                              }}
                            >
                              COD
                            </Text>
                            <Iconify
                              icon="icons8:checked"
                              size={25}
                              color="#2b3674"
                            />
                          </View>
                          <View>
                            <Text
                              style={{
                                fontFamily: "poppins",
                                backgroundColor: "#2b3674",
                                paddingHorizontal: 20,
                                paddingVertical: 5,
                                color: "white",
                                borderRadius: 10,
                                fontSize: 18,
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
                <View style={{ width: "100%" }}>
                  <View
                    style={{ width: "100%", paddingHorizontal: 20, gap: 10 }}
                  >
                    <Text
                      style={{
                        fontFamily: "poppins",
                        fontSize: 25,
                        fontWeight: "bold",
                        color: "#2b3674",
                      }}
                    >
                      16 June:
                    </Text>
                    <View style={{ paddingHorizontal: 15 }}>
                      <View
                        style={{
                          width: "100%",
                          height: 230,
                          backgroundColor: "#e2e3e6",
                          shadowColor: "#aeaeae",
                          shadowOffset: { width: 2, height: 2 },
                          borderRadius: 10,
                          padding: 10,
                          paddingVertical: 15,
                          gap: 15,
                        }}
                      >
                        <View
                          style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: 10,
                            gap: 20,
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 20,
                              color: "#2b3674",
                              fontWeight: "bold",
                            }}
                          >
                            Order ID: 84161
                          </Text>
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 20,
                              color: "#2b3674",
                              fontWeight: "bold",
                            }}
                          >
                            &#8377; 175
                          </Text>
                        </View>
                        <View style={{ paddingHorizontal: 10 }}>
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 20,
                              color: "#2b3674",
                              fontWeight: "bold",
                            }}
                          >
                            Deliver to:
                          </Text>
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 16,
                              color: "#2b3674",
                            }}
                          >
                            Robert - Samathanapuram, Tirunelveli, Tamilnadu -
                          </Text>
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 16,
                              color: "#2b3674",
                            }}
                          >
                            628005
                          </Text>
                        </View>
                        <View
                          style={{
                            paddingHorizontal: 10,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              gap: 5,
                              alignItems: "center",
                            }}
                          >
                            <Iconify
                              icon="fa6-solid:bottle-water"
                              size={25}
                              color="#2b3674"
                            />
                            <Text
                              style={{
                                fontFamily: "poppins",
                                color: "#2b3674",
                                fontSize: 16,
                              }}
                            >
                              10L - 2Qts,20L - 3Qts
                            </Text>
                          </View>
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              gap: 5,
                              alignItems: "center",
                            }}
                          >
                            <Text
                              style={{
                                fontFamily: "poppins",
                                color: "#2b3674",
                                fontSize: 16,
                              }}
                            >
                              Paid
                            </Text>
                            <Iconify
                              icon="icons8:checked"
                              size={25}
                              color="#2b3674"
                            />
                          </View>
                          <View>
                            <Text
                              style={{
                                fontFamily: "poppins",
                                backgroundColor: "#2b3674",
                                paddingHorizontal: 20,
                                paddingVertical: 5,
                                color: "white",
                                borderRadius: 10,
                                fontSize: 18,
                              }}
                            >
                              View
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>

                    <View style={{ paddingHorizontal: 15 }}>
                      <View
                        style={{
                          width: "100%",
                          height: 230,
                          backgroundColor: "#e2e3e6",
                          shadowColor: "#aeaeae",
                          shadowOffset: { width: 2, height: 2 },
                          borderRadius: 10,
                          padding: 10,
                          paddingVertical: 15,
                          gap: 15,
                        }}
                      >
                        <View
                          style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: 10,
                            gap: 20,
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 20,
                              color: "#2b3674",
                              fontWeight: "bold",
                            }}
                          >
                            Order ID: 84161
                          </Text>
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 20,
                              color: "#2b3674",
                              fontWeight: "bold",
                            }}
                          >
                            &#8377; 175
                          </Text>
                        </View>
                        <View style={{ paddingHorizontal: 10 }}>
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 20,
                              color: "#2b3674",
                              fontWeight: "bold",
                            }}
                          >
                            Deliver to:
                          </Text>
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 16,
                              color: "#2b3674",
                            }}
                          >
                            Robert - Samathanapuram, Tirunelveli, Tamilnadu -
                          </Text>
                          <Text
                            style={{
                              fontFamily: "poppins",
                              fontSize: 16,
                              color: "#2b3674",
                            }}
                          >
                            628005
                          </Text>
                        </View>
                        <View
                          style={{
                            paddingHorizontal: 10,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              gap: 5,
                              alignItems: "center",
                            }}
                          >
                            <Iconify
                              icon="fa6-solid:bottle-water"
                              size={25}
                              color="#2b3674"
                            />
                            <Text
                              style={{
                                fontFamily: "poppins",
                                color: "#2b3674",
                                fontSize: 16,
                              }}
                            >
                              10L - 2Qts,20L - 3Qts
                            </Text>
                          </View>
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              gap: 5,
                              alignItems: "center",
                            }}
                          >
                            <Text
                              style={{
                                fontFamily: "poppins",
                                color: "#2b3674",
                                fontSize: 16,
                              }}
                            >
                              COD
                            </Text>
                            <Iconify
                              icon="icons8:checked"
                              size={25}
                              color="#2b3674"
                            />
                          </View>
                          <View>
                            <Text
                              style={{
                                fontFamily: "poppins",
                                backgroundColor: "#2b3674",
                                paddingHorizontal: 20,
                                paddingVertical: 5,
                                color: "white",
                                borderRadius: 10,
                                fontSize: 18,
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
              </View>
              <View style={{ width: "50%", height: "100%", gap: 10 }}>
                <View style={{ width: "100%" }}>
                  <Text
                    style={{
                      fontFamily: "poppins",
                      fontSize: 25,
                      fontWeight: "bold",
                      color: "#2b3674",
                    }}
                  >
                    Payment Details:
                  </Text>
                  <View
                    style={{
                      width: "100%",
                      paddingHorizontal: 15,
                      paddingVertical: 20,
                      gap: 15,
                    }}
                  >
                    <View
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "poppins",
                          fontSize: 20,
                          color: "#2b3674",
                          fontWeight: "500",
                        }}
                      >
                        Total Earnings:
                      </Text>
                      <Text
                        style={{
                          fontFamily: "poppins",
                          fontSize: 20,
                          color: "#2b3674",
                          fontWeight: "500",
                        }}
                      >
                        &#8377;1150
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "poppins",
                          fontSize: 20,
                          color: "#2b3674",
                          fontWeight: "500",
                        }}
                      >
                        Cash Collected:
                      </Text>
                      <Text
                        style={{
                          fontFamily: "poppins",
                          fontSize: 20,
                          color: "#2b3674",
                          fontWeight: "500",
                        }}
                      >
                        &#8377;1250
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "poppins",
                          fontSize: 20,
                          color: "#2b3674",
                          fontWeight: "500",
                        }}
                      >
                        Balance:
                      </Text>
                      <Text
                        style={{
                          fontFamily: "poppins",
                          fontSize: 20,
                          color: "#2b3674",
                          fontWeight: "500",
                        }}
                      >
                        {" "}
                        - &#8377;100
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "poppins",
                          fontSize: 20,
                          color: "#2b3674",
                          fontWeight: "500",
                        }}
                      >
                        Excess Amount:
                      </Text>
                      <Text
                        style={{
                          fontFamily: "poppins",
                          fontSize: 20,
                          color: "#2b3674",
                          fontWeight: "500",
                        }}
                      >
                        &#8377;100
                      </Text>
                    </View>
                    <View style={{ width: "100%", gap: 5 }}>
                      <Text
                        style={{
                          fontFamily: "poppins",
                          fontSize: 20,
                          color: "#2b3674",
                          fontWeight: "500",
                        }}
                      >
                        Transaction:
                      </Text>
                      <Text
                        style={{
                          fontFamily: "poppins",
                          fontSize: 16,
                          color: "#2b3674",
                          fontWeight: "500",
                        }}
                      >
                        The vendor sent the excess amount on Tuesday, on or
                        before 10 AM.
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "100%",
                    paddingHorizontal: 40,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      backgroundColor: "#2B3674",
                      borderRadius: 10,
                      paddingVertical: 5,
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      gap: 10,
                    }}
                  >
                    <Iconify icon="tabler:message" size={25} color="white" />
                    <Text
                      style={{
                        fontFamily: "poppins",
                        backgroundColor: "#2b3674",
                        textAlign: "center",

                        color: "white",

                        fontSize: 18,
                      }}
                    >
                      Notify Vendor
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
