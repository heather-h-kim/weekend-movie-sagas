import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import './MovieListItem.css';


function MovieListItem({ movie }) {
    const history = useHistory();
    const dispatch = useDispatch();


    const handleClick = () => {
        console.log('movie is', movie);
        dispatch({ type: 'FETCH_THIS_MOVIE', payload: movie.id });
        dispatch({ type: 'FETCH_THIS_MOVIE_GENRES', payload: movie.id });
        history.push('/details')
    }


    return (
        <div className="container">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={handleClick}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={movie.poster}
                        alt={movie.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {movie.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            {/* <h3>{movie.title}</h3>
            <img onClick={handleClick} src={movie.poster} alt={movie.title} /> */}

        </div>
    )
}

export default MovieListItem;