import axios from 'axios';
import {put} from 'redux-saga/effects';

//get all genres for the dropdown
function* fetchGenres() {
    try{
        const allGenres = yield axios.get('/api/genre');
        console.log('all genres are', allGenres.data);
        yield put({type:'SET_GENRES', payload: allGenres.data})
    } catch(error){
        console.log('Error getting all genres', error);
        
    }
}

export default fetchGenres;