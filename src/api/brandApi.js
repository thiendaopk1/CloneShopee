import axiosClient from './axiosClient';

const brandApi = {
  getAll(params) {
    const url = `/api/brands`;
    return axiosClient.get(url, { params });
  },
};

export default brandApi;
