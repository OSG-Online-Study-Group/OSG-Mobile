
import axios from "axios";

// URL do backend no Vercel
const api = axios.create({
  baseURL: "osg-backend.vercel.app",
});

export default api;
