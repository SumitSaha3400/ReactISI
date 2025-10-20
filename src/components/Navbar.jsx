import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
return (
<nav>
<NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
<NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink>
<NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>Profile</NavLink>
<NavLink to="/settings" className={({ isActive }) => isActive ? 'active' : ''}>Settings</NavLink>
</nav>
)
}