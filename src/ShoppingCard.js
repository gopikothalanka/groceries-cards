import React from 'react'
import './ShoppingCard.css'

function ShoppingCard(props) {
  return (
    <div>
    <div className='shoppingCard' id={`${props.id}`}>
      <img src={props.imgUrl} alt='item' />
      <h3>{props.name}</h3>
      <p>{props.price}</p>
      <p>by {props.manufacturerName}</p>
      <button>Add to Cart 🛒</button>
     </div>
    </div>
  )
}

export default ShoppingCard
