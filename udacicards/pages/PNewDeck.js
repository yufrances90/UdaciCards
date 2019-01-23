import React, { Component } from 'react';
import { 
    StyleSheet
} from 'react-native';

import globalStyles from '../styles/styles';

import { 
    createNewDeck,
    updateDeckData 
} from '../utils/utility';

import NewDeckForm from '../components/NewDeckForm';

export default class PNewDeck extends Component {

    handleCreateNewDeck(deckTitle) {

        if (deckTitle.length === 0) {
            return alert("Warning: Please enter deck name!");
        }

        const newDeck = createNewDeck(deckTitle);

        updateDeckData(newDeck).then(() => {
            this.props.navigation.push("IDeck", {
                deck: newDeck
            });
        });
    }

    render() {
        return (
            <NewDeckForm
                handleCreateNewDeck={this.handleCreateNewDeck.bind(this)} 
            />
        );
    }
}

const styles = StyleSheet.create({
});