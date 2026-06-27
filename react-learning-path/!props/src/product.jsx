import React from 'react'

function Product({ productName, price }) {
  //const {productName , price } = props ; 
  return (
    <div>
      <div>Ürün bilgisi</div>
      <div>
        <div>isim : {productName}  </div>
        <div>fiyat : {price}$ </div>
      </div>
    </div>
  )
}

export default Product