import axios from "axios";
// const baseUrl="./mock/";//静态的路由

// const baseUrl = "http://localhost:51534/api/"; //这里设置测试webapi前缀地址
const baseUrl="http://rdjdmy.natappfree.cc/api/";
//const baseUrl="./mock/";//不想连接数据库则用静态数据

const http = axios.create({
  baseURL: baseUrl
});

export default http;