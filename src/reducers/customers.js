import { FETCH_CUSTOMERS } from '../actions/types';

export default function( state = [], action) {
  switch (action.type) {
    case FETCH_CUSTOMERS:
      return [ ...state, ...action.payload ]
  }

  return state;
}
