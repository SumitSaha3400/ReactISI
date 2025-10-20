import React from 'react'
import { Link } from 'react-router-dom'
export default function HomePage() {
return (
<div>
<h1>Welcome to Product Dashboard</h1>
<p>This demo shows routing, React Query caching, and Zustand local state management.</p>
<Link to="/products" className="button">Browse Products</Link>
</div>
)
}
