import axios from 'axios';
import {put} from 'redux-saga/effects';

//edit the selected movie 
function* editMovie(action){
    console.log('in editMovie, action.payload is', action.payload);
    try{
        yield axios.put('/api/movie/', action.payload);
        yield put({type:'FETCH_MOVIES'});
    } catch(error) {
        console.log('Error editing a movie');
    }
}

export default editMovie;