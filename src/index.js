import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_THIS_MOVIE', fetchThisMovie);
    yield takeEvery('FETCH_THIS_MOVIE_GENRES', fetchThisMovieGenres);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

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


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

//Used to store one movie
const thisMovie = (state = {
    id: '',
    title: '',
    poster: '',
    description: '',
    genres: []
}, action) => {
    switch (action.type) {
        case 'SET_THIS_MOVIE':
        console.log('this movie is', action.payload);
            return {...state, 
                id: action.payload[0].id, 
                title: action.payload[0].title,
                poster: action.payload[0].poster,
                description: action.payload[0].description,
            };
        case 'ADD_GENRES':
            return {...state,
                genres: action.payload
            }
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        thisMovie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
