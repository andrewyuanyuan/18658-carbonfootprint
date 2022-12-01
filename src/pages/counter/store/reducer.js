import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  value: 0,
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.INCREMENT:
      return state.set('value', state.get('value') + 1);
    case constants.DECREMENT:
      return state.set('value', state.get('value') - 1);
    case constants.INCREMENT_BY_AMOUNT:
      return state.set('value', state.get('value') + action.value);
    default:
      return state;
  }
};

export default reducer;
