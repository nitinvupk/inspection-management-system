import axios from "axios";
const baseUrl = "http://localhost:8000";
const ipBasrUrl = "http://ipinfo.io";

const getIPInfo = async (url) => {
  try{
    const response = await axios.get(`${ipBasrUrl}`);
    return response.data;
  }
  catch(err){
    console.log(err);
  }
}

const get = async (url) => {
  try{
    const response = await axios.get(`${baseUrl}${url}`, { headers:{"x-access-token": window.localStorage.getItem("token")}});
    return response.data;
  }
  catch(err){
    console.log(err);
  }
}

const put = async (url,status) => {
  try{
    const response = await axios.put(`${baseUrl}${url}`, {status}, { headers:{"x-access-token": window.localStorage.getItem("token")}});
    return response.data;
  }
  catch(err){
    console.log(err);
  }
}

const remove = async (url) => {
  try{
    const response = await axios.delete(`${baseUrl}${url}`);
    return response.data;
  }
  catch(err){
    console.log(err);
  }
}

const create = async (url,user) => {
  try{
    const response = await axios.post(`${baseUrl}${url}`,user, { headers:{"x-access-token": window.localStorage.getItem("token")}});
    return response.data;
  }
  catch(err){
    console.log(err);
  }
}

const createReport = async (url,user) => {
  try{
    const response = await axios.post(`${baseUrl}${url}`,user, { headers:{"x-access-token": window.localStorage.getItem("token"), 'content-type': 'multipart/form-data'}});
    return response.data;
  }
  catch(err){
    console.log(err);
  }
}
export default { get, put, remove, create, getIPInfo, createReport }
