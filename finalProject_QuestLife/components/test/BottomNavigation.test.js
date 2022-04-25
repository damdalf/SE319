/**
 * @format
 */

import 'react-native';
import React from 'react';
import { fireEvent, render } from "@testing-library/react-native";
import BottomNavigation from "../BottomNavigation";
import App from "../../App";
import { NavigationContainer } from "@react-navigation/native";
import * as n from "../../utils/navigator"

jest.useFakeTimers();

it('renders', () => {
    render(<NavigationContainer>
        <BottomNavigation />
    </NavigationContainer>);
});


it("navigates from home to maintenance to quest", () => {
    const { getByTestId, getByText } = render(<App startPage={"Home"} />);
    const spy = jest.spyOn(n, 'navigateTab');

    fireEvent(getByTestId("left-navigation-button"), "onTouchEnd");
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith("Maintenance")

    fireEvent(getByTestId("right-navigation-button"), "onTouchEnd");
    expect(spy).toHaveBeenCalledTimes(2);
})
