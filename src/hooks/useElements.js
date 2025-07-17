import React, { useEffect, useState } from 'react'

function useElements() {
     const [data, setData] = useState([])
      const link = "https://fakestoreapi.com/products"
    
    
      useEffect(() => {
        fetch(link)
          .then(response => response.json())
          .then(data => setData(data));
      }, [])

  return data
}

export default useElements