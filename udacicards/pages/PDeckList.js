import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import globalStyles from '../styles/styles';

import { generateAndSaveInitialData } from '../utils/utility';

import DeckListElement from '../components/DeckListElement';

export default class PDeckList extends Component {

    state = {
        decks: {},
        questions: {}
    }

    componentDidMount() {

        const { decks, questions } = generateAndSaveInitialData();

        this.setState({
            decks,
            questions
        });
    }

    handlePress(event, deckObj) {

        console.log("Selected deck object: ", deckObj);

        this.props.navigation.navigate('IDeck', {
            deck: deckObj
        });
    }

    handleAddNewDeck() {
        this.props.navigation.navigate('NDeck');
    }

    render() {

        const { decks } = this.state;

        return (
           <View style={styles.container}>
               <ScrollView>
                    <View>
                        {Object.keys(decks).map(deck => {
                            
                            const deckObj = decks[deck];

                            return (
                               <View id={deckObj.id} key={deckObj.id}>
                                   <TouchableOpacity 
                                        onPress={event => this.handlePress(event, deckObj)}
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
                        onPress={this.handleAddNewDeck.bind(this)}
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