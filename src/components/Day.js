import React, { useContext } from 'react'
import MealContext from '../context/mealplannig/MealContext'

const Day = () => {

    const response = useContext(MealContext);
    const obj = response.dayObj;
    console.log(obj);

  return (
    <div className='day-con'>
      
        {
            obj===0 ?(
                <div>No Data</div>
            ):(

                obj.map((o)=>{
                return(
                    <div className='day-card'>
                        <p>{o.title}</p>
                        <p>Ready In Minutes: {o.readyInMinutes}</p>
                        <p>Servings: {o.servings}</p>
                    </div>
                    )
                })

            )

           
        }

    </div>
  )
}

export default Day
