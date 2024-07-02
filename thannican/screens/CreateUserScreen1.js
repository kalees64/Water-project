import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Button,
  Alert,
} from "react-native";
import Icon0 from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/EvilIcons";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon4 from "react-native-vector-icons/MaterialIcons";
import Icon5 from "react-native-vector-icons/Entypo";
import DataContext from "../context/DataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CreateUserScreen1 = ({ navigation }) => {
  const {
    userName,
    setUserName,
    userMail,
    setUserMail,
    userPass,
    setUserPass,
    userPhone,
    setUserPhone,
    userAddress,
    setUserAddress,
    userPincode,
    setUserPincode,
    handleRegister,
  } = useContext(DataContext);
  const [passState, setPassState] = useState(true);
  const [passState2, setPassState2] = useState(true);
  const [cp1, setCp1] = useState("");
  const [cp2, setCp2] = useState("");

  const verify = () => {
    if (userName.length === 0) {
      Alert.alert("Enter Name");
    } else if (userMail.length === 0) {
      Alert.alert("Enter Email");
    } else if (cp1.length === 0 && cp2.length === 0) {
      Alert.alert("Enter Password");
    } else if (userPhone.length === 0) {
      Alert.alert("Enter Phone Number");
    } else if (userAddress.length === 0) {
      Alert.alert("Enter Address");
    } else if (userPincode.length === 0) {
      Alert.alert("Enter Pincode");
    } else {
      if (cp1 !== cp2) {
        Alert.alert("Password Mismatch");
      } else {
        setUserPass(cp1);
        const user = {
          UserName: userName,
          UserEmail: userMail,
          UserPhone: userPhone,
          UserAddress: userAddress,
          UserPincode: userPincode,
          Password: userPass,
        };

        handleRegister(user);
        setUserName("");
        setUserMail("");
        setUserPass("");
        setUserAddress("");
        setUserPhone("");
        setUserPincode("");
        setCp1("");
        setCp2("");
        navigation.navigate("home");
      }
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>THANNICAN</Text>
        </View>
        <View style={{ paddingLeft: 20 }}>
          <Text style={{ justifyContent: "flex-start" }}>
            <Icon1
              name="arrow-left"
              size={45}
              color="black"
              onPress={() => navigation.goBack()}
            />
          </Text>
        </View>
        <View
          style={{ padding: 20, width: "100%", paddingBottom: 30, gap: 20 }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            Create Account
          </Text>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "white",
              padding: 5,
              borderRadius: 10,
              borderColor: "gray",
              borderWidth: 1,
              shadowColor: "gray",
              shadowOffset: { width: 2, height: 4 },
            }}
          >
            <Icon0
              name="person"
              size={40}
              color="black"
              style={{ width: "20%" }}
            ></Icon0>
            <TextInput
              placeholder="Enter Your Name"
              style={{ width: "80%", padding: 10, fontSize: 20 }}
              inputMode="text"
              value={userName}
              onChangeText={setUserName}
            />
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "white",
              padding: 5,
              borderRadius: 10,
              borderColor: "gray",
              borderWidth: 1,
              shadowColor: "gray",
              shadowOffset: { width: 2, height: 4 },
            }}
          >
            <Icon
              name="mail"
              size={40}
              color="black"
              style={{ width: "20%" }}
            ></Icon>
            <TextInput
              placeholder="Enter Your Email"
              style={{ width: "80%", padding: 10, fontSize: 20 }}
              inputMode="email"
              value={userMail}
              onChangeText={setUserMail}
            />
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "white",
              padding: 5,
              borderRadius: 10,
              borderColor: "gray",
              borderWidth: 1,
              shadowColor: "gray",
              shadowOffset: { width: 2, height: 4 },
            }}
          >
            <Icon2
              name={`${passState ? "eye-off" : "eye"}`}
              size={40}
              color="black"
              style={{ width: "20%" }}
              onPress={() => setPassState(!passState)}
            ></Icon2>
            <TextInput
              placeholder="Create Password"
              style={{ width: "80%", padding: 10, fontSize: 20 }}
              secureTextEntry={passState}
              value={cp1}
              onChangeText={setCp1}
            />
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "white",
              padding: 5,
              borderRadius: 10,
              borderColor: "gray",
              borderWidth: 1,
              shadowColor: "gray",
              shadowOffset: { width: 2, height: 4 },
            }}
          >
            <Icon2
              name={`${passState2 ? "eye-off" : "eye"}`}
              size={40}
              color="black"
              style={{ width: "20%" }}
              onPress={() => setPassState2(!passState2)}
            ></Icon2>
            <TextInput
              placeholder="Confirm Password"
              style={{ width: "80%", padding: 10, fontSize: 20 }}
              secureTextEntry={passState2}
              value={cp2}
              onChangeText={setCp2}
            />
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "white",
              padding: 5,
              borderRadius: 10,
              borderColor: "gray",
              borderWidth: 1,
              shadowColor: "gray",
              shadowOffset: { width: 2, height: 4 },
            }}
          >
            <Icon3
              name="phone-dial"
              size={40}
              color="black"
              style={{ width: "20%" }}
            ></Icon3>
            <TextInput
              placeholder="Enter Your Mobile Number"
              style={{ width: "80%", padding: 10, fontSize: 20 }}
              inputMode="tel"
              value={userPhone}
              onChangeText={setUserPhone}
            />
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "white",
              padding: 5,
              borderRadius: 10,
              borderColor: "gray",
              borderWidth: 1,
              shadowColor: "gray",
              shadowOffset: { width: 2, height: 4 },
            }}
          >
            <Icon4
              name="my-location"
              size={40}
              color="black"
              style={{ width: "20%" }}
            ></Icon4>
            <TextInput
              placeholder="Enter Your Address"
              style={{ width: "80%", padding: 10, fontSize: 20 }}
              inputMode="text"
              value={userAddress}
              onChangeText={setUserAddress}
            />
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "white",
              padding: 5,
              borderRadius: 10,
              borderColor: "gray",
              borderWidth: 1,
              shadowColor: "gray",
              shadowOffset: { width: 2, height: 4 },
            }}
          >
            <Icon5
              name="hair-cross"
              size={40}
              color="black"
              style={{ width: "20%" }}
            ></Icon5>
            <TextInput
              placeholder="Enter Your Pincode"
              style={{ width: "80%", padding: 10, fontSize: 20 }}
              inputMode="text"
              value={userPincode}
              onChangeText={setUserPincode}
            />
          </View>
        </View>

        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              backgroundColor: "#3fbdf1",
              paddingVertical: 15,
              paddingHorizontal: 100,
              fontSize: 18,
              fontWeight: "bold",
              color: "white",
              borderRadius: 10,
            }}
            onPress={verify}
          >
            Submit
          </Text>

          <Text>
            Already you have an account?{" "}
            <Text
              style={{ fontWeight: "bold" }}
              onPress={() => navigation.navigate("signin")}
            >
              Sign in
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "blue",
    width: "100%",
    height: "100%",
  },
});

export default CreateUserScreen1;
