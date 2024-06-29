import { createContext, useState } from "react";
import { Alert } from "react-native";

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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
