import React from 'react';
import './product.styles.css';

function Product() {
    return <div className="product">
      <div className="productInfo">
        <h3 className="productTitle">TV plasma</h3>
      </div>
      <img className="productImage" src="https://m.media-amazon.com/images/I/31i3tpuXxxL._AC_SY200_.jpg" alt=""></img>
      
    </div>
}
export default Product;