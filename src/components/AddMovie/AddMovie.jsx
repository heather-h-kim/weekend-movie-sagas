import {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';

function AddMovie(){
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genre_id, setGenre_id] = useState('');
    const dispatch = useDispatch();
    const allGenres = useSelector(store => store.genres)

    useEffect(()=>{
        console.log('AddMovie component mounted');
        dispatch({type:'FETCH_GENRES'});

    },[])

    const handleSubmit = (event) => {
        console.log('in handle submit');
        event.preventDefault();
        console.log('title is', title);
        console.log('genre is', genre);
        console.log('genre_id is', genre_id);

        const newMovie = {
            title: title,
            poster: poster,
            description: description,
            genre_id: genre_id
        };

        dispatch({type:'ADD_MOVIE', payload: newMovie});
        console.log('submitting newMovie', newMovie);
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Add your favorite movies</h1>
            <input
                type="text"
                placeholder="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <input
                type="text"
                placeholder="poster"
                value={poster}
                onChange={(event) => setPoster(event.target.value)}
            /><br></br>
        
            <label>Movie Description:
            <textarea 
                rows="5"
                cols="100"
                placeholder="movie description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            </label>
            <br></br>
            <label>Choose genres:
            <select 
                value={genre_id}
                onChange={(event) => {
                    setGenre_id(event.target.value);
                }}
             >
                {allGenres.map(genre => (
                    <option key={genre.id} value={genre.id}>{genre.name}</option>
                ))}
            </select>
            </label>
         
            <button type='submit'>Submit</button>        
        </form>
    )
}

export default AddMovie;