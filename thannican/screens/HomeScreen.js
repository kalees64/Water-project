import React, { useCallback, useContext, useEffect, useState } from "react";
import { SafeAreaView, Text, View, Image, ScrollView } from "react-native";
import Icon8 from "react-native-vector-icons/FontAwesome";
import Icon9 from "react-native-vector-icons/Octicons";
import TopBar from "./TopBar";
import BottomTabBar from "./BottomTabBar";
import DataContext from "../context/DataContext";

const HomeScreen = ({ navigation }) => {
  const {
    setHomeState,
    setShopstate,
    setAccState,
    setCartState,
    getShops,
    shops,
  } = useContext(DataContext);
  const [slideState, setSlideState] = useState(true);

  const slider = () => {
    // console.log(slideState);
    setSlideState(!slideState);
  };

  () => {
    setTimeout(slider, 5000);
  };

  useEffect(() => {
    setHomeState(true);
    setShopstate(false);
    setAccState(false);
    setCartState(false);
    getShops();
  }, []);

  return (
    <SafeAreaView
      style={{ width: "100%", height: "100%", backgroundColor: "white" }}
    >
      <TopBar navigation={navigation} />

      <ScrollView
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          flex: 1,
          marginBottom: 50,
        }}
      >
        {slideState ? (
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              padding: 10,
            }}
          >
            <Image
              source={require("../assets/images/scroll_1.jpeg")}
              style={{ borderRadius: 15, width: "95%", height: 300 }}
            />
            <Text
              style={{
                position: "absolute",
                left: "10%",
                top: "65%",
                width: "50%",
                fontWeight: "500",
              }}
            >
              One small step is all that it takes. Save water. Save our planet.
            </Text>
          </View>
        ) : (
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              padding: 10,
            }}
          >
            <Image
              source={require("../assets/images/background_2.png")}
              style={{ borderRadius: 15, width: "95%", height: 300 }}
            />
            <Text
              style={{
                position: "absolute",
                left: "10%",
                top: "65%",
                width: "30%",
                fontWeight: "500",
              }}
            >
              Life is better with a cold summer drink in hand.
            </Text>
          </View>
        )}

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <Icon9
            name={`${slideState ? "dot-fill" : "dot"}`}
            onPress={() => setSlideState(!slideState)}
            size={30}
          ></Icon9>
          <Icon9
            name={`${slideState ? "dot" : "dot-fill"}`}
            onPress={() => setSlideState(!slideState)}
            size={30}
          ></Icon9>
        </View>

        <View
          style={{ width: "100%", paddingHorizontal: 20, paddingVertical: 5 }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>Top Vendors</Text>
        </View>

        <View
          style={{
            width: "100%",
            padding: 20,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 20,
            justifyContent: "center",
          }}
        >
          {shops.length > 0 ? (
            shops.map((shop) => {
              // console.log(shop);
              return (
                <View
                  key={shop.ShopId}
                  style={{
                    width: "40%",
                    padding: 7,
                    shadowColor: "gray",
                    shadowOffset: { width: 2, height: 4 },
                    shadowOpacity: 0.5,
                    borderRadius: 10,
                    borderColor: "gray",
                    borderWidth: 1,
                    paddingHorizontal: 10,
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                    {shop.ShopName}
                  </Text>
                  {/* <Text style={{ fontSize: 13 }}>Perumal Puram,</Text> */}
                  <Text style={{ fontSize: 13 }}>{shop.ShopAddress}</Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      paddingVertical: 10,
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    {/* {shop.Stars &&
                      [...Array(shop.Stars)].map((_, index) => {
                        return (
                          <Icon8
                            key={index}
                            name="star"
                            size={20}
                            color="orange"
                          ></Icon8>
                        );
                      })} */}
                    <Icon8 name="star" color="#ffb504" size={20}></Icon8>
                    <Text style={{ fontSize: 20 }}>{shop.Stars}</Text>
                    {/* <Icon8 name="star" color="#ffb504" size={20}></Icon8>
                    <Icon8 name="star" color="#ffb504" size={20}></Icon8>
                    <Icon8 name="star" color="#ffb504" size={20}></Icon8>
                    <Icon8
                      name="star-half-full"
                      color="#ffb504"
                      size={20}
                    ></Icon8> */}
                  </View>
                  <View
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        backgroundColor: "#ffb504",
                        padding: 10,
                        borderRadius: 40,
                        shadowColor: "gray",
                        shadowOffset: { width: 2, height: 2 },
                      }}
                      onPress={() =>
                        navigation.navigate("shopview", { data: shop })
                      }
                    >
                      Shop Now
                    </Text>
                  </View>
                </View>
              );
            })
          ) : (
            <View>No Data</View>
          )}

          {/* <View
            style={{
              width: "40%",
              padding: 7,
              shadowColor: "gray",
              shadowOffset: { width: 2, height: 4 },
              shadowOpacity: 0.5,
              borderRadius: 10,
              borderColor: "gray",
              borderWidth: 1,
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>Dwater</Text>
            <Text style={{ fontSize: 13 }}>Perumal Puram,</Text>
            <Text style={{ fontSize: 13 }}>Tirunelveli</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingVertical: 10,
                justifyContent: "center",
              }}
            >
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star-half-full" color="#ffb504" size={20}></Icon8>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  backgroundColor: "#ffb504",
                  padding: 10,
                  borderRadius: 40,
                  shadowColor: "gray",
                  shadowOffset: { width: 2, height: 2 },
                }}
              >
                Shop Now
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "40%",
              padding: 7,
              shadowColor: "gray",
              shadowOffset: { width: 2, height: 4 },
              shadowOpacity: 0.5,
              borderRadius: 10,
              borderColor: "gray",
              borderWidth: 1,
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>Dwater</Text>
            <Text style={{ fontSize: 13 }}>Perumal Puram,</Text>
            <Text style={{ fontSize: 13 }}>Tirunelveli</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingVertical: 10,
                justifyContent: "center",
              }}
            >
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star-half-full" color="#ffb504" size={20}></Icon8>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  backgroundColor: "#ffb504",
                  padding: 10,
                  borderRadius: 40,
                  shadowColor: "gray",
                  shadowOffset: { width: 2, height: 2 },
                }}
              >
                Shop Now
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "40%",
              padding: 7,
              shadowColor: "gray",
              shadowOffset: { width: 2, height: 4 },
              shadowOpacity: 0.5,
              borderRadius: 10,
              borderColor: "gray",
              borderWidth: 1,
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>Dwater</Text>
            <Text style={{ fontSize: 13 }}>Perumal Puram,</Text>
            <Text style={{ fontSize: 13 }}>Tirunelveli</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingVertical: 10,
                justifyContent: "center",
              }}
            >
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star" color="#ffb504" size={20}></Icon8>
              <Icon8 name="star-half-full" color="#ffb504" size={20}></Icon8>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  backgroundColor: "#ffb504",
                  padding: 10,
                  borderRadius: 40,
                  shadowColor: "gray",
                  shadowOffset: { width: 2, height: 2 },
                }}
              >
                Shop Now
              </Text>
            </View>
          </View> */}
        </View>
      </ScrollView>

      <BottomTabBar navigation={navigation} />
    </SafeAreaView>
  );
};

export default HomeScreen;
