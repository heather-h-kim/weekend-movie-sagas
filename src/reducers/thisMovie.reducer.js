
//Used to store one movie
const thisMovie = (state = {
    id: '',
    title: '',
    poster: '',
    description: '',
    genres: []
}, action) => {
    switch (action.type) {
        case 'SET_THIS_MOVIE':
        console.log('this movie is', action.payload);
            return {...state, 
                id: action.payload[0].id, 
                title: action.payload[0].title,
                poster: action.payload[0].poster,
                description: action.payload[0].description,
            };
        case 'ADD_GENRES':
            return {...state,
                genres: action.payload
            }
        default:
            return state;
    }
}

export default thisMovie;