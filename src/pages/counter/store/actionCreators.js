import * as constants from './constants';

export const increment = () => ({
  type: constants.INCREMENT,
});

export const decrement = () => ({
  type: constants.DECREMENT,
});

export const incrementByAmount = (incrementAmount) => ({
  type: constants.INCREMENT_BY_AMOUNT,
  value: incrementAmount,
});
