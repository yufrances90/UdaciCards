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
            <View style={globalStyles.centeredContainer}>
                <View>
                    <Text style={styles.deckTitle}>
                        JavaScript
                    </Text>
                    <Text style={styles.deckDetail}>
                        3 cards
                    </Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.startBtn}>
                        <Text style={styles.startBtnText}>
                            Start Quiz
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addBtn}>
                        <Text style={styles.addBtnText}>
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
        fontSize: 12,
        color: '#8d8d8d',
        textAlign: 'center'
    },
    startBtn: {
        ...globalStyles.button,
        marginTop: 40,
        borderColor: '#006666'
    },
    startBtnText: {
        ...globalStyles.buttonText,
        color: '#006666'
    },
    addBtn: {
        ...globalStyles.button,
        marginTop: 10,
        borderColor: '#ff0000'
    },
    addBtnText: {
        ...globalStyles.buttonText,
        color: '#ff0000'
    }
});