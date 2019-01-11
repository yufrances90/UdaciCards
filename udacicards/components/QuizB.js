import React, { Component, Fragment } from 'react';
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity
} from 'react-native';

import globalStyles from '../styles/styles';

export default class QuizB extends Component {
    render() {
        return (
            <Fragment>
                <Text style={styles.answer}>
                    Yes!
                </Text>
                <TouchableOpacity
                    style={globalStyles.viewBtn}
                >
                    <Text style={globalStyles.viewBtnText}>
                    Show Question
                    </Text>
                </TouchableOpacity>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    answer: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});