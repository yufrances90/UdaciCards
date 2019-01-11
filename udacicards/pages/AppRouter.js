import { createStackNavigator, createAppContainer } from "react-navigation";

import PDeckList from './PDeckList';
import PIndividualDeck from './PIndividualDeck';
import PNewDeck from './PNewDeck';
import PNewQuestion from './PNewQuestion';
import PQuiz from './PQuiz';

const AppNavigator = createStackNavigator({
    Home: {
      screen: PDeckList,
    },
    IDeck: {
      screen: PIndividualDeck,
    },
    NDeck: {
      screen: PNewDeck,
    },
    NQuestion: {
      screen: PNewQuestion
    },
    QuizV: {
      screen: PQuiz
    }
  }, {
      initialRouteName: 'Home',
  });
  
  export default createAppContainer(AppNavigator);