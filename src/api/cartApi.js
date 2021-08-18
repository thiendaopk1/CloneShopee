import axiosClient from './axiosClient';

const cartApi = {
  getAll(params) {
    const url = `/api/cart`;
    return axiosClient.get(url, { params });
  },
  add(data) {
    console.log(data);
    const url = `/api/cart`;
    return axiosClient.post(url, data);
  },
};

export default cartApi;
