import { combineReducers } from 'redux-immutable';
import { reducer as counterReducer } from '../pages/counter/store';
import { reducer as loginReducer } from '../pages/login/store';

const reducer = combineReducers({
  counter: counterReducer,
  login: loginReducer,
});

export default reducer;
