import React, { Component } from 'react';
import { 
    StyleSheet, 
    View
} from 'react-native';

import globalStyles from '../styles/styles';

import QuizA from '../components/QuizA';

export default class PQuiz extends Component {
    render() {
        return (
            <View>
                <QuizA />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});