import { GET_PRODUCTS } from '../../constants';

export const getProductsList = () => {
  try {
    return {
      type: GET_PRODUCTS
    };
  } catch (error) {
    console.log(error);
  }
};
