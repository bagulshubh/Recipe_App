import { useEffect, useState } from "react";
import ProductContext from "./ProductContext"; 

const ProductState = (props) =>{


    let apiKeyArr = ["ee3f3a932cb6490d96c6fb54d20c169b","a3188b57be0c43e0af15a8328e6d399e"]
    const [ind,setind] = useState(0);
    let key = apiKeyArr[ind];

    useEffect(()=>{

    },[ind])

    const [Frontpage,setFrontpage] = useState(0);
    const [info,setinfo] = useState(0);
    const [loading,setloading] = useState(false);

    const SearchProduct = async(name)=>{
        setloading(true);
        const api = `https://api.spoonacular.com/food/products/search?query=${name}&apiKey=${key}&number=12`

        try{
            const response = await fetch(api);
            const output = await response.json();
            setFrontpage(output.products);
        }
        catch(err){
            console.log(err);
            setind(ind+1);
        }
        
        setloading(false);
    }

    const getProductInfo = async(id)=>{
        setloading(true);
        const api = `https://api.spoonacular.com/food/products/${id}?apiKey=${key}`

        try{const response = await  fetch(api);
        const output = await response.json();
        setinfo(output);}catch(err){
            console.log(err);
            setind(ind+1);
        }
        setloading(false);
    }



    return(

        <ProductContext.Provider value={{SearchProduct,Frontpage,getProductInfo,info,loading}}>
            {props.children}
        </ProductContext.Provider>

    )

   

}


export default ProductState;
