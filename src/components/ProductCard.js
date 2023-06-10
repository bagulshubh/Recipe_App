import React, { useContext } from 'react'
import ProductContext from '../context/products/ProductContext';
import { useNavigate } from 'react-router-dom';

const ProductCard = (props) => {
    const context = useContext(ProductContext);
    const naviagte = useNavigate();
    const loading = context.loading;
    const obj = props.o;

    const getProductInfoByid = ()=>{    
        naviagte('/products/info');
        context.getProductInfo(obj.id);
    }

  return (

    loading ===true ? (<div>
      <div class="sk-cube-grid">
            <div class="sk-cube sk-cube1"></div>
            <div class="sk-cube sk-cube2"></div>
            <div class="sk-cube sk-cube3"></div>
            <div class="sk-cube sk-cube4"></div>
            <div class="sk-cube sk-cube5"></div>
            <div class="sk-cube sk-cube6"></div>
            <div class="sk-cube sk-cube7"></div>
            <div class="sk-cube sk-cube8"></div>
            <div class="sk-cube sk-cube9"></div>
      </div>
    </div>):(

      <div className='product-card' onClick={getProductInfoByid}>
          <img src={obj.image}></img>
          <p>{obj.title}</p>
      </div>

    )

    
  )
}

export default ProductCard
