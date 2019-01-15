import React, { Component, Fragment } from 'react';
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity
} from 'react-native';

import globalStyles from '../styles/styles';

export default class QuizA extends Component {

    handleClickShowAnswer(event) {
        this.props.handleChangeSide();
    }

    render() {

        const { question } = this.props;

        return (
            <Fragment>
                <Text style={styles.question}>
                    {question}
                </Text>
                <TouchableOpacity
                    style={globalStyles.viewBtn}
                    onPress={this.handleClickShowAnswer.bind(this)}
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