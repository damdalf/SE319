import React from 'react';
import { View, Text, Animated } from 'react-native'
import Quest from "./Quest"
import { ScrollView } from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Easing from 'react-native/Libraries/Animated/Easing';
import store from '../state/questStore';

const QuestList = (props) => {
    const [active, setActive] = React.useState(0);
    const displayToDo = () => {
        setActive(0);
    }
    const displayCompleted = () => {
        setActive(1)
    }

    const animationRef = React.useRef(new Animated.Value(0));
    React.useEffect(() => {
        Animated.spring(animationRef.current, {
            toValue: active,
            duration: 400,
            easing: Easing.ease(),
            // marginLeft does not support native driver
            useNativeDriver: false
        }).start();
    }, [active]);
    React.useEffect(() => {
        if (store.quests.length == 1)
            store.addQuest({ title: "Random Task: " + Math.random().toFixed(3), completed: true })
    }, [])

    const quests = props.quests.filter(quest => active ? quest.completed : !quest.completed).map((quest, i) => <Quest index={i} key={quest.id} quest={quest} />)

    return <>
        <View style={{ width: '100%', height: 50, flex: 1, flexDirection: 'row' }}>
            <Pressable style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderColor: 'lightgrey', borderRightWidth: 1 }} onPress={displayToDo} testID='to-do-tab'>
                <Text style={{ textAlign: 'center' }}>To-Do</Text>
            </Pressable>
            <Pressable style={{
                flex: 1, alignItems: 'center', justifyContent: 'center'
            }} onPress={displayCompleted} testID='completed-tab'>
                <View >
                    <Text style={{
                        textAlign: 'center',
                    }}>Completed</Text>
                </View>
            </Pressable>

        </View>
        <Animated.View style={{ backgroundColor: global.blue, width: '50%', height: 5, marginLeft: animationRef.current.interpolate({ inputRange: [0, 1], outputRange: ["0%", "50%"] }) }}></Animated.View>

        <ScrollView style={{ width: '100%', height: '100%' }} contentContainerStyle={{ flex: 1 }}>
            {quests.length > 0 ? quests : <Text style={{ color: 'grey', textAlign: 'center', paddingTop: 16 }} testID="no-items-found-text">{active ? "Complete a quest and it will display here." : "Time to take a break. No quests to be found!"}</Text>}
        </ScrollView>
    </>;
}

export default QuestList;