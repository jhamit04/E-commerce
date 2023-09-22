import React, { useEffect, useState } from 'react'
import { CartState } from '../../Context/Context'
import { Button, ListGroup } from 'react-bootstrap'

const Cart = () => {
 const {state:{cart}, dispatch} = CartState()
 const [total, setTotal] = useState()
 useEffect(() => {
  setTotal(cart.reduce((acc, curr) => {
    return acc + Number(curr.price)
  }),0)
 },[cart])
  return (
    <div className='home'>
      <div className='productContainer'>
        <ListGroup>
          {
            cart.map((prod) => (
              <span>{prod.name}</span>
            ))
          }
        </ListGroup>
      </div>
      <div className='filters summary'>
          <span className='title'>
            Subtotal {cart.length} Items
          </span>
          <span style={{fontSize:20, fontWeight:700}}>
            Total: $ {total}
          </span>
          <Button type="button" disabled={cart.length===0}>
            Proceed to Checkout
          </Button>
      </div>
    </div>
  )
}

export default Cart
