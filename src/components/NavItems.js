import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavItems = () => {
  const navigate = useNavigate();


  return (
    <div className='navitems'>
      
        <div className='nav' onClick={()=>{navigate('/')}}>Home</div>
        <div className='nav' onClick={()=>{navigate('/search')}}>Search</div>
        <div className='nav' onClick={()=>{navigate('/ingredients')}}>Ingredients</div>
        <div className='nav' onClick={()=>{navigate('/products')}}>Products</div>
        <div className='nav'>Meal Planning</div>
        <div className='nav'>Wine</div>

    </div>
  )
}

export default NavItems
