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
    // const productCategory = data.map((e) => {
    //   let prodCategory = e.category 
    //   return (
    //       <div>
    //         <p>{prodCategory}</p>
    //       </div>
    //   )
    // })
    

     const productCategory = [...new Set(data.map(e=>e.category)) ]
      //  const x = [...new Set(productCategory) ]
      console.log(productCategory)

      const productCategories= productCategory.map((e) => {
      
      return (
          <div>
             <Link to={`/category/${e}`} className='Category'>{e}</Link>
          </div>
      )
    })

    const description = data.map((e) =>{
       let id_product = e.id;
     
        // var findItem = uniqueTags.find((x) => x.category === e.category);
        // if (!findItem) uniqueTags.push(e.category);
       
        return(
          <div >
            {/* <div>
              <Link to={`/category/${e.category}`} className='Category'>{e.category}</Link>
           </div> */}
                <div>
                    <div>{e.id} - {e.category}  - {e.description } - {e.price} 
                        <div >
                               <img src={e.image} alt="" className="size"/> 
                        </div>
                    </div>
                </div>
              <div>
                <Link to={`/product/${id_product}`}>Detalii</Link>
              </div>
            </div>
        )
    })
 
  return (
    <div >
        {productCategories}
        {description}
    </div>
  )
}

export default Api_link