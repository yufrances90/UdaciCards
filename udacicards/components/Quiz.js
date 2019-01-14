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
import QuizB from './QuizB';
import QuizA from './QuizA';

export default class Quiz extends Component {
    render() {
        return (
            <View>
                <QVHeader />
                <View style={styles.container}>
                    <Text style={styles.numbers}>
                        2/2
                    </Text>
                    <QuizB />
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