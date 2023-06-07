import React, { useContext } from 'react'
import ProductContext from '../context/products/ProductContext';
import { useNavigate } from 'react-router-dom';

const ProductCard = (props) => {
    const context = useContext(ProductContext);
    const naviagte = useNavigate();

    const obj = props.o;

    const getProductInfoByid = ()=>{    
        context.getProductInfo(obj.id);
        naviagte('/products/info');
    }

  return (
    <div className='product-card' onClick={getProductInfoByid}>
        <img src={obj.image}></img>
        <p>{obj.title}</p>
    </div>
  )
}

export default ProductCard
