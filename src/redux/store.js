import {createStore,combineReducers,applyMiddleware} from 'redux'

import thunk from 'redux-thunk';
import { getAllNumber, getSelectedNumber } from './reducers/numReducer';


const rootReducer = combineReducers({
  selNumber:getSelectedNumber,
    numReducer:getAllNumber,
    
  
  
  
  })
  

  let middlware = [thunk]
  
  
  export const store = createStore(rootReducer,applyMiddleware(...middlware))