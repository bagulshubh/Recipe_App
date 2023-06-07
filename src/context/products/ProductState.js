import { useState } from "react";
import ProductContext from "./ProductContext"; 

const ProductState = (props) =>{


    const apiKey = "ee3f3a932cb6490d96c6fb54d20c169b";
    const apiKey2 = "a3188b57be0c43e0af15a8328e6d399e";

    const [Frontpage,setFrontpage] = useState(0);
    const [info,setinfo] = useState(0);

    const SearchProduct = async(name)=>{

        const api = `https://api.spoonacular.com/food/products/search?query=${name}&apiKey=${apiKey2}&number=2`

        const response = await fetch(api);
        const output = await response.json();
        setFrontpage(output.products);
        console.log(output.products);

    }

    const getProductInfo = async(id)=>{

        const api = `https://api.spoonacular.com/food/products/${id}?apiKey=${apiKey2}`

        const response = await  fetch(api);
        const output = await response.json();
        setinfo(output);
    }



    return(

        <ProductContext.Provider value={{SearchProduct,Frontpage,getProductInfo,info}}>
            {props.children}
        </ProductContext.Provider>

    )

   

}


export default ProductState;
