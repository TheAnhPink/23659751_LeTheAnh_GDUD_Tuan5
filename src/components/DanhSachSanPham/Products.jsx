import React from 'react'
import { BrowserRouter ,Link,Route,Routes} from 'react-router-dom'



function Products() {

  const productList=[
    {id:1,name:"Iphone"},
    {id:2,name:"Samsung"},
    {id:3,name:"Laptop"}
  ]

  return (
    <div>
      <h3>Danh sách sản phẩm</h3>
      <ul>
        {productList.map(sp=>(
        <li>
          <Link to={`/products/${sp.id}`} key={sp.id}>{sp.name}</Link>
        </li>
      ))}
      </ul>

    </div>
  )
}

export default Products
