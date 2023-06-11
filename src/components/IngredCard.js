import React, { useEffect, useState } from 'react'

const IngredCard = (props) => {

    const [image,setimg] = useState("");

    const obj = props.ingred;
    let ingredients = obj.name;

    const api = `https://api.unsplash.com/search/photos?page=1&query=${ingredients}&client_id=n9-IIqcb43mRBrqnF69slw3jyyXRf82f_YEGmmwEWBM`

    const getimg  = async()=>{
      try{
        const response = await fetch(api);
        const src = await response.json();
        const result = src.results;
        const img = result[0].urls.thumb;
        setimg(img);
      
      }
      catch(err){
        console.log(err);
      }
      
      
    }

    useEffect(()=>{
      getimg();
    });



  return (
    <div className='ingi-card'>
      
        <div className='ingi-card-div'>
          <img src={image}></img>
          <p>{obj.name}</p>
          <p>Amount: {obj.amount}</p>
          <p>{obj.consistency}</p>
        </div>   
      
    </div>
  )
}

export default IngredCard
