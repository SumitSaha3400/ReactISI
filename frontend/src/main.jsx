// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'
import './index.css'


const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
<React.StrictMode>
<QueryClientProvider client={queryClient}>
<BrowserRouter>
<App />
</BrowserRouter>
</QueryClientProvider>
</React.StrictMode>
)