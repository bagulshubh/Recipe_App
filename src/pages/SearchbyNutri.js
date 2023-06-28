import React, { useContext, useState } from 'react'
import NutriCard from '../components/NutriCard';
import {BiSearch} from 'react-icons/bi'
import SearchContext from '../context/serach/SearchContext';
import { useNavigate } from 'react-router-dom';

const SearchbyNutri = () => {

    
    const context = useContext(SearchContext);
    const navigate = useNavigate();

    const parameters = ["minCarbs", "maxCarbs", "minProtein", "maxProtein", "minFat", "maxFat", "minCalories", "maxCalories", "minSugar", "maxSugar", "minFiber", "maxFiber", "minCholesterol", "maxCholesterol", "minSodium", "maxSodium", "minVitaminC", "maxVitaminC", "minCalcium", "maxCalcium", "minIron", "maxIron", "minPotassium", "maxPotassium", "minVitaminA", "maxVitaminA", "minVitaminD", "maxVitaminD", "minVitaminE", "maxVitaminE", "minVitaminK", "maxVitaminK", "minVitaminB1", "maxVitaminB1", "minVitaminB2", "maxVitaminB2", "minVitaminB3", "maxVitaminB3", "minVitaminB5", "maxVitaminB5", "minVitaminB6", "maxVitaminB6", "minVitaminB12", "maxVitaminB12", "minFolate", "maxFolate", "minMagnesium", "maxMagnesium", "minZinc", "maxZinc"];

    const searchHandler = ()=>{
        navigate('/search/nuti');
        context.SearchbyNutri(context.nut);
    }

    return (

        <div className='searchbynutri'>
            <h1>Search By Nutrients</h1>
            
            <div className='nutricard-con'>
            {
                parameters.map((para)=>{
                    return(
                        <NutriCard para = {para}></NutriCard>
                    )
                })
            }
            </div>

            <div className='search-btn' onClick={searchHandler}>
                Search <BiSearch></BiSearch>
            </div>

            Eat healthy && Be healthy

        </div>
    )
}

export default SearchbyNutri
