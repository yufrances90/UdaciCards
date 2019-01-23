import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Animated
} from 'react-native';

import globalStyles from '../styles/styles';

const DeckListElement = ({
    deck,
    bounceValue
}) => {

    const numCards = deck.qids.length;

    return (
        <View style={globalStyles.deckElement}>
            <Animated.Text
                style={[globalStyles.deckSmallTitle, {transform: [{scale: bounceValue}]}]}
            >
                {deck.title.toUpperCase()}
            </Animated.Text>
            <Text style={styles.deckDetails}>
                {numCards} {numCards > 1 ? "Cards" : "Card"}
            </Text>
        </View>
    );
}

export default DeckListElement;

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