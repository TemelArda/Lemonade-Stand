import { FETCH_DATA } from '../actions/types';

const initialState = {
    allData: []
}

export default function(state = initialState, action){
    switch (action.type) {
        case FETCH_DATA:
            return{
                ...state,
             allData:[...state.allData, action.payload]
            }
        
        default:
          return state;
      }
}