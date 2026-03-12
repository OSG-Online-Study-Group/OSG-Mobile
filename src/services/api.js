
import axios from "axios";

// URL do backend no Vercel
const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BACKEND_URL,
});

export default api;
