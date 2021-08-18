import axios from 'axios';
import axiosClient from './axiosClient';

const addressApi = {
  getAll(params) {
    const url = `/api/address`;
    return axiosClient.get(url, { params });
  },

  getDefault(data) {
    const url = `/api/address/status`;
    return axiosClient.get(url, data);
  },

  add(data) {
    const url = `/api/address`;
    return axiosClient.post(url, data);
  },

  editAddress(data) {
    const url = `/api/address/${data.id}`;
    return axiosClient.put(url, data);
  },

  editStatus(data) {
    const url = `/api/address/status/${data.id}`;
    return axiosClient.put(url, data);
  },

  delete(id) {
    const url = `/api/address/${id}`;
    return axiosClient.delete(url);
  },
};

export default addressApi;
