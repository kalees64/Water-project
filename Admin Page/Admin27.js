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
export default function Page22() {
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
              <Iconify icon="solar:home-2-bold" size={25} color="grey" />
            </View>
            <Text
              style={{
                fontFamily: "poppins",
                color: "grey",
                fontSize: 20,
                fontWeight: "bold",
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
              <Iconify icon="solar:user-bold" size={25} color="#2B3674" />
            </View>
            <Text
              style={{
                fontFamily: "poppins",
                color: "#2B3674",
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
              <Iconify icon="uil:package" size={25} color="grey" />
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
              <Iconify icon="dashicons:businessperson" size={25} color="grey" />
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
              <Iconify icon="solar:home-2-bold" size={25} color="grey" />
            </View>
            <Text
              style={{
                fontFamily: "poppins",
                color: "grey",
                fontSize: 20,
                fontWeight: "bold",
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
              <Iconify icon="solar:home-2-bold" size={25} color="grey" />
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
              <Iconify icon="solar:home-2-bold" size={25} color="grey" />
            </View>
            <Text
              style={{
                fontFamily: "poppins",
                color: "grey",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Payments
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "80%",
            //   backgroundColor: "red",
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
                    fontFamily: "poppins",
                    fontSize: 35,
                    fontWeight: "bold",
                    color: "#2B3674",
                  }}
                >
                  Manage Users
                </Text>
                <Text
                  style={{
                    fontFamily: "poppins",
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#2B3674",
                  }}
                >
                  Manage Users/Today Orders
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
                  fontFamily: "poppins",
                  fontSize: 35,
                  color: "#2b3674",
                  fontWeight: "bold",
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
                      fontFamily: "poppins",
                      fontSize: 25,
                      color: "#2b3674",
                      fontWeight: "bold",
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
                    }}
                  >
                    <View style={{ width: "34%" }}>
                      <Image
                        style={{
                          marginHorizontal: "auto",
                          marginVertical: "auto",
                        }}
                        source={require("../assets/images/10 litre.png")}
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
                            fontFamily: "poppins",
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "#2b3674",
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
                            gap: 15,
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <View>
                            <Text
                              style={{
                                fontFamily: "poppins",
                                color: "#2b3674",
                                fontSize: 16,
                              }}
                            >
                              {" "}
                              10 Liters
                            </Text>
                          </View>
                          <View>
                            <Text
                              style={{
                                fontFamily: "poppins",
                                color: "#2b3674",
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
                            fontFamily: "poppins",
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "#2b3674",
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
                    }}
                  >
                    <View style={{ width: "34%", padding: 10 }}>
                      <Image
                        style={{
                          marginHorizontal: "auto",
                          marginVertical: "auto",
                        }}
                        source={require("../assets/images/20litre.png")}
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
                            fontFamily: "poppins",
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "#2b3674",
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
                            gap: 15,
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <View>
                            <Text
                              style={{
                                fontFamily: "poppins",
                                color: "#2b3674",
                                fontSize: 16,
                              }}
                            >
                              {" "}
                              20 Liters
                            </Text>
                          </View>
                          <View>
                            <Text
                              style={{
                                fontFamily: "poppins",
                                color: "#2b3674",
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
                            fontFamily: "poppins",
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "#2b3674",
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
                      fontFamily: "poppins",
                      fontSize: 20,
                      color: "#2b3674",
                      fontWeight: "bold",
                    }}
                  >
                    Total Amount
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
                <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                  <Text
                    style={{
                      fontFamily: "poppins",
                      fontSize: 20,
                      color: "#2b3674",
                      fontWeight: "bold",
                    }}
                  >
                    Order To:
                  </Text>
                  <Text
                    style={{
                      fontFamily: "poppins",
                      fontSize: 16,
                      color: "#2b3674",
                    }}
                  >
                    DWater
                  </Text>
                  <Text
                    style={{
                      fontFamily: "poppins",
                      fontSize: 16,
                      color: "#2b3674",
                    }}
                  >
                    2/E, Samanathanapuram, Tirunelveli, Tamilnadu-628005
                  </Text>
                </View>
                <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                  <Text
                    style={{
                      fontFamily: "poppins",
                      fontSize: 20,
                      color: "#2b3674",
                      fontWeight: "bold",
                    }}
                  >
                    Delivery By:
                  </Text>
                  <Text
                    style={{
                      fontFamily: "poppins",
                      fontSize: 16,
                      color: "#2b3674",
                    }}
                  >
                    Today by 11PM
                  </Text>
                </View>
                <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                  <Text
                    style={{
                      fontFamily: "poppins",
                      fontSize: 20,
                      color: "#2b3674",
                      fontWeight: "bold",
                    }}
                  >
                    Customer Details:
                  </Text>
                  <View
                    style={{ display: "flex", flexDirection: "row", gap: 10 }}
                  >
                    <Text
                      style={{
                        fontFamily: "poppins",
                        fontSize: 16,
                        color: "#2b3674",
                      }}
                    >
                      9860548584
                    </Text>
                    <Iconify icon="ph:phone-light" size={25} color="#2b3674" />
                  </View>
                </View>
                <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                  <Text
                    style={{
                      fontFamily: "poppins",
                      fontSize: 20,
                      color: "#2b3674",
                      fontWeight: "bold",
                    }}
                  >
                    Payment Details:
                  </Text>
                  <View
                    style={{ display: "flex", flexDirection: "row", gap: 10 }}
                  >
                    <Text
                      style={{
                        fontFamily: "poppins",
                        fontSize: 16,
                        color: "#2b3674",
                      }}
                    >
                      Paid
                    </Text>
                    <Iconify icon="icons8:checked" size={25} color="#2b3674" />
                  </View>
                </View>
                <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                  <Text
                    style={{
                      fontFamily: "poppins",
                      fontSize: 20,
                      color: "#2b3674",
                      fontWeight: "bold",
                    }}
                  >
                    Delivery Status:
                  </Text>
                  <Text
                    style={{
                      fontFamily: "poppins",
                      fontSize: 16,
                      color: "#2b3674",
                    }}
                  >
                    Shipped
                  </Text>
                </View>
              </View>
              <View style={{ width: "50%" }}>
                <View style={{ padding: 30 }}>
                  <Text
                    style={{
                      fontFamily: "poppins",
                      fontSize: 25,
                      color: "#2b3674",
                      fontWeight: "bold",
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
                    <View style={{ paddingBottom: 10 }}>
                      <Iconify
                        icon="lucide:package"
                        size={25}
                        color="#2b3674"
                      />
                    </View>
                    <View>
                      <Iconify icon="mynaui:truck" size={25} color="#2b3674" />
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
                        source={require("../assets/images/Line 3.png")}
                      />
                    </View>
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
                        source={require("../assets/images/Line 3.png")}
                      />
                    </View>
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
                        source={require("../assets/images/Line 3.png")}
                      />
                    </View>
                    <View>
                      <Iconify
                        icon="mdi:circle-outline"
                        size={25}
                        color="#2b3674"
                      />
                    </View>
                  </View>
                  <View style={{ gap: 43 }}>
                    <View>
                      <View>
                        <Text
                          style={{
                            fontFamily: "poppins",
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "#2b3674",
                          }}
                        >
                          Order Confirmed
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontFamily: "poppins",
                            fontSize: 16,
                            color: "#2b3674",
                          }}
                        >
                          Your order has been confirmed
                        </Text>
                        <Text
                          style={{
                            fontFamily: "poppins",
                            fontSize: 16,
                            color: "#2b3674",
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
                            fontFamily: "poppins",
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "#2b3674",
                          }}
                        >
                          Collecting Resource
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontFamily: "poppins",
                            fontSize: 16,
                            color: "#2b3674",
                          }}
                        >
                          Picking and packing the
                        </Text>
                        <Text
                          style={{
                            fontFamily: "poppins",
                            fontSize: 16,
                            color: "#2b3674",
                          }}
                        >
                          items from the inventory
                        </Text>
                      </View>
                    </View>
                    <View>
                      <View>
                        <Text
                          style={{
                            fontFamily: "poppins",
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "#2b3674",
                          }}
                        >
                          On The Way
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontFamily: "poppins",
                            fontSize: 16,
                            color: "#2b3674",
                          }}
                        >
                          Package has left the warehouse
                        </Text>
                        <Text
                          style={{
                            fontFamily: "poppins",
                            fontSize: 16,
                            color: "#2b3674",
                          }}
                        >
                          and is en-route to the{" "}
                        </Text>
                        <Text
                          style={{
                            fontFamily: "poppins",
                            fontSize: 16,
                            color: "#2b3674",
                          }}
                        >
                          delivery address
                        </Text>
                      </View>
                    </View>
                    <View>
                      <View>
                        <Text
                          style={{
                            fontFamily: "poppins",
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "#2b3674",
                          }}
                        >
                          Delivery
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontFamily: "poppins",
                            fontSize: 16,
                            color: "#2b3674",
                          }}
                        >
                          Order Delivered
                        </Text>
                        <Text
                          style={{
                            fontFamily: "poppins",
                            fontSize: 16,
                            color: "#2b3674",
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
                      fontFamily: "poppins",
                      fontSize: 25,
                      color: "#2b3674",
                      fontWeight: "bold",
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
                      fontFamily: "poppins",
                      fontSize: 20,
                      color: "#2b3674",
                      fontWeight: "bold",
                    }}
                  >
                    Amount Received:
                  </Text>
                  <Text
                    style={{
                      fontFamily: "poppins",
                      fontSize: 23,
                      color: "#2b3674",
                      fontWeight: "bold",
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
                        fontFamily: "poppins",
                        fontSize: 20,
                        color: "#2b3674",
                        fontWeight: "bold",
                      }}
                    >
                      Transaction ID:
                    </Text>
                    <Text
                      style={{
                        fontFamily: "poppins",
                        fontSize: 16,
                        color: "#2b3674",
                        fontWeight: "500",
                      }}
                    >
                      9B7456123321
                    </Text>
                  </View>
                  <View style={{ gap: 5 }}>
                    <Text
                      style={{
                        fontFamily: "poppins",
                        fontSize: 20,
                        color: "#2b3674",
                        fontWeight: "bold",
                      }}
                    >
                      From:
                    </Text>
                    <Text
                      style={{
                        fontFamily: "poppins",
                        fontSize: 16,
                        color: "#2b3674",
                        fontWeight: "500",
                      }}
                    >
                      ROBERT ( State Bank of India )
                    </Text>
                    <Text
                      style={{
                        fontFamily: "poppins",
                        fontSize: 16,
                        color: "#2b3674",
                        fontWeight: "500",
                      }}
                    >
                      abscd@oksbi
                    </Text>
                  </View>
                  <View style={{ gap: 5 }}>
                    <Text
                      style={{
                        fontFamily: "poppins",
                        fontSize: 20,
                        color: "#2b3674",
                        fontWeight: "bold",
                      }}
                    >
                      To:
                    </Text>

                    <View>
                      <Text
                        style={{
                          fontFamily: "poppins",
                          fontSize: 16,
                          color: "#2b3674",
                          fontWeight: "500",
                        }}
                      >
                        ThanniCan
                      </Text>
                      <Text
                        style={{
                          fontFamily: "poppins",
                          fontSize: 16,
                          color: "#2b3674",
                          fontWeight: "500",
                        }}
                      >
                        gpay@okaxis
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