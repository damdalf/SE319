import { StatusBar } from "react-native";
import React, { useState } from "react";
import {SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform} from "react-native";
import {navigateTab} from "../utils/navigator";
import QuestIcon from "../assets/QuestIcon";
import { accounts } from "../components/Accounts.js";

export default function CreateAccount() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmailMessage, setErrorEmailMessage] = useState("");
    const [errorPasswordMessage, setErrorPasswordMessage] = useState("");
    const [errorAccountMessage, setErrorAccountMessage] = useState("");

    // Function to validate a user's entered email address using the following regex expression.
    const validateEmail = (email) => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return email.match(re);
    };

    // Function to validate a user's enter password:
    // Password Must Contain: A minimum of eight characters, one uppercase letter, one lowercase letter, one number, and one special character.
    const validatePassword = (password) => {
      const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
        return password.match(re);
    };
   
    const behavior = Platform.OS == "ios" ? "padding" : "";
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
        <KeyboardAvoidingView style={styles.container} behavior={behavior} enabled>
        <StatusBar style="auto"/>

        <View style={styles.logo}>
          <QuestIcon />
        </View>

        <Text style={styles.errors} testID = 'emailError'> {errorEmailMessage } </Text>
        <View style={styles.inputView}>
          <TextInput
            testID = 'emailInput'
            style={styles.TextInput}
            placeholder="Email Address:"
            placeholderTextColor="white"
            color = 'white'
            value={email}
            onFocus={() => setErrorEmailMessage("")}
            onChangeText={setEmail}
            onBlur={() => {
              if (!validateEmail(email)) {
                // Invalid email
                console.log("Invalid email address entered.")
                setErrorEmailMessage("Invalid email address.")
              } else {
                // Valid email
                console.log("Valid email address entered.");
                setEmail(email);
              }
            }
          }
          />
        </View>
        <Text style={styles.errors} testID = 'passwordError'> {errorPasswordMessage} </Text>
        <View style={styles.inputView}>
          <TextInput
            testID = 'passwordInput'
            style={styles.TextInput}
            placeholder="Create a Password:"
            placeholderTextColor="white"
            color = 'white'
            value={password}
            secureTextEntry={true}
            onFocus={ () =>setErrorPasswordMessage("")}
            onChangeText={setPassword}
            onBlur={() => {
              if (!validatePassword(password)) {
                // Invalid email
                console.log("Invalid password entered.")
                setErrorPasswordMessage("Password must contain: a minimum of eight characters, one uppercase letter, one lowercase letter, one number, and one special character (#$@!%&*?).")
              } else {
                // Valid email
                console.log("Valid password entered.")
                setPassword(password);
              }
            }
          }
          />
        </View>
      </KeyboardAvoidingView>

          {/* <View> */}
          <Text style={styles.registeredErrors}> {errorAccountMessage} </Text>
          <TouchableOpacity style={styles.createAccntBtn} testID = 'createAcountButton' onPress={() => { 
          if (!validatePassword(password)) {
            // Invalid password
            console.log("Invalid password entered.")
            setErrorPasswordMessage("Password must contain: a minimum of eight characters, one uppercase letter, one lowercase letter, one number, and one special character (#$@!%&*?).")
          }
          
          else if (validatePassword(password) && validateEmail(email)) {
            accounts.push({email: email, password: password});
            navigateTab("Login"); }
            if (!validateEmail(email)) {
              // Invalid email
              console.log("Invalid email address entered.")
              setErrorEmailMessage("Invalid email address.")
            }}}
            >
          <Text style={styles.createAccntText} placeholderTextColor="#00BFFB">CREATE ACCOUNT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.termsOfServiceBtn} onPress={() => {navigateTab("Create Account")}} >
          <Text style={styles.termsOfServiceText} placeholderTextColor="#00BFFB">Terms of Service</Text>
        </TouchableOpacity>
        {/* </View>  */}

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
   
    createAccntBtn: {
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

    termsOfServiceBtn: {
      width: "80%",
      height: "6%",
      marginBottom: "5%",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "4%",
      marginLeft: "10%"
    },

    createAccntText: {
      color: '#00BFFB',
      padding: "3%",
    },

    termsOfServiceText: {
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
      marginBottom: "5%"
    },

    registeredErrors: {
      color: 'red',
      fontWeight: 'bold',
      width: "80%",
      textAlign: "center",
      marginTop: "2.5%"
    }
  });