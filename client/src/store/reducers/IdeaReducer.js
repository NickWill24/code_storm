// import types
// define istate
// define reduces

import { GET_IDEAS, ADD_DESCRIPTION, ADD_TITLE, ADD_STACKS, CREATE_IDEA, REMOVE_IDEA, GET_IDEA, NUMBER_OF_LIKES, SELECT_IDEA } from "../types"

const iState={
    ideas:[],
    title:'',
    stacks: [],
    description:'',
    numberOfLikes: 0,
    getIdea:[],
    selectIdea: 0,
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
            const targetId = state.idea[action.payload.index]
            targetId.numberOfLikes++
            state.idea.splice(action.payload.index, 1, targetId)
            return{...state}
        case SELECT_IDEA:
            return{...state, selectIdea: action.payload}
        case GET_IDEAS:
            return{...state, ideas: action.payload}
        case  GET_IDEA:
            return{...state, idea: action.payload}
            default:
                return{...state }
    }
}
export default IdeaReducers