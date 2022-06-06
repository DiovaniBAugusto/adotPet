import axios from "axios";
// require('dotenv').config()

export const API = axios.create({
  baseURL: "http://localhost:3000/api",
});
