import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import { AuthContext } from '../../Shard/AuthProvider/AuthProvider';

const useCart = () => {
    const axiosSequre = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const {data: cart = [], refetch} = useQuery({
        queryKey: ['cart'],
        queryFn: async ()=>{
            const res = await axiosSequre.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })
    
    return [cart, refetch]
};

export default useCart;