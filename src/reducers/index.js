import { combineReducers } from 'redux';

import customersReducer from './customers';
import cardsReducer from './cards';


const rootReducer = combineReducers({
  customers: customersReducer,
  cards: cardsReducer
});

export default rootReducer;
