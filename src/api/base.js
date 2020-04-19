import axios from "axios";
const baseUrl="./mock/";//静态的路由

const http = axios.create({
  baseURL: baseUrl
});

export default http;