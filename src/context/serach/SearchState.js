import { useEffect, useState } from "react";
import SearchContext from "./SearchContext";


const SearchState = (props) => {

    const [SearchFirst,setSearchFirst] = useState([]);
    const [Bulkoutput,setBulkoutput] = useState([]);
    const [loading,setloading] = useState(false);
    const [nut,setnut] = useState("");

    const apiKey = "ee3f3a932cb6490d96c6fb54d20c169b";

    const apiKey2 = "a3188b57be0c43e0af15a8328e6d399e";
    
    const Searchbyname = async (name)=>{
        
        setloading(true)
        const api = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${name}`

        const response = await fetch(api);
        const output = await response.json();
        setSearchFirst(output.results);
        
    }

    const Searchbyingri = async (name)=>{
        
      setloading(true)
      const api = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${name}&number=5&apiKey=${apiKey}`;

      const response = await fetch(api);
      const output = await response.json();
      console.log(output);
      setSearchFirst(output);
      
  }

    useEffect(() => {
      const convertToBulk = async () => {
        if (SearchFirst.length === 0) return;
  
        setloading(true);
  
        const recipeIds = SearchFirst.map((recipe) => recipe.id).join(",");
        const apiBulk = `https://api.spoonacular.com/recipes/informationBulk?ids=${recipeIds}&apiKey=${apiKey}`;
  
        const response = await fetch(apiBulk);
        const output = await response.json();
        setBulkoutput(output);
        setloading(false);
      };
  
      convertToBulk();
    }, [SearchFirst]);


  return (
    <SearchContext.Provider value={{Searchbyname,SearchFirst,Bulkoutput,loading,Searchbyingri,setnut,nut}}>
        {props.children }
    </SearchContext.Provider>
  )
}

export default SearchState









