import { 
    QUESTIONS, 
    DECKS 
} from './constants';

import {
    saveItem,
    getItem
} from './storageUtils';

import { STORAGE_KEYS } from './constants';

import md5 from 'md5';

const generateUID  = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

const generateInitialData = () => {

    let questions = {};
    let decks = {}

    DECKS.forEach(deck => {

        const questionsByDeck = QUESTIONS[deck];

        let qids = [];

        questionsByDeck.forEach(question => {

            let questionObj = {
                question: question.question,
                answer: question.answer,
                deck
            }


            const id = md5(JSON.stringify(questionObj));

            questionObj = {
                ...questionObj,
                id
            }

            questions[questionObj.id] = questionObj;
            qids.push(questionObj.id);
        });

        let deckObj = {
            title: deck,
            qids
        };

        const id = md5(JSON.stringify(deckObj));

        deckObj = {
            ...deckObj,
            id
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
 

export const getAllDeckData = () => {
   return getItem(STORAGE_KEYS.DECKS);
}

export const getAllQuestionData = () => {
    return getItem(STORAGE_KEYS.QUESTIONS);
}