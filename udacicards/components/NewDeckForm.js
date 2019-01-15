import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback 
} from 'react-native';

import KeyboardSpacer from 'react-native-keyboard-spacer';
import DismissKeyboard from 'dismissKeyboard';

import globalStyles from '../styles/styles';

export default class NewDeckForm extends Component {

    state = {
        deckTitle: ''
    }

    handleChange(value) {
        this.setState({
            deckTitle: value
        });
    }

    handleClick(event) {
        
        this.props.handleCreateNewDeck(this.state.deckTitle);

        this.setState({
            deckTitle: ''
        })
    }

    render() {

        const { deckTitle } = this.state;

        return (
            <TouchableWithoutFeedback
                onPress={()=>{DismissKeyboard()}} 
            >
                <View style={globalStyles.centeredContainer}>
                    <Text style={styles.title}>What is the title of your new deck?</Text>
                    <TextInput 
                        placeholder="Enter New Deck Title Here..."
                        value={deckTitle}
                        onChangeText={this.handleChange.bind(this)}
                        autoCorrect={false}
                        autoCapitalize={"none"}
                    />
                    <TouchableOpacity
                        style={globalStyles.submitBtn}
                        onPress={this.handleClick.bind(this)}
                    >
                        <Text style={globalStyles.submitBtnText}>Submit</Text>
                    </TouchableOpacity>
                    <KeyboardSpacer />
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10
    }
});