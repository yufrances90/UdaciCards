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

        const newDeck = createNewDeck(deckTitle);

        updateDeckData(newDeck).then(() => {
            this.props.navigation.navigate("Home");
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