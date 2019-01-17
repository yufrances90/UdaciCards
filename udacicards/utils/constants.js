export const DECKS = ['React', 'Javascript'];

export const QUESTIONS = {
    'React': [
        {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
        },
        {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
        }
    ],
    'Javascript': [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
    ]
}

export const STORAGE_KEYS = {
    QUESTIONS: 'QUESTIONS',
    DECKS: 'DECKS',
    CURRENT_USER: 'CURRENT_USER'
}