import {
  DECREASE,
  INCREASE,
  INCREASE_NUMBER,
  CounterActionType,
} from '../Actions';

const CounterReducer = (state = 0, action: CounterActionType) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    case INCREASE_NUMBER:
      return state + action.payload;
    default:
      return state;
  }
};
export default CounterReducer;
