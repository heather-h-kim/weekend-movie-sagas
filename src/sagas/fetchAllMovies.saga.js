import axios from 'axios';
import {put} from 'redux-saga/effects';

// get all movies from the DB
function* fetchAllMovies() {
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }        
}

export default fetchAllMovies;
