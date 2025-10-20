// import axios from 'axios'
// const API_ROOT = 'http://localhost:4000'
// export const fetchProducts = async () => (await axios.get(`${API_ROOT}/products`)).data
// export const fetchProductById = async (id) => (await axios.get(`${API_ROOT}/products/${id}`)).data


import axios from 'axios';

const API_BASE_URL = 'https://reactisi-1.onrender.com'; // must match JSON server port

export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/products/${id}`);
  return response.data;
};

