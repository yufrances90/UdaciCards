import React, { Component } from 'react';
import { 
    StyleSheet
} from 'react-native';

import globalStyles from '../styles/styles';

import NewDeckForm from '../components/NewDeckForm';

export default class PNewDeck extends Component {

    render() {
        return (
            <NewDeckForm />
        );
    }
}

const styles = StyleSheet.create({
});