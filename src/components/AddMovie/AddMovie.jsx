import {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';

function AddMovie(){
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
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

        const newMovie = {
            title: title,
            poster: poster,
            description: description
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
            <div>
            <label htmlFor="description">Movie Description</label>
            <textarea 
                id="description" 
                rows="5"
                cols="100"
                placeholder="movie description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            </div><br></br>
            <div>
            <label htmlFor="genres">Choose genres:</label>
            <select 
             name="genres" 
             id="genres"
             value={genre}
             onChange={(event) => setGenre(event.target.value)}>
                {allGenres.map(genre => (
                    <option key={genre.id} value={genre.name}>{genre.name}</option>
                ))}
            </select>
            </div>
            <button type='submit'>Submit</button>        
        </form>
    )
}

export default AddMovie;