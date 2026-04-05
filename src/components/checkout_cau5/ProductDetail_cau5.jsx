import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function ProductDetail_cau5() {
    const { id } = useParams();
  const navigate = useNavigate(); //hook điều hướng

  const handleBuy = () => {
    navigate("/checkout"); //chuyển trang bằng code
  };
  return (
    <div>
      <h3>Chi tiết sp</h3>
      <p>ProductID: {id}</p>

      <button onClick={handleBuy}>Mua hàng</button>
    </div>
      
  )
}

export default ProductDetail_cau5
