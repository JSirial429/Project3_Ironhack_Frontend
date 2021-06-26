import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:3001",
    //withCredentials: true,
  });

  const service = {

    userSignUp: async (userData) =>{
        await axiosInstance.post('/user/signup', userData);
    },
    userLogin: async (userData) =>{
        await axiosInstance.post('/user/login', userData); 
    },
    productLookUp: async (product) =>{
        await axiosInstance.post('/product/search', product); 
    },

  }

export default service;