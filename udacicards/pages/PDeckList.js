import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

import globalStyles from '../styles/styles';

import { getAllDeckData } from '../utils/utility';

import DeckListElement from '../components/DeckListElement';
import DeckList from '../components/DeckList';

export default class PDeckList extends Component {

    state = {
        decks: {},
        isDeckUpdated: false
    }

    componentDidMount() {
        this.renderData();
    }

    handlePress(event, deckObj) {

        console.log("Selected deck object: ", deckObj);

        this.props.navigation.push('IDeck', {
            deck: deckObj
        });
    }

    handleAddNewDeck() {
        this.props.navigation.navigate('NDeck');
    }

    renderData() {
        getAllDeckData().then(data => {
            this.setState({
                decks: JSON.parse(data)
            });
        });
    }

    render() {

        const { decks, isDeckUpdated } = this.state;

        if (isDeckUpdated) {
            this.renderData();
        }

        console.log("SAVED DECKS: ", decks);

        return (
           <DeckList
                decks={decks}
                handlePress={this.handlePress.bind(this)}
                handleAddNewDeck={this.handleAddNewDeck.bind(this)}
           />
        );
    }
}

const styles = StyleSheet.create({
});