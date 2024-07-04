

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart= () => {

    const cartItems = useSelector((store)=>store.cart.items)
   const dispatch=useDispatch();
    const handleClearCart=()=>{
      dispatch(clearCart())
    }
  return (
    <div className='text-center m-5 p-5'>
        <h1 className='font-bold text-lg'>Cart</h1>
     <div className='w-6/12 m-auto'> 
     <button className='bg-black p-2 m-2 rounded-lg text-white' onClick={handleClearCart}>Clear cart</button>
      {cartItems.length===0  ? <h1>Cart is empty,  Add Items to the cart!!</h1> :  <ItemList items={cartItems}/>}
    
     </div>
    </div>
  )
}

export default Cart;
