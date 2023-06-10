import React, { useContext } from 'react';
import MealContext from '../context/mealplannig/MealContext';

const Week = () => {
  const context = useContext(MealContext);
  const response = Object.entries(context.weekObj);

  console.log(response);

  return (
    <div>
      {response.length === 0 ? (
        <div>No Data</div>
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
