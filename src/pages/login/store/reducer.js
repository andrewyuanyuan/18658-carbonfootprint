import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  modalType: null,
  modalProps: {},
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.SHOW_MODAL:
      return state.merge({
        modalType: action.modalType,
        modalProps: action.modalProps,
      });
    case constants.HIDE_MODAL:
      return defaultState;
    default:
      return state;
  }
};

export default reducer;
