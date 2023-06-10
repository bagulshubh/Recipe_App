import { useState } from "react";
import MealContext from "./MealContext"; 


const MealState = (props) => {


  const apiKey = "ee3f3a932cb6490d96c6fb54d20c169b";
  const apiKey2 = "a3188b57be0c43e0af15a8328e6d399e";

  const [dayObj,setdayObj] = useState(0);
  const [weekObj,setWeekObj] = useState(0);


  const generateMeal = async(time,cal,diet,ingrilist)=>{

    const api = `https://api.spoonacular.com/mealplanner/generate?timeFrame=${time}&apiKey=${apiKey}&targetCalories=${cal}&diet=${diet}&exclude=${ingrilist}
    `

    const response = await fetch(api);
    const output = await response.json();
    
    if(time==="day"){
      setdayObj(output.meals);
    }
    else if(time==="week"){
      setWeekObj(output.week);
    }

  }

  return (
    <MealContext.Provider value={{generateMeal,weekObj,dayObj}}>
      {props.children}
    </MealContext.Provider>
  );
};

export default MealState;
