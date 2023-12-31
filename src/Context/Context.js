import React, { createContext, useContext, useReducer } from 'react'
import {faker} from '@faker-js/faker'
import { cartReducer } from './Reducer'

export const Cart = createContext()
faker.seed(99);

const Context = ({children}) => {
    const Products = [...Array(20)].map(()=>({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
       image: faker.image.url(),
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5])
    }))
    console.log(Products)
    
    
    const[state, dispatch] = useReducer(cartReducer,{
        products:Products,
        cart:[]
    })
  return (
    <Cart.Provider value={{state, dispatch}} >
        {children}
    </Cart.Provider>
  )
}

export const CartState = () => {
    return useContext(Cart)
}

export default Context
