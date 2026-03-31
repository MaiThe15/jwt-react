import axios from "axios";
import { toast } from "react-toastify";

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: "http://localhost:8080",
});

instance.defaults.withCredentials = true;

// // Alter defaults after instance has been created
// instance.defaults.headers.common["Authorization"] = 'AUTH_TOKEN 15022005';

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before the request is sent
    return config;
  },
  function (error) {
    // Do something with the request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lies within the range of 2xx causes this function to trigger
    // Do something with response data
    return response.data;
  },
  function (err) {
    // Any status codes that fall outside the range of 2xx cause this function to trigger
    // Do something with response error
    const status = err && err.response && err.response.status || 500;
    switch (status) {
      // authentication (token related issues)
      case 401: {
        // console.log(">>> check error: ", err.response.data);
        toast.error('Unauthorized the user. Please login.');
        // window.location.href = '/login';
        return err.response.data;
      }

      // forbidden (permission related issues)
      case 403: {
        toast.error('You dont have permission.');
        return Promise.reject(err);
      }

      // bad request
      case 400: {
        return Promise.reject(err);
      }

      // not found
      case 404: {
        return Promise.reject(err);
      }

      // conflict
      case 409: {
        return Promise.reject(err);
      }

      // unprocessable
      case 422: {
        return Promise.reject(err);
      }

      // generic api error (server related) unexpected
      default: {
        return Promise.reject(err);
      }
    }
  },
);

export default instance;