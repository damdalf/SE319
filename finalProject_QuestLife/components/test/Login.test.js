import 'react-native';
import React from 'react';
import { render, waitFor, expect, fireEvent } from "@testing-library/react-native";
import Login from '../../views/Login';

jest.useFakeTimers();

// Checking that the Login page renders
it('Login page renders', () =>
{
    render(<Login></Login>);
});

// Testing to ensure that when trying to login with a blank password, that the correct error message is displayed
it('tries logging in with a blank password', () =>
{
    const page = render(<Login></Login>);

    fireEvent.changeText(page.getByTestId('emailInput'), "newEmail@gmail.com");
    fireEvent.changeText(page.getByTestId('passwordInput'), "");
    fireEvent.press(page.getByTestId('loginButton'));
    
    waitFor(() => expect(page.getByTestId('passwordError').toEqual("Password cannot be blank.")));
});

// Testing to ensure that when trying to login with a blank email address, that the correct error message is displayed
it('tries logging in with a blank email address', () =>
{
    const page = render(<Login></Login>);

    fireEvent.changeText(page.getByTestId('emailInput'), "");
    fireEvent.changeText(page.getByTestId('passwordInput'), "newPassword123!");
    fireEvent.press(page.getByTestId('loginButton'));
    
    waitFor(() => expect(page.getByTestId('passwordError').toEqual("Email cannot be blank.")));
});

// Testing to ensure that when trying to login with an account that is not registerd, that the correct error message is displayed
it('tries loggin in with an account that is not registered', () =>
{
    const page = render(<Login></Login>);

    fireEvent.changeText(page.getByTestId('emailInput'), "ABC@gmail.com");
    fireEvent.changeText(page.getByTestId('passwordInput'), "newPassword123!");
    fireEvent.press(page.getByTestId('loginButton'));
    
    waitFor(() => expect(page.getByTestId('registerError').toEqual("Account is not registered.")));
});