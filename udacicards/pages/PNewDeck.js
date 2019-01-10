import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity 
} from 'react-native';

import globalStyles from '../styles/styles';

export default class PNewDeck extends Component {
    render() {
        return (
            <View>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput 
                  placeholder="Enter New Deck Title Here..."
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
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10
    }
});