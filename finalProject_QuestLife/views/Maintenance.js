import { observer } from 'mobx-react-lite';
import React from 'react';
import { View } from "react-native";
import { Button } from 'react-native-paper';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';
import StoreItemList from "../components/StoreItemList";
import store from '../state/storeItemStore';



const Maintenance = () => {


    return (
    <SafeAreaView style = {styles.container}>
      <View backgroundColor = "brown">
      <Image source={require('../assets/blacksmith.png')} style={styles.image}/>
      </View>
        <View style={{borderBottomColor: '#00BFFB', borderBottomWidth: 5, marginBottom: "3%"}} />
        <Text style={styles.text}>GOLD:{store.money}</Text>
        <View style={{borderBottomColor: '#00BFFB', borderBottomWidth: 5, marginTop: "3%"}} />
          <ScrollView style={styles.scrollView}>
              <View>
                  
                  <StoreItemList storeItemStoreList={store.storeItemStoreList} />

              </View>
          </ScrollView>
    </SafeAreaView>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center" 
  },
  scrollView: {
    marginBottom: 40
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  image: {
    width: "100%",
    height: 150,
    aspectRatio: 1,
    marginHorizontal: '25%'
  }
});
  
export default observer(Maintenance);