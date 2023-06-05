import React, { useContext } from 'react'
import IngredientContext from '../context/ingredient/IngredientContext'

const IngriInfo = () => {

    const context = useContext(IngredientContext);
    const data = context.data;
    console.log(data);

  return (
    <div>
      
        

    </div>
  )
}

export default IngriInfo
