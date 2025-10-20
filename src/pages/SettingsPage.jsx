import React from 'react'
export default function SettingsPage() {
const clearCache = () => {
localStorage.removeItem('products_cache_v1')
localStorage.removeItem('fav_products')
window.location.reload()
}
return (
<div>
<h2>Settings</h2>
<button className="button secondary" onClick={clearCache}>Clear local caches</button>
<p>This clears cached data and favorites.</p>
</div>
)
}