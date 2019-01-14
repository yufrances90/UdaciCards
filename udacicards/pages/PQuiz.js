import React, { Component } from 'react';
import { 
    StyleSheet, 
    View,
    ActivityIndicator
} from 'react-native';

import globalStyles from '../styles/styles';

import { getAllQuestionData } from '../utils/utility';

import Quiz from '../components/Quiz';

export default class PQuiz extends Component {

    state = {
        index: 0,
        questions: {}
    }

    componentDidMount() {

        getAllQuestionData().then(data => {

            const dataObj = JSON.parse(data);

            this.setState({
                questions: dataObj
            });
        });
    }

    render() {

        const { navigation } = this.props;

        const { index, questions } = this.state;

        if (Object.keys(questions).length === 0) {
            return <ActivityIndicator />
        }

        const qids = navigation.getParam("qids");

        console.log(qids[index]);

        console.log(questions);

        const selectedQuestion = questions[qids[index]];

        return (
            <View style={globalStyles.centeredContainer}>
                <Quiz question={selectedQuestion} />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});