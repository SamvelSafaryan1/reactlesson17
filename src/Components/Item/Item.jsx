import { useState } from 'react'
import './Item.css'

function Item({card, changePriceCount, del}){

  let [count, setCount] = useState(card.count)

  let minus = () => {
    if(count > 1){
      setCount(count-1)
      changePriceCount(count, card.id)
    }
  }

  let plus = () => {
    setCount(++count)
    changePriceCount(count, card.id)
  }

  let remove = () => {
    del(card.id)
  }

  return(
    <div>
      <div className='items'>
        <div className='item-1'>
            <h3>{card.title}</h3>
            <img src={card.image} width={100} />
         </div>
        <div className='item-2'>
            <button onClick={minus}>-</button>
            <h3>{count}</h3>
            <button onClick={plus}>+</button>
        </div>
        <div>
            <h3>{card.price}$</h3> 
            <button onClick={remove}>Delete</button>
        </div>
      </div>
    <div>
      <button onClick={clear}>Delete All</button>
    </div>
  </div>
  )
}

export default Item
