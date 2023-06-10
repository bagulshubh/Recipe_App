import React, { useContext } from 'react'
import IngredientContext from '../context/ingredient/IngredientContext'
import { BsCurrencyDollar } from 'react-icons/bs'
import cancle from '../assets/cancel.png'

const IngriInfo = () => {

  const context = useContext(IngredientContext);
  const data = context.data;
  const img = context.img;
  console.log(data);

  return (

    data.length == 0 ? (<img src={cancle} alt='No Data'></img>) : (


      <div className='ingriinfo-con'>

        <div className='ingriinfo-left'>
          <img src={img}></img>
          <div className='ingriinfo-left-info'>
            <h2>{data.name}</h2>
            <p>{data.aisle}</p>
            <p>{data.consistency}</p>
            <div className='price'>
              <BsCurrencyDollar></BsCurrencyDollar>
              <p>{data.estimatedCost.value}</p>
            </div>
          </div>
        </div>

        <div className='ingriinfo-right'>

          <div className='ingriinfo-right-div'>
            <div>
              Percent Carbs: 
              {data.nutrition.caloricBreakdown.percentCarbs}
            </div>

            <div>
              Percent Fat: 
              {data.nutrition.caloricBreakdown.percentFat}
            </div>

            <div>
              Percent Protein: 
              {data.nutrition.caloricBreakdown.percentProtein}
            </div>

            <div>
              <p className='div-heading'>Nutrients</p>
              <div>{
                data.nutrition.nutrients.map((nuit) => {
                  return (
                    <p>{nuit.name} : {nuit.amount}</p>
                  )
                })
              }</div>
            </div>

            

          </div>

          <div className='ingriinfo-right-div'>

            <p className='div-heading'>Flavonoids</p>
            <div>{
              data.nutrition.flavonoids.map((fla) => {
                return (
                  <div>{fla.name}</div>
                )
              })
            }</div>


          </div>

          <div className='ingriinfo-right-div'>

              <p className='div-heading'>Properties</p>
              <div>{data.nutrition.properties.map((prop) => {
                return (
                  <p>{prop.name} : {prop.amount}</p>
                )
              })}</div>
          </div>

        </div>

      </div>


    )

    
  )
}

export default IngriInfo
