import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity
} from 'react-native';

import globalStyles from '../styles/styles';

export default class QVFooter extends Component {

    handleButtonClick(event) {
        this.props.handleClickCorrectButton()
    }

    handleIncorrectButtonClick(event) {
        this.props.handleClickNextQuestion();
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    style={styles.correctBtn}
                    onPress={this.handleButtonClick.bind(this)}
                >
                    <Text style={styles.correctBtnText}>
                        Correct
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.incorrectBtn}
                    onPress={this.handleIncorrectButtonClick.bind(this)}
                >
                    <Text style={styles.incorrectBtnText}>
                        Incorrect
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    correctBtn: {
        ...globalStyles.button,
        marginTop: 50,
        borderColor: '#006666',
        width: 200,
        height: 'auto'
    },
    correctBtnText: {
        ...globalStyles.buttonText,
        color: '#006666'
    },
    incorrectBtn: {
        ...globalStyles.button,
        marginTop: 5,
        borderColor: '#ff0000',
        width: 200,
        height: 'auto'
    },
    incorrectBtnText: {
        ...globalStyles.buttonText,
        color: '#ff0000'
    },
});