import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity 
} from 'react-native';

export default class NewQuestion extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                  placeholder="Enter New Question Here..."
                  style={styles.textInput}
                />
                 <TextInput 
                  placeholder="Enter Your Expected Answer Here..."
                />
                <TouchableOpacity
                    style={styles.submitBtn}
                >
                    <Text style={styles.submitBtnText}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitBtn: {
        marginTop: 40,
        borderColor: '#000066',
        borderStyle: 'solid',
        borderWidth: 1,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 5
    },
    submitBtnText: {
        color: '#000066'
    },
    textInput: {
        fontSize: 25
    }
});