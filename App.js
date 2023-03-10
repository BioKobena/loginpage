import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { firebase } from "./config";

import Registration from "./src/Registration";
import Login from "./src/Login";
import Dashboard from "./src/Dashboard";
import Header from "./components/Header";
// import HomeScreen from "./HomeScreen";

const Stack = createStackNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: () => <Header name="Kobena Bio" />,
            headerStyle: {
              height: 200,
              borderBottomLeftRadius: 50,
              borderBottomRightRadiusBottom: 50,
              backgroundColor: "#fff",
              shadowColor: "#000",
              elevation: 25,
            },
          }}
        />

        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerTitle: () => <Header name="Kobena Bio" />,
            headerTitle: {
              height: 200,
              borderBottomLeftRadius: 50,
              borderBottomRightRadiusBottom: 50,
              backgroundColor: "#fff",
              shadowColor: "#000",
              elevation: 25,
            },
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTitle: {
            height: 200,
            borderBottomLeftRadius: 50,
            borderBottomRightRadiusBottom: 50,
            backgroundColor: "#fff",
            shadowColor: "#000",
            elevation: 25,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default () => {
  return(
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}