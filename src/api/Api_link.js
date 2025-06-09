import React, { useEffect, useState } from 'react'

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
    
    const description = data.map((e,i) =>{
       
     
        // var findItem = uniqueTags.find((x) => x.category === e.category);
        // if (!findItem) uniqueTags.push(e.category);
       
        return(
          <div key={i}>
              
                <p>
                    {i}
                      <span> - {e.category}  - {e.description } - {e.price} 
                        <div >
                               <img src={e.image} className={`size`}/> 
                        </div>
                      </span>
                </p>
              
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