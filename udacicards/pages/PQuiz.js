import React, { Component } from 'react';
import { 
    StyleSheet, 
    View,
    ActivityIndicator,
    TouchableOpacity,
    Text
} from 'react-native';

import globalStyles from '../styles/styles';

import { getAllQuestionData } from '../utils/utility';

import Quiz from '../components/Quiz';
import QuizEnd from '../components/QuizEnd';

export default class PQuiz extends Component {

    state = {
        index: 0,
        questions: {},
        qids: [],
        numCorrectQuestions: 0,
        score: 0
    }

    componentDidMount() {

        getAllQuestionData().then(data => {

            const dataObj = JSON.parse(data);

            this.setState({
                questions: dataObj
            });
        }).then(() => {

            const { navigation } = this.props;

            const qids = navigation.getParam("qids");

            this.setState({
                qids
            });
        });
    }

    handleClickNextQuestion(event) {
        
        const { 
            index, 
            qids
        } = this.state;

        const totalNumQuestions = qids.length;

        if (index + 1 >= totalNumQuestions) {
            this.setState({
                isEndOfQuiz: true
            })
            return;
        }

        this.setState(prevState => ({
            index: prevState.index+1
        }));
    }

    handleClickPrevQuestion(event) {

        const { index } = this.state;

        if (index <= 0) {
            alert("Error: This is the first question!");
            return;
        }

        this.setState(prevState => ({
            index: prevState.index-1
        }));
    }

    handleClickCorrectButton(event) {

        this.setState(prevState => ({
            numCorrectQuestions: prevState.numCorrectQuestions + 1,
            isEndOfQuiz: this.isEndOfQuiz()
        }));

        this.handleClickNextQuestion(event);
    }

    isEndOfQuiz() {

        const { index, qids } = this.state;

        return (index + 1 >= qids.length);
    }

    render() {
            
        const { 
            index, 
            questions, 
            qids,
            isEndOfQuiz,
            numCorrectQuestions 
        } = this.state;

        const {
            navigation
        } = this.props;

        if (Object.keys(questions).length === 0) {
            return <ActivityIndicator />
        }

        const selectedQuestion = questions[qids[index]];

        const totalNumQuestions = qids.length;

        return (
            <View style={globalStyles.centeredContainer}>
                {
                    !isEndOfQuiz && 
                    <Quiz 
                        question={selectedQuestion}
                        totalNumQuestions={totalNumQuestions}
                        qIndex={index}
                        handleClickNextQuestion={this.handleClickNextQuestion.bind(this)} 
                        handleClickPrevQuestion={this.handleClickPrevQuestion.bind(this)}
                        handleClickCorrectButton={this.handleClickCorrectButton.bind(this)}
                    />
                }
                {
                    isEndOfQuiz && 
                    <QuizEnd 
                        navigation={navigation}
                        qids={qids}
                        score={(numCorrectQuestions / totalNumQuestions) * 100}
                    />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({

});