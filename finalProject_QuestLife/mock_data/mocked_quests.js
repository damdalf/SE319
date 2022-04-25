
const mocked_quests = [
    {
        title: "First Quest",
        id: 1,
        completed: false,
        creationDate: new Date(),
        description: "Description!!!"
    }, {
        title: "Second Quest",
        id: 2,
        completed: true,
        creationDate: new Date(),
        description: "Description!"
    }, {
        title: "Third Quest",
        id: 3,
        completed: false,
        creationDate: new Date(),
        description: "Description!?"
    }
]

export const mocked_quests_completed = [
    {
        title: "First Quest",
        id: 1,
        completed: true,
        creationDate: new Date(),
        description: "Description!!!"
    }, {
        title: "Take out Garbage",
        id: 2,
        completed: true,
        creationDate: new Date(),
        description: "Description!"
    }, {
        title: "Third Quest",
        id: 3,
        completed: true,
        creationDate: new Date(),
        description: "Description!?"
    },
    {
        title: "Third Quest",
        id: 4,
        completed: true,
        creationDate: new Date(),
        description: "Description!?"
    }
];

export const mocked_quests_not_completed = [
    {
        title: "First Quest",
        id: 1,
        completed: false,
        creationDate: new Date(),
        description: "Description!!!"
    }, {
        title: "Take out Garbage",
        id: 2,
        completed: false,
        creationDate: new Date(),
        description: "Description!"
    }, {
        title: "Third Quest",
        id: 3,
        completed: false,
        creationDate: new Date(),
        description: "Description!?"
    },
    {
        title: "Third Quest",
        id: 4,
        completed: false,
        creationDate: new Date(),
        description: "Description!?"
    }
];

export const completed_quest = {
    title: "Third Quest",
    id: 4,
    completed: true,
    creationDate: new Date(),
    description: "Description!!!"
}

export default mocked_quests;