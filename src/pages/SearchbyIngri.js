import React, { useContext, useState } from 'react'
import { GrSearch } from 'react-icons/gr'
import SearchContext from '../context/serach/SearchContext';
import { useNavigate } from 'react-router-dom';

const SearchbyIngri = () => {
    const context = useContext(SearchContext);
    const naviagte = useNavigate();

    const [name,setname] = useState("");

    const changeHandler = (event) => {
        const inputValue = event.target.value;
        const ingredients = inputValue.split(',').map((ingredient) => ingredient.trim()).join(',+');
        setname(ingredients);
    };
      

    const checkkey = (event)=>{
        if (event.key === 'Enter') {
            searchHandler();
        }
    }

    const searchHandler = ()=>{
        context.Searchbyingri(name);
        naviagte('/search/recipe');
    }


  return (
    <div className='searchbyingi'>
        <h1>Search by Ingredients</h1>
        <div className='search-input'>
            <input type='text' className='input' placeholder='Enter Ingridients      eg (milk,flour,yeast)'  onChange={changeHandler}onKeyDown={checkkey}></input>
            <GrSearch className='search-icon'></GrSearch>
        </div>

    </div>
  )
}

export default SearchbyIngri
