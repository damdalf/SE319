import {StatusBar} from "react-native";
import React, { useState } from "react";
import {SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform} from "react-native";
import {navigateTab} from "../utils/navigator";
import QuestIcon from "../assets/QuestIcon";
import { accounts } from "../components/Accounts.js";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmailMessage, setErrorEmailMessage] = useState("");
    const [errorPasswordMessage, setErrorPasswordMessage] = useState("");
    const [errorAccountMessage, setErrorAccountMessage] = useState("");

    const loginCheck = (userEmail, userPassword) => {
      console.log(accounts);
      for (let i = 0; i < accounts.length; i++) {
        // Check if email and password are not blank.
        if (userEmail != "" && userPassword != "")
        {
          // Check if entered credentials match an existing account
          if (accounts[i].email == userEmail && accounts[i].password == userPassword) {
            navigateTab("Home");
            return;
          }
          // Check if one of the entered credentials matches an existing account
          else if (accounts[i].email == userEmail || accounts[i].passsword == userPassword) {
            // Check if email address matches an existing record, but if the password does not
            if (accounts[i].email == userEmail && accounts[i].passsword != userPassword) {
              console.log("Invalid password entered.")
              setErrorEmailMessage("Invalid password.")
              return;
            }
            // Check if a password matches an existing record, but if the email does not
            // TODO - this is not good security, lol
            if (accounts[i].password == userPassword && accounts[i].email != userEmail) {
              console.log("Invalid email address entered.")
              setErrorPasswordMessage("Invalid email address.")
              return;
            }
          }
        }
        else {
          if (userEmail == "") {
            console.log("Email cannot be blank.")
            setErrorEmailMessage("Email cannot be blank.")
          }
          if (userPassword == "") {
            console.log("Password cannot be blank.")
            setErrorPasswordMessage("Password cannot be blank.")
          }

          return;
        }
        if (i == accounts.length - 1) {
          console.log("Account is not registed.");
          setErrorAccountMessage("Account is not registed.")
        }
      }
    }

    const behavior = Platform.OS == "ios" ? "padding" : "";
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
        <KeyboardAvoidingView style={styles.container} behavior={behavior} enabled>
        <StatusBar style="auto"/>
        
        <View style={styles.logo} top={0}>
          <QuestIcon/>
        </View>

        <Text style={styles.errors} testID = 'emailError'> {errorEmailMessage} </Text>
        <View style={styles.inputView}>
          <TextInput
            testID = 'emailInput'
            style={styles.TextInput}
            placeholder="Email: Address"
            placeholderTextColor="white"
            color = 'white'
            value={email}
            onFocus={() => {
              setErrorEmailMessage("")
              setErrorAccountMessage("")}}
            onChangeText={setEmail}
          />
        </View>
   
        <Text style={styles.errors} testID = 'passwordError'> {errorPasswordMessage} </Text>
        <View style={styles.inputView}>
          <TextInput
            testID = 'passwordInput'
            style={styles.TextInput}
            placeholder="Password:"
            placeholderTextColor="white"
            color = 'white'
            value={password}
            onFocus={() => {
              setErrorPasswordMessage("")
              setErrorAccountMessage("")}}
            secureTextEntry={true}
            onChangeText={setPassword}
          />
        </View>
      </KeyboardAvoidingView>

          <Text style={styles.registeredErrors} testID = 'registerError'> {errorAccountMessage} </Text>
        <TouchableOpacity style={styles.loginBtn} testID = 'loginButton' onPress={() => loginCheck(email, password)} >
          <Text style={styles.loginText} placeholderTextColor="#00BFFB">LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.createAccntBtn} onPress={() => {navigateTab("Create Account")}} >
          <Text style={styles.accountText} placeholderTextColor="#00BFFB">Don't have an account? Create one here.</Text>
        </TouchableOpacity>

      </SafeAreaView>
    );
  }
   
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
   
    inputView: {
      backgroundColor: "#00BFFB",
      borderRadius: 30,
      width: "70%",
      height: 50,
      marginBottom: "5%",
      alignItems: "center",
    },
   
    TextInput: {
      height: "100%",
      flex: 1,
      padding: "3%",
      marginLeft: "5%",
      marginRight: "5%",
      width: "80%",
      textAlign: 'center'
    },
   
    loginBtn: {
      width: "40%",
      borderRadius: 30,
      borderWidth: 3,
      height: 60,
      marginBottom: "22%",
      padding: "3%",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "7%",
      backgroundColor: "white",
      borderColor: "#00BFFB",
      marginLeft: "30%"
    },

    createAccntBtn: {
      width: "80%",
      height: "6%",
      marginBottom: "5%",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "4%",
      marginLeft: "10%"
    },

    loginText: {
      color: '#00BFFB',
      padding: "3%",
    },

    accountText: {
      color: '#00BFFB',
      padding: "3%",
      textAlign: "center"
    },

    logo: {
      width: '55%',
      height:'35%',
      marginTop: '5%',
      marginBottom: "5%"
    },

    header: {
        color:'#00BFFB',
        fontSize: 35,
        fontFamily:'RubikMicrobe-Regular.ttf'
    },

    errors: {
      color: 'red',
      fontWeight: 'bold',
      width: "80%",
      textAlign: "center",
      marginBottom: "5%",
    },

    registeredErrors: {
      color: 'red',
      fontWeight: 'bold',
      width: "80%",
      textAlign: "center",
      marginTop: "2.5%",
      marginLeft: "10%"
    }
  });