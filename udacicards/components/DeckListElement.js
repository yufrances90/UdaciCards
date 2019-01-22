import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Animated
} from 'react-native';

import globalStyles from '../styles/styles';

export default class DeckListElement extends Component {
    render() {
        
        const { deck, bounceValue } = this.props;

        return (
            <View style={globalStyles.deckElement}>
                <Animated.Text
                    style={[globalStyles.deckSmallTitle, {transform: [{scale: bounceValue}]}]}
                >
                    {deck.title.toUpperCase()}
                </Animated.Text>
                <Text style={styles.deckDetails}>
                    {deck.qids.length} Cards
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({ 
    deckDetails: {
        textAlign: 'center',
        fontSize: 12
    },
    direction: {
        color: '#292477',
        fontSize: 80,
        textAlign: 'center',
    }
});