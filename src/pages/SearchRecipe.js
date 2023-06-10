import React ,{useContext} from 'react'
import SearchContext from '../context/serach/SearchContext'
import DishCard from '../components/DishCard';
import cancle from '../assets/cancel.png'

const SearchRecipe = () => {

    const searchcontext = useContext(SearchContext);
    const obj = searchcontext.Bulkoutput;
    const loading = searchcontext.loading;


  return (
    <div className="search-byname-card-con">
        {loading === true ? (
          <div class="sk-cube-grid">
            <div class="sk-cube sk-cube1"></div>
            <div class="sk-cube sk-cube2"></div>
            <div class="sk-cube sk-cube3"></div>
            <div class="sk-cube sk-cube4"></div>
            <div class="sk-cube sk-cube5"></div>
            <div class="sk-cube sk-cube6"></div>
            <div class="sk-cube sk-cube7"></div>
            <div class="sk-cube sk-cube8"></div>
            <div class="sk-cube sk-cube9"></div>
          </div>
        ) : obj && obj.length > 0 ? (
                obj.map((recipe) => {
                return <DishCard dish={recipe} key={recipe.id} />;
                })
        ) : (
          <img src={cancle} alt='No Data'></img>
        )}
    </div>
  )
}

export default SearchRecipe
