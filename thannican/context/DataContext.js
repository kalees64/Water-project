import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { createContext, useState } from "react";
import { Alert } from "react-native";
import auth, { db } from "../services/FireBaseAuth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  // Bottom Tab Color Change States
  const [homeState, setHomeState] = useState(true);
  const [shopState, setShopstate] = useState(false);
  const [accState, setAccState] = useState(false);
  const [cartState, setCartState] = useState(false);

  // Login Form Details
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Login Function
  const handleLogin = () => {
    if (email.length === 0) {
      Alert.alert("Enter Email");
    } else if (password.length === 0) {
      Alert.alert("Enter Password");
    } else {
      console.log(email);
      console.log(password);
      setEmail("");
      setPassword("");
    }
  };

  //get shops Data from firestore

  const [shops, setShops] = useState([]);

  const getShops = async () => {
    const res = await getDocs(collection(db, "shops"));
    let allShops = [];
    res.forEach((doc) => {
      // console.log(doc.data());
      allShops.push(doc.data());
      setShops(allShops);
    });
  };

  //Create the user
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPincode, setUserPincode] = useState("");

  const handleRegister = async (user) => {
    const getUser = await getDocs(
      query(collection(db, "users"), where("UserPhone", "==", user.UserPhone))
    );
    if (getUser.docs.length === 0) {
      console.log("User Not Found");
      // createUserWithEmailAndPassword(auth, user.UserEmail, user.UserPass);
      const newUser = await addDoc(collection(db, "users"), user);
      console.log(newUser.id);
      AsyncStorage.setItem("user", JSON.stringify(user));
    } else {
      console.log("User Found");
      getUser.forEach((user) => {
        console.log(user.data());
      });
    }
  };

  //Check Logged in or not

  const [logIn, setLogIn] = useState(false);

  const checkLogin = async () => {
    const user = await AsyncStorage.getItem("user");
    console.log(JSON.parse(user));
  };

  return (
    <DataContext.Provider
      value={{
        homeState,
        setHomeState,
        shopState,
        setShopstate,
        accState,
        setAccState,
        cartState,
        setCartState,
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        getShops,
        shops,
        setShops,
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
        checkLogin,
        logIn,
        setLogIn,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
