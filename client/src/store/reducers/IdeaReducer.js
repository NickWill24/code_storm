// import types
// define istate
// define reduces

import {
  GET_IDEAS,
  ADD_DESCRIPTION,
  ADD_TITLE,
  ADD_STACKS,
  CREATE_IDEA,
  REMOVE_IDEA,
  GET_IDEA,
  NUMBER_OF_LIKES,
  SELECT_IDEA,
  IS_SUBMITED
} from '../types'

const iState = {
  ideas: [],
  title: '',
  stacks: [],
  description: '',
  numberOfLikes: 0,
  getIdea: [],
  selectIdea: 1,
  isSubmited: false
}
const IdeaReducers = (state = iState, action) => {
  switch (action.type) {
    case CREATE_IDEA:
      return { ...state, title: '', description: '' }
    case REMOVE_IDEA:
      const deleted = state.ideas.filter((idea) => idea.id === action.payload)
      let remaining = state.ideas.filter((idea) => idea.id !== deleted[0].id)
      return {
        ...state,
        ideas: [...remaining]
      }
    case ADD_TITLE:
      return { ...state, title: action.payload }
    case ADD_STACKS:
      return { ...state, stacks: action.payload }
    case ADD_DESCRIPTION:
      return { ...state, description: action.payload }
    case NUMBER_OF_LIKES:
      const targetId = state.ideas.filter((idea) => idea.id === action.payload)
      targetId[0].number_of_like++
      //   state.ideas.splice(action.payload.index, 1, targetId)
      return { ...state }
    case SELECT_IDEA:
      return { ...state, selectIdea: action.payload }
    case IS_SUBMITED:
      return { ...state }
    case GET_IDEAS:
      return { ...state, ideas: action.payload }
    case GET_IDEA:
      return { ...state, getIdea: action.payload }
    default:
      return { ...state }
  }
}
export default IdeaReducers
