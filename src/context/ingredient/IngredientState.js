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

  const apiKeyArr = ["ee3f3a932cb6490d96c6fb54d20c169b", "a3188b57be0c43e0af15a8328e6d399e","d314b3988ec6460abea9a4a20a78692f","5e328078a4ed42cfb3b64c81bef32fb0"];
  const [ind,setInd] = useState(2);
  const [key, setKey] = useState(apiKeyArr[2]);

  useEffect(() => {
    setKey(apiKeyArr[ind]);
    //console.log("Index in search ",ind);
}, [ind]);







  const SearchIngribyname = async (name) => {
    setloading(true);
  
    const api = `https://api.spoonacular.com/food/ingredients/search?query=${name}&number=15&apiKey=${key}`;

   
      const response = await fetch(api);
      const output = await response.json();
      const obj = output.results;

      if(output.status===402 || output.code===402){
        function b(name){
          setKey(apiKeyArr[ind]);
          SearchIngribyname(name);
          return;
        }
          b(name);
        }
      
  
      
      const finalobj = await Promise.all(
        obj.map(async (res) => {
          const id = res.id;
  
          const api2 = `https://api.spoonacular.com/food/ingredients/${id}/information?amount=150&apiKey=${key}`;

          
            const response2 = await fetch(api2);
            const output2 = await response2.json();
            
          
            if(output2.status===402 || output2.code===402){
              function c(name){
                setKey(apiKeyArr[ind]);
                SearchIngribyname(name);
                return;
              }
              c();
            }
            return output2;
          
        })
      );
      setbulkingi(finalobj);
    setloading(false);
    
  };


  const getAmout = async(id,target)=>{

    const api = `https://api.spoonacular.com/food/ingredients/${id}/amount?nutrient=protein&target=${target}&unit=oz&apiKey=${key}`

   
      const response = await fetch(api);
      const output = await response.json();

      if(output.status===402 || output.code===402){
        function d(id,target){
          setKey(apiKeyArr[ind]);
          getAmout(id,target);
          return;
        }
        d(id,target);
      }

      setamount(output.amount);
   
      
    

  }

  const getConversion = async(name,cups)=>{

    const api = `https://api.spoonacular.com/recipes/convert?ingredientName=${name}&sourceAmount=${cups}&sourceUnit=cups&targetUnit=grams&apiKey=${key}`;

    const response = await fetch(api);
    const output = await response.json();

    if(output.status===402 || output.code===402){
      function e(name,cups){
        setKey(apiKeyArr[ind]);
        getConversion(name,cups);
        return;
      }
      e(name,cups);
    }

    setgrams(output.targetAmount);
      
    

  }

  const getsubstitute = async(ingredientName)=>{

    const api = `https://api.spoonacular.com/food/ingredients/substitutes?ingredientName=${ingredientName}&apiKey=${key}`

    const response = await fetch(api);
    const output = await response.json();

    if(output.status===402 || output.code===402){
      function a(ingredientName){
        setKey(apiKeyArr[ind]);
        getsubstitute(ingredientName);
        return;
      
      }
      a(ingredientName);
        
    }

    setsub(output.substitutes)
      
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
