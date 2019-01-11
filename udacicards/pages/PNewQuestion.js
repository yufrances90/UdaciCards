import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity 
} from 'react-native';

import globalStyles from '../styles/styles';

export default class PNewQuestion extends Component {
    render() {
        return (
            <View style={globalStyles.centeredContainer}>
                <TextInput 
                  placeholder="Enter New Question Here..."
                  style={styles.textInput}
                />
                 <TextInput 
                  placeholder="Enter Your Expected Answer Here..."
                />
                <TouchableOpacity
                    style={globalStyles.submitBtn}
                >
                    <Text style={globalStyles.submitBtnText}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 25
    }
});