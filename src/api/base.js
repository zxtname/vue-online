import axios from "axios";

// const baseUrl = "/api/"; 这里设置webapi前缀地址
const baseUrl="./mock/";//不想连接数据库则用静态数据

const http = axios.create({
  baseURL: baseUrl
});

export default http;