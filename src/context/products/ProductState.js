import { useEffect, useState } from "react";
import ProductContext from "./ProductContext"; 

const ProductState = (props) =>{


    const apiKeyArr = ["ee3f3a932cb6490d96c6fb54d20c169b", "a3188b57be0c43e0af15a8328e6d399e","d314b3988ec6460abea9a4a20a78692f","5e328078a4ed42cfb3b64c81bef32fb0"];
    const [ind,setInd] = useState(3);
    const [key, setKey] = useState(apiKeyArr[3]);

    useEffect(() => {
        setKey(apiKeyArr[ind]);
        console.log("Index in product ",ind);
    }, [ind]);

    function handerr (name,id){
        setInd((prev) => (prev + 1)%4);
         if(name!=="" && id===0){
            SearchProduct(name);
         }
         else{
            getProductInfo(id);
         }
    }
  

    const [Frontpage,setFrontpage] = useState(0);
    const [info,setinfo] = useState(0);
    const [loading,setloading] = useState(false);

    const SearchProduct = async(name)=>{
        setloading(true);
        const api = `https://api.spoonacular.com/food/products/search?query=${name}&apiKey=${key}&number=12`

        
        const response = await fetch(api);
        const output = await response.json();
        

        if(output.status===402 || output.code===402){
            handerr(name,0);
        }
        setFrontpage(output.products);
        
        
        setloading(false);
    }

    const getProductInfo = async(id)=>{
        setloading(true);
        const api = `https://api.spoonacular.com/food/products/${id}?apiKey=${key}`

        const response = await  fetch(api);
        const output = await response.json();

        if(output.status===402 || output.code===402){
            handerr("",id);
        }

        setinfo(output)
            
        setloading(false);
    }



    return(

        <ProductContext.Provider value={{SearchProduct,Frontpage,getProductInfo,info,loading}}>
            {props.children}
        </ProductContext.Provider>

    )

   

}


export default ProductState;
