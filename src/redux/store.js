import {createStore,combineReducers,applyMiddleware} from 'redux'

import thunk from 'redux-thunk';
import { getAllNumber, getSelectedNumber } from './reducers/numReducer';


const rootReducer = combineReducers({
    numReducer:getAllNumber,
    selNumber:getSelectedNumber
  
  
  
  })
  
  const initialState={
  
  }
  
  let middlware = [thunk]
  
  
  export const store = createStore(rootReducer,initialState,applyMiddleware(...middlware))