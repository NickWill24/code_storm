import {
  CreateIdea,
  GetIdea,
  GetIdeas,
  RemoveIdea
} from '../../services/IdeaServices'
import {
  ADD_TITLE,
  ADD_DESCRIPTION,
  ADD_STACKS,
  CREATE_IDEA,
  GET_IDEA,
  GET_IDEAS,
  REMOVE_IDEA
} from '../types'

export const addTitle = (formValues) => ({
  type: ADD_TITLE,
  payload: formValues
})

export const addDescription = (formValues) => ({
  type: ADD_DESCRIPTION,
  payload: formValues
})

export const addStacks = (formValues) => ({
  type: ADD_STACKS,
  payload: formValues
})

export const getIdeas = () => async (dispatch) => {
  try {
    const ideas = await GetIdeas()
    dispatch({
      type: GET_IDEAS,
      payload: ideas
    })
  } catch (error) {}
}

export const getIdea = (id) => async (dispatch) => {
  try {
    const idea = await GetIdea(id)
    dispatch({
      type: GET_IDEA,
      payload: idea
    })
  } catch (error) {}
}

export const createIdea = (formValues) => async (dispatch) => {
  try {
    const newIdea = await CreateIdea(formValues)
    dispatch({
      type: CREATE_IDEA
    })
    return newIdea
  } catch (error) {
    throw error
  }
}

export const removeIdea = (id) => async (dispatch) => {
  try {
    const idea = await RemoveIdea(id)
    dispatch({
      type: REMOVE_IDEA
    })
  } catch (error) {
    throw error
  }
}
