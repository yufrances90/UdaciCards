import { 
    QUESTIONS, 
    DECKS 
} from './constants';

import {
    saveItem,
    getItem
} from './storageUtils';

import { STORAGE_KEYS } from './constants';

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

            const questionObj = {
                id: generateUID(),
                question: question.question,
                answer: question.answer,
                deck
            }

            questions[questionObj.id] = questionObj;
            qids.push(questionObj.id);
        });

        const deckObj = {
            id: generateUID(),
            title: deck,
            qids
        };

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
 