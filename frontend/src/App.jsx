import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'


export default function App() {
return (
<>
<Navbar />
<div className="container">
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/products" element={<ProductsPage />} />
<Route path="/products/:id" element={<ProductDetailPage />} />
<Route path="/profile" element={<ProfilePage />} />
<Route path="/settings" element={<SettingsPage />} />
</Routes>
</div>
</>
)
}