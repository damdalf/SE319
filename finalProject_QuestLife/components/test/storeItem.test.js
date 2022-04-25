/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render, waitFor, fireEvent } from "@testing-library/react-native";
import StoreItem from "../StoreItem";
import * as n from "../../utils/navigator"
import StoreItemStore from '../../state/storeItemStore';

jest.useFakeTimers();


it('equip button toggles properly', async () => {
    render(<StoreItem defaultSword={{ "title": "default sword",
     boughtText: 'OWNED',
     equipText: "EQUIP",
     id: .01 ,
     index: 0,
     price: 5}
    } />); 
    expect(defaultSword.props.equipText).toEqual("equip");
    fireEvent(StoreItem, equipText());
    expect(defaultSword.props.equipText).toEqual("unequip");

});
it('equip button inactive on unowned items', async () => {
    render(<StoreItem defaultSword={{ "title": "default sword",
     boughtText: 'BUY',
     equipText: "EQUIP",
     id: .01 ,
     index: 0,
     price: 5}
    } />); 
    expect(defaultSword.props.equipText).toEqual("EQUIP");
    fireEvent(StoreItem, equipText());
    expect(defaultSword.props.equipText).toEqual("EQUIP");

});

