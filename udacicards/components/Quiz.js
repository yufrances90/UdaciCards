import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';

import globalStyles from '../styles/styles';

import QVHeader from './QVHeader';
import QVFooter from './QVFooter';
import QuizB from './QuizB';
import QuizA from './QuizA';

export default class Quiz extends Component {

    state = {
        side: 0
    }

    handleChangeSide() {

        const { side } = this.state; 

        if (side === 0) {
            this.setState({
                side: 1
            });
        } else {
            this.setState({
                side: 0
            });
        }
    }

    render() {

        const { 
            question, 
            totalNumQuestions, 
            qIndex,
            handleClickNextQuestion,
            // handleClickPrevQuestion, 
            handleClickCorrectButton
        } = this.props;

        if (!question) {
            return <ActivityIndicator />
        }

        const { side } = this.state;

        console.log("Selected Question: ", question);

        return (
            <View>
                {/* <QVHeader 
                    handleClickNextQuestion={handleClickNextQuestion}
                    handleClickPrevQuestion={handleClickPrevQuestion}
                /> */}
                <View style={styles.container}>
                    <Text style={styles.numbers}>
                        {qIndex + 1} / {totalNumQuestions}
                    </Text>
                    {
                        side === 0? 
                        <QuizA 
                            question={question.question}
                            handleChangeSide={this.handleChangeSide.bind(this)} 
                        /> :
                        <QuizB
                            answer={question.answer}
                            handleChangeSide={this.handleChangeSide.bind(this)} 
                        />
                    }
                    <QVFooter
                        handleClickCorrectButton={handleClickCorrectButton} 
                        handleClickNextQuestion={handleClickNextQuestion}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...globalStyles.centeredContainer,
        flexWrap: 'wrap' 
    },
    numbers: {
        fontSize: 12,
        color: '#d8d8d8',
        fontWeight: '500'
    }
});