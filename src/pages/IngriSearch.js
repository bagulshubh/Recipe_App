import React, { useContext } from 'react'
import IngredientContext from '../context/ingredient/IngredientContext'
import IngredientCard from '../components/IngredientCard';

const IngriSearch = () => {

    const context = useContext(IngredientContext);
    const obj = context.bulkingi;
    const loading = context.loading;


  return (
    <div className='ingrisearch-con'>

      
        {
            loading===true ? (
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
                </div>)
            :(
                <div className='child-1'>
                    <h1>Search Results of {context.ingi}</h1>
                    <div className='ingricard-con'>
                    {obj.map((ingri)=>{
                        return(
                            <IngredientCard ingri={ingri}></IngredientCard>
                        )
                    })}</div>
                </div>

                
            )
        }

    </div>
  )
}

export default IngriSearch
