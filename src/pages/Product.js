import React, { useContext, useState } from 'react'
import { GrSearch } from 'react-icons/gr'
import ProductContext from '../context/products/ProductContext';
import ProductCard from '../components/ProductCard';

const Product = () => {

    const context = useContext(ProductContext);
    const [name,setname] = useState("");
    const obj = context.Frontpage;

    const ProductSearch = (event)=>{
        if(event.key==='Enter'){
            context.SearchProduct(name);
        }   
    }

    return (
        <div className='product-con'>

            <h1>Search Products and Get their Information</h1>

            <div className='search-input'>
                <input type='text' className='input' placeholder='Enter Product Name' onChange={(event)=>{
                setname(event.target.value)}} onKeyDown={ProductSearch}></input>
                <GrSearch className='search-icon'></GrSearch>
            </div>


            {obj===0? (<span></span>):(

                <div className='product-search'>

                    <h2>Product Results for {name}</h2>
                    
                    <div className='productcard-con'>
                        {
                            obj.map((o)=>{
                                return(
                                    <ProductCard o = {o}></ProductCard>
                                )
                            })
                        }
                    </div>
                        
                    

                </div>


            )}
            



        </div>
    )
}

export default Product
