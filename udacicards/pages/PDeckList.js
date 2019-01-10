import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View
} from 'react-native';

import globalStyles from '../styles/styles';

export default class PDeckList extends Component {

    render() {

        const { decks } = this.props;

        return (
            <View>
                <Text>{Object.keys(decks).length}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});