import React, { useContext } from 'react'
import ProductContext from '../context/products/ProductContext'

const ProductInfo = () => {

    const context = useContext(ProductContext);
    const obj = context.info;

  return (
    <div>

                    

    </div>
  )
}

export default ProductInfo