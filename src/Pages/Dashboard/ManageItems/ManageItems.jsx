import React from 'react';
import SectionTitle from '../../../Shard/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/UseMenu/UseMenu';
import { FaEdit, FaTrash } from 'react-icons/fa';
import useAxiosSecure from '../../../Hooks/useAxiosSecure/useAxiosSecure';

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDelete = item => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (willDelete) => {
                if (willDelete) {
                    const res = await axiosSecure.delete(`/menu/${item._id}`)
                    console.log(res.data)
                    if (res.data.deletedCount) {
                        refetch();
                        swal(`${item.name} Item has been deleted!`, {
                            icon: "success",
                        });
                    }

                } else {
                    swal("Your imaginary file is safe!");
                }
            });

    }
    const handleUpdate = id => {

    }
    return (
        <div>
            <SectionTitle
                subHeading={'---Hurry Up!---'}
                heading={'MANAGE ALL ITEMS'}
            >
            </SectionTitle>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                menu.map((item, idx) => <tr key={item._id}>
                                    <th>
                                        {idx + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{item.price}</td>
                                    <th>
                                        <button onClick={() => handleUpdate(item)} className="btn btn-ghost btn-xs bg-orange-700 text-white"><FaEdit></FaEdit></button>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-xs bg-red-500 text-white"><FaTrash></FaTrash></button>
                                    </th>
                                </tr>)
                            }

                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;