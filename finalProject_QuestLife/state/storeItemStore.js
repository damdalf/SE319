import { makeAutoObservable } from "mobx";



class ObservableStoreItemStore {
    constructor() {
        makeAutoObservable(this);
    }
        money = 1000;

        storeItemStoreList = [
        { "title": "default sword", boughtText: 'BUY', equipText: "EQUIP", id: .01 , index: 0, price: 5},
        { "title": "golden rapier", boughtText: 'BUY', equipText: "EQUIP", id: .02, index: 1, price: 45},
        { "title": "red shirt", boughtText: 'BUY', equipText: "EQUIP", id: .03 , index: 2, price: 10},
        { "title": "blue shirt", boughtText: 'BUY', equipText: "EQUIP", id: .04 , index: 3, price: 15},
        { "title": "green shirt", boughtText: 'BUY', equipText: "EQUIP", id: .05 , index: 4, price: 20},
        { "title": "black shirt", boughtText: 'BUY', equipText: "EQUIP", id: .06 , index: 5, price: 25},
        { "title": "purple shirt", boughtText: 'BUY', equipText: "EQUIP", id: .07 , index: 6, price: 30},
        { "title": "axe", boughtText: 'BUY', equipText: "EQUIP", id: .08 , index: 7, price: 15},
        { "title": "katana", boughtText: 'BUY', equipText: "EQUIP", id: .09 , index: 8, price: 100},
        { "title": "flail", boughtText: 'BUY', equipText: "EQUIP", id: .1 , index: 9, price: 20},
        { "title": "dagger", boughtText: 'BUY', equipText: "EQUIP", id: .11 , index: 10, price: 10},
        { "title": "club", boughtText: 'BUY', equipText: "EQUIP", id: .12 , index: 11, price: 10},
        { "title": "boots", boughtText: 'BUY', equipText: "EQUIP", id: .13 , index: 12, price: 5}]



    
    getBuyText(i){
        const text = this.storeItemStoreList[i].boughtText;
        return text
    }
    getEquipText(i){
        const text = this.storeItemStoreList[i].equipText;
        return text
    }
    spendMoney(i){
     //   var newMoney = this.money;
        if(this.storeItemStoreList[i].boughtText == 'BUY'){
            if((this.money - this.storeItemStoreList[i].price) >= 0){
                this.money -= this.storeItemStoreList[i].price;
                this.storeItemStoreList[i].boughtText = 'OWNED';
            }
        }
       
        //this.money = newMoney;
    }
    equip(i){
        if(this.storeItemStoreList[i].boughtText == 'OWNED'){
            if(this.storeItemStoreList[i].equipText == 'EQUIP'){
                this.storeItemStoreList[i].equipText = 'EQUIPPED';
            }else{
                this.storeItemStoreList[i].equipText = 'EQUIP';
            }
        }
    }
    addStoreItem(storeItems) {
        this.storeItemsStoreList = [...this.storeItemStoreList, {...storeItem, id: Math.random()}];
        index++;
    }
    addStoreItems(storeItems) {
        this.storeItemStoreList = [...this.storeItemStoreList, ...storeItemStoreList];
        index += storeItems.length;
    }

    markCompleted(i) {//purchased
        const og_list = [...this.storeItemStoreList];
        og_list[i].completed = true;
        this.storeItemStoreList = og_list;
    }
    markNotCompleted(i) {//notPurchased
        const og_list = [...this.storeItemStoreList];
        og_list[i].completed = false;
        this.storeItemStoreList = og_list;
    }
    toggleCompleted(i) {//togglePurchased
        debugger;
        const og_list = [...this.storeItemStoreList];
        og_list[i].completed = !og_list[i].completed;
        this.storeItemStoreList = og_list;
    }
}

export default new ObservableStoreItemStore();