import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import { useParams } from 'react-router-dom'
import "./product.css"
import useElements from '../hooks/useElements'


function Product() {
  const {id} = useParams()
  // const [data, setData] = useState([])
  // const link = "https://fakestoreapi.com/products"


  // useEffect(() => {
  //   fetch(link)
  //     .then(response => response.json())
  //     .then(data => setData(data));
  // }, [])


  //console.log(data)

  //console.log(id)
  const elements = useElements()
  
  let filteredProduct = elements.filter((product) => {
    return product.id === id
  });
  console.clear();
  console.log(filteredProduct);
  
    const result = filteredProduct.map((e) => {
        return (
            <div >
                <p>{e.id}</p>
                <img src={e.image} alt='' className='image'>
                </img>
                <h2>{e.rating.rate}</h2>
               
            </div>
        )
    })
    
    console.log(result)

  return (
    <div>
      <Header></Header>
      <h1 className='ProductHeader'>Product</h1>
      {result}
    </div>
  )
}


export default Product
