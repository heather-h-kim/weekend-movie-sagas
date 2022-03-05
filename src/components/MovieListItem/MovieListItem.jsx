import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useState} from 'react';

function MovieListItem ( {movie}) {
    const history = useHistory();
    const dispatch = useDispatch();
   

    const handleClick = () => {
        console.log('movie is', movie);
        dispatch({type: 'FETCH_THIS_MOVIE', payload: movie.id});
        dispatch({type: 'FETCH_THIS_MOVIE_GENRES', payload: movie.id});
        history.push('/details')
    }


    return (
        <div>
            <h3>{movie.title}</h3>
            <img onClick={handleClick} src={movie.poster} alt={movie.title}/>
        </div>
    )
}

export default MovieListItem;