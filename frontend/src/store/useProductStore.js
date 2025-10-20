// import create from 'zustand'
// export const useProductStore = create((set, get) => ({
// favorites: JSON.parse(localStorage.getItem('fav_products') || '[]'),
// toggleFavorite: (id) => set((state) => {
// const exists = state.favorites.includes(id)
// const next = exists ? state.favorites.filter(x => x !== id) : [...state.favorites, id]
// localStorage.setItem('fav_products', JSON.stringify(next))
// return { favorites: next }
// }),
// }))

import { create } from "zustand";
export const useProductStore = create((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  setProducts: (products) => set({ products }),
}));
