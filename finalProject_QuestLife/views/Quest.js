import React from 'react';
import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { Keyboard } from 'react-native'
import { navigationRef } from '../utils/navigator';
import { useFocusEffect, useRoute, useNavigationState } from '@react-navigation/native';
import questStore from '../state/questStore';
import { AntDesign, Ionicons } from '@expo/vector-icons';
const Quest = (props) => {
    const route = useNavigationState(s => s);

    const quest = props?.route?.params?.quest;
    const [editMode, setEditMode] = React.useState(!Boolean(props?.route?.params?.quest));
    const [title, setTitle] = React.useState(quest?.title || "");
    const [description, setDescription] = React.useState(quest?.description || "");


    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerLeft: () => {

                return <View onTouchEnd={() => {
                    if (editMode && title != "") {
                        questStore.addQuest({ title, description, completed: false });
                    }
                    props.navigation.goBack();
                }}><AntDesign name="arrowleft" size={24} style={{ paddingRight: 12 }} /></View>
            }
        })
    }, [props.navigation, title, description])

    return <View style={{ padding: 30 }}>
        <TextInput label="Title" activeUnderlineColor='#00BFFB' value={title} style={{ marginBottom: 16, color: 'black' }} onChangeText={setTitle} onPressOut={Keyboard.dismiss} editable={editMode} disabledInputStyle={{ opacity: 1 }} />
        <TextInput label="Description" activeUnderlineColor='#00BFFB' value={description} multiline={true} onChangeText={setDescription} onSubmitEditing={Keyboard.dismiss} editable={editMode} disabledInputStyle={{ opacity: 1 }} />
    </View>;
}

export default Quest;