import React, { useContext } from 'react';
import MealContext from '../context/mealplannig/MealContext';
import cancle from '../assets/cancel.png'

const Week = () => {
  const context = useContext(MealContext);
  const response = Object.entries(context.weekObj);

  console.log(response);

  return (
    <div>
      {response.length === 0 ? (
        <img src={cancle} alt='No Data' className='cancle'></img>
      ) : (
        <div>
          {response.map(([day, data]) =>
            <div>
                <h2>{day.toUpperCase()}</h2>
                <div>
                {data.meals.map((meal) => (
                <div className='day-card' key={meal.id}>
                    <p>{meal.title}</p>
                    <p>Ready In Minutes: {meal.readyInMinutes}</p>
                    <p>Servings: {meal.servings}</p>
                </div>
                ))}
                </div>
            </div>
            
          )}
        </div>
      )}
    </div>
  );
};

export default Week;
