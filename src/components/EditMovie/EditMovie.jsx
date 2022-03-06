import {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';

function EditMovie(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const thisMovie = useSelector(store => store.thisMovie)
    console.log('This movie is', thisMovie);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
       console.log('Hi');
       const editInfo = {
           id: thisMovie.id,
           title: title,
           description: description
       }
       dispatch({type:'EDIT_MOVIE', payload: editInfo})
    }

    return(
        <div>
           <form onSubmit={handleSubmit}>
            <h1>Edit the movie</h1>
            <input
                type="text"
                placeholder="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
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
         
            <button type='submit'>Save</button>        
           
        </form>
            {/* <button onClick={handleClick}>Cancel</button>    */}
        </div>
    )
}

export default EditMovie