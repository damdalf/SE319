import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

class CustomText extends Component {
    render() {
        return <Text>{this.props.children}</Text>;
    }
}
export default CustomText;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});