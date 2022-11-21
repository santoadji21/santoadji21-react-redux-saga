import Axios from 'axios';

const APP_URL = 'https://dummyjson.com';
const ENDPOINT = 'products';

export const getProducts = async () => {
  try {
    const response = await Axios.get(`${APP_URL}/${ENDPOINT}`);
    let Data = response.data.products;
    return Data;
  } catch (error) {
    console.log(error);
  }
};

// get Detail Product
export const getDetailProduct = async (id) => {
  try {
    const response = await Axios.get(`${APP_URL}/${ENDPOINT}/${id}`);
    let Data = response.data;
    return Data;
  } catch (error) {
    console.log(error);
  }
};
