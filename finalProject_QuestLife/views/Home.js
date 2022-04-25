import { observer } from 'mobx-react-lite';
import React from 'react';
import { View } from "react-native";
import { Button } from 'react-native-paper';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import QuestList from "../components/QuestList";
import store from '../state/questStore';



const Home = () => {
    const click = () => {
        store.addQuest({ title: "Random Task: " + Math.random().toFixed(3), completed: true })
    }
    return (
    <ScrollView style={styles.scrollView}>
        <View>
            <QuestList quests={store.quests} />
            <Button onTouchEnd={click} >Add Task</Button>
        </View>
    </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      
    },
    scrollView: {
      marginBottom: 51,
    },
    text: {
      fontSize: 42,
    },
  });
  
export default observer(Home);