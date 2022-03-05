
import { useEffect, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Details () {
    const history = useHistory();
    const thisMovie = useSelector(store => store.thisMovie);
    const handleClick = () => {
        history.push('/');
    }
    
   
    return(
        <div>

            <h3>{thisMovie.title}</h3>
            <img src={thisMovie.poster} />
            <p>DESCRIPTION: {thisMovie.description}</p>
            <p>GENRES</p>
            <ul>
                {thisMovie.genres.map((genre, i) => (
                    <li key={i}>{genre.name}</li>
                ))}
            </ul>

            <button onClick={handleClick}>Back to List</button>
           
        </div>
    )
}

export default Details;