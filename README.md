# ReactISI
React Internship at ISI 
<br>

Goal: Build a small multi-page React app that demonstrates routing, data fetching from a mock API, and frontend caching strategies.
<br>
Requirements:
1. Build a mini Product Dashboard with a few pages (Home, Products, Product Detail, Profile, Settings) using react-router-dom. For styling, you can use Tailwind.
2. Use a mock API (json-server, mockaroo, or any other mock REST API) to fetch and display data.
3. Explore and implement at least 2 frontend caching strategies: React Query, localStorage/sessionStorage, Browser cache via caching headers, Zustand, etc.
<br>
To run the mock server, here's a sample of the mock data you can use:
<br>
{
  "products": [
{ "id": 1, "name": "Laptop Pro", "price": 1200, "category": "Electronics", "stock": 20 },
<br>

{ "id": 2, "name": "Smartwatch X", "price": 250, "category": "Wearables", "stock": 45 },
<br>
{ "id": 3, "name": "Desk Chair", "price": 150, "category": "Furniture", "stock": 10 }
<br>
],
<br>
  "users": [
  <br>
  
{ "id": 1, "name": "John Doe", "email": "john@example.com" }
<br>
]
}
<br>
Project structure:
<br>

frontend/ 
<br>
    <ul> src/
  <br>
      <ul> components/
    <br>
      Navbar.jsx
      <br>
      ProductCard.jsx </ul>
    <br>
    pages/
    <br>
      <ul> HomePage.jsx
      <br>
      ProductsPage.jsx
      <br>
      ProductDetailPage.jsx
      <br>
      ProfilePage.jsx
      <br>
      SettingsPage.jsx
      <br> </ul>
    api/
    <br>
      <ul> productApi.js        // all API calls here
      <br> </ul>
    hooks/
    <br>
     <ul>  useProducts.js       // caching hooks (React Query/SWR)
      <br> </ul>
    store/
    <br>
      <ul> useProductStore.js   // Zustand (optional)
      <br> </ul>
    App.jsx
    <br>
    main.jsx
    </ul>
    
 
