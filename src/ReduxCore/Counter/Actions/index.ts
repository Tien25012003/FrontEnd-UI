export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const INCREASE_NUMBER = 'INCREASE_NUMBER';
export interface CounterActionType {
  type: string;
  payload: string;
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
