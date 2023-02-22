import React, { useState } from 'react'
import '../style/FoodComponent.css'
import Button from './Button'

export default function FoodComponent({ food }) {

  const [cnt_value,setCnt_value] = useState(0)
  const [displayText,setDisplayText] = useState("MIN")
  const handleCallback =(childData)=>{
    setCnt_value(childData)
    if(childData>10) {
      alert("Cannot Vote more")
      setCnt_value(childData-1)
    }
    else if(childData==10) updateDisplayText("MAX")
    else if(childData>0 && childData<=9) updateDisplayText(childData.toString())
    else if(childData==0) updateDisplayText("MIN")
    else{
      alert("Cannot unvote")
      setCnt_value(childData+1)
    }
    
  }
  const updateDisplayText =(text)=>{

    setDisplayText(`${text}`)
  }
  return (
    <div className='container'>
      <div className='food-card'>
        <div className='food-data'>
          <div>
            <h1>{food.type}</h1>
          </div>
          <div><h3>{food.name}</h3></div>
          <div>{food.detail}</div>
          <Button parentCallback={handleCallback} countVote={cnt_value} textBtn={displayText}/>
        </div>
        <div className='food-img'>
          <img src={food.img} />
        </div>
      </div>
    
    </div>
  )
}
