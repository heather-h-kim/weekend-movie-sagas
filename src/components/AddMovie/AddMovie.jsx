import {useState} from 'react';
function AddMovie(){
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');

    return(
        <form>
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
            />
            <label for="description">Movie Description</label>
            <textarea 
                id="description" 
                rows="5"
                cols="100"
                placeholder="movie description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <label for="genres">Choose genres</label>
            <select name="genres" id="genres">
                
            </select>
        
        </form>
    )
}

export default AddMovie;