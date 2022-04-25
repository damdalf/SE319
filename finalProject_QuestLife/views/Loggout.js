import * as React from "react";
import {View, Text} from "react-native";
import { navigateTab } from "../utils/navigator";

export default function Loggout(){
    return(
        navigateTab("Login")
    );


}