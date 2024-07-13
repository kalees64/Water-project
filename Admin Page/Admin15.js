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
              paddingHorizontal: 30,
              paddingVertical: 25,
            }}
          >
            {/* <View style={{ paddingTop: 10, paddingRight: 10 }}>
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
            </View> */}
            {/* <View>
              <Text
                style={{
                  fontSize: 45,
                  fontWeight: "bold",
                  color: "#2B3674",
                  fontFamily: "poppins",
                }}
              >
                Manage Vendors
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#2B3674",
                  fontFamily: "poppins",
                }}
              >
                Manage Vendors
              </Text>
            </View> */}
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
                  Manage Vendors
                </Text>
                <Text
                  style={{
                    fontFamily: "poppins",
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "#2B3674",
                  }}
                >
                  Manage Users/ Vendor Profile
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
                  source={require("../assets/images/Elipse 5.png")}
                  style={{ borderRadius: 50 }}
                ></Image>
              </View>
            </View>
          </View>
          {/* <Text style={{ color: "white", backgroundColor: "red" }}>gsdfau</Text> */}
          <ScrollView>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  //   display: "flex",
                  //   flexDirection: "row",
                  width: "50%",
                  //   backgroundColor: "red",
                }}
              >
                <Text
                  style={{
                    fontSize: 45,
                    fontWeight: "bold",
                    color: "#2B3674",
                    paddingTop: 20,
                    paddingLeft: 80,
                    fontFamily: "poppins",
                  }}
                >
                  Vendor profile
                </Text>
                <View style={{ paddingHorizontal: 50, paddingVertical: 20 }}>
                  <View
                    style={{
                      backgroundColor: "#E2E3E6",
                      borderRadius: 10,
                      paddingHorizontal: 50,
                      paddingVertical: 20,
                    }}
                  >
                    <View
                      style={{
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        source={require("../assets/images/photo.png")}
                        style={{
                          borderRadius: 50,
                        }}
                      ></Image>
                    </View>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#2B3674",
                        textAlign: "center",
                        fontFamily: "poppins",
                      }}
                    >
                      Vendor ID: ab66541
                    </Text>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        //   justifyContent: "space-between"
                        gap: 70,
                      }}
                    >
                      <View style={{ paddingLeft: 130 }}>
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "#2B3674",
                            paddingTop: 20,
                            paddingBottom: 20,
                            fontFamily: "poppins",
                          }}
                        >
                          Name: Robert
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "#2B3674",
                            paddingBottom: 5,
                            fontFamily: "poppins",
                          }}
                        >
                          Shop Address:
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          2/E Samathanapuram
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Tirunelveli,
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Tamilnadu - 600 005
                        </Text>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            paddingVertical: 10,
                          }}
                        >
                          <Iconify
                            icon="mage:phone-fill"
                            size={25}
                            color="#2B3674"
                            //   style={{ paddingTop: 20 }}
                          />
                          <Text
                            style={{
                              fontSize: 16,
                              color: "#2B3674",
                              fontFamily: "poppins",
                            }}
                          >
                            9877178546
                          </Text>
                        </View>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            paddingBottom: 10,
                          }}
                        >
                          <Iconify
                            icon="fluent:mail-32-filled"
                            size={25}
                            color="#2B3674"
                            //   style={{ paddingTop: 20 }}
                          />
                          <Text
                            style={{
                              fontSize: 16,
                              color: "#2B3674",
                              fontFamily: "poppins",
                            }}
                          >
                            aaa@gmail.com
                          </Text>
                        </View>
                      </View>
                      <View style={{}}>
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "#2B3674",
                            paddingTop: 20,
                            paddingBottom: 20,
                            fontFamily: "poppins",
                          }}
                        >
                          Shop Name: Dwater
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Included Items:
                        </Text>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                          <Iconify
                            icon="mingcute:bottle-line"
                            size={25}
                            color="#2B3674"
                            //   style={{ paddingTop: 20 }}
                          />
                          <Text
                            style={{
                              fontSize: 16,
                              color: "#2B3674",
                              fontFamily: "poppins",
                            }}
                          >
                            10L, 20L, Can, Pump
                          </Text>
                        </View>
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "#2B3674",
                            paddingTop: 20,
                            fontFamily: "poppins",
                          }}
                        >
                          Business Documents:
                        </Text>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 75,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 16,
                              color: "#2B3674",
                              fontFamily: "poppins",
                            }}
                          >
                            Municipal.pdf
                          </Text>
                          <Iconify
                            icon="fluent-mdl2:full-view"
                            size={25}
                            color="#2B3674"
                            //   style={{ paddingTop: 20 }}
                          />
                        </View>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            paddingTop: 15,
                          }}
                        >
                          <Iconify
                            icon="arcticons:maadhaar"
                            size={25}
                            color="#2B3674"
                            //   style={{ paddingTop: 20 }}
                          />
                          <Text
                            style={{
                              fontSize: 16,
                              color: "#2B3674",
                              fontFamily: "poppins",
                            }}
                          >
                            9874 5464 1235
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        gap: 30,
                        paddingTop: 7,
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
                          gap: 10,
                        }}
                      >
                        <Iconify
                          icon="ic:sharp-block"
                          size={25}
                          color="white"
                        />
                        <Text style={{ color: "white", fontFamily: "poppins" }}>
                          Block Vendor
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
                          gap: 10,
                        }}
                      >
                        <Iconify
                          icon="tabler:message"
                          size={25}
                          color="white"
                        />
                        <Text style={{ color: "white", fontFamily: "poppins" }}>
                          Notify Vendor
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: 35,
                    fontWeight: "bold",
                    color: "#2B3674",
                    paddingLeft: 60,
                    fontFamily: "poppins",
                  }}
                >
                  Ratings & Reviews:
                </Text>
                <View
                  style={{
                    paddingTop: 10,
                    gap: 20,
                    paddingRight: 80,
                    paddingLeft: 80,
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      backgroundColor: "#e2e3e6",
                      padding: 15,

                      borderRadius: 10,
                      shadowColor: "#aeaeae",
                      shadowOffset: { width: 2, height: 4 },
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingVertical: 20,
                      height: 287,
                    }}
                  >
                    <View style={{ width: "20%", alignItems: "center" }}>
                      <Image
                        source={require("../assets/images/10 litre.png")}
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
                            fontSize: 20,
                            fontFamily: "poppins",
                          }}
                        >
                          By:
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            color: "#2b3674",
                            fontSize: 20,
                            fontFamily: "poppins",
                          }}
                        >
                          Ratings:
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            color: "#2b3674",
                            fontSize: 20,
                            fontFamily: "poppins",
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
                          style={{
                            color: "#2b3674",
                            fontSize: 16,
                            fontFamily: "poppins",
                          }}
                        >
                          Customer Name
                        </Text>
                        <Text>
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
                            color="#ffb504"
                          />
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
                            color="#ffb504"
                          />
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
                            color="#ffb504"
                          />
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
                            color="#ffb504"
                          />
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
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
                            icon="mingcute:bottle-line"
                            size={30}
                            color="#2b3674"
                          />
                          <Text
                            style={{
                              fontSize: 16,
                              fontFamily: "poppins",
                              color: "#2b3674",
                            }}
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
                            fontSize: 20,
                            fontFamily: "poppins",
                          }}
                        >
                          Review:
                        </Text>
                        <Text
                          style={{
                            color: "#2b3674",
                            padding: 10,
                            fontSize: 16,
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
                          fontSize: 18,
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

                      borderRadius: 10,
                      shadowColor: "#aeaeae",
                      shadowOffset: { width: 2, height: 4 },
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingVertical: 20,
                      height: 287,
                    }}
                  >
                    <View style={{ width: "20%", alignItems: "center" }}>
                      <Image
                        source={require("../assets/images/10 litre.png")}
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
                            fontSize: 20,
                            fontFamily: "poppins",
                          }}
                        >
                          By:
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            color: "#2b3674",
                            fontSize: 20,
                            fontFamily: "poppins",
                          }}
                        >
                          Ratings:
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            color: "#2b3674",
                            fontSize: 20,
                            fontFamily: "poppins",
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
                          style={{
                            color: "#2b3674",
                            fontSize: 16,
                            fontFamily: "poppins",
                          }}
                        >
                          Customer Name
                        </Text>
                        <Text>
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
                            color="#ffb504"
                          />
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
                            color="#ffb504"
                          />
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
                            color="#ffb504"
                          />
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
                            color="#ffb504"
                          />
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
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
                            icon="mingcute:bottle-line"
                            size={30}
                            color="#2b3674"
                          />
                          <Text
                            style={{
                              fontSize: 16,
                              fontFamily: "poppins",
                              color: "#2b3674",
                            }}
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
                            fontSize: 20,
                            fontFamily: "poppins",
                          }}
                        >
                          Review:
                        </Text>
                        <Text
                          style={{
                            color: "#2b3674",
                            padding: 10,
                            fontSize: 16,
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
                          fontSize: 18,
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

                      borderRadius: 10,
                      shadowColor: "#aeaeae",
                      shadowOffset: { width: 2, height: 4 },
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingVertical: 20,
                      height: 287,
                    }}
                  >
                    <View style={{ width: "20%", alignItems: "center" }}>
                      <Image
                        source={require("../assets/images/10 litre.png")}
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
                            fontSize: 20,
                            fontFamily: "poppins",
                          }}
                        >
                          By:
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            color: "#2b3674",
                            fontSize: 20,
                            fontFamily: "poppins",
                          }}
                        >
                          Ratings:
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            color: "#2b3674",
                            fontSize: 20,
                            fontFamily: "poppins",
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
                          style={{
                            color: "#2b3674",
                            fontSize: 16,
                            fontFamily: "poppins",
                          }}
                        >
                          Customer Name
                        </Text>
                        <Text>
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
                            color="#ffb504"
                          />
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
                            color="#ffb504"
                          />
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
                            color="#ffb504"
                          />
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
                            color="#ffb504"
                          />
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
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
                            icon="mingcute:bottle-line"
                            size={30}
                            color="#2b3674"
                          />
                          <Text
                            style={{
                              fontSize: 16,
                              fontFamily: "poppins",
                              color: "#2b3674",
                            }}
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
                            fontSize: 20,
                            fontFamily: "poppins",
                          }}
                        >
                          Review:
                        </Text>
                        <Text
                          style={{
                            color: "#2b3674",
                            padding: 10,
                            fontSize: 16,
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
                          fontSize: 18,
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

                      borderRadius: 10,
                      shadowColor: "#aeaeae",
                      shadowOffset: { width: 2, height: 4 },
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingVertical: 20,
                      height: 287,
                    }}
                  >
                    <View style={{ width: "20%", alignItems: "center" }}>
                      <Image
                        source={require("../assets/images/10 litre.png")}
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
                            fontSize: 20,
                            fontFamily: "poppins",
                          }}
                        >
                          By:
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            color: "#2b3674",
                            fontSize: 20,
                            fontFamily: "poppins",
                          }}
                        >
                          Ratings:
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            color: "#2b3674",
                            fontSize: 20,
                            fontFamily: "poppins",
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
                          style={{
                            color: "#2b3674",
                            fontSize: 16,
                            fontFamily: "poppins",
                          }}
                        >
                          Customer Name
                        </Text>
                        <Text>
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
                            color="#ffb504"
                          />
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
                            color="#ffb504"
                          />
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
                            color="#ffb504"
                          />
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
                            color="#ffb504"
                          />
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
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
                            icon="mingcute:bottle-line"
                            size={30}
                            color="#2b3674"
                          />
                          <Text
                            style={{
                              fontSize: 16,
                              fontFamily: "poppins",
                              color: "#2b3674",
                            }}
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
                            fontSize: 20,
                          }}
                        >
                          Review:
                        </Text>
                        <Text
                          style={{
                            color: "#2b3674",
                            padding: 10,
                            fontSize: 16,
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
                          fontSize: 18,
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
                      paddingVertical: 20,
                      height: 287,
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
                        source={require("../assets/images/10 litre.png")}
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
                            fontSize: 20,
                            fontFamily: "poppins",
                          }}
                        >
                          By:
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            color: "#2b3674",
                            fontSize: 20,
                            fontFamily: "poppins",
                          }}
                        >
                          Ratings:
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            color: "#2b3674",
                            fontSize: 20,
                            fontFamily: "poppins",
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
                          style={{
                            color: "#2b3674",
                            fontSize: 16,
                            fontFamily: "poppins",
                          }}
                        >
                          Customer Name
                        </Text>
                        <Text>
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
                            color="#ffb504"
                          />
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
                            color="#ffb504"
                          />
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
                            color="#ffb504"
                          />
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
                            color="#ffb504"
                          />
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
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
                            icon="mingcute:bottle-line"
                            size={30}
                            color="#2b3674"
                          />
                          <Text
                            style={{
                              fontSize: 16,
                              fontFamily: "poppins",
                              color: "#2b3674",
                              fontWeight: "bold",
                            }}
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
                            fontSize: 20,
                            fontFamily: "poppins",
                          }}
                        >
                          Review:
                        </Text>
                        <Text
                          style={{
                            color: "#2b3674",
                            padding: 20,
                            fontSize: 16,
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
                          fontSize: 18,
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

                      borderRadius: 10,
                      shadowColor: "#aeaeae",
                      shadowOffset: { width: 2, height: 4 },
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingVertical: 20,
                      height: 287,
                    }}
                  >
                    <View style={{ width: "20%", alignItems: "center" }}>
                      <Image
                        source={require("../assets/images/10 litre.png")}
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
                            fontSize: 20,
                            fontFamily: "poppins",
                          }}
                        >
                          By:
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            color: "#2b3674",
                            fontSize: 20,
                            fontFamily: "poppins",
                          }}
                        >
                          Ratings:
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            color: "#2b3674",
                            fontSize: 20,
                            fontFamily: "poppins",
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
                          style={{
                            color: "#2b3674",
                            fontSize: 16,
                            fontFamily: "poppins",
                          }}
                        >
                          Customer Name
                        </Text>
                        <Text>
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
                            color="#ffb504"
                          />
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
                            color="#ffb504"
                          />
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
                            color="#ffb504"
                          />
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
                            color="#ffb504"
                          />
                          <Iconify
                            icon="ant-design:star-filled"
                            size={30}
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
                            icon="mingcute:bottle-line"
                            size={30}
                            color="#2b3674"
                          />
                          <Text
                            style={{
                              fontSize: 16,
                              color: "#2b3674",
                              fontWeight: "bold",
                            }}
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
                            fontSize: 20,
                            fontFamily: "poppins",
                          }}
                        >
                          Review:
                        </Text>
                        <Text
                          style={{
                            color: "#2b3674",
                            padding: 10,
                            fontSize: 16,
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
                          fontSize: 18,
                        }}
                      >
                        Remove
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ width: "50%", padding: 50, paddingTop: 100 }}>
                <View
                  style={{
                    backgroundColor: "#E2E3E6",
                    padding: 50,
                    borderRadius: 10,
                    paddingTop: 30,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 35,
                      fontWeight: "bold",
                      color: "#2B3674",
                      fontFamily: "poppins",
                    }}
                  >
                    Bank Details:
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      paddingTop: 20,
                      paddingBottom: 10,
                    }}
                  >
                    <Iconify
                      icon="icons8:checked"
                      size={25}
                      color="#2B3674"
                      style={{}}
                    />
                    <View style={{ gap: 2, paddingLeft: 15 }}>
                      <Text
                        style={{
                          fontSize: 20,
                          //   fontWeight: "bold",
                          color: "#2B3674",
                          fontFamily: "poppins",
                        }}
                      >
                        Robert
                      </Text>
                      <Text
                        style={{
                          fontSize: 20,
                          //   fontWeight: "bold",
                          color: "#2B3674",
                          fontFamily: "poppins",
                        }}
                      >
                        State Bank of India
                      </Text>
                      <Text
                        style={{
                          fontSize: 20,
                          //   fontWeight: "bold",
                          color: "#2B3674",
                          fontFamily: "poppins",
                        }}
                      >
                        Acc no: 928484242
                      </Text>
                      <Text
                        style={{
                          fontSize: 20,
                          //   fontWeight: "bold",
                          color: "#2B3674",
                          fontFamily: "poppins",
                        }}
                      >
                        IFSC Code: 819841841771
                      </Text>
                    </View>
                  </View>

                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Iconify
                      icon="icons8:checked"
                      size={25}
                      color="#2B3674"
                      style={{}}
                    />
                    <View style={{ gap: 2, paddingLeft: 15 }}>
                      <Text
                        style={{
                          fontSize: 20,
                          //   fontWeight: "bold",
                          color: "#2B3674",
                          fontFamily: "poppins",
                        }}
                      >
                        Robert
                      </Text>
                      <Text
                        style={{
                          fontSize: 20,
                          //   fontWeight: "bold",
                          color: "#2B3674",
                          fontFamily: "poppins",
                        }}
                      >
                        Tamilnadu Mercantile Bank
                      </Text>
                      <Text
                        style={{
                          fontSize: 20,
                          //   fontWeight: "bold",
                          color: "#2B3674",
                          fontFamily: "poppins",
                        }}
                      >
                        Acc no: 928484242
                      </Text>
                      <Text
                        style={{
                          fontSize: 20,
                          //   fontWeight: "bold",
                          color: "#2B3674",
                          fontFamily: "poppins",
                        }}
                      >
                        IFSC Code: 819841841771
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{ paddingTop: 20 }}>
                  <View
                    style={{
                      backgroundColor: "#E2E3E6",
                      padding: 50,
                      borderRadius: 10,
                      paddingTop: 30,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 35,
                        fontWeight: "bold",
                        color: "#2B3674",
                        fontFamily: "poppins",
                      }}
                    >
                      Stocks Details:
                    </Text>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 120,
                        paddingLeft: 50,
                      }}
                    >
                      <View style={{ gap: 30 }}>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          5L water Can
                        </Text>{" "}
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          10L water Can
                        </Text>{" "}
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          20L water Can
                        </Text>{" "}
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Dispenser Can
                        </Text>{" "}
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Dispenser Pump
                        </Text>
                      </View>
                      <View style={{ gap: 30 }}>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Out of Stocks
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          1000L
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          1000L
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          50
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          50
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: 35,
                    fontWeight: "bold",
                    color: "#2B3674",
                    paddingLeft: 20,
                    paddingTop: 25,
                    fontFamily: "poppins",
                  }}
                >
                  Earnings Summary:
                </Text>
                <View style={{ gap: 20, paddingTop: 30, paddingLeft: 40 }}>
                  <View
                    style={{
                      backgroundColor: "#E2E3E6",
                      paddingVertical: 50,
                      borderRadius: 10,
                      paddingTop: 30,
                      paddingLeft: 20,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        //   fontWeight: "bold",
                        color: "#2B3674",
                        fontFamily: "poppins",
                      }}
                    >
                      Current Week 25 June
                    </Text>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 120,
                        paddingTop: 30,
                      }}
                    >
                      <View style={{ gap: 20 }}>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Total Earnings:
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Cash Collected:
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Balance:
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Excess Amount:
                        </Text>
                      </View>
                      <View style={{ gap: 20 }}>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          ₹ 1150
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          ₹ 150
                        </Text>{" "}
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          ₹ 1000
                        </Text>{" "}
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          ₹ 0
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          The balance amount
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          should be sent by
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Tuesday, on or before 10
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          AM
                        </Text>
                        <View
                          style={{
                            width: "50%",
                            paddingTop: 40,
                            paddingLeft: 60,
                          }}
                        >
                          <Text
                            style={{
                              color: "white",
                              backgroundColor: "#2b3674",
                              width: 170,
                              padding: 10,
                              borderRadius: 10,
                              textAlign: "center",
                              paddingHorizontal: 30,
                              fontFamily: "poppins",
                              fontSize: 18,
                            }}
                          >
                            See Details
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#E2E3E6",
                      paddingVertical: 50,
                      borderRadius: 10,
                      paddingTop: 30,
                      paddingLeft: 20,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        //   fontWeight: "bold",
                        color: "#2B3674",
                        fontFamily: "poppins",
                      }}
                    >
                      Last week 18 June
                    </Text>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 120,
                        paddingTop: 30,
                      }}
                    >
                      <View style={{ gap: 20 }}>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Total Earnings:
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Cash Collected:
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Balance:
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Excess Amount:
                        </Text>
                      </View>
                      <View style={{ gap: 20 }}>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          ₹ 1150
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          ₹ 150
                        </Text>{" "}
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          ₹ 1000
                        </Text>{" "}
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          ₹ 0
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Balance amount sent
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          successfully
                        </Text>

                        <View
                          style={{
                            width: "50%",
                            paddingTop: 40,
                            paddingLeft: 60,
                          }}
                        >
                          <Text
                            style={{
                              color: "white",
                              backgroundColor: "#2b3674",
                              width: 170,
                              padding: 10,
                              borderRadius: 10,
                              textAlign: "center",
                              paddingHorizontal: 30,
                              fontFamily: "poppins",
                              fontSize: 18,
                            }}
                          >
                            See Details
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      backgroundColor: "#E2E3E6",
                      paddingVertical: 50,
                      borderRadius: 10,
                      paddingTop: 30,
                      paddingLeft: 20,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        //   fontWeight: "bold",
                        color: "#2B3674",
                        fontFamily: "poppins",
                      }}
                    >
                      Current Week 25 June
                    </Text>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 120,
                        paddingTop: 30,
                      }}
                    >
                      <View style={{ gap: 20 }}>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Total Earnings:
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Cash Collected:
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Balance:
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Excess Amount:
                        </Text>
                      </View>
                      <View style={{ gap: 20 }}>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          ₹ 1150
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          ₹ 150
                        </Text>{" "}
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          ₹ 1000
                        </Text>{" "}
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          ₹ 0
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          The vendor sent the
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          excess amount on
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Tuesday, on or before 10
                        </Text>{" "}
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          AM
                        </Text>
                        <View
                          style={{
                            width: "50%",
                            paddingTop: 40,
                            paddingLeft: 60,
                          }}
                        >
                          <Text
                            style={{
                              color: "white",
                              backgroundColor: "#2b3674",
                              width: 170,
                              padding: 10,
                              borderRadius: 10,
                              textAlign: "center",
                              paddingHorizontal: 30,
                              fontFamily: "poppins",
                              fontSize: 18,
                            }}
                          >
                            See Details
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#E2E3E6",
                      paddingVertical: 50,
                      borderRadius: 10,
                      paddingTop: 30,
                      paddingLeft: 20,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        //   fontWeight: "bold",
                        color: "#2B3674",
                        fontFamily: "poppins",
                      }}
                    >
                      Last week 18June
                    </Text>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 120,
                        paddingTop: 30,
                      }}
                    >
                      <View style={{ gap: 20 }}>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Total Earnings:
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Cash Collected:
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Balance:
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Excess Amount:
                        </Text>
                      </View>
                      <View style={{ gap: 20 }}>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          ₹ 1150
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          ₹ 150
                        </Text>{" "}
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          ₹ 1000
                        </Text>{" "}
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          ₹ 0
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Excess amount received
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          successfully
                        </Text>

                        <View
                          style={{
                            width: "50%",
                            paddingTop: 40,
                            paddingLeft: 60,
                          }}
                        >
                          <Text
                            style={{
                              color: "white",
                              backgroundColor: "#2b3674",
                              width: 170,
                              padding: 10,
                              borderRadius: 10,
                              textAlign: "center",
                              paddingHorizontal: 30,
                              fontFamily: "poppins",
                              fontSize: 18,
                            }}
                          >
                            See Details
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      backgroundColor: "#E2E3E6",
                      paddingVertical: 50,
                      borderRadius: 10,
                      paddingTop: 30,
                      paddingLeft: 20,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        //   fontWeight: "bold",
                        color: "#2B3674",
                        fontFamily: "poppins",
                      }}
                    >
                      11 June
                    </Text>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 120,
                        paddingTop: 30,
                      }}
                    >
                      <View style={{ gap: 20 }}>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Total Earnings:
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Cash Collected:
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Balance:
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Excess Amount:
                        </Text>
                      </View>
                      <View style={{ gap: 20 }}>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          ₹ 1150
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          ₹ 150
                        </Text>{" "}
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          ₹ 1000
                        </Text>{" "}
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          ₹ 0
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          Excess amount can not
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            //   fontWeight: "bold",
                            color: "#2B3674",
                            fontFamily: "poppins",
                          }}
                        >
                          received. Notify Vendor
                        </Text>

                        <View
                          style={{
                            width: "50%",
                            paddingTop: 40,
                            paddingLeft: 60,
                          }}
                        >
                          <Text
                            style={{
                              color: "white",
                              backgroundColor: "#2b3674",
                              width: 170,
                              padding: 10,
                              borderRadius: 10,
                              textAlign: "center",
                              paddingHorizontal: 30,
                              fontFamily: "poppins",
                              fontSize: 18,
                            }}
                          >
                            See Details
                          </Text>
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
