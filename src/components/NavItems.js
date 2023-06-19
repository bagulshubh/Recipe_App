import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import RecipeContext from '../context/recipe/RecipeContext';

const NavItems = () => {
  const navigate = useNavigate();
  const context = useContext(RecipeContext);

  return (
    <div className='navitems'>
      
        <div className='nav' onClick={()=>{navigate('/')}}>Home</div>
        <div className='nav' onClick={()=>{
          navigate('/todayselection')
          context.getRandom();
          }}>Today Selection</div>
        <div className='nav' onClick={()=>{navigate('/search')}}>Search</div>
        <div className='nav' onClick={()=>{navigate('/ingredients')}}>Ingredients</div>
        <div className='nav' onClick={()=>{navigate('/products')}}>Products</div>
        <div className='nav' onClick={()=>{navigate('/meal')}}>Meal Planning</div>

    </div>
  )
}

export default NavItems
