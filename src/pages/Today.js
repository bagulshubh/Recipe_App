import React ,{useContext,useEffect} from 'react'
import RecipeContext from '../context/recipe/RecipeContext'
import DishCard from '../components/DishCard';


function Today() {

  const context = useContext(RecipeContext);
  const loading = context.loading;

  useEffect(()=>{
    context.getRandom();
  },[]);

  const Random = context.Random;
  

  return (
    <div className='home-1'>

      {
        loading===true? (
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
          <div className='home'>
            <h1>Today's Selection</h1>

            <div className='home-card-con'>
              {
                Random.map((dish)=>{
                  return(
                    <DishCard dish={dish}></DishCard>
                  )
                })
                
              }
            </div>

          </div>
        )
      }

    </div>
  )
}

export default Today
