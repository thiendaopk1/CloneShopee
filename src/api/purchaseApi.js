import axiosClient from './axiosClient';

const purchaseApi = {
  getAll(params) {
    const url = `/api/orderManager`;
    return axiosClient.get(url, { params });
  },

  getStatus(params) {
    const url = `/api/orderManager/status`;
    return axiosClient.get(url, { params });
  },

  cancelOrder(id) {
    const url = `/api/orderManager/${id}`;
    return axiosClient.put(url);
  },

  comment(data) {
    const url = `/api/orderManager/comment`;
    return axiosClient.post(url, data);
  },
};

export default purchaseApi;
