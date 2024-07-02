import { View } from "react-native";
import LandingScreen from "../screens/LandingScreen";
import OpenPageOne from "../screens/OpenPageOne";
import OpenPageTwo from "../screens/OpenPageTwo";
import OpenPageThree from "../screens/OpenPageThree";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EntranceScreen from "../screens/EntranceScreen";
import SignInScreen from "../screens/SignInScreen";
import ForgetPasswordScreen from "../screens/ForgetPasswordScreen";
import CreateUserScreen1 from "../screens/CreateUserScreen1";
import "./App.css";
import HomeScreen from "../screens/HomeScreen";
import { DataProvider } from "../context/DataContext";
import CartScreen from "../screens/CartScreen";
import ShopViewScreen from "../screens/ShopViewScreen";
import ShopsScreen from "../screens/ShopsScreen";

export default function Page() {
  const Stack = createNativeStackNavigator();
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <DataProvider>
        <NavigationContainer independent={true}>
          <Stack.Navigator initialRouteName="start">
            <Stack.Screen
              name="start"
              component={LandingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="one"
              component={OpenPageOne}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="two"
              component={OpenPageTwo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="three"
              component={OpenPageThree}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="entrance"
              component={EntranceScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="signin"
              component={SignInScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="forgotPass"
              component={ForgetPasswordScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="createAcc"
              component={CreateUserScreen1}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="cart"
              component={CartScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="shopview"
              component={ShopViewScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="shops"
              component={ShopsScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </DataProvider>
    </View>

    // <View style={{ width: "100%", height: "100%" }}>
    //   <Home />
    // </View>
  );
}
