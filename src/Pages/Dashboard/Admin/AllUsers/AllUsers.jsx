import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure/useAxiosSecure';
import { FaTrash, FaUserCircle } from 'react-icons/fa';
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AllUsers = () => {
    const axisoSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axisoSecure.get('/users'
            )
            return res.data;
        }
    })

    const handleUserDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axisoSecure.delete(`/users/${id}`)
                        .then(res => {
                            console.log(res.data);
                            if (res.data.deletedCount) {
                                swal("Poof! Your imaginary file has been deleted!", {
                                    icon: "success",
                                });
                                refetch();
                            }
                        })
                } else {
                    swal("Your imaginary file is safe!");
                }
            }); 
        }

        const handleRoleManage = user =>{
            axisoSecure.patch(`/users/admin/${user._id}`)
            .then( res=>{
                console.log(res.data.modifiedCount);
                if(res.data){
                    refetch()
                    toast.success(`${user.name} Make A Admin Now`);
                }
            })
        }
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
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, idx) =>
                                <tr key={user._id} className="bg-base-200">
                                    <th>{idx + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                    { user.role === 'admin'? 'admin' :
                                    <button onClick={() => handleRoleManage(user)} className="btn btn-ghost btn-xs hover:bg-orange-500 bg-orange-400 text-white"><FaUserCircle></FaUserCircle></button>
                                    }

                                    </td>
                                    <td>
                                        <button onClick={() => handleUserDelete(user._id)} className="btn btn-ghost btn-xs text-red-600"><FaTrash></FaTrash></button>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
                        <ToastContainer></ToastContainer>
        </div>
    );
};

export default AllUsers;