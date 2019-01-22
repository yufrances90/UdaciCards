import md5 from 'md5';

import { 
    QUESTIONS, 
    DECKS,
    STORAGE_KEYS,
    NOTIFICATION_DETAILS 
} from './constants';
import {
    saveItem,
    getItem,
    mergeItem,
    removeItem
} from './storageUtils';
import {
    clearLocalNotification,
    setLocalNotification
} from './pushNotifications';

export const generateAndSaveInitialData = () => {

    const { decks, questions } = generateInitialData();

    saveItem(STORAGE_KEYS.DECKS, decks);
    saveItem(STORAGE_KEYS.QUESTIONS, questions);

    const userObj = {
        timestamp: new Date(),
        numQuizTaken: 0
    }

    saveItem(STORAGE_KEYS.CURRENT_USER, userObj);
}

export const createNewDeck = (deckTitle) => {
    return {
        id: generateUID(),
        title: deckTitle,
        qids: []
    }
}

export const createNewQuestion = (question, deckTitle) => {

    let questionObj =  {
        question: question.question,
        answer: question.answer,
        deck: deckTitle
    }

    const id = generateQuestionID(questionObj);

    return {
        ...questionObj,
        id
    }
}

export const getAllDeckData = () => {
    return getItem(STORAGE_KEYS.DECKS);
}
 
export const getAllQuestionData = () => {
    return getItem(STORAGE_KEYS.QUESTIONS);
}

export const updateDeckData = (newDeck) => {

    return getAllDeckData().then(data => {
        
        const decks = JSON.parse(data);

        decks[newDeck.title] = newDeck;

        console.log("Updated decks: ", decks);

        mergeItem(STORAGE_KEYS.DECKS, decks);
    });
}

export const updateQuestionData = (newQuestion) => {

    const deckTitle = newQuestion.deck;

    return getAllQuestionData().then(data => {

        const questions = JSON.parse(data);

        questions[newQuestion.id] = newQuestion;

        console.log("Updated questions: ", questions);

        return mergeItem(STORAGE_KEYS.QUESTIONS, questions).then(() => {

            return getAllDeckData().then(data => {

                let decks = JSON.parse(data);
    
                let qids = decks[deckTitle].qids;
    
                qids.push(newQuestion.id);
    
                decks = {
                    ...decks,
                    [deckTitle]: {
                        ...decks[deckTitle],
                        qids
                    }
                }
    
                console.log("Updated decks after adding new question: ", decks);
    
                return mergeItem(STORAGE_KEYS.DECKS, decks).then(() => {
                    return decks;
                });
            });
        });
    });
}

export const updateUserData = () => {

    return getItem(STORAGE_KEYS.CURRENT_USER).then(data => {

        let user = JSON.parse(data);

        const prevTimestamp = new Date(user.timestamp);

        const currTimestamp = new Date();

        const dayDiffs = calculateDateDifference(currTimestamp, prevTimestamp);

        if (dayDiffs == 0) {
            user = {
                numQuizTaken: user.numQuizTaken + 1,
                timestamp: currTimestamp
            }
        } else {
            user = {
                numQuizTaken: 1,
                timestamp: currTimestamp
            }
        }

        console.log("Updated User: ", user);

        return mergeItem(STORAGE_KEYS.CURRENT_USER, user).then(() => {
            return user;
        });
    })
}

export const getNotificationKey = () => {
    return getItem(STORAGE_KEYS.NOTIFICATION_KEY);
}

export const removeNotificationKey = () => {
    return removeItem(STORAGE_KEYS.NOTIFICATION_KEY);
}

export const setNotificationKey = (valueObj) => {
    return saveItem(STORAGE_KEYS.NOTIFICATION_KEY, valueObj);
} 

export const setLocalNotification = () => {
    setLocalNotification(
        NOTIFICATION_DETAILS.title, 
        NOTIFICATION_DETAILS.body
    );
}

export const clearLocalNotification = () => {
    clearLocalNotification();
}

/**
 * Private methods
 */

const calculateDateDifference = (date1, date2) => {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    return parseInt((timeDiff / (1000 * 3600 * 24)).toFixed(0)); 
}

const generateUID  = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

const generateQuestionID = (object) => {
    return md5(JSON.stringify(object));
}

const generateInitialData = () => {

    let questions = {};
    let decks = {}

    DECKS.forEach(deck => {

        const questionsByDeck = QUESTIONS[deck];

        let qids = [];

        questionsByDeck.forEach(question => {

            let questionObj = createNewQuestion(question, deck);

            questions[questionObj.id] = questionObj;
            qids.push(questionObj.id);
        });

        let deckObj = createNewDeck(deck);

        deckObj = {
            ...deckObj,
            qids
        }

        decks[deck] = deckObj;
    });

    console.log("Generated decks: ", decks);
    console.log("Generated questions: ", questions);

    return {
        decks,
        questions
    };
}