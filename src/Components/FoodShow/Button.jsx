import React, { useContext, useState } from 'react'
import { FoodContext } from '../../DataFolder/Context/FoodContext'



const Button = ({id}) => {
    const { addToCart } = useContext(FoodContext);
    const [showMessage, setShowMessage] = useState(false)

    const addToCartFunc = (id) => {
        setShowMessage(true);
    
        setTimeout(() => {
          setShowMessage(false);
        }, 1000);
    
        addToCart(id);
      };

  return (
    <button type='button' onClick={()=> addToCartFunc(id)}>
        {showMessage ? 'Added' : 'Add To Cart'}
    </button>
  )
}

export default Button