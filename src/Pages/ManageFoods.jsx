
import React, { useEffect, useState, useContext } from 'react';
import { authContext } from '../Components/AuthProvider'; 
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useAxiosSecure from '../Hooks/useAxiosSecure';
const ManageFoods = () => {
    const { user } = useContext(authContext); 
      const [requestedFoods, setRequestedFoods] = useState([]);
      const axiosSecure = useAxiosSecure();
      useEffect(() => {
          if (user) {
            // fetch(`https://mileston-11-server-side.vercel.app/foods/user?userEmail=${user.email}`)
            //   .then((res) => {
            //     if (!res.ok) {
            //       throw new Error('Failed to fetch requested foods');
            //     }
            //     return res.json();
            //   })
            //   .then((data) => {
            //     console.log(data);
            //     setRequestedFoods(data); 
            //   })
            //   .catch((error) => {
            //     console.error('Error fetching requested foods:', error);
            //   });

        //     axios.get(`https://mileston-11-server-side.vercel.app/foods/user?userEmail=${user.email}`, {
        //     withCredentials: true
        // })
        //     .then(res => setRequestedFoods(res.data))
        //   }

        axiosSecure.get(`/foods/user?userEmail=${user.email}`)
        .then(res => setRequestedFoods(res.data));
}
        
        }, [user]);
      
        const handleDelete = async (foodId) => {
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!"
            }).then((result) => {
              if (result.isConfirmed) {
                // Perform the DELETE request
                fetch(`https://mileston-11-server-side.vercel.app/foods/${foodId}`, {
                  method: 'DELETE',
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.deletedCount > 0) {
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your food has been deleted.",
                        icon: "success",
                      });
                    
                      setRequestedFoods((prev) =>
                        prev.filter((food) => food._id !== foodId)
                      );
                      }
                   
                  })
                  .catch((error) => {
                    console.error('Error deleting food:', error);
                  
                  });
              }
            });
          };

    return (
        <div className="w-11/12 mx-auto">
<h2 className="text-3xl text-center mt-8 text-[#1E2A47] font-bold dark:text-white">My Added Foods: {requestedFoods.length}</h2>
{requestedFoods.length === 0 ? (
        <p className="text-center text-xl my-10">Opps!!..No requested foods found.</p>
      ) : (
            <div className="overflow-x-auto mt-8 max-w-full">
                <table className="table-auto md:table w-full text-sm md:text-base">
                    {/* head */}
                    <thead className="bg-gray-100">
                        <tr>
                            <th>
                            </th>
                            <th>Food Name</th>
                            <th>Added By</th>
                            <th>Expired Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            requestedFoods.map((food,index)=> <tr key={food._id}>
                                <th>
                                {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={food.FoodImage}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{food.FoodName}</div>
                                            {/* <div className="text-sm opacity-50">{food.donatorName}</div> */}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                   {user.displayName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{user.email}</span>
                                </td>
                                <td>{food.ExpiredDate}</td>
                                <th className='flex gap-1 flex-row-reverse'>
                                   
                                    <button
                      onClick={() => handleDelete(food._id)}
                      className="btn-xs btn-error md:btn"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                    <Link  to={`/update/user/${food._id}`}>
                     <button  className="btn-xs md:btn"><i class="fa-solid fa-pen-to-square"></i></button>
                    </Link>
                   
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
      )}
        </div>
    );
};

export default ManageFoods;