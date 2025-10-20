// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useProductStore } from '../store/useProductStore'
// export default function ProductCard({ product }) {
// const toggleFavorite = useProductStore(state => state.toggleFavorite)
// const favorites = useProductStore(state => state.favorites)
// const fav = favorites.includes(product.id)
// return (
// <div className="card">
// <h3>{product.name}</h3>
// <p><b>Category:</b> {product.category}</p>
// <p><b>Price:</b> ${product.price}</p>
// <p><b>Stock:</b> {product.stock}</p>
// <p>{product.description}</p>
// <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
// <Link to={`/products/${product.id}`}>View</Link>
// <button className="button secondary" onClick={() => toggleFavorite(product.id)}>
// {fav ? '★ Favorited' : '☆ Favorite'}
// </button>
// </div>
// </div>
// )
// }

import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
}
