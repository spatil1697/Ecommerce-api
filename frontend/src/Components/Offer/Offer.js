import React, {useEffect, useState} from 'react'
import './Offer.css'

const Offer = () => {

    const [product, setProducts] = useState ([]);
    //Fetching data of Products
    const getProducts = async () => {
        const response = await fetch ('http://localhost:5000/api/products/list');
        setProducts(await response.json());

    }
    
    useEffect(() => {
      getProducts()
    }, [])
    
  return (
<div className='offerDiv'>
    <p className= 'offerText'>OFFER OF THE DAY</p>
    <div className='cards'>
    {
        product.map((curElem) => {
        return (
        <div className= 'card'>
            <span>{curElem.title} </span>
            <span>{curElem.img} </span>
            <span className='price'>{curElem.price} </span>
        </div>
            )
        })
    }
    </div>
    <p className= 'offerText'>More...</p>

</div>
  )
}

export default Offer