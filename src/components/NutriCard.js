import React, { useContext } from 'react'
import SearchContext from '../context/serach/SearchContext';

const NutriCard = (props) => {
    const context = useContext(SearchContext);
    const para = props.para;
    const nut = context.nut;
    const setnut = context.setnut;
    

    const changeHandler = (event) =>{
        setnut((prevHashmap) => ({
            ...prevHashmap,
            [para]: event.target.value,
          }));
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
