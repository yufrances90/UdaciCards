import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    ScrollView
} from 'react-native';

import globalStyles from '../styles/styles';

import DeckListElement from '../components/DeckListElement';

export default class PDeckList extends Component {

    render() {

        const { decks } = this.props;

        return (
           <View style={styles.container}>
               <ScrollView>
                    <View>
                        {Object.keys(decks).map(deck => {
                            
                            const deckObj = decks[deck];

                            return <DeckListElement 
                                key={deckObj.id} 
                                deck={deckObj}
                            /> 
                        })}
                    </View>
                    <View style={styles.diffDeckElement}>
                        <Text style={styles.diffDeckSmallTitle}>Add New Deck</Text>
                    </View>
               </ScrollView>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
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