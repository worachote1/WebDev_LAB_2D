import React from 'react'
import '../style/FoodComponent.css'
export default function FoodComponent({food}) {
  return (
    <div className='food-card'>
      <div className='food-data'>
          <div>
            <h1>{food.type}</h1>
          </div>
          <div><h3>{food.name}</h3></div>
          <div>{food.detail}</div>
      </div>
      <div className='food-img'>
          <img src={food.img} />
      </div>
    </div>
  )
}
