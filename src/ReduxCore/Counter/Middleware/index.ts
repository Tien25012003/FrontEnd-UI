import {ThunkAction} from 'redux-thunk';
import {increaseNumber} from '../Actions';
import {AnyAction} from 'redux';
export default function fetchData(): ThunkAction<
  void,
  number,
  unknown,
  AnyAction
> {
  //   try {
  //     const res = await fetch('https://dummyjson.com/products');
  //     return res.json();
  //   } catch (error) {
  //     return error;
  //   }
  return async function (dispatch: any) {
    return await fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(json => dispatch(increaseNumber(json.limit)));
  };
}
