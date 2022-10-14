import axios from "axios";

export default function configureInterceptor() {
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
}
