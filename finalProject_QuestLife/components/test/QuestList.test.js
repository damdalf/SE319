/**
 * @format
 */

import 'react-native';
import React from 'react';
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import mocked_quests, { mocked_quests_completed, mocked_quests_not_completed } from "../../mock_data/mocked_quests";
import QuestList from "../QuestList";
import questStore, { ObservableQuestStore } from '../../state/questStore'
import Home from '../../views/Home';

jest.useFakeTimers();

it('renders', () => {
    render(<QuestList quests={mocked_quests} />);
});

it('switches tabs and renders proper number of Quests', () => {
    const { getAllByTestId, getByTestId } = render(<QuestList quests={mocked_quests} />);

    expect(getAllByTestId("quest-item").length).toBe(mocked_quests.filter(q => !q.completed).length);

    fireEvent.press(getByTestId('completed-tab'));

    expect(getAllByTestId("quest-item").length).toBe(mocked_quests.filter(q => q.completed).length);
});

it('item disappears on click', async () => {

    questStore.clearQuests();
    questStore.addQuests(mocked_quests);

    const { getAllByTestId, getByTestId, getByText } = render(<Home />);

    expect(getAllByTestId("quest-item").length).toBe(mocked_quests.filter(q => !q.completed).length);

    fireEvent(getAllByTestId('quest-item-checkbox')[1], 'onPress');

    expect(getAllByTestId("quest-item").length).toBe(1);

    expect(getByText(mocked_quests[0].title)).toBeTruthy();

    fireEvent.press(getByTestId('completed-tab'));

    expect(getAllByTestId("quest-item").length).toBe(2);

    expect(getByText(mocked_quests[2].title)).toBeTruthy();

})

it('has checked items in the completed list', () => {
    const { getAllByTestId, getByTestId } = render(<QuestList quests={mocked_quests} />);

    fireEvent.press(getByTestId('completed-tab'));

    const checkboxes = getAllByTestId('quest-item-checkbox');

    expect(checkboxes.length).toBe(1);

    for (const checkbox of getAllByTestId('quest-item-checkbox')) {

        expect(checkbox.props.accessibilityState.checked).toBeTruthy();
    }

})

it('has unchecked items in the not completed list', () => {
    const { getAllByTestId } = render(<QuestList quests={mocked_quests} />);

    const checkboxes = getAllByTestId('quest-item-checkbox');

    expect(checkboxes.length).toBe(2);

    for (const checkbox of getAllByTestId('quest-item-checkbox')) {
        expect(checkbox.props.accessibilityState.checked).toBeFalsy();
    }

})

it('displays message on incomplete tab when no items present', () => {
    questStore.clearQuests();

    const { getByText } = render(<Home />);

    expect(getByText("Time to take a break. No quests to be found!")).toBeTruthy();
})

it('displays message on incomplete tab when no items present', () => {
    questStore.clearQuests();

    const { getByText, getByTestId } = render(<Home />);

    fireEvent.press(getByTestId("completed-tab"));

    expect(getByText("Complete a quest and it will display here.")).toBeTruthy();
})

it('displays message on incomplete tab when completed items present', () => {
    questStore.clearQuests();
    questStore.addQuests(mocked_quests_completed)
    const { getByText } = render(<Home />);

    expect(getByText("Time to take a break. No quests to be found!")).toBeTruthy();
})

it('displays message on incomplete tab when no items present', () => {
    questStore.clearQuests();
    questStore.addQuests(mocked_quests_not_completed)

    const { getByText, getByTestId } = render(<Home />);

    fireEvent.press(getByTestId("completed-tab"));

    expect(getByText("Complete a quest and it will display here.")).toBeTruthy();
})

it('does not display message on incomplete tab when incomplete items present', () => {
    questStore.clearQuests();
    questStore.addQuests(mocked_quests)
    const { queryByTestId } = render(<Home />);

    expect(queryByTestId('no-items-found-text')).toBeFalsy();
})

it('does not display message on complete tab when complete items present', () => {
    questStore.clearQuests();
    questStore.addQuests(mocked_quests)

    const { getByTestId, queryByTestId } = render(<Home />);

    fireEvent.press(getByTestId("completed-tab"));

    expect(queryByTestId('no-items-found-text')).toBeFalsy();
})