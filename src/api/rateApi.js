import axiosClient from './axiosClient';

const rateApi = {
  getAll(params) {
    const url = `/api/rates `;
    return axiosClient.get(url, { params });
  },
};

export default rateApi;
