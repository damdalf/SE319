import React from 'react';
import StoreItem from "./StoreItem"

const StoreItemList = (props) => {
    return <>
        {props.storeItemStoreList.map((storeItem, i) => <StoreItem index={i} key={storeItem.id} storeItem={storeItem} />)}
        
    </>;
}

export default StoreItemList;