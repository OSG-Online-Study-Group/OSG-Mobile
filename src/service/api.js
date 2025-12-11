import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.15.175:3000", // IP da máquina + porta do backend
});

export default api;
