import React from 'react';
import BottomNavigation from "./components/BottomNavigation";
import { StatusBar, useColorScheme, } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Quest from "./views/Quest";
import Home from "./views/Home";
import Login from "./views/Login";
import CreateAccount from "./views/CreateAccount";
import Maintenance from "./views/Maintenance";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationRef } from "./utils/navigator";
import Battle from './views/Battle';

const Stack = createNativeStackNavigator();
const App = (props) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <NavigationContainer style={{ height: '100%' }} ref={navigationRef}>
                <Stack.Navigator initialRouteName={/*props.startPage || */"Login"} options={{ headerLeft: null }}>
                    <Stack.Group>
                        <Stack.Screen name={"Create Account"} component={CreateAccount} />
                        <Stack.Screen name={"Login"} component={Login} />
                        <Stack.Screen name={"Home"} component={Home} />
                        <Stack.Screen name={"Maintenance"} component={Maintenance} />
                        <Stack.Screen name={"Battle"} component={Battle} />
                        <Stack.Screen name={"Quest"} component={Quest} options={(p) => ({ title: p?.route?.params?.quest ? "View Quest" : "Create Quest" })} />
                    </Stack.Group>
                </Stack.Navigator>
                <BottomNavigation />
            </NavigationContainer>
        </>
    );
};

export default App;
