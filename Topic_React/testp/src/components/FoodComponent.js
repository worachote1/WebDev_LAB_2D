import React from 'react'
import '../style/FoodComponent.css'
export default function FoodComponent({food}) {
  return (
    <div className='food-card'>
      <div className='food-data'>
          <div>
            <h2>{food.name}</h2>
          </div>
          <div>{food.type}</div>
          <div>{food.detail}</div>
      </div>
      <div className='food-img'>
          <img src={food.img} />
      </div>
    </div>
  )
}
