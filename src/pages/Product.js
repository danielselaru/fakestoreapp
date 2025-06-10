import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import { useParams } from 'react-router-dom'


function Product() {
  const {id} = useParams()
  const [data, setData] = useState([])
  const link = "https://fakestoreapi.com/products"


  useEffect(() => {
    fetch(link)
      .then(response => response.json())
      .then(data => setData(data));
  }, [])
  console.log(data)
  console.log(id)


  return (
    <div>
      <Header></Header>


    </div>
  )
}


export default Product
