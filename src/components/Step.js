import React from 'react'

const Step = (props) => {

    const step = props.step;

  return (
    <div className='step-card'>
      
        <div>
            <span>{step.number}.  </span>
            <span>{step.step}</span>
        </div>

        <div>
            <span>Ingredients:- </span>
            {
                step.ingredients.map((ingi)=>{
                    return(
                        <span>{ingi.name}, </span>
                    )
                })
            }
        </div>

        <div>
            <span>Equipment: </span>
            {
                step.equipment.map((equi)=>{
                    return(
                        <span>{equi.name}</span>
                    )
                })
            }
        </div>

    </div>
  )
}

export default Step
