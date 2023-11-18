import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure/useAxiosSecure';

const AllUsers = () => {
    const axisoSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axisoSecure.get('/users');
            return res.data;
        }
    })
    return (
        <div className='m-20'>

            <div>
                <h1 className='text-center text-4xl font-bold'>Total User: {users.length}</h1>
            </div>



            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user =>
                                <tr key={user._id} className="bg-base-200">
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;