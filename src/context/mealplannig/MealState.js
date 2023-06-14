import { useState,useEffect } from "react";
import MealContext from "./MealContext"; 


const MealState = (props) => {


  let apiKeyArr = ["ee3f3a932cb6490d96c6fb54d20c169b","a3188b57be0c43e0af15a8328e6d399e"]
  const [ind,setind] = useState(0);
  let key = apiKeyArr[ind];

  const [dayObj,setdayObj] = useState(0);
  const [weekObj,setWeekObj] = useState(0);

    useEffect(()=>{

    },[ind])


  const generateMeal = async(time,cal,diet,ingrilist)=>{

    const api = `https://api.spoonacular.com/mealplanner/generate?timeFrame=${time}&apiKey=${key}&targetCalories=${cal}&diet=${diet}&exclude=${ingrilist}
    `
    try{
      const response = await fetch(api);
      const output = await response.json();
      
      if(time==="day"){
        setdayObj(output.meals);
      }
      else if(time==="week"){
        setWeekObj(output.week);
      }
    }
    catch(err){
      console.log(err);
      setind(ind+1);
    }
    

  }

  return (
    <MealContext.Provider value={{generateMeal,weekObj,dayObj}}>
      {props.children}
    </MealContext.Provider>
  );
};

export default MealState;
