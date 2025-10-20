import React from 'react'
import { useProducts } from '../hooks/useProducts'
import ProductCard from '../components/ProductCard'
export default function ProductsPage() {
const { data, isLoading, isError, error, refetch } = useProducts()
return (
<div>
<h2>Products</h2>
<button className="button secondary" onClick={() => refetch()}>Refresh</button>
{isLoading && <p>Loading...</p>}
{isError && <p style={{color:'red'}}>Error: {error.message}</p>}
{data && data.map(p => <ProductCard key={p.id} product={p} />)}
</div>
)
}
