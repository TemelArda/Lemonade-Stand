import { FETCH_DATA } from './types';

export const fetchData = data =>{
    console.log(data);
    return{
        type: FETCH_DATA,
        payload: data
    }
}