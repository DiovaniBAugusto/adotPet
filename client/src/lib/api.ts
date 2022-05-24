
import axios from "axios";
// require('dotenv').config()

export const API = axios.create({
    baseURL: "http://192.168.100.21:8080"
})