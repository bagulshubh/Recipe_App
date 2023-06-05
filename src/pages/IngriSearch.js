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
                <div>loading</div>
            )
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
