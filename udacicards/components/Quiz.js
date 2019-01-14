import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    ActivityIndicator
} from 'react-native';

import globalStyles from '../styles/styles';

import QVHeader from './QVHeader';
import QVFooter from './QVFooter';
import QuizB from './QuizB';
import QuizA from './QuizA';

export default class Quiz extends Component {
    render() {

        const { 
            question, 
            totalNumQuestions, 
            qIndex 
        } = this.props;

        if (!question) {
            return <ActivityIndicator />
        }

        console.log("Selected Question: ", question);

        return (
            <View>
                <QVHeader />
                <View style={styles.container}>
                    <Text style={styles.numbers}>
                        {qIndex + 1} / {totalNumQuestions}
                    </Text>
                    <QuizA question={question.question} />
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
    numbers: {
        fontSize: 12,
        color: '#d8d8d8',
        fontWeight: '500'
    }
});