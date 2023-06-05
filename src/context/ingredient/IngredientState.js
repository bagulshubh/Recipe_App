import { useState } from "react";
import IngredientContext from "./IngredientContext"; 

const IngredientState = (props) => {
  const [loading, setloading] = useState(false);
  const [bulkingi,setbulkingi]  = useState([]);
  const [ingi,setingi] = useState("");
  const [data,setdata] = useState([]);

  const apiKey = "ee3f3a932cb6490d96c6fb54d20c169b";

  const apiKey2 = "a3188b57be0c43e0af15a8328e6d399e";

  const SearchIngribyname = async (name) => {
    setloading(true);
  
    const api = `https://api.spoonacular.com/food/ingredients/search?query=${name}&number=6&apiKey=${apiKey}`;

    const response = await fetch(api);
    const output = await response.json();
    const obj = output.results;

    //first time using promise in realtime project now getting the use of promise.
    const finalobj = await Promise.all(
      obj.map(async (res) => {
        const id = res.id;

        const api2 = `https://api.spoonacular.com/food/ingredients/${id}/information?amount=150&apiKey=${apiKey}`;

        const response2 = await fetch(api2);
        const output2 = await response2.json();
        return output2;
      })
    );
    setbulkingi(finalobj);
    setloading(false);
    console.log(finalobj);
  };

  return (
    <IngredientContext.Provider value={{ SearchIngribyname, loading,bulkingi,loading,ingi,setingi ,data,setdata}}>
      {props.children}
    </IngredientContext.Provider>
  );
};

export default IngredientState;
