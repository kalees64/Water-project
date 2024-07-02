import { collection, getDocs } from "firebase/firestore";
import { createContext, useState } from "react";
import { Alert } from "react-native";
import { db } from "../services/FireBaseAuth";

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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
