import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View
} from 'react-native';

import globalStyles from '../styles/styles';

export default class DeckListElement extends Component {
    render() {
        
        const { deck } = this.props;

        return (
            <View style={globalStyles.deckElement}>
                <Text style={globalStyles.deckSmallTitle}>
                   {deck.title.toUpperCase()}
                </Text>
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
    }
});