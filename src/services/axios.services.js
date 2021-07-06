import axios from 'axios';

const axiosInstance = axios.create({
    
    //baseURL: "http://localhost:5000",
    baseURL: "https://ironhack-project-3-backend.herokuapp.com",
    //baseURL: process.env.BACKEND_URL || "http://localhost:3001",
    //baseURL: "https://cors-anywhere.herokuapp.com/https://ironhack-project-3-backend.herokuapp.com",
    withCredentials: true
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
    productSave: async (product) => {
        const response = await axiosInstance.post('/product/save', product);
    },
    productGetAll: async (user) =>{

        //console.log('axios user:', user.user.user._id);
        console.log('axios user:', user.id);

        const response = await axiosInstance.post('product/getAll', {id: user.id});
        console.log("axios get All Response", response);
        return response;
    },
    productDelete: async (productId) =>{
        const response = await axiosInstance.post('/product/delete', productId);
    }

  }

export default service;