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

        this.props.navigation.navigate('IDeck', {
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