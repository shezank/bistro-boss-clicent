import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Shard/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure/useAxiosSecure';
import { FaDollarSign, FaIdCard, FaUser } from 'react-icons/fa';

const AdminHome = () => {
    const { user } = useContext(AuthContext);
    const axiosSequre = useAxiosSecure()

    const {data: adminStats ={}} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async()=>{
            const res = await axiosSequre.get('/admin-stats')
            return res.data;
        }
    })


    return (
        <div>
            <h1 className='text-2xl font-semibold'>Hi, Welcome {user?.displayName ? user.displayName : 'back'}</h1>

            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                       <FaDollarSign className='text-3xl'></FaDollarSign>
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">{adminStats?.revenue}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUser className='text-3xl'></FaUser>
                    </div>
                    <div className="stat-title">New Users</div>
                    <div className="stat-value">{adminStats?.users}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaIdCard></FaIdCard>
                    </div>
                    <div className="stat-title">Items</div>
                    <div className="stat-value">{adminStats?.manuItems}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{adminStats?.orders}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default AdminHome;