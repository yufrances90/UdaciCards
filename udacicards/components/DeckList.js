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

import DeckListElement from '../components/DeckListElement';

export default class DeckList extends Component {
    
    render() {

        const { 
            decks,
            handlePress,
            handleAddNewDeck
        } = this.props;

        if (!decks || Object.keys(decks) === 0) {
            return <ActivityIndicator />
        }

        return (
            <View style={styles.container}>
               <ScrollView>
                    <View>
                        {Object.keys(decks).map(deck => {
                            
                            const deckObj = decks[deck];

                            return (
                               <View id={deckObj.id} key={deckObj.id}>
                                   <TouchableOpacity 
                                        onPress={event => handlePress(event, deckObj)}
                                    >
                                        <DeckListElement 
                                            key={deckObj.id} 
                                            deck={deckObj}
                                        /> 
                                </TouchableOpacity>
                               </View>
                            );
                        })}
                    </View>
                    <TouchableOpacity
                        onPress={handleAddNewDeck}
                    >
                        <View style={styles.diffDeckElement}>
                            <Text style={styles.diffDeckSmallTitle}>Add New Deck</Text>
                        </View>
                    </TouchableOpacity>
               </ScrollView>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...globalStyles.centeredContainer,
        paddingTop: 50,
        paddingBottom: 50
    },
    diffDeckElement: {
        ...globalStyles.deckElement,
        borderStyle: 'dashed'
    },
    diffDeckSmallTitle: {
        ...globalStyles.deckSmallTitle,
        color: '#d3d3d3'
    }
});

