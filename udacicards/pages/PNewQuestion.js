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
            deck: navigation.getParam("deckTitle")
        });
    }

    handleCreateNewQuestion(question, answer) {

        const { deck } = this.state;

        const newQuestion = createNewQuestion(question, answer, deck);

        console.log("New question to be added: ", newQuestion);

        updateQuestionData(newQuestion).then(
            this.props.navigation.navigate("IDeck", {
                deck: newQuestion
            }));


    }

    render() {
        return (
            <NewQuestionForm
                handleCreateNewQuestion={this.handleCreateNewQuestion.bind(this)} 
                deck={this.state.deck}
            />
        );
    }
}

const styles = StyleSheet.create({
});