
import { useEffect, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

function Details() {
    const history = useHistory();
    const thisMovie = useSelector(store => store.thisMovie);
    const handleClick = () => {
        history.push('/');
    }
    const editMovie = () => {
        history.push('/edit_movie');
    }


    return (
        <div>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{width: 200, height: 200}}>
                        <img src={thisMovie.poster} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                {thisMovie.title}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                <p>Description: {thisMovie.description}</p>
                                GENRES:<ul>
                                {thisMovie.genres.map((genre, i) => (
                                    <li key={i}>{genre.name}</li>
                                ))}
                            </ul>
                            </Typography>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                <button onClick={handleClick}>Back to List</button>
                                <button onClick={editMovie}>Edit this movie</button>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
              
                {/* <h3>{thisMovie.title}</h3> */}
                {/* <img src={thisMovie.poster} /> */}
                {/* <p>DESCRIPTION: {thisMovie.description}</p> */}
                {/* <p>GENRES</p>
            <ul>
                {thisMovie.genres.map((genre, i) => (
                    <li key={i}>{genre.name}</li>
                ))}
            </ul> */}

                {/* <button onClick={handleClick}>Back to List</button> */}
            

        </div>
    )
}

export default Details;