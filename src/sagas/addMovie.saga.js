import axios from 'axios';
import {put} from 'redux-saga/effects';

//post a new movie to the database
function* addMovie(action){
    console.log('in addMovie');
    console.log('action.payload is', action.payload);
    
    try{
        yield axios.post('/api/movie', action.payload)
        yield put({type:'FETCH_MOVIES'});
    }catch (error) {
        console.log('Error posting a movie');
    }
}

export default addMovie;