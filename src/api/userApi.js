import axiosClient from './axiosClient';

const userApi = {
  register(data) {
    // path den api dang ky
    const url = '/api/register';
    return axiosClient.post(url, data);
  },

  login(data) {
    // path den api dang nhap
    const url = '/api/login';
    return axiosClient.post(url, data);
  },
};

export default userApi;
