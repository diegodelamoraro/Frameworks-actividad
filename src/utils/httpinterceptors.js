import axios from "axios";

export default function configureInterceptor(logOut) {
  axios.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("token");
      if (token !== null) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (401 === error.response.status) {
        logOut();
      } else {
        return Promise.reject(error);
      }
    }
  );
}
