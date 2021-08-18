import axiosClient from './axiosClient';

const orderApi = {
  getAll(params) {
    const url = `/api/checkout`;
    return axiosClient.get(url, { params });
  },
  add(data) {
    const url = `/api/checkout`;
    return axiosClient.post(url, data);
  },
};

export default orderApi;
