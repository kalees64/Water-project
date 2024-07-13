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
              paddingTop: 30,
              height: 120,
              fontFamily: "poppins",
            }}
          >
            THANNI CAN
          </Text>
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
                  backgroundColor: "#E2E3E6",
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
                  Manage Orders
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#2B3674",
                    fontFamily: "poppins",
                  }}
                >
                  Manage Vendors/Cancelled Orders/ Order Details
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
                            fontSize: 20,
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
                                fontSize: 16,
                              }}
                            >
                              10 Liters
                            </Text>
                          </View>
                          <View>
                            <Text
                              style={{
                                color: "#2b3674",
                                fontFamily: "poppins",
                                fontSize: 16,
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
                            fontSize: 20,
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
                                fontSize: 16,
                              }}
                            >
                              20 Liters
                            </Text>
                          </View>
                          <View>
                            <Text
                              style={{
                                color: "#2b3674",
                                fontFamily: "poppins",
                                fontSize: 16,
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
                    Deliver To:
                  </Text>
                  <View>
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
                      2/E, Samanathanapuram, Tirunelveli, Tamilnadu-628005
                    </Text>
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
                    Order To:
                  </Text>
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#2b3674",
                        fontFamily: "poppins",
                      }}
                    >
                      Dwater
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#2b3674",
                        fontFamily: "poppins",
                      }}
                    >
                      2/E, Samanathanapuram, Tirunelveli, Tamilnadu-628005
                    </Text>
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
                    Delivery Status:
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "red",
                      fontFamily: "poppins",
                    }}
                  >
                    Order Not Placed
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

                <View style={{ gap: 20, paddingHorizontal: 120 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#2b3674",
                      fontFamily: "poppins",
                    }}
                  >
                    Cancel notification has been sent to the user
                  </Text>
                </View>

                <View style={{ padding: 30, paddingTop: 330 }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: "#2b3674",
                      fontWeight: "bold",
                      fontFamily: "poppins",
                      paddingTop: 120,
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
                    Amount Received:
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
                      Transaction ID:
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#2b3674",
                        fontWeight: "500",
                        fontFamily: "poppins",
                      }}
                    >
                      987456123321
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
                      From
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#2b3674",
                        fontWeight: "500",
                        fontFamily: "poppins",
                      }}
                    >
                      ROBERT ( State Bank of India )
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#2b3674",
                        fontWeight: "500",
                        fontFamily: "poppins",
                      }}
                    >
                      abscd@oksbi
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
                      To:
                    </Text>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 16,
                            color: "#2b3674",
                            fontWeight: "500",
                            fontFamily: "poppins",
                          }}
                        >
                          ThanniCan
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            color: "#2b3674",
                            fontWeight: "500",
                            fontFamily: "poppins",
                          }}
                        >
                          gpay@okaxis
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            backgroundColor: "#2b3674",
                            color: "white",
                            paddingVertical: 10,
                            paddingHorizontal: 30,
                            borderRadius: 10,
                            fontFamily: "poppins",
                            fontSize: 18,
                          }}
                        >
                          See Details
                        </Text>
                      </View>
                    </View>
                    <View style={{ paddingTop: 40 }}>
                      <Text
                        style={{
                          backgroundColor: "#2b3674",
                          color: "white",
                          paddingVertical: 10,
                          paddingHorizontal: 30,
                          borderRadius: 10,
                          fontFamily: "poppins",
                          fontSize: 18,
                          textAlign: "center",
                        }}
                      >
                        Refund &#8377; 175
                      </Text>
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
