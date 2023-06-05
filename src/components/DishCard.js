import React,{useContext} from 'react'
import {FcLike} from 'react-icons/fc'
import RecipeContext from '../context/recipe/RecipeContext';
import { useNavigate } from 'react-router-dom';

const DishCard = (props) => {

    const dish = props.dish;

    const navigate = useNavigate();

    const context = useContext(RecipeContext);

    const idHandler = ()=>{
        context.findbyid(dish.id);
        navigate('/search/byid');
    }

  return (
    <div className='dishcard' onClick={idHandler}>
      
        <img src={dish.image} className='dishcard-img' alt='Food'></img>
        <div className='dishcard-info'>
            <p className='dishcard-h'>{dish.title}</p> 
            <p>Time To Make: {dish.readyInMinutes} Min</p> 
            <div className='indicators'>
                <div className={
                    dish.vegetarian===true? 'veg':'non-veg'
                }>R</div>
                <p>WWS Points: {dish.weightWatcherSmartPoints}</p>
                <div className='likes'><FcLike></FcLike>{dish.aggregateLikes}</div>
            </div>
        </div>
        
    </div>
  )
}

export default DishCard
