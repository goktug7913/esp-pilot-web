import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://192.168.1.147",
});

export default axiosClient;
