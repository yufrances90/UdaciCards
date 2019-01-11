import React, { Component } from 'react';
import { 
    StyleSheet, 
    View
} from 'react-native';

import globalStyles from '../styles/styles';

import QuizEnd from '../components/QuizEnd';

export default class PQuiz extends Component {
    render() {
        return (
            <View>
                <QuizEnd />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});