import Axios from "axios";

let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

export const googleApi = Axios.create({
  baseURL: "https://developers.google.com/civic-information/docs/v2",
  timeout: 5000,
})

export const api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true
});


