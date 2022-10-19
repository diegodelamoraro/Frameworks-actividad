import axios from "axios";
import { urlLogin, urlPosts } from "./endpoints";

export function login(username, password) {
  return axios
    .post(
      urlLogin,
      { username, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => response.data);
}

export function getPosts() {
  return axios.get(urlPosts).then((response) => response.data);
}

export function updateLikes(id) {
  return axios.post(`${urlPosts}/${id}/like`).then((response) => response.data);
}
