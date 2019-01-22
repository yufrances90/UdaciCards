import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
    Animated
} from 'react-native';

import globalStyles from '../styles/styles';

import { getAllDeckData } from '../utils/utility';

import DeckListElement from '../components/DeckListElement';
import DeckList from '../components/DeckList';

export default class PDeckList extends Component {

    state = {
        decks: {},
        isDeckUpdated: false,
        bounceValue: new Animated.Value(1)
    }

    componentDidMount() {
        this.renderData();
    }

    handlePress(event, deckObj) {

        console.log("Selected deck object: ", deckObj);

        const { bounceValue } = this.state;

        Animated.sequence([
            Animated.timing(bounceValue, { duration: 5000, toValue: 3}),
            Animated.spring(bounceValue, { toValue: 1, friction: 4})
        ]).start();

        setTimeout(this.props.navigation.push, 5000, 'IDeck', {
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

        const { decks, isDeckUpdated, bounceValue } = this.state;

        if (isDeckUpdated) {
            this.renderData();
        }

        console.log("SAVED DECKS: ", decks);

        return (
           <DeckList
                decks={decks}
                handlePress={this.handlePress.bind(this)}
                handleAddNewDeck={this.handleAddNewDeck.bind(this)}
                bounceValue={bounceValue}
           />
        );
    }
}

const styles = StyleSheet.create({
});