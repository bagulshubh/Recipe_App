import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import RecipeState from './context/recipe/RecipeState';
import Searchid from './pages/Searchid';
import Search from './pages/Search';
import SearchState from './context/serach/SearchState';
import SearchRecipe from './pages/SearchRecipe';
import SearchbyIngri from './pages/SearchbyIngri';
import SearchbyNutri from './pages/SearchbyNutri';
import Ingredients from './pages/Ingredients';
import IngredientState from './context/ingredient/IngredientState';

function App() {

  return (

    <SearchState>

      <RecipeState>
        
        <IngredientState>

        <div className='App'>

          <NavBar></NavBar>

          <Routes>

            <Route path='/' element={<Home></Home>}></Route>

            {/* This route is secured for search by id user cannot naviagte to this route unless the code gives access to the user */}
            <Route path='/search/byid' element={<Searchid></Searchid>}></Route>

            <Route path='/search' element={<Search></Search>}></Route>

            <Route path='/search/recipe' element={<SearchRecipe></SearchRecipe>}></Route>
            <Route path='/search/byingridients' element={<SearchbyIngri></SearchbyIngri>}></Route>

            <Route path='/search/bynutritions' element={<SearchbyNutri></SearchbyNutri>}></Route>

            <Route path='/ingredients' element={<Ingredients></Ingredients>}></Route>

          </Routes>

</div>

        </IngredientState>

      </RecipeState>
    
    </SearchState>
    
  );
}

export default App;
