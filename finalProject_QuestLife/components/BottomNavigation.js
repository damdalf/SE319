import React from 'react';
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import MaintenanceIcon from "../assets/MaintenanceIcon";
import QuestIcon from "../assets/QuestIcon";
import { navigate, navigateTab, navigationRef } from "../utils/navigator";

const pagesWithTab = ["Maintenance", "Home", "Battle"]

const BottomNavigation = () => {

    const [routeName, setRouteName] = React.useState("Home");

    if (navigationRef) { // @ts-ignore
        navigationRef.addListener("state", () => setRouteName(navigationRef.getCurrentRoute().name));
    }

    if (!pagesWithTab.includes(routeName)) {
        return null;
    }

    const navigateToMaintenance = () => {
        navigateTab("Maintenance");
    }
    const middlePressed = () => {
        if (routeName === "Home") {
            navigate("Quest")
        } else {
            navigateTab("Home");
        }
    }
    const navigateToQuest = () => {
        navigateTab("Battle");
    }

    return (<View testID="bottom-navigation" style={{
        width: '100%',
        height: 50,
        position: "absolute",
        bottom: 0,
        padding: 10,
        flexDirection: "row",
        borderTopColor: "lightgrey",
        borderTopWidth: 1,
        backgroundColor: 'white'
    }}>
        <View testID="left-navigation-button" style={{ flex: 1 }} onTouchEnd={navigateToMaintenance}><MaintenanceIcon /></View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><TouchableOpacity
            testID="middle-navigation-button"
            onPress={middlePressed} style=
            {{
                backgroundColor: "#00BFFB",
                height: 100,
                width: 100,
                borderRadius: 100,
                position: "relative",
                bottom: 10,
                justifyContent: "center",
                alignItems: "center"
            }}><Ionicons testID="middle-navigation-button-icon" size={40} color="black"
                name={routeName === "Home" ? "add" : "list"}
            />
        </TouchableOpacity></View>
        <View testID="right-navigation-button" style={{ flex: 1 }} onTouchEnd={navigateToQuest}><QuestIcon /></View>
    </View>);

}


const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});
const bottomNavigationStyle = {
    flexDirection: "column",
}


export default BottomNavigation;