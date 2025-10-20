// // --- src/hooks/useProducts.js ---
// import { useQuery } from '@tanstack/react-query'
// import { fetchProducts, fetchProductById } from '../api/productApi'
// const LS_KEY = 'products_cache_v1'
// export function useProducts() {
// return useQuery(['products'], fetchProducts, {
// staleTime: 1000 * 60 * 2,
// cacheTime: 1000 * 60 * 10,
// onSuccess: (data) => localStorage.setItem(LS_KEY, JSON.stringify({ ts: Date.now(), data })),
// initialData: () => {
// const raw = localStorage.getItem(LS_KEY)
// if (!raw) return undefined
// const parsed = JSON.parse(raw)
// if (Date.now() - parsed.ts < 86400000) return parsed.data
// }
// })
// }
// export function useProduct(id) {
// return useQuery(['product', id], () => fetchProductById(id), { staleTime: 60000 })
// }

// --- src/hooks/useProducts.js ---
// import { useQuery } from '@tanstack/react-query'
// import { fetchProducts, fetchProductById } from '../api/productApi'

// const LS_KEY = 'products_cache_v1'

// // Fetch all products
// export function useProducts() {
//   return useQuery({
//     queryKey: ['products'],
//     queryFn: fetchProducts,
//     staleTime: 1000 * 60 * 2, // 2 minutes
//     gcTime: 1000 * 60 * 10,   // replaced cacheTime (now called gcTime in v5)
//     onSuccess: (data) =>
//       localStorage.setItem(LS_KEY, JSON.stringify({ ts: Date.now(), data })),
//     initialData: () => {
//       const raw = localStorage.getItem(LS_KEY)
//       if (!raw) return undefined
//       const parsed = JSON.parse(raw)
//       if (Date.now() - parsed.ts < 86400000) return parsed.data // 24 hrs cache
//       return undefined
//     },
//   })
// }

// // Fetch a single product by ID
// export function useProduct(id) {
//   return useQuery({
//     queryKey: ['product', id],
//     queryFn: () => fetchProductById(id),
//     enabled: !!id, // only run when id is available
//     staleTime: 60 * 1000, // 1 minute
//   })
// }

import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchProductById } from '../api/productApi';

const LS_KEY = 'products_cache_v1';

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 2,
    cacheTime: 1000 * 60 * 10,
    onSuccess: (data) =>
      localStorage.setItem(LS_KEY, JSON.stringify({ ts: Date.now(), data })),
    initialData: () => {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return undefined;
      const parsed = JSON.parse(raw);
      if (Date.now() - parsed.ts < 86400000) return parsed.data;
    },
  });
}

export function useProduct(id) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id),
    staleTime: 60000,
  });
}
