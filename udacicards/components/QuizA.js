import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity
} from 'react-native';

import globalStyles from '../styles/styles';

import QVHeader from './QVHeader';
import QVFooter from './QVFooter';

export default class QuizA extends Component {
    render() {
        return (
            <View>
                <QVHeader />
                <View style={styles.container}>
                    <Text style={styles.numbers}>
                        2/2
                    </Text>
                    <Text style={styles.question}>
                        What is your name?
                    </Text>
                    <TouchableOpacity
                        style={styles.viewAnsBtn}
                    >
                        <Text style={styles.viewAnsBtnText}>
                        Show Answer
                        </Text>
                    </TouchableOpacity>
                    <QVFooter />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      ...globalStyles.centeredContainer,
      flexWrap: 'wrap' 
    },
    question: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    numbers: {
        fontSize: 12,
        color: '#d8d8d8'
    },
    viewAnsBtn: {
        marginTop: 10
    },
    viewAnsBtnText: {
        color: '#8d8d8d',
        textAlign: 'center'
    }
});