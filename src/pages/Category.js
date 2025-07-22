import React from 'react'
import { useParams } from 'react-router-dom'
import useElements from '../hooks/useElements'

function Category() {

  const {categoryName}= useParams()
  console.log(categoryName)

  const elements = useElements()
  console.log(elements)

   let filteredCategory = elements.filter((e) => {
    return e.category === categoryName
  });
  // console.clear();
  console.log(filteredCategory);
  
    const result = filteredCategory.map((e) => {
        return (
            <div >
                <p>{e.id}</p>
                <img src={e.image} alt='' className='image'>
                </img>
                <h2>{e.rating.rate}</h2>
               
            </div>
        )
    })

  return (  

    <div>
      <h2>Category : {categoryName}</h2>
      {result}
    </div>
  )
}

export default Category