import React, { Component, Fragment } from 'react';
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity
} from 'react-native';

import globalStyles from '../styles/styles';

export default class QuizA extends Component {
    render() {
        return (
            <Fragment>
                <Text style={styles.question}>
                    What is your name?
                </Text>
                <TouchableOpacity
                    style={globalStyles.viewBtn}
                >
                    <Text style={globalStyles.viewBtnText}>
                    Show Answer
                    </Text>
                </TouchableOpacity>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    question: {
        fontSize: 28,
        fontWeight: 'bold'
    }
});