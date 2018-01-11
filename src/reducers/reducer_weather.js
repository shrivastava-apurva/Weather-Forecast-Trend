import {FETCH_WEATHER} from '../actions/index';
export default function (state = [], action){

  switch(action.type){
    case FETCH_WEATHER:
    //never mutate your state with state.push instead add to the existing state
  //  return state.concat([action.payload.data]);
    //ES6 version
    return [action.payload.data,...state];
  }
  return state;
}
