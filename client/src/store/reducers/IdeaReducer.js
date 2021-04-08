// import types
// define istate
// define reduces

import { GET_IDEAS, ADD_DESCRIPTION, ADD_TITLE, ADD_STACKS, CREATE_IDEA, REMOVE_IDEA, CREATE_IDEA, GET_IDEA, NUMBER_OF_LIKES } from "../types"

const iState={
    ideas:[],
    title:'',
    stacks: [],
    description:'',
    numberOfLikes: 0,
    getIdea:[]
}
const IdeaReducers= (state= iState, action) => {
    switch(action.type) {
        case CREATE_IDEA: 
            return{...state, title:'', description:''}
        case REMOVE_IDEA:
            return {...state}
        case ADD_TITLE:
            return{...state, title: action.payload}
        case ADD_STACKS:
            return{...state, stacks: action.payload}
        case ADD_DESCRIPTION:
            return{...state, description: action.payload}
        case NUMBER_OF_LIKES:
            return{...state,  numberOfLikes: action.payload}
        case GET_IDEAS:
            return{...state, ideas: action.payload}
        case  GET_IDEA:
            return{...state, idea: action.payload}
            default:
                return{...state }
    }
}
export default IdeaReducers