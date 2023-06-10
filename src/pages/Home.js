import React from 'react'
import plate from '../assets/plate.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const naviagte = useNavigate();

  return (
    <div className='h-con'>
      
      <div className='h-hero'>
        <div className='h-left'>
          <h1>
            Let's Start Cooking With Popular Recipes
          </h1>
          <p>Want to learn how to cook but confused to start?</p>
          <p>No need to worry again!</p>
          <div className='h-left-btn' onClick={()=>{naviagte('/todayselection')}}>Get Started</div>

        </div>
        <div className='h-right'>
          <img src ={plate}></img>
        </div>
      </div>

      <div className='line'></div>

      <div className='h-search'>
          <h1>Search Recipes by Ingredients, Nutritions, Quality</h1>
          <h3>Get the Best Analysis</h3>
          <p className='h-para'>Nutrition and ingredients play a crucial role in the meals we prepare and the recipes we create. When it comes to crafting a well-balanced and nourishing dish, understanding the importance of nutrition and selecting the right ingredients can make all the difference. Nutrients are the building blocks that our bodies require to function optimally, supporting our overall health and well-being. By incorporating a variety of nutritious ingredients into our meals, we can provide our bodies with essential vitamins, minerals, and macronutrients, such as proteins, carbohydrates, and healthy fats. These nutrients fuel our energy levels, enhance our immune system, aid in digestion, promote healthy growth, and support vital bodily processes. Furthermore, the careful selection of ingredients enables us to create diverse flavors, textures, and colors, making our meals visually appealing and delightful to the senses. By prioritizing nutrition and thoughtful ingredient choices, we can transform a simple recipe into a wholesome and satisfying culinary experience, promoting a healthier lifestyle for ourselves and our website visitors.</p>
          <div className='h-left-btn' onClick={()=>{naviagte('/search')}}>Search</div>
      </div>

      <div className='line'></div>

      <div className='h-pro'>
        <h1>Get Information and Analysis about Products</h1>
        <p className='h-para'>Information and analysis about products are invaluable in today's consumer-driven world. By seeking and evaluating product information, we empower ourselves to make informed decisions about the items we purchase. This includes understanding the features, specifications, and benefits of a product, as well as considering factors such as quality, durability, and price. Analysis goes a step further by examining product performance, reliability, and customer reviews, helping us assess whether a product meets our specific needs and expectations. In a market flooded with options, having access to comprehensive product information and analysis enables us to compare and contrast different offerings, ensuring that we invest in products that align with our preferences and values. It not only helps us make smarter purchasing choices but also promotes transparency and accountability among manufacturers and retailers. With information and analysis at our disposal, we can confidently navigate the marketplace, discovering products that enrich our lives and provide value for our hard-earned money.</p>
        <div className='h-left-btn' onClick={()=>{naviagte('/products')}}>Products</div>
      </div>

      <div className='line'></div>

      <div className='h-meal-con'>
        <h1>Plan Your Meal And Get 100% Nutritions Needed</h1>
        <p className='h-para'>Planning a well-rounded meal that provides 100% of the necessary nutrients is essential for maintaining a healthy and balanced diet. By carefully selecting a variety of nutrient-rich foods, we can ensure that our bodies receive the necessary vitamins, minerals, and macronutrients. A well-planned meal should include a combination of lean proteins, such as chicken or fish, whole grains like quinoa or brown rice, a colorful assortment of fruits and vegetables, and healthy fats from sources like avocados or nuts. Incorporating dairy or plant-based alternatives can provide additional calcium and vitamin D. By focusing on nutrient-dense ingredients and portion control, we can create a meal that meets our nutritional requirements while also satisfying our taste buds. Striving for balance and variety in our meal planning enables us to enjoy a wide array of flavors and textures while supporting our overall health and well-being.</p>
        <div className='h-left-btn' onClick={()=>{naviagte('/meal')}}>Plan Meal</div>
      </div>

      <div className='line'></div>

    </div>
  )
}

export default Home
