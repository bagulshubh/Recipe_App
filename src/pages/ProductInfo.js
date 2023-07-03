import React, { useContext } from 'react'
import ProductContext from '../context/products/ProductContext'
import cancle from '../assets/cancel.png'

const ProductInfo = () => {

    const context = useContext(ProductContext);
    const obj = context.info;
    //console.log("THis is obj",obj);
    const loading = context.loading;

  return (

    loading===true ? (
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
    ):(

      obj===0 ?(<img src={cancle} alt='No Data' className='cancle'></img>) : (

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