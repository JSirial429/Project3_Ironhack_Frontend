import axios from 'axios';

const axiosInstance = axios.create({
    
    baseURL: "https://ironhack-project-3-backend.herokuapp.com"
    //baseURL: process.env.BACKEND_URL || "http://localhost:3001",
    //withCredentials: true,
  });

  const service = {

    userSignUp: async (userData) =>{
        await axiosInstance.post('/user/signup', userData);
    },
    userLogin: async (userData) =>{
      // try {
      const response = await axiosInstance.post('/user/login', userData);
      return response
      // } catch(err) {
      //   return err
      // }
    
    },
    productLookUp: async (product) =>{
        await axiosInstance.post('/product/search', product); 
    },

  }

export default service;