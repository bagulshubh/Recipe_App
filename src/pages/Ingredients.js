import React, { useContext, useEffect, useState } from 'react'
import {GrSearch} from 'react-icons/gr'
import IngredientContext from '../context/ingredient/IngredientContext';
import { useNavigate } from 'react-router-dom';


const Ingredients = () => {

    const context = useContext(IngredientContext);
    const [name,setname] = useState("");
    const naviagte = useNavigate();
    const [id,setid] = useState(0);
    const [tar,settar] = useState(0);
    const [ingriname,setingriname] = useState("");
    const [cups,setcups] = useState(0);
    const [subname,setsubname] = useState("");


    const changeHandler = (event)=>{
        setname(event.target.value);
    }

    const keyHandler = (event) =>{
        if (event.key === 'Enter') {
            searchHandler();
        }
    } 

    const searchHandler = ()=>{
        context.setingi(name);
        context.SearchIngribyname(name);
        naviagte("/ingredients/search")
    }

    const idHandler = (event)=>{
        setid(event.target.value);
    }
    
    const computeAmount = (event)=>{
        if(event.key==='Enter'){
            context.getAmout(id,tar);
        }
    }

    const makeconver = (event)=>{
        if(event.key==='Enter'){
            context.getConversion(ingriname,cups);
        }
    }

  return (
    <div className='ingredients-con'>

        <h1>Ingredients</h1>
      
        <div className='search-input'>
            <input type='text' className='input' placeholder='Enter Ingredient Name' onChange={changeHandler} onKeyDown={keyHandler}></input>
            <GrSearch className='search-icon' onClick={searchHandler}></GrSearch>
        </div>

        <div className='ingri-opt-con'>

            <div className='ingri-opt'>
                <p>Compute Ingredient Amount</p>
                <input type='text' placeholder='Enter Ingredientid' onChange={idHandler} onKeyDown={computeAmount}></input>
                <input type='text' placeholder='Enter target' onChange={(event)=>{settar(event.target.value)}} onKeyDown={computeAmount}></input>
                {
                    context.amount===0 ? (<span></span>):(<p>Amount: {context.amount}</p>)
                }
            </div>

            <div className='ingri-opt'>
                <p>Convert Amounts</p>
                <input type='text' placeholder='Enter @Ingredient Name' onChange={(event)=>{
                    setingriname(event.target.value)
                }} onKeyDown={makeconver}></input>
                <input type='text' placeholder='Enter @Source Amount (cups)' onChange={(event)=>{
                    setcups(event.target.value)                    
                }} onKeyDown={makeconver}></input>
                {
                    context.grams===0 ? (<span></span>):(
                        <p>{context.grams} Grams</p>
                    )
                }
            </div>

            <div className='ingri-opt'>
                <p>Get Ingredient Substitute</p>
                <input type='text' placeholder='Enter Ingredient' onChange={(event)=>{
                    setsubname(event.target.value)
                }} onKeyDown={(event)=>{
                    if(event.key==='Enter'){
                        context.getsubstitute(subname)
                    }
                }}></input>
                {
                    context.sub===[]? (<span></span>):(
                        context.sub.map((s)=>{
                            return(
                                <p>{s}</p>
                            )
                        })
                    )
                }
            </div>

        </div>

    </div>
  )
}

export default Ingredients
