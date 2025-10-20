import React from 'react'
export default function ProfilePage() {
const favorites = JSON.parse(localStorage.getItem('fav_products') || '[]')
return (
<div>
<h2>Profile</h2>
<p><b>Name:</b> John Doe</p>
<p><b>Email:</b> john@example.com</p>
<h3>Favorites</h3>
{favorites.length === 0 ? <p>No favorites yet.</p> : (
<ul>{favorites.map(fid => <li key={fid}>Product ID: {fid}</li>)}</ul>
)}
</div>
)
}
