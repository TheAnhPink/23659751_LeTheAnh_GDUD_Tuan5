import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
    const {id}= useParams();

  return (
    <div>
      <h3>Chi tiết sp</h3>
      <p>ProductID: {id}</p>
    </div>
  )
}

export default ProductDetail
