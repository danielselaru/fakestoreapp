import React, { useEffect, useState } from 'react'

function Api_link() {
  const [data, setData] = useState([])

    const link = "https://fakestoreapi.com/products"
 
   useEffect(() => {
    fetch(link)
    .then(response => response.json())
    .then(data => setData(data));
},[])

    console.log(data)

  return (
    <div></div>
  )
}

export default Api_link