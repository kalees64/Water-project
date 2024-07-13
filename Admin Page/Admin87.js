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
              backgroundColor: "white",
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
                  Payments
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "#2B3674",
                    fontFamily: "poppins",
                  }}
                >
                  Refund/Re-imbusrement
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
          <ScrollView>
            <View>
              <Text
                style={{
                  color: "#2B3674",
                  fontSize: 30,
                  fontWeight: "bold",
                  paddingLeft: 20,
                  fontFamily: "poppins",
                  paddingTop: 20,
                }}
              >
                Admin Profile
              </Text>
            </View>
            <View>
              <View style={{ padding: 50, paddingLeft: 230 }}>
                <Image
                  source={require("../assets/images/photo.png")}
                  style={{ borderRadius: 50, width: 200, height: 200 }}
                ></Image>
                <Text
                  style={{
                    color: "#2B3674",
                    fontSize: 20,
                    fontWeight: "bold",
                    paddingTop: 20,
                    paddingLeft: 30,
                    fontFamily: "poppins",
                  }}
                >
                  Admin_Name
                </Text>
                <Text
                  style={{
                    color: "#2B3674",
                    fontSize: 20,
                    fontWeight: "bold",
                    paddingTop: 20,
                    paddingLeft: 0,
                    fontFamily: "poppins",
                  }}
                >
                  Re-imbursement Deadline
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingLeft: 35,
                  paddingTop: 0,
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    color: "#2B3674",
                    fontSize: 20,
                    fontWeight: "bold",

                    fontFamily: "poppins",
                  }}
                >
                  Re-imbursement from the customer has not received yet
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingLeft: 35,
                  paddingTop: 25,
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    color: "#2B3674",
                    fontSize: 20,
                    fontWeight: "bold",

                    fontFamily: "poppins",
                  }}
                >
                  Vender name:
                </Text>
                <Text
                  style={{
                    color: "#2B3674",
                    fontSize: 16,
                    // fontWeight: "bold",
                    paddingTop: 9,
                    fontFamily: "poppins",
                  }}
                >
                  *******
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingLeft: 35,
                  paddingTop: 25,
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    color: "#2B3674",
                    fontSize: 20,
                    fontWeight: "bold",

                    fontFamily: "poppins",
                  }}
                >
                  Re-imbursement Deadline:
                </Text>
                <Text
                  style={{
                    color: "#2B3674",
                    fontSize: 16,
                    // fontWeight: "bold",
                    paddingTop: 9,
                    fontFamily: "poppins",
                  }}
                >
                  **********
                </Text>
              </View>

              {/* <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingLeft: 35,
                  paddingTop: 25,
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    color: "#2B3674",
                    fontSize: 20,
                    fontWeight: "bold",

                    fontFamily: "poppins",
                  }}
                >
                  Mode of payment:
                </Text>
                <Text
                  style={{
                    color: "#2B3674",
                    fontSize: 16,
                    // fontWeight: "bold",
                    paddingTop: 5,
                    fontFamily: "poppins",
                  }}
                >
                  COD/ UPI/ Credit card/ Debit Card
                </Text>
              </View> */}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingLeft: 35,
                  paddingTop: 25,
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    color: "#2B3674",
                    fontSize: 20,
                    fontWeight: "bold",

                    fontFamily: "poppins",
                  }}
                >
                  Payment to be received:
                </Text>
                {/* <Text
                  style={{
                    color: "#2B3674",
                    fontSize: 16,
                    // fontWeight: "bold",
                    paddingTop: 5,
                    fontFamily: "poppins",
                  }}
                >
                  RBT0000000
                </Text> */}
              </View>
              {/* <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingLeft: 35,
                  paddingTop: 25,
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    color: "#2B3674",
                    fontSize: 20,
                    fontWeight: "bold",

                    fontFamily: "poppins",
                  }}
                >
                  Bank name:
                </Text>
                <Text
                  style={{
                    color: "#2B3674",
                    fontSize: 16,
                    // fontWeight: "bold",
                    paddingTop: 5,
                    fontFamily: "poppins",
                  }}
                >
                  Reserve Bank of Tirunelveli
                </Text>
              </View> */}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
