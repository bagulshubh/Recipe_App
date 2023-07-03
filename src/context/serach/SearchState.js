import { useEffect, useState } from "react";
import SearchContext from "./SearchContext";


const SearchState = (props) => {

    const [SearchFirst,setSearchFirst] = useState([]);
    const [Bulkoutput,setBulkoutput] = useState([]);
    const [loading,setloading] = useState(false);
    const [nutdata,setnutdata] = useState([]);
    const apiKeyArr = ["ee3f3a932cb6490d96c6fb54d20c169b", "a3188b57be0c43e0af15a8328e6d399e","d314b3988ec6460abea9a4a20a78692f","5e328078a4ed42cfb3b64c81bef32fb0"];
    const [ind,setInd] = useState(1);
    const [key, setKey] = useState(apiKeyArr[1]);

    //data structrue to store the nutrition details
    const [nut,setnut] = useState({});

    useEffect(() => {
      setKey(apiKeyArr[ind]);
      console.log("Index in search ",ind);
    }, [ind]);


    function handerr (name){
      setInd((prev) => (prev + 1)%4);
       if(name!==""){
         Searchbyname(name);
       //work in progress for this one not yet done as per need}     
      }
  }
    
    const Searchbyname = async (name)=>{
        
        setloading(true)
        const api = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${name}&number=12`

       
          const response = await fetch(api);
          const output = await response.json();
          console.log("search by name",output);

          if(output.code===402 ){
            handerr(name);
            return;
          }

          setSearchFirst(output.results);
        
    }

    const Searchbyingri = async (name)=>{
        
      setloading(true)
      const api = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${name}&number=12&apiKey=${key}`;

      const response = await fetch(api);
      const output = await response.json();
      
      if(output.status===402 ){
        handerr();
        return;
      }


      setSearchFirst(output);
        
      
  }

    useEffect(() => {
      const convertToBulk = async () => {
        if (SearchFirst===undefined || SearchFirst===[] || SearchFirst.length === 0) {
          return
        };
  
        setloading(true);
  
        const recipeIds = SearchFirst.map((recipe) => recipe.id).join(",");
        const apiBulk = `https://api.spoonacular.com/recipes/informationBulk?ids=${recipeIds}&apiKey=${key}`;
  
        const response = await fetch(apiBulk);
        const output = await response.json();
        console.log("Convert to bulk",output);

        if(output.status===402 ){
          handerr("");
          return;
        }

        setBulkoutput(output);
          
        setloading(false);
      };
  
      convertToBulk();
    }, [SearchFirst,ind]);


    const SearchbyNutri  = async (arr)=>{

      let str = "";
      const keys = Object.keys(arr);
      keys.forEach(key => {
        const value = arr[key];
        str = str + key + "=" + value + "&";
      });
      //console.log(str);

      const url = `https://api.spoonacular.com/recipes/findByNutrients?${str}number=10&apiKey=${key}`;

      const response = await fetch(url);
      //console.log("THii",response)
      const output = await response.json();
      setSearchFirst([]);
      setSearchFirst(output);

    }

  return (
    <SearchContext.Provider value={{Searchbyname,SearchFirst,Bulkoutput,loading,Searchbyingri,setnut,nut,SearchbyNutri,nutdata}}>
        {props.children }
    </SearchContext.Provider>
  )
}


export default SearchState









