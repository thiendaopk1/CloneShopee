import axiosClient from './axiosClient';

const commentApi = {
  getAll(params, id) {
    const url = `/api/comments?id=${id}`;
    return axiosClient.get(url, { params });
  },

  getAllRate(id) {
    const url = `api/comment/rate?id=${id}`;
    return axiosClient.get(url);
  },
};

export default commentApi;
