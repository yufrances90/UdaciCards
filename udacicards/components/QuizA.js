import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity
} from 'react-native';

import globalStyles from '../styles/styles';

export default class QuizA extends Component {
    render() {
        return (
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
                <TouchableOpacity
                    style={styles.correctBtn}
                >
                    <Text style={styles.correctBtnText}>
                        Correct
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.incorrectBtn}
                >
                    <Text style={styles.incorrectBtnText}>
                        Incorrect
                    </Text>
                </TouchableOpacity>
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
    correctBtn: {
        marginTop: 50,
        borderColor: '#006666',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 40,
        paddingRight: 40,
        width: 200,
        height: 'auto'
    },
    correctBtnText: {
        color: '#006666',
        textAlign: 'center'
    },
    incorrectBtn: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 40,
        paddingRight: 40,
        marginTop: 5,
        borderColor: '#ff0000',
        width: 200,
        height: 'auto'
    },
    incorrectBtnText: {
        color: '#ff0000',
        textAlign: 'center'
    },
    viewAnsBtn: {
        marginTop: 10
    },
    viewAnsBtnText: {
        color: '#8d8d8d',
        textAlign: 'center'
    }
});