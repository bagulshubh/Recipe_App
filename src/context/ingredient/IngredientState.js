import { useEffect, useState } from "react";
import IngredientContext from "./IngredientContext"; 


const IngredientState = (props) => {
  const [loading, setloading] = useState(false);
  const [bulkingi,setbulkingi]  = useState([]);
  const [ingi,setingi] = useState("");
  const [data,setdata] = useState([]);
  const [img,setimg] = useState("");
  const [amount,setamount] = useState(0);
  const [grams,setgrams] = useState(0);
  const [sub,setsub] = useState([]);
  const [ind,setind] = useState(0);

  let apiKeyArr = ["ee3f3a932cb6490d96c6fb54d20c169b","a3188b57be0c43e0af15a8328e6d399e"]

  
  let key = apiKeyArr[ind];

  useEffect(()=>{

  },[ind]);


  const SearchIngribyname = async (name) => {
    setloading(true);
  
    const api = `https://api.spoonacular.com/food/ingredients/search?query=${name}&number=15&apiKey=${key}`;

    try{
      const response = await fetch(api);
      const output = await response.json();
      const obj = output.results;
  
      
      const finalobj = await Promise.all(
        obj.map(async (res) => {
          const id = res.id;
  
          const api2 = `https://api.spoonacular.com/food/ingredients/${id}/information?amount=150&apiKey=${key}`;

          try{
            const response2 = await fetch(api2);
            const output2 = await response2.json();
            return output2;
          }
          catch(err){
            setind(ind+1);
          }
          
        })
      );
      setbulkingi(finalobj);
  
    }catch(err){
      setind(ind+1);
    }
    setloading(false);
    
  };


  const getAmout = async(id,target)=>{

    const api = `https://api.spoonacular.com/food/ingredients/${id}/amount?nutrient=protein&target=${target}&unit=oz&apiKey=${key}`

    try{
      const response = await fetch(api);
      const output = await response.json();
      setamount(output.amount);
    }catch(err){
      setind(ind+1);
    }
    

  }

  const getConversion = async(name,cups)=>{

    const api = `https://api.spoonacular.com/recipes/convert?ingredientName=${name}&sourceAmount=${cups}&sourceUnit=cups&targetUnit=grams&apiKey=${key}`;

    try{const response = await fetch(api);
    const output = await response.json();
    setgrams(output.targetAmount);}catch(err){
      setind(ind+1);
    }

  }

  const getsubstitute = async(ingredientName)=>{

    const api = `https://api.spoonacular.com/food/ingredients/substitutes?ingredientName=${ingredientName}&apiKey=${key}`

   try{ const response = await fetch(api);
    const output = await response.json();
    setsub(output.substitutes);}catch(err){
      setind(ind+1);
    }
  }

  useEffect(()=>{
    setamount(0);
  },[])

  return (
    <IngredientContext.Provider value={{ SearchIngribyname, loading,bulkingi,loading,ingi,setingi ,data,setdata,img,setimg,getAmout,amount,getConversion,grams,getsubstitute,sub}}>
      {props.children}
    </IngredientContext.Provider>
  );
};

export default IngredientState;
