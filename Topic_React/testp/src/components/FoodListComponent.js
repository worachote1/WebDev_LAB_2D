import React from 'react'
import FoodComponent from './FoodComponent'

export default function FoodListComponent({foodList}) {
  return (
    foodList.map((item) =>{
        return <FoodComponent key={item.id} food={item}/> 
    })
  )
}
