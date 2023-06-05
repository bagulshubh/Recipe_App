import React, { useContext } from 'react'
import SearchContext from '../context/serach/SearchContext';

const NutriCard = (props) => {
    const context = useContext(SearchContext);
    const nut = context.nut;
    const setnut = context.setnut;
    const para = props.para;
    const hit = props.hit;

    let value = "";
    const changeHandler = (event) =>{
        value = event.target.value;
    }

    if(hit===true){
        setnut(nut+para+"="+value+"&");
    }

  return (
    <div className='nutricard'>

        {
            para
        }
        <input type='text' placeholder='-' onChange={changeHandler}></input>
      
    </div>
  )
}

export default NutriCard
