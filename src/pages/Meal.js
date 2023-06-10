import React, { useContext, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import MealContext from '../context/mealplannig/MealContext';
import Week from '../components/Week';
import Day from '../components/Day';

const Meal = () => {
  const [time, setTime] = useState('day');
  const [cal, setCal] = useState(0);
  const [diet, setDiet] = useState('vegetarian');
  const [exc, setExc] = useState('');
  const [chosen,setchosen] = useState(false);

  const context = useContext(MealContext);

  const timeHandler = (str) => {
    setTime(str);
  };

  const dietHandler = (str) => {
    setDiet(str);
  };

  const searchHandler = ()=>{
    context.generateMeal(time,cal,diet,exc);
    setchosen(true);
  }

  return (
    <div className='meal-con'>
      <h1>Generate Meal Plan and Manage Diet</h1>

      <div className='timeframe'>
        <div>
          <input
            type='radio'
            name='time'
            defaultChecked
            onClick={() => timeHandler('day')}
          />
          <span>For a Day</span>
        </div>
        <div>
          <input
            type='radio'
            name='time'
            onClick={() => timeHandler('week')}
          />
          <span>For a Week</span>
        </div>
      </div>

      <div className='mealframe-info-con'>
        <input
          type='text'
          placeholder='Enter Total Calories Required'
          className='cal-input'
          onChange={(event) => {
            setCal(event.target.value);
          }}
        />

        <div className='diet-con'>
          <div>
            <input
              type='radio'
              name='diet'
              defaultChecked
              onClick={() => dietHandler('vegetarian')}
            />
            <span>Vegetarian</span>
          </div>
          <div>
            <input
              type='radio'
              name='diet'
              onClick={() => dietHandler('gluten free')}
            />
            <span>Gluten Free</span>
          </div>
          <div>
            <input
              type='radio'
              name='diet'
              onClick={() => dietHandler('vegan')}
            />
            <span>Vegan</span>
          </div>
        </div>
      </div>

      <div className='exclude-con'>
        <input
          type='text'
          placeholder='Enter Dishes or Ingredients you want to exclude'
          onChange={(event) => {
            setExc(event.target.value);
          }}
        />
      </div>

      <div className='search-btn' onClick={searchHandler}>
        <BiSearch className='search-icon'></BiSearch>
        <p>Search</p>
      </div>

      {/* now depending upon which type of data user request week or day we need to adjust the components like wise we can check via a state or we can simply use the time state vaiable to check whether week is chosen or day is chosen to know when to check we could use a state vaiable this we can make all meal section in one page */}


      <div>

          {
            chosen===true ? (

              time==="week"? (
                <Week></Week>
              ):(
                time==="day"?(
                  <Day></Day>
                ):(
                  <div>Select Valid options</div>
                )
              )

            ):(<span></span>)
          }



      </div>      

    </div>
  );
};

export default Meal;
