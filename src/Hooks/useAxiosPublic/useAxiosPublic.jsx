import axios from 'axios';
import React from 'react';

const axiosPublice = axios.create({
    baseURL: 'https://bistro-boss-server-xi-green.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublice;
};

export default useAxiosPublic;