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
import Today from './pages/Today';
import {FiMenu} from 'react-icons/fi'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {AiOutlineClose} from 'react-icons/ai'



function App() {

  const [menu,menuClicked] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    window.location.pathname === '/' || window.location.pathname === ''
      ? navigate('/')
      : navigate('/');
  }, []);

  return (

    <SearchState>

      <RecipeState>
        <ProductState>

          <IngredientState>

            <MealState>

            <div className='App'>

              {/* nav bar display is very much hard because we need to make it someting like disapper in mobile size divice and all new properties to it once user want to selsset it */}
              {/* i also want to add the search bar in home section for  mobile devices because showing only the home info wont make any sence so i am adding the search bar in home page for mobile user it will make website more interactive for them */}

              

              <NavBar></NavBar>

              <div className='first-div'>
              <h1 className='main-heading' onClick={()=>{navigate('/')}}>Recipe Hunt</h1>

              {
                menu===false ? (<FiMenu className='menu-icon' onClick={()=>{menuClicked(!menu)}}></FiMenu>):(<AiOutlineClose className='menu-icon' onClick={()=>{menuClicked(!menu)}}></AiOutlineClose>)
              }

              

              </div>

              {
                menu===true ? (
                <div className='menu-div'>
                  <div onClick={()=>{
                    navigate('/')
                    menuClicked(false);
                  }}>Home</div>
                  <div onClick={()=>{
                    navigate('/todayselection')
                    menuClicked(false);
                  }}>Today Selection</div>
                  <div onClick={()=>{
                    navigate('/search')
                    menuClicked(false);
                  }}>Search</div>
                  <div onClick={()=>{
                    navigate('/ingredients')
                    menuClicked(false);
                  }}>Ingredients</div>
                  <div onClick={()=>{
                    navigate('/products')
                    menuClicked(false);
                  }}>Product</div>
                  <div onClick={()=>{
                    navigate('/meal')
                    menuClicked(false);
                  }}>Meal Planning</div>
                </div>
                ):(<span></span>)

                }
              

              <Routes>

                <Route path='/' element={<Home></Home>}></Route>

                <Route path='/todayselection' element={<Today></Today>}></Route>

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
