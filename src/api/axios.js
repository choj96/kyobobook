import axios from "axios";
const instance = axios.create({
  baseURL: "http://192.168.0.183:9988/",
  params: {},
});
export default instance;
