import React, { useContext } from 'react'
import ProductContext from '../context/products/ProductContext'

const ProductInfo = () => {

    const context = useContext(ProductContext);
    const obj = context.info;
    console.log("THis is obj",obj);
    const loading = context.loading;

  return (

    loading===true ? (<div>loading</div>):(

      obj===0 ?(<div>no data</div>) : (

      <div className='productinfo-con'>

        <div className='firstchild-productinfo'>
          <img src={obj.image}></img>
          <p>{obj.title}</p>
          <p>{obj.brand}</p>
          <p>UPC:- {obj.upc}</p>
          <p>Servings: {obj.servings.number} Size: {obj.servings.size}</p>
          <p>{obj.description}</p>
          <div>{
            obj.importantBadges.map((badge)=>{
              return(
                <p>{badge.replaceAll("_"," ").toUpperCase()}</p>
              )
            })
          }</div>
        </div>            

        <div className='secondchild-productinfo'>
          <h4>Ingredients</h4>
          {
            obj.ingredientList
          }
        </div>

        <div className='thirdchild-productinfo'>
          <h4>Nutrients</h4>
          {
            obj.nutrition.nutrients.map(nut=>(
              <p>{nut.name}</p>
            ))
          }
        </div>

      </div>

    )
    )

    
  )
}

export default ProductInfo