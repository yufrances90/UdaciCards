import React, { Component, Fragment } from 'react';
import { 
    StyleSheet, 
    View,
    Text, 
    TouchableOpacity,
    AlertIOS
} from 'react-native';

import globalStyles from '../styles/styles';

export default class QuizEnd extends Component {

    state = {
        finalScore: 80
    }

    handleRestartButtonClick(event) {
        
        const { navigation, qids } = this.props;

        AlertIOS.alert(
            'Restart Quiz',
            'Are you sure?',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'Continue',
                onPress: () => navigation.push("QuizV", {
                    qids
                }),
              },
            ],
        );
    }

    handleBackButtonClick(event) {
        AlertIOS.alert(
            'Return to Deck List',
            'Are you sure?',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'Continue',
                onPress: () => this.props.navigation.navigate("Home"),
              },
            ],
        );
    }

    render() {

        const { finalScore } = this.state;

        return (
            <View>
                <View>
                    <Text style={styles.scoreText}>
                    Your Final Score
                    </Text>
                    <Text style={styles.scoreTextI}>
                        {finalScore}%
                    </Text>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.restartBtn}
                        onPress={this.handleRestartButtonClick.bind(this)}
                    >
                        <Text style={globalStyles.buttonText}>
                            Restart Quiz
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.backBtn}
                        onPress={this.handleBackButtonClick.bind(this)}
                    >
                        <Text style={globalStyles.buttonText}>
                            Back To Home
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scoreText: {
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: 'center'
    },
    scoreTextI: {
        fontWeight: 'bold',
        fontSize: 80,
        textAlign: 'center',
        color: '#ff0000'
    },
    restartBtn: {
        ...globalStyles.button,
        marginTop: 40
    },
    backBtn: {
        ...globalStyles.button,
        marginTop: 10
    }
});