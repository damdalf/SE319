/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render, waitFor, fireEvent } from "@testing-library/react-native";
import Quest from "../Quest";
import * as n from "../../utils/navigator"
import questStore from '../../state/questStore';

jest.useFakeTimers();

it('renders', () => {
    render(<Quest quest={{
        title: "First Quest",
        id: 1,
        completed: false,
        creationDate: new Date(),
        description: "Description!!!"
    }} />);
});

it('includes the name', () => {
    const { getByTestId } = render(<Quest quest={{ completed: false, title: "Test Title!" }} />);

    waitFor(() => expect(getByTestId("quest-title")).toHaveTextContent("Test Title!"));
});

it('checkbox is in correct state', () => {
    const { getByTestId } = render(<Quest quest={{ completed: false, title: "Test Title!" }} />);

    expect(getByTestId("quest-item-checkbox").props.accessibilityState.checkbox).toBeFalsy()
});

it('checkbox toggles properly', async () => {

    let quest = { completed: false, title: "Test Title!", id: 1 };
    questStore.clearQuests();
    questStore.addQuest(quest);

    const { getByTestId, rerender } = render(<Quest quest={quest} />);

    const checkbox = getByTestId("quest-item-checkbox");

    expect(checkbox.props.accessibilityState.checked).toBeFalsy()
    
    fireEvent.press(checkbox);
    quest = { completed: true, title: "Test Title!", id: 1 };
    rerender(<Quest quest={quest} />)

    expect(checkbox.props.accessibilityState.checked).toBeTruthy()

});

it('store completed state toggles properly', async () => {

    const quest = { completed: false, title: "Test Title!", id: 1 };
    questStore.clearQuests();
    questStore.addQuest(quest);

    const { getByTestId } = render(<Quest quest={quest} />);

    const checkbox = getByTestId("quest-item-checkbox");

    expect(questStore.quests[0].completed).toBeFalsy()

    fireEvent.press(checkbox);
    expect(questStore.quests[0].completed).toBeTruthy();

    fireEvent.press(checkbox);
    expect(questStore.quests[0].completed).toBeFalsy()

});

it('touch opens the quest view page', () => {
    const spy = jest.spyOn(n, 'navigate');
    const { getByTestId } = render(<Quest quest={{ completed: false, title: "Test Title!" }} />);
    fireEvent(getByTestId("quest-pressable-area"), "onTouchEnd");

    waitFor(() => expect(spy).toHaveBeenCalledTimes(1));
})