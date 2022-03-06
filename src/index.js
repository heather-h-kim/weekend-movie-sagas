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
import fetchAllMovies from './sagas/fetchAllMovies.saga';
import fetchThisMovie from './sagas/fetchThisMovie.saga';
import fetchThisMovieGenres from './sagas/fetchThisMovieGenres.saga';
import fetchGenres from './sagas/fetchGenres.saga';
import addMovie from './sagas/addMovie.saga';
import editMovie from './sagas/editMovie.saga';


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_THIS_MOVIE', fetchThisMovie);
    yield takeEvery('FETCH_THIS_MOVIE_GENRES', fetchThisMovieGenres);
    yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('ADD_MOVIE', addMovie);
    yield takeEvery('EDIT_MOVIE', editMovie);
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
