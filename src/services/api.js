
import axios from "axios";

// URL do backend no Vercel
const api = axios.create({
  baseURL: "https://osg-backend.vercel.app",
});

export default api;
