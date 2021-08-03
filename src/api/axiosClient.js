import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/',
  //baseURL: 'https://25.50.183.23:25002/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  },
});
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
    return config;
  },
  function (error) {
    // Do something with request error
    console.log('error1', { error });
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response && error.response.status === 401) {
      console.log('token expire');
      window.location = '/auth/login';
    }
    // console.log('loi email',error.response.data.message);
    const { config, status, data } = error.response;
    const URLs = [
      '/auth/local/register',
      'api/login/user',
      'users/reset-pass',
      'users/forgot-pass',
      'users/update-pass',
      'api/admin/users/blocked',
      'api/admin/users/new',
    ];
    if (URLs.includes(config.url) && status === 400) {
      const errorList = data.message || [];
      // const firstError = errorList.length > 0 ? errorList[0] : {};
      // const messageList = firstError.messages || [];
      // const firstMessage = messageList.length > 0 ? messageList[0] : {};
      throw new Error(errorList);
    }
    return Promise.reject(error);
  },
);
// axios.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   },
// );
export default axiosClient;
