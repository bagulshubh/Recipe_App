import RecipeContext from "./RecipeContext";
import { useState } from "react";

const RecipeState = (props) => {

    const [loading,setloading] = useState(false);

    // Random Recipe for Home Page

    const apiKey = "ee3f3a932cb6490d96c6fb54d20c169b";
    const apiKey2 = "a3188b57be0c43e0af15a8328e6d399e";

    const api = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey2}&number=3`

    const getRandom = async()=>{
        setloading(true);
        const ran = await fetch(api);
        const response = await ran.json();
        setRandom(response.recipes);
        setloading(false);
    }

    const [Random,setRandom] = useState([]);

    //getting info about specific recipe for many pages this is required

    const [output_id,setoutputid] = useState({});

    const findbyid = async(id) =>{
      setloading(true);

      const api_id = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey2}`;

      const response = await fetch(api_id);
      const output = await response.json();

      
      setoutputid(output);
      setloading(false);
    }


  return (
    <RecipeContext.Provider value={{Random,getRandom,findbyid,output_id,loading}}>
        {props.children }
    </RecipeContext.Provider>
  )
}


export default RecipeState



