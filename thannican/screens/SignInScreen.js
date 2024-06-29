import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/EvilIcons";
import DataContext from "../context/DataContext";

const SignInScreen = ({ navigation }) => {
  const { email, setEmail, password, setPassword, handleLogin } =
    useContext(DataContext);

  const [passState, setPassState] = useState(true);
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
        <View style={{ padding: 20, width: "100%", paddingBottom: 30 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold",
              paddingBottom: 30,
            }}
          >
            Sign In
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
              value={email}
              onChangeText={setEmail}
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
              marginTop: 30,
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
              placeholder="Enter Your Password"
              style={{ width: "80%", padding: 10, fontSize: 20 }}
              secureTextEntry={passState}
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>
        <View
          style={{ width: "100%", paddingHorizontal: 40, paddingBottom: 180 }}
        >
          <Text
            style={{ textAlign: "right", fontWeight: "bold" }}
            onPress={() => navigation.navigate("forgotPass")}
          >
            Forget Password?
          </Text>
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
            onPress={() => {
              handleLogin();
            }}
          >
            Submit
          </Text>

          <Text>
            Don't have an account?{" "}
            <Text
              style={{ fontWeight: "bold" }}
              onPress={() => navigation.navigate("createAcc")}
            >
              Sign up
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

export default SignInScreen;
