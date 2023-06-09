import './App.css';
import { Route, Routes } from 'react-router-dom';
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
import IngriSearch from './pages/IngriSearch';
import IngriInfo from './components/IngriInfo';
import Product from './pages/Product';
import ProductState from './context/products/ProductState';
import ProductInfo from './pages/ProductInfo';
import Meal from './pages/Meal';
import MealState from './context/mealplannig/MealState';

function App() {

  return (

    <SearchState>

      <RecipeState>
        <ProductState>

          <IngredientState>

            <MealState>

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

                {/* following routes are for ingredient page */}
                <Route path='/ingredients' element={<Ingredients></Ingredients>}></Route>

                <Route path='/ingredients/search' element={<IngriSearch></IngriSearch>}></Route>

                <Route path='/ingredients/search/info' element={<IngriInfo></IngriInfo>}></Route>

                {/* following routes are for produts page */}
                <Route path='/products' element={<Product></Product>}></Route>

                <Route path={'/products/info'} element={<ProductInfo></ProductInfo>}></Route>

                <Route path={'/meal'} element={<Meal></Meal>}></Route>

              </Routes>

            </div>



            </MealState>

          </IngredientState>
        </ProductState>

      </RecipeState>

    </SearchState>

  );
}

export default App;
