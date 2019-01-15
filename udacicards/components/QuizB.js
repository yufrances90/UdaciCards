import React, { Component, Fragment } from 'react';
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity
} from 'react-native';

import globalStyles from '../styles/styles';

export default class QuizB extends Component {

    handleClickShowQuestion() {
        this.props.handleChangeSide();
    }

    render() {

        const { answer } = this.props;

        return (
            <Fragment>
                <Text style={styles.answer}>
                    {answer}
                </Text>
                <TouchableOpacity
                    style={globalStyles.viewBtn}
                    onPress={this.handleClickShowQuestion.bind(this)}
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