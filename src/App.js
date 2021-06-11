import React from 'react'
import ShoppingCard from './ShoppingCard'
import GroceriesData from './GroceriesData'
import './ShoppingCard.css'

function App() {
  let groceriesCard= GroceriesData.map((value)=> <ShoppingCard 
      key={value.key} id={value.id} imgUrl={value.imgUrl}
      name={value.name} price={value.price} manufacturerName={value.manufacturerName} />)
  return (
    <div className='items'>
      {groceriesCard}
      {/* <div className='shoppingCard' id={`${props.id}`}>
      <img src={props.imgUrl} />
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
      <h3>by {props.manufacturerName}</h3>
      <button>Add to Cart</button>
     </div> */}
    </div>
  )
}

export default App
