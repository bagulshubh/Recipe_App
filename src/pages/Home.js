import React ,{useContext,useEffect} from 'react'
import RecipeContext from '../context/recipe/RecipeContext'
import DishCard from '../components/DishCard';


function Home() {

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
          <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
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

export default Home
