import { observer } from 'mobx-react';
import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet} from "react-native";


import storeItemStore from '../state/storeItemStore';

const StoreItem = (props) => {

    const attemptPurchase = () => {
        storeItemStore.spendMoney(props.index);
    }
    const attemptToggleEquip = () => {
        storeItemStore.equip(props.index)
    }
    const buyText = () => {
        const text = storeItemStore.getBuyText(props.index);
        return text;
    }
    const equipText = () => {
        const text = storeItemStore.getEquipText(props.index);
        return text;
    }
    return <View testID="storeItem-item"
        style={{ padding: 10, marginHorizontal: 15, borderBottomColor: "#00BFFB", borderBottomWidth: 1, display: "flex" }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
            <View style={{ marginRight: 20}}>
                <TouchableOpacity style = {styles.itemBtn} onPress={attemptPurchase}>
                    <Text style = {styles.itemBtnText}>
                        {buyText()}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.itemBtn} onPress={attemptToggleEquip}>
                    <Text style = {styles.itemBtnText}>
                        {equipText()}
                    </Text>
                </TouchableOpacity>
            </View>
            <Text testID="storeItem-title" style = {styles.itemText}>{props.storeItem.title}</Text>
            <Text style={styles.costText} >{props.storeItem.price} GOLD</Text>
        </View>
    </View>;
};

export default observer(StoreItem);

const styles = StyleSheet.create({
    itemBtn: {
        backgroundColor: 'white',
        color: '#00BFFB',
        width: 150,
        height: 40,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: '#00BFFB',
        marginBottom: 5
    },

    itemBtnText: {
        color: '#00BFFB',
        fontSize: 25,
        textAlign: 'center',
        padding: "2%"
    },

    costText: {
        fontWeight: 'bold',
        textAlign: 'right',
        flex: 1
    },

    itemText: {
        fontSize: 18,
        textAlign: 'center'
    }
});