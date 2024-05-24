import React from 'react'

interface Params{
    params:{
        productId:String
    }
}

const ProductDetails = ({params}:Params) => {
  return (
    <div>
      <h1>Details of product  {params.productId}</h1>
    </div>
  )
}

export default ProductDetails
