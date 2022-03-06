import axios from 'axios';
import {put} from 'redux-saga/effects';

//get details of the selected movie
function* fetchThisMovie(action){
    try{
        console.log('in fetchThisMovie');
        console.log('id is', action.payload);
        const movie = yield axios.get(`/api/movie/${action.payload}`)
        console.log('get one movie', movie.data);
        yield put({type: 'SET_THIS_MOVIE', payload: movie.data});
    } catch (error) {
        console.log('Error getting the selected movie', error);
    }
}

export default fetchThisMovie;