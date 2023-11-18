import axios from 'axios';
import React from 'react';

const axisoSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    return axisoSecure;
};

export default useAxiosSecure;