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
        isEndOfQuiz: false
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
        
        const { index, qids } = this.state;

        const totalNumQuestions = qids.length;

        if (index + 1 >= totalNumQuestions) {
            
            this.setState({
                isEndOfQuiz: true
            });

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

    render() {
            
        const { 
            index, 
            questions, 
            qids,
            isEndOfQuiz 
        } = this.state;

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
                    />
                }
                {
                    isEndOfQuiz && 
                    <QuizEnd />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({

});