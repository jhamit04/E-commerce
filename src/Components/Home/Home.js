import React from 'react'
import { CartState } from '../../Context/Context'
import SingleProduct from '../SingleProduct/SingleProduct';
import Filter from '../Filter/Filter';
import '../Home/home.css'
import '../Filter/filter.css'

const Home = () => {
  const{state : {products}} = CartState();

  return (
    <div className='home'>
      {<Filter/>}
      <div className='productContainer'>
        {
          products.map((prod) => {
            return <SingleProduct prod={prod} key={prod.id}/>
          })
        }

      </div>
    </div>
  )
}

export default Home
