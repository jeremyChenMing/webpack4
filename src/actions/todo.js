import * as types from '../constants/ActionTypes';



export function plus(value = {}){
  return {
      type: types.INCREMENT,
      value: value
  }
}
// 这样写在里面可以操作异步函数，而不是只能是一个对象的写法，回归老套的写法。
// 流行的写法时dva 那样的一个effets副作用里面去执行
// export function plus(value = {}) {
//   return dispatch => {
//     dispatch({
//       type: types.INCREMENT,
//       value: value
//     })
//   }
// }

export function reduce(value = {}){
    return {
        type: types.DECREMENT,
        value: value
    }
}