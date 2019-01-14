export const  QUESTION_ACTIONS = Object.freeze({
    GET_ALL_QUESTIONS: Symbol("get_all_questions"),
    ADD_NEW_QUESTION: Symbol("add_new_question"),
    GET_A_QUESTION: Symbol("get_a_question")
});

export const getAllQuestions = (questions) => {
    return {
        type: QUESTION_ACTIONS.GET_ALL_QUESTIONS,
        questions
    };
}

export const getAQuestion = (question) => {
    return {
        type: QUESTION_ACTIONS.GET_A_QUESTION,
        question
    }
}

export const addNewQuestion = (question) => {
    return {
        type: QUESTION_ACTIONS.ADD_NEW_QUESTION,
        question
    }
}