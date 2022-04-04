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
        history.push(`/details/${movie.id}`)
    }
    //{() => handleClick(movie.id)}
    //useParams?

    return (
        <div>
            <Card sx={{ maxWidth: 320, height: 380 }}>
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


        </div>
    )
}

export default MovieListItem;