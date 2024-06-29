import React, { useContext } from "react";
import { Text, View } from "react-native";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import Icon4 from "react-native-vector-icons/Entypo";
import Icon5 from "react-native-vector-icons/Fontisto";
import Icon6 from "react-native-vector-icons/Octicons";
import Icon7 from "react-native-vector-icons/AntDesign";
import DataContext from "../context/DataContext";

const BottomTabBar = ({ navigation }) => {
  const {
    homeState,
    setHomeState,
    shopState,
    setShopstate,
    accState,
    setAccState,
    cartState,
    setCartState,
  } = useContext(DataContext);
  return (
    <View
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        bottom: 0,
        backgroundColor: "#3fbdf1",
        padding: 5,
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon3
          name="home"
          size={30}
          color={`${homeState ? "white" : "black"}`}
          onPress={() => {
            setHomeState(true);
            setShopstate(false);
            setAccState(false);
            setCartState(false);
            navigation.navigate("home");
          }}
        ></Icon3>
        <Text style={{ color: homeState ? "white" : "black" }}>Home</Text>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon4
          name="shop"
          size={30}
          color={`${shopState ? "white" : "black"}`}
          onPress={() => {
            setHomeState(false);
            setShopstate(true);
            setAccState(false);
            setCartState(false);
            navigation.navigate("shops");
          }}
        ></Icon4>
        <Text style={{ color: shopState ? "white" : "black" }}>Shop</Text>
      </View>
      <Icon5
        name="nav-icon-grid-a"
        size={16}
        color="white"
        style={{ backgroundColor: "black", padding: 10, borderRadius: 50 }}
      ></Icon5>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon6
          name="person"
          size={30}
          color={`${accState ? "white" : "black"}`}
          onPress={() => {
            setHomeState(false);
            setShopstate(false);
            setAccState(true);
            setCartState(false);
            navigation.navigate("signin");
          }}
        ></Icon6>
        <Text style={{ color: accState ? "white" : "black" }}>Account</Text>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon7
          name="shoppingcart"
          size={30}
          color={`${cartState ? "white" : "black"}`}
          onPress={() => {
            setHomeState(false);
            setShopstate(false);
            setAccState(false);
            setCartState(true);
            navigation.navigate("cart");
          }}
        ></Icon7>
        <Text style={{ color: cartState ? "white" : "black" }}>Cart</Text>
      </View>
    </View>
  );
};

export default BottomTabBar;
