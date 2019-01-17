import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity 
} from 'react-native';

import globalStyles from '../styles/styles';

import { 
    createNewQuestion,
    updateQuestionData 
} from '../utils/utility';

import NewQuestionForm from '../components/NewQuestionForm';

export default class PNewQuestion extends Component {

    state = {
        deck: ''
    }

    componentDidMount() {

        const { navigation } = this.props;

        this.setState({
            deck: navigation.getParam("deck")
        });
    }

    handleCreateNewQuestion(question, answer) {

        const { deck } = this.state;

        const newQuestion = createNewQuestion(question, answer, deck.title);

        console.log("New question to be added: ", newQuestion);

        updateQuestionData(newQuestion).then(() => {
            // this.props.navigation.push("Home");

            this.props.navigation.push("IDeck", {
                deck
            })
        });
    }

    render() {

        const { deck } = this.state;

        return (
            <NewQuestionForm
                handleCreateNewQuestion={this.handleCreateNewQuestion.bind(this)} 
                deck={deck.title}
            />
        );
    }
}

const styles = StyleSheet.create({
});