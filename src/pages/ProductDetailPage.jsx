import React from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '../hooks/useProducts'
export default function ProductDetailPage() {
const { id } = useParams()
const { data, isLoading, isError } = useProduct(id)
if (isLoading) return <p>Loading product...</p>
if (isError) return <p style={{color:'red'}}>Failed to load product.</p>
return (
<div>
<h2>{data.name}</h2>
<p>{data.description}</p>
<p><b>Price:</b> ${data.price}</p>
<p><b>Category:</b> {data.category}</p>
<p><b>Stock:</b> {data.stock}</p>
</div>
)
}
