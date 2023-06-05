import React,{useContext} from 'react'
import RecipeContext from '../context/recipe/RecipeContext'
import {TiTick} from 'react-icons/ti'
import {GiCrossMark} from 'react-icons/gi'
import {FcLike} from 'react-icons/fc'
import IngredCard from '../components/IngredCard'
import Step from '../components/Step'


const Searchid = () => {

    const context = useContext(RecipeContext);
    const dish = context.output_id;
    const summaryText = dish.summary;
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(summaryText, 'text/html');
    const extractedText = parsedHtml.body.textContent;
    const loading = context.loading;

    
  return (
    <div className='searchid-1'>

        {

            loading===true ? (
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            ):(

            <div className='searchid'>

                {/* //first page      */}
                <div className='firstpage'>
                    {/* left side */}
                    <div className='left-side'>

                        <h1>{dish.title}</h1>

                        <img src={dish.image}></img>

                        <div className='left-info'>
                            <p>Ready in: {dish.readyInMinutes} Min</p>
                            <p>Servings: {dish.servings}</p>
                            <p>
                                {
                                    dish.dishTypes? (
                                        dish.dishTypes.map((type)=>{
                                        return(
                                            <span>{type}, </span>
                                        )
                                    })
                                    ):(
                                        <div></div>
                                    )
                                    
                                }
                            </p>
                        </div>

                        <div className='left-table'>
                            <div>Vegetarian <span>{dish.vegetarian===true? (<TiTick className='right'></TiTick>):(<GiCrossMark className='wrong'></GiCrossMark>)}</span></div>
                            <div>Vegan <span>{dish.vegan===true? (<TiTick className='right'></TiTick>):(<GiCrossMark className='wrong'></GiCrossMark>)}</span></div>
                            <div>GlutenFree <span>{dish.glutenFree===true? (<TiTick className='right'></TiTick>):(<GiCrossMark className='wrong'></GiCrossMark>)}</span></div>
                            <div>DairyFree <span>{dish.dairyFree===true? (<TiTick className='right'></TiTick>):(<GiCrossMark className='wrong'></GiCrossMark>)}</span></div>
                            <div>VeryHealthy <span>{dish.veryHealthy===true? (<TiTick className='right'></TiTick>):(<GiCrossMark className='wrong'></GiCrossMark>)}</span></div>
                            <div>Cheap <span>{dish.cheap===true? (<TiTick className='right'></TiTick>):(<GiCrossMark className='wrong'></GiCrossMark>)}</span></div>
                            <div>VeryPopular <span>{dish.veryPopular===true? (<TiTick className='right'></TiTick>):(<GiCrossMark className='wrong'></GiCrossMark>)}</span></div>
                            <div>Sustainable <span>{dish.sustainable===true? (<TiTick className='right'></TiTick>):(<GiCrossMark className='wrong'></GiCrossMark>)}</span></div>
                            <div>LowFodmap <span>{dish.lowFodmap===true? (<TiTick className='right'></TiTick>):(<GiCrossMark className='wrong'></GiCrossMark>)}</span></div>
                        </div>

                    </div>

                    {/* right side */}
                    <div className='right-side'>

                        <div className='right-side-score'>
                            <div>WWS Points: {dish.weightWatcherSmartPoints}</div>
                            <div>Gaps: {dish.gaps}</div>
                            <div>Likes: {dish.aggregateLikes} <FcLike></FcLike></div>
                            <div>Health Score: {dish.healthScore}</div>
                        </div>

                        <div className='summary'>{extractedText}</div>

                        <div className='ingredients'>
                            <h2>Ingredients</h2>

                            <div className='ingre'>
                                {
                                    dish.extendedIngredients.map((ingred)=>{
                                        return(
                                            <IngredCard ingred={ingred}></IngredCard>
                                        )
                                    })
                                }
                            </div>

                        </div>

                    </div>


                </div>

                {/* //second (instructions in detailed) page */}
                <div className='secondpage'>
                    <h2>Steps:</h2>
                    {
                        dish.analyzedInstructions[0].steps.map((step)=>{
                            return(
                                <Step step = {step}></Step>
                            )
                        })
                    }
                </div>

                <h2>Happy Cooking</h2>

            </div>

            



            )

            
            
        }
      
    </div>
  )
}

export default Searchid
