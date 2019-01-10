import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity
} from 'react-native';

import globalStyles from '../styles/styles';

export default class PIndividualDeck extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text style={styles.deckTitle}>
                        Title of Deck
                    </Text>
                    <Text style={styles.deckDetail}>
                        # cards
                    </Text>
                </View>
                <View>
                    <TouchableOpacity style={globalStyles.submitBtn}>
                        <Text style={globalStyles.submitBtnText}>
                            Start Quiz
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.lastBtn}>
                        <Text style={globalStyles.submitBtnText}>
                            Add New Question
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    deckTitle: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    deckDetail: {
        fontSize: 20,
        color: '#8d8d8d'
    },
    lastBtn: {
        ...globalStyles.submitBtn,
        marginTop: 5
    } 
});