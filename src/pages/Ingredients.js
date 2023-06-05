import React, { useContext, useState } from 'react'
import {GrSearch} from 'react-icons/gr'
import IngredientContext from '../context/ingredient/IngredientContext';

const Ingredients = () => {

    const context = useContext(IngredientContext);
    const [name,setname] = useState("");

    const changeHandler = (event)=>{
        setname(event.target.value);
    }

    const keyHandler = (event) =>{
        if (event.key === 'Enter') {
            searchHandler();
        }
    } 

    const searchHandler = ()=>{
        context.SearchIngribyname(name);
    }

  return (
    <div className='ingredients-con'>

        <h1>Ingredient</h1>
      
        <div className='search-input'>
            <input type='text' className='input' placeholder='Enter Ingredient Name' onChange={changeHandler} onKeyDown={keyHandler}></input>
            <GrSearch className='search-icon' onClick={searchHandler}></GrSearch>
        </div>

        <div className='ingri-opt-con'>

            <div className='ingri-opt'>
                <p>Compute Ingredient Amount</p>
                <input type='text' placeholder='Enter Ingredient@target'></input>
            </div>

            <div className='ingri-opt'>
                <p>Convert Amounts</p>
                <input type='text' placeholder='Enter Ingredient@Source Amount@Source Unit@Target Unit'></input>
            </div>

            <div className='ingri-opt'>
                <p>Get Ingredient Substitute</p>
                <input type='text' placeholder='Enter Ingredient'></input>
            </div>

        </div>

    </div>
  )
}

export default Ingredients
