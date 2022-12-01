import React, { useState } from 'react';
import styles from './Counter.module.css';
import { connect } from 'react-redux';
import { actionCreators } from './store/';
import DashboardLayout from '../../common/dashboard';

function Counter(props) {
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <DashboardLayout>
      <div className={styles.row}>
        <button className={styles.button} aria-label="Increment value" onClick={() => props.increment()}>
          +
        </button>

        <span className={styles.value}>{props.value}</span>

        <button className={styles.button} aria-label="Decrement value" onClick={() => props.decrement()}>
          -
        </button>
      </div>

      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button className={styles.button} onClick={() => props.incrementByAmount(Number(incrementAmount) || 0)}>
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => props.incrementByAmountAsync(Number(incrementAmount) || 0)}
        >
          Add Async
        </button>
      </div>
    </DashboardLayout>
  );
}

const mapStateToProps = (state) => {
  return {
    value: state.getIn(['counter', 'value']),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment() {
      dispatch(actionCreators.increment());
    },
    decrement() {
      dispatch(actionCreators.increment());
    },
    incrementByAmount(incrementAmount) {
      dispatch(actionCreators.incrementByAmount(incrementAmount));
    },
    incrementByAmountAsync(incrementAmount) {
      setTimeout(() => {
        dispatch(actionCreators.incrementByAmount(incrementAmount));
      }, 1000);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
