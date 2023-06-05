import React,{useState} from 'react'
import {GrSearch} from 'react-icons/gr'
import ingi from '../assets/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__12__20201203-indonesian-pantry-vicky-wasik-1-b827da1c26134cf18153da281f8efb19.jpg'
import nutri from '../assets/download.jpeg'
import vita from '../assets/List-of-essential-vitamins-for-healthy-body.jpg'
import SearchContext from '../context/serach/SearchContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


const Search = () => {
    const naviagte = useNavigate();
    const [name,setname] = useState("");
    const searchcontext = useContext(SearchContext);

    const changeHandler = (event)=>{
        setname(event.target.value);
    }

    const checkkey = (event)=>{
        if (event.key === 'Enter') {
            searchHandler();
        }
    }

    const searchHandler = ()=>{

        searchcontext.Searchbyname(name);
        naviagte('/search/recipe')
    }


  return (
    <div className='search-con'>

        <div className='heading'>
            <h1>Search Recipes by Name, Ingredients, Nuitritent and More.</h1>
        </div>

        <div className='search-input'>
            <input type='text' className='input' placeholder='Enter Recipe Name' onChange={changeHandler} onKeyDown={checkkey}></input>
            <GrSearch className='search-icon' onClick={searchHandler}></GrSearch>
        </div>

        <div className='search-card-con'>
            <div className='search-card' onClick={()=>{
                naviagte('/search/byingridients');
            }}>
                <p>Search by Ingredients</p>
                <img src={ingi}></img>
            </div>

            <div className='search-card' onClick={()=>{
                naviagte('/search/bynutritions')
            }}>
                <p>Search By Nutrients</p>
                <img src={nutri}></img>
            </div>
            
            <div className='search-card' onClick={()=>{
                naviagte('/search/bynutritions')
            }}>
                <p>Search By Vitamins</p>
                <img src={vita}></img>
            </div>
            
            
        </div>
    </div>
  )
}

export default Search
