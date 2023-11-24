import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Shard/AuthProvider/AuthProvider';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';

const useAdmin = () => {
    const {user} = useContext(AuthContext);
    const axisoSecure = useAxiosSecure();
    const {data: isAdmin, isPending: isLoadingAdmin} = useQuery({
        queryKey:[user?.email , 'isAdmin'],
        queryFn: async()=>{
            const res = await axisoSecure.get(`/user/admin/${user?.email}`);
            return res.data?.admin;
        }
    
    })
    return [isAdmin, isLoadingAdmin];

};

export default useAdmin;