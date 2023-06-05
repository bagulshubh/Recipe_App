import React ,{useContext} from 'react'
import SearchContext from '../context/serach/SearchContext'
import DishCard from '../components/DishCard';

const SearchRecipe = () => {

    const searchcontext = useContext(SearchContext);
    const obj = searchcontext.Bulkoutput;
    const loading = searchcontext.loading;


  return (
    <div className="search-byname-card-con">
        {loading === true ? (
            <div>Loading</div>
        ) : obj && obj.length > 0 ? (
                obj.map((recipe) => {
                return <DishCard dish={recipe} key={recipe.id} />;
                })
        ) : (
            <div>No recipes found</div>
        )}
    </div>
  )
}

export default SearchRecipe
