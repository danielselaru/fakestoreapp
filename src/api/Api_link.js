import React, { useEffect, useState } from 'react'
import "./api_link.css"
import { Link } from 'react-router-dom'

function Api_link() {
  const [data, setData] = useState([])

    const link = "https://fakestoreapi.com/products"
   
 
   useEffect(() => {
    fetch(link)
    .then(response => response.json())
    .then(data => setData(data));
},[])
    console.clear(data)
    console.log(data)

    // const uniqueTags = [];
    
    const description = data.map((e) =>{
       let id_product = e.id;
     
        // var findItem = uniqueTags.find((x) => x.category === e.category);
        // if (!findItem) uniqueTags.push(e.category);
       
        return(
          <div >
                <div>
                    <span>{e.id} - {e.category}  - {e.description } - {e.price} 
                        <div >
                               <img src={e.image} alt="" className="size"/> 
                        </div>
                    </span>
                </div>
              <div>
                <Link to={`/product/${id_product}`}>Detalii</Link>
              </div>
            </div>
        )
    })
 
  return (
    <div >
        {description}
    </div>
  )
}

export default Api_link