import { createStore, combineReducers, applyMiddleware } from 'redux'
import ContactReducer from './Reducers/ContactReducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  contactReducer: ContactReducer,
  })
  const store = createStore(rootReducer ,applyMiddleware(thunk))

  export default store;