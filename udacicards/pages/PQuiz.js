import React, { Component } from 'react';
import { 
    StyleSheet, 
    View
} from 'react-native';

import globalStyles from '../styles/styles';

import Quiz from '../components/Quiz';

export default class PQuiz extends Component {
    render() {
        return (
            <View style={globalStyles.centeredContainer}>
                <Quiz />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});