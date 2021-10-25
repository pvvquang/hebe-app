import axiosClient from "./axiosClient";

const ProductApi = {
  // [GET] /products
  getAll(params) {
    const url = "/products";
    return axiosClient.get(url, { params });
  },

  //[GET] /products/type_sell
  getTypeSell(type, params) {
    const url = "/products/" + type;
    return axiosClient.get(url, { params });
  },
};

export default ProductApi;
