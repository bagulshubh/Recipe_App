import React, { useContext, useEffect, useState } from 'react'
import {BsCurrencyDollar} from 'react-icons/bs'
import IngredientContext from '../context/ingredient/IngredientContext';
import { useNavigate } from 'react-router-dom';

const IngredientCard = (props) => {
    const naviagte = useNavigate();
    const obj = props.ingri;
    const [image,setimg] = useState("");

    const context = useContext(IngredientContext);

    //code to get image from a ingridient name because the api is not providing with us an image which we can use hence we need to find a image from unsplashed

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
        console.log("Error in getting image from unsplashed",err);
      }
    } 

    useEffect(()=>{
        getimg();
    })

    const getingriinfo =()=>{
        //this fuction will get the info of ingredient which user will click on and go to a seperate page or component which will the be showing info to user 

        //for that i have to create path and assign a component to it not a page it will just make page less important just assign a component to it and use it display the information of ingredient there is not much information about the ingredient anyway

        context.setdata(obj);
        context.setimg(image);
        naviagte('/ingredients/search/info');

    }

  return (
    <div className='ingricard' onClick={getingriinfo}>
        <div className='ingricard-img'>
            <img src={image}></img>
        </div>
        <div className='ingricard-info'>
            <p>{obj.name}</p>
            <p>{obj.consistency}</p>
            <div className='price'>
                <BsCurrencyDollar className='doller'></BsCurrencyDollar>
                <p>{obj.estimatedCost.value}</p>
            </div>
        </div>
      
    </div>
  )
}

export default IngredientCard
