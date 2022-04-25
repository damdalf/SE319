import React from 'react';
import { Text, View, Platform } from "react-native";
import { Checkbox } from 'react-native-paper';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { observe } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import questStore from '../state/questStore';
import { navigate } from '../utils/navigator';

const Quest = (props) => {

    const toggleStatus = (e) => {
        questStore.toggleCompleted(props.quest.id);

        // during testing e is undefined
        if (e)
            e.stopPropagation();
    }

    const openQuest = () => {
        navigate("Quest", { quest: props.quest, new: false });
    }

    return <View testID="quest-item"
        style={{ padding: 10, marginHorizontal: 15, borderBottomColor: "#00BFFB", borderBottomWidth: 1, display: "flex" }}>
        <Pressable style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }} onPress={openQuest} testID="quest-pressable-area">
            <View style={{ marginRight: 20 }}>
                <Checkbox.Android color="#00BFFB" size='25' uncheckedColor="#00BFFB" onPress={toggleStatus} status={props.quest.completed ? "checked" : 'unchecked'} mode={Platform.OS} testID="quest-item-checkbox" />
            </View>
            <Text testID="quest-title" style={{ fontSize: 18 }}>{props.quest.title}</Text>
        </Pressable>
    </View>;
}
export default Quest;