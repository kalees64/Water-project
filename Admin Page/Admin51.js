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

export default function Shops() {
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
          {/* <View
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
              //   backgroundColor: "#E2E3E6",
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
              Manage Orders
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
              backgroundColor: "#e2e3e6",
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
              <Iconify
                icon="dashicons:businessperson"
                size={30}
                color="#2b3674"
              />
            </View>
            <Text
              style={{
                color: "#2b3674",
                fontSize: 20,
                fontWeight: "bold",
                fontFamily: "poppins",
              }}
            >
              Manage Vendors
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
          </View> */}

          <ScrollView>
            <View style={{ gap: 5 }}>
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
                  <Iconify icon="uil:package" size={30} color="#2B3674" />
                </View>
                <Text
                  style={{
                    color: "#2B3674",
                    fontSize: 20,
                    fontWeight: "bold",
                    fontFamily: "poppins",
                  }}
                >
                  Manage Orders
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
                  paddingLeft: 95,
                }}
              >
                <Text
                  style={{
                    color: "grey",
                    fontSize: 20,
                    fontWeight: "bold",
                    fontFamily: "poppins",
                  }}
                >
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
                  paddingLeft: 95,
                }}
              >
                <Text
                  style={{
                    color: "grey",
                    fontSize: 20,
                    fontWeight: "bold",
                    fontFamily: "poppins",
                  }}
                >
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
                  paddingLeft: 95,
                }}
              >
                <Text
                  style={{
                    color: "grey",
                    fontSize: 20,
                    fontWeight: "bold",
                    fontFamily: "poppins",
                  }}
                >
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
                  paddingLeft: 95,
                  backgroundColor: "#e2e3e6",
                }}
              >
                <Text
                  style={{
                    color: "#2b3674",
                    fontSize: 20,
                    fontWeight: "bold",
                    fontFamily: "poppins",
                  }}
                >
                  Completed Orders
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
                  paddingLeft: 95,
                }}
              >
                <Text
                  style={{
                    color: "grey",
                    fontSize: 20,
                    fontWeight: "bold",
                    fontFamily: "poppins",
                  }}
                >
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
                  <Iconify
                    icon="dashicons:businessperson"
                    size={30}
                    color="grey"
                  />
                </View>
                <Text
                  style={{
                    color: "grey",
                    fontSize: 20,
                    fontWeight: "bold",
                    fontFamily: "poppins",
                  }}
                >
                  Manage Vendors
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
          </ScrollView>
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
                    size={35}
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
                  Manage Vendors/Completed Orders/ Order Details
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
          <ScrollView>
            <View style={{ paddingHorizontal: 55, padding: 20 }}>
              <Text
                style={{
                  fontSize: 30,
                  color: "#2b3674",
                  fontWeight: "bold",
                  fontFamily: "poppins",
                }}
              >
                Order Details
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                padding: 10,
                paddingBottom: 100,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <View style={{ width: "50%" }}>
                <View style={{ padding: 30 }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: "#2b3674",
                      fontWeight: "bold",
                      fontFamily: "poppins",
                    }}
                  >
                    Order Items
                  </Text>
                </View>
                <View style={{ gap: 20, paddingTop: 10, padding: 20 }}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      borderColor: "#aeaeae",
                      borderWidth: 1,
                      height: 150,
                      shadowColor: "#aeaeae",
                      shadowOffset: { width: 2, height: 2 },
                      borderRadius: 10,
                      backgroundColor: "#e2e3e6",
                    }}
                  >
                    <View style={{ width: "34%" }}>
                      <Image
                        style={{
                          marginHorizontal: "auto",
                          marginVertical: "auto",
                        }}
                        source={require("../assets/images/can.png")}
                      />
                    </View>
                    <View
                      style={{
                        gap: 5,
                        width: "33%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        gap: 10,
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 16,
                            color: "#2b3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Water Can
                        </Text>
                      </View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <View>
                          <Iconify
                            icon="fa6-solid:bottle-water"
                            size={25}
                            color="#2b3674"
                          />
                        </View>
                        <View
                          style={{
                            gap: 40,
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <View>
                            <Text
                              style={{
                                color: "#2b3674",
                                fontFamily: "poppins",
                              }}
                            >
                              {" "}
                              10 Liters
                            </Text>
                          </View>
                          <View>
                            <Text
                              style={{
                                color: "#2b3674",
                                fontFamily: "poppins",
                              }}
                            >
                              Qty: 2
                            </Text>
                          </View>
                        </View>
                      </View>

                      <View
                        style={{ display: "flex", flexDirection: "row" }}
                      ></View>
                    </View>
                    <View
                      style={{
                        gap: 20,
                        width: "33%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "#2b3674",
                            fontFamily: "poppins",
                          }}
                        >
                          ₹50
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      borderColor: "#aeaeae",
                      borderWidth: 1,
                      height: 150,
                      shadowColor: "#aeaeae",
                      shadowOffset: { width: 2, height: 2 },
                      borderRadius: 10,
                      backgroundColor: "#e2e3e6",
                    }}
                  >
                    <View style={{ width: "34%", padding: 10 }}>
                      <Image
                        style={{
                          marginHorizontal: "auto",
                          marginVertical: "auto",
                        }}
                        source={require("../assets/images/20litre (2).png")}
                      />
                    </View>
                    <View
                      style={{
                        gap: 5,
                        width: "33%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        gap: 10,
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 16,
                            color: "#2b3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Water Can
                        </Text>
                      </View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <View>
                          <Iconify
                            icon="fa6-solid:bottle-water"
                            size={25}
                            color="#2b3674"
                          />
                        </View>
                        <View
                          style={{
                            gap: 40,
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <View>
                            <Text
                              style={{
                                color: "#2b3674",
                                fontFamily: "poppins",
                              }}
                            >
                              {" "}
                              20 Liters
                            </Text>
                          </View>
                          <View>
                            <Text
                              style={{
                                color: "#2b3674",
                                fontFamily: "poppins",
                              }}
                            >
                              Qty: 3
                            </Text>
                          </View>
                        </View>
                      </View>

                      <View
                        style={{ display: "flex", flexDirection: "row" }}
                      ></View>
                    </View>
                    <View
                      style={{
                        gap: 20,
                        width: "33%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "#2b3674",
                            fontFamily: "poppins",
                          }}
                        >
                          ₹90
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: 20,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#2b3674",
                      fontWeight: "bold",
                      fontFamily: "poppins",
                    }}
                  >
                    Total Amount
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#2b3674",
                      fontWeight: "bold",
                      fontFamily: "poppins",
                    }}
                  >
                    &#8377; 175
                  </Text>
                </View>
                <View
                  style={{ paddingHorizontal: 20, paddingVertical: 10, gap: 5 }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#2b3674",
                      fontWeight: "bold",
                      fontFamily: "poppins",
                    }}
                  >
                    Delivered to:
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#2b3674",
                      fontFamily: "poppins",
                    }}
                  >
                    Robert
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#2b3674",
                      fontFamily: "poppins",
                    }}
                  >
                    Samathanapuram, Tirunelveli, Tamilnadu - 628005
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    gap: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#2b3674",
                      fontWeight: "bold",
                      fontFamily: "poppins",
                    }}
                  >
                    Delivery By:
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#2b3674",
                      fontFamily: "poppins",
                    }}
                  >
                    Today by 11PM
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    gap: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#2b3674",
                      fontWeight: "bold",
                      fontFamily: "poppins",
                    }}
                  >
                    Customer Details:
                  </Text>
                  <View
                    style={{ display: "flex", flexDirection: "row", gap: 10 }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#2b3674",
                        fontFamily: "poppins",
                      }}
                    >
                      9860548584
                    </Text>
                    <Iconify icon="ph:phone-light" size={25} color="#2b3674" />
                  </View>
                </View>
                <View
                  style={{ paddingHorizontal: 20, paddingVertical: 10, gap: 5 }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#2b3674",
                      fontWeight: "bold",
                      fontFamily: "poppins",
                    }}
                  >
                    Payment Details:
                  </Text>
                  <View
                    style={{ display: "flex", flexDirection: "row", gap: 10 }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#2b3674",
                        fontFamily: "poppins",
                      }}
                    >
                      Paid
                    </Text>
                    <Iconify icon="icons8:checked" size={25} color="#2b3674" />
                  </View>
                </View>
                <View
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    gap: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#2b3674",
                      fontWeight: "bold",
                      fontFamily: "poppins",
                    }}
                  >
                    Delivery Status:
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "green",
                      fontFamily: "poppins",
                    }}
                  >
                    Completed
                  </Text>
                </View>
              </View>
              <View style={{ width: "50%" }}>
                <View style={{ padding: 30 }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: "#2b3674",
                      fontWeight: "bold",
                      fontFamily: "poppins",
                    }}
                  >
                    Track Order :
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 90,
                    gap: 60,
                  }}
                >
                  <View style={{ gap: 95, paddingRight: 20, paddingLeft: 20 }}>
                    <View style={{ paddingBottom: 15 }}>
                      <Iconify
                        icon="lucide:clipboard-list"
                        size={25}
                        color="#2b3674"
                      />
                    </View>
                    <View style={{ paddingTop: 15 }}>
                      <Iconify
                        icon="lucide:clipboard-check"
                        size={25}
                        color="#2b3674"
                      />
                    </View>
                  </View>

                  <View
                    style={{
                      gap: 5,
                      paddingRight: 20,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 30,
                    }}
                  >
                    <View>
                      <Iconify
                        icon="icons8:checked"
                        size={25}
                        color="#2b3674"
                      />
                    </View>
                    <View>
                      <Image
                        style={{ color: "#2b3674" }}
                        source={require("../assets/images/Line 2.jpg")}
                      />
                    </View>
                    <View>
                      <Iconify
                        icon="icons8:checked"
                        size={25}
                        color="#2b3674"
                      />
                    </View>
                  </View>
                  <View style={{ gap: 70 }}>
                    <View>
                      <View>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "#2b3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Order Confirmed
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontSize: 16,
                            color: "#2b3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Your order has been confirmed
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            color: "#2b3674",
                            fontFamily: "poppins",
                          }}
                        >
                          29/06 11 AM
                        </Text>
                      </View>
                    </View>
                    <View>
                      <View>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "#2b3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Delivery
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontSize: 16,
                            color: "#2b3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Order Delivered
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            color: "#2b3674",
                            fontFamily: "poppins",
                          }}
                        >
                          29/06 12 PM
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={{ padding: 30 }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: "#2b3674",
                      fontWeight: "bold",
                      fontFamily: "poppins",
                      paddingTop: 60,
                    }}
                  >
                    Transaction Details:
                  </Text>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingHorizontal: 40,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#2b3674",
                      fontWeight: "bold",
                      fontFamily: "poppins",
                    }}
                  >
                    Amount:
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#2b3674",
                      fontWeight: "bold",
                      fontFamily: "poppins",
                    }}
                  >
                    &#8377; 175
                  </Text>
                </View>

                <View
                  style={{
                    display: "flex",
                    paddingHorizontal: 40,
                    paddingTop: 20,
                    gap: 20,
                  }}
                >
                  <View style={{ gap: 5 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#2b3674",
                        fontWeight: "bold",
                        fontFamily: "poppins",
                      }}
                    >
                      Transaction:
                    </Text>
                  </View>
                  <View style={{ gap: 5 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#2b3674",
                        fontWeight: "bold",
                        fontFamily: "poppins",
                      }}
                    >
                      Vendor received the amount
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
