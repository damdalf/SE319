import 'react-native';
import React from 'react';
import { render, waitFor, expect, fireEvent } from "@testing-library/react-native";
import CreateAccount from '../../views/CreateAccount';
import { accounts } from "../Accounts.js";

jest.useFakeTimers();

// Checking that the Create Account page renders
it('Create Account page renders', () =>
{
    render(<CreateAccount></CreateAccount>);
});

// Testing to ensure that hardcoding a new account into the current array that exists for texting works, since 'accounts' exists in Accounts.js
it('manually adds an account to the list of accounts', () =>
{
    accounts.push({ email: 'testAccount@gmail.com', password: 'testPassword123!' });

    waitFor(() => expect(accounts[4].email).toEqual('testAccount@gmail.com'));
    waitFor(() => expect(accounts[4].password).toEqual('testPassword123!'));
});

// Testing to ensure that a new account is added to said array when creating an account via the CreateAccount.js page
it('able to create an account via the CreateAccount.js page', () =>
{
    const page = render(<CreateAccount></CreateAccount>);

    fireEvent.changeText(page.getByTestId('emailInput'), "newEmail@gmail.com");
    fireEvent.changeText(page.getByTestId('passwordInput'), "newPassword123!");
    fireEvent.press(page.getByTestId('createAcountButton'));
    
    waitFor(() => expect(accounts[4].email).toEqual('newEmail@gmail.com'));
    waitFor(() => expect(accounts[4].password).toEqual('newPassword123!'));
    waitFor(() => expect(accounts.size()).toEqual(5));
});

// Testing that the correct error message displays when trying to create an account with an invalid email address
it('the correct error message displays when a user trys using an invalid email addredss', () =>
{
    const page = render(<CreateAccount></CreateAccount>);

    fireEvent.changeText(page.getByTestId('emailInput'), "newEmailgmail.com");

    waitFor(() => expect(page.getByTestId('emailError').toEqual('Invalid email address')));
});

// Testing that the correct error message displays when trying to create an account with a password that does not meet the specified requirements.
it('the correct error message displays when a user trys using a password that does not meet password requirements', () =>
{
    const page = render(<CreateAccount></CreateAccount>);

    fireEvent.changeText(page.getByTestId('passwordInput'), "newPassword!");

    waitFor(() => expect(page.getByTestId('passwordError').toEqual('Password must contain: a minimum of eight characters, one uppercase letter, one lowercase letter, one number, and one special character (#$@!%&*?).')));
});

// Testing that a new account is only added to the accounts array if it passed the form validation requirements
it('a new account should only be added to the accounts array if the email and password meeet the requirements', () =>
{
    const page = render(<CreateAccount></CreateAccount>);

    fireEvent.changeText(page.getByTestId('emailInput'), "newEmailgmail.com");
    fireEvent.changeText(page.getByTestId('passwordInput'), "newPassword!");
    fireEvent.press(page.getByTestId('createAcountButton'));

    waitFor(() => expect(accounts.size()).toEqual(4));
});