export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const INCREASE_NUMBER = 'INCREASE_NUMBER';
export const MULTIPLY = 'MULTIPLY';
export const MULTIPLY_SAGA = 'MULTIPLY_SAGA';
export interface CounterActionType {
  type: string;
  payload?: number;
}

export const increase = () => ({
  type: INCREASE,
});
export const decrease = () => ({
  type: DECREASE,
});
export const increaseNumber = (value: number) => ({
  type: INCREASE_NUMBER,
  payload: value,
});
export const multiply = (value: number) => ({
  type: MULTIPLY,
  payload: value,
});
