import axios from 'axios';
import {put} from 'redux-saga/effects';

//get genres of the selected movie
function* fetchThisMovieGenres(action) {
    try{
        console.log('in fetchThisMovieGenres');
        const genres = yield axios.get(`api/genre/${action.payload}`)
        console.log('genres are', genres.data);
        yield put({type: 'ADD_GENRES', payload: genres.data})
        
    } catch(error){
        console.log('Error getting genres of the selected movie', error);
    }
}

export default fetchThisMovieGenres;
