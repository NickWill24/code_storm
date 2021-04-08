import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import IdeaReducer from './reducers/IdeaReducer'
import thunk from 'redux-thunk'

let middleware
if (process.env.NODE_ENV === 'production') {
  middleware = applyMiddleware(thunk)
} else {
  middleware = composeWithDevTools(applyMiddleware(thunk))
}

const store = createStore(
  combineReducers({
    ideaState: IdeaReducer
  }),
  middleware
)

export default store
