import RecipeContext from "./RecipeContext";
import { useEffect, useState } from "react";

const RecipeState = (props) => {
  const apiKeyArr = ["ee3f3a932cb6490d96c6fb54d20c169b", "a3188b57be0c43e0af15a8328e6d399e","d314b3988ec6460abea9a4a20a78692f","5e328078a4ed42cfb3b64c81bef32fb0"];

  const [ind, setInd] = useState(0);
  const [Random, setRandom] = useState([]);
  const [loading, setLoading] = useState(false);
  const [output_id, setOutputId] = useState({});
  const [key, setKey] = useState(apiKeyArr[0]);

  useEffect(() => {
    setKey(apiKeyArr[ind]);
    getRandom();
    //console.log(ind);
  }, [ind]);

  function handlererr (){
    setInd((prev) => (prev + 1)%4);
  }

  const getRandom = async () => {

    setLoading(true);
    
      const api = `https://api.spoonacular.com/recipes/random?apiKey=${key}&number=12`;
      const ran = await fetch(api)
      console.log(ran);
      if(ran.status===402 ){
        handlererr();
        return;
      }
      const response = await ran.json();
      setRandom(response.recipes);
      setLoading(false);
  };

  const findbyid = async (id) => {
    setLoading(true);
    
      const api_id = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`;
      const response = await fetch(api_id);
      
      const output = await response.json();
      //console.log(output);
      if(output.status===402 ){
        handlererr();
        return;
      }
      setOutputId(output);
    
    setLoading(false);
  };

  return (
    <RecipeContext.Provider value={{ Random, getRandom, findbyid, output_id, loading }}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeState;
