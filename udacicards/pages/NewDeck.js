import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity 
} from 'react-native';

export default class NewDeck extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput 
                  placeholder="Enter New Deck Title Here..."
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
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10
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
    }
});