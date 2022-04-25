import { makeAutoObservable } from "mobx";

let index = 0

export class ObservableQuestStore {
    constructor(quests) {
        makeAutoObservable(this);
        // if (quests)
        //     this.quests = [...quests];
        // else
    }
    quests = [{ "title": "Stored in state 1", completed: false, id: Math.random() }]

    clearQuests() {
        this.quests = [];
    }

    addQuest(quest) {
        this.quests = [...this.quests, { id: Math.random(), ...quest }];
        index++;
    }
    addQuests(quests) {
        this.quests = [...this.quests, ...quests];
        index += quests.length;
    }

    removeListItem(item) {
        this.list = this.quests.filter((l) => {
            return l.index !== item.index
        })
    }

    markCompleted(i) {
        const og_list = [...this.quests];
        og_list[i].completed = true;
        this.quests = og_list;
    }
    markNotCompleted(i) {
        const og_list = [...this.quests];
        og_list[i].completed = false;
        this.quests = og_list;
    }
    toggleCompleted(id) {
        const og_list = [...this.quests];
        const ids = og_list.map(q => q.id);
        const index = ids.indexOf(id);
        og_list[index].completed = !og_list[index].completed;
        this.quests = og_list;
    }
    addItem(item, name) {
        this.quests.forEach((l) => {
            if (l.index === item.index) {
                l.items.push(name)
            }
        })
    }
}

export default new ObservableQuestStore();