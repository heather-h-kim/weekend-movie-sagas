import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';
import EditMovie from '../EditMovie/EditMovie';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Link to="/">Movie List</Link>        
        <Link to="/details">Movie Info</Link>        
        <Link to="/add_movie">Add Movie</Link>        
        <Link to="/edit_movie">Edit Movie</Link>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/add_movie">
          <AddMovie />
        </Route>
        <Route path="/edit_movie">
          <EditMovie />
        </Route>
        
        {/* Details page */}

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
