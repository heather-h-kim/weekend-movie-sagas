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
import movies from './reducers/movies.reducer.js';
import thisMovie from './reducers/thisMovie.reducer.js';
import genres from './reducers/genres.reducer.js';

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
