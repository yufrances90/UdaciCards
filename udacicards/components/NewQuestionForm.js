import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback 
} from 'react-native';

import KeyboardSpacer from 'react-native-keyboard-spacer';
import DismissKeyboard from 'dismissKeyboard';

import globalStyles from '../styles/styles';

export default class NewQuestionForm extends Component {

    state = {
        question: '',
        answer: ''
    }

    handleSubmit(event) {

        const {
            question,
            answer 
        } = this.state;

        if (question.length === 0 || answer.length === 0) {
            return alert("Warning: Please fill in both question and answer!");
        }

        this.props.handleCreateNewQuestion(
            {
                question, 
                answer
            },
            this.props.deck
        );

        this.setState({
            question: '',
            answer: ''
        });
    }

    handleChangeText(text, isQuestion) {
        if (isQuestion) {
            this.setState({
                question: text
            });
        } else {
            this.setState({
                answer: text
            })
        }
    }

    render() {

        const { question, answer } = this.state;

        return (
            <TouchableWithoutFeedback
                onPress={()=>{DismissKeyboard()}} 
            >
                <View style={globalStyles.centeredContainer}>
                    <TextInput 
                        placeholder="Enter New Question Here..."
                        style={styles.textInput}
                        value={question}
                        autoCorrect={false}
                        autoCapitalize={"sentences"}
                        onChangeText={
                            (text) => this.handleChangeText(text, true)
                        }
                    />
                    <TextInput 
                        placeholder="Enter Your Expected Answer Here..."
                        value={answer}
                        autoCorrect={false}
                        autoCapitalize={"sentences"}
                        onChangeText={
                            (text) => this.handleChangeText(text, false)
                        }
                    />
                    <TouchableOpacity
                        style={globalStyles.submitBtn}
                        onPress={this.handleSubmit.bind(this)}
                    >
                        <Text style={globalStyles.submitBtnText}>Submit</Text>
                    </TouchableOpacity>
                    <KeyboardSpacer />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 25
    }
});