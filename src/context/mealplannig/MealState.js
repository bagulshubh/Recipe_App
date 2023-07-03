import { useState,useEffect } from "react";
import MealContext from "./MealContext"; 


const MealState = (props) => {


  const apiKeyArr = ["ee3f3a932cb6490d96c6fb54d20c169b", "a3188b57be0c43e0af15a8328e6d399e","d314b3988ec6460abea9a4a20a78692f","5e328078a4ed42cfb3b64c81bef32fb0"];
  const [ind,setInd] = useState(3);
  const [key, setKey] = useState(apiKeyArr[3]);

  const [dayObj,setdayObj] = useState(0);
  const [weekObj,setWeekObj] = useState(0);

  useEffect(() => {
    setKey(apiKeyArr[ind]);
    //console.log("Index in search ",ind);
}, [ind]);


  function handerr (time,cal,diet,ingrilist){
    setKey(apiKeyArr[ind]);
    //console.log("Index in meal ",ind);
    generateMeal(time,cal,diet,ingrilist);
  }


  const generateMeal = async(time,cal,diet,ingrilist)=>{

    const api = `https://api.spoonacular.com/mealplanner/generate?timeFrame=${time}&apiKey=${key}&targetCalories=${cal}&diet=${diet}&exclude=${ingrilist}
    `
    
      const response = await fetch(api);
      const output = await response.json();

      if(output.status===402 || output.code===402){
        handerr(time,cal,diet,ingrilist);
    }
      
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
