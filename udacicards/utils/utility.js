import md5 from 'md5';

import { 
    QUESTIONS, 
    DECKS,
    STORAGE_KEYS 
} from './constants';
import {
    saveItem,
    getItem,
    mergeItem
} from './storageUtils';

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

export const generateAndSaveInitialData = () => {

    const { decks, questions } = generateInitialData();

    saveItem(STORAGE_KEYS.DECKS, decks);
    saveItem(STORAGE_KEYS.QUESTIONS, questions);
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

    getAllDeckData().then(data => {
        
        const decks = JSON.parse(data);

        decks[newDeck.title] = newDeck;

        console.log("Updated decks: ", decks);

        mergeItem(STORAGE_KEYS.DECKS, decks);
    });
}

export const updateQuestionData = (updatedQuestions) => {
    return mergeItem(STORAGE_KEYS.QUESTIONS, updatedQuestions);
}