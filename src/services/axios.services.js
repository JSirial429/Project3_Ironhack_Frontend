import axios from 'axios';

const axiosInstance = axios.create({
    
    //baseURL: "http://localhost:3001"
    baseURL: "https://ironhack-project-3-backend.herokuapp.com"
    //baseURL: process.env.BACKEND_URL || "http://localhost:3001",
    //withCredentials: true,
  });

  const service = {

    userSignUp: async (userData) =>{
        await axiosInstance.post('/user/signup', userData);
    },
    userLogin: async (userData) =>{
      const response = await axiosInstance.post('/user/login', userData);
      return response;
    
    },
    productLookUp: async (product) =>{
        const response = await axiosInstance.post(`/product/search`, product); 
        console.log(response);
        return response;
    },

  }

export default service;