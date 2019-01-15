import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity 
} from 'react-native';

import globalStyles from '../styles/styles';

import NewQuestionForm from '../components/NewQuestionForm';

export default class PNewQuestion extends Component {
    render() {
        return (
            <NewQuestionForm />
        );
    }
}

const styles = StyleSheet.create({
});