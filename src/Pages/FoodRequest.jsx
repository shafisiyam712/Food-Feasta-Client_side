import React, { useEffect, useState, useContext } from 'react';
import { authContext } from '../Components/AuthProvider'; 
import useAxiosSecure from '../Hooks/useAxiosSecure';

const RequestedFoods = () => {
  const { user } = useContext(authContext); 
  const [requestedFoods, setRequestedFoods] = useState([]);
const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (user) {
      
      // fetch(`https://mileston-11-server-side.vercel.app/foods/request?userEmail=${user.email}`)
      //   .then((res) => {
      //     if (!res.ok) {
      //       throw new Error('Failed to fetch requested foods');
      //     }
      //     return res.json();
      //   })
      //   .then((data) => {
      //     setRequestedFoods(data); 
          
      //   })
      //   .catch((error) => {
      //     console.error('Error fetching requested foods:', error);
      //     setLoading(false);
      //   });
        
      axiosSecure.get(`/foods/request?userEmail=${user.email}`)
        .then(res => setRequestedFoods(res.data));
       
        
        

     }
  }, [user]);

  console.log(requestedFoods);

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-center text-[#1E2A47] dark:text-white text-3xl font-extrabold my-10">My Requested Foods</h1>
      {requestedFoods.length === 0 ? (
        <p className="text-center text-xl">No requested foods found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {requestedFoods.map((food) => (
            <div key={food._id} className="card border border-rounded-xl transition  hover:scale-105 shadow-xl overflow-hidden p-4 mb-2 gap-3">
              <img
                src={food.FoodImage}
                alt={food.FoodName}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{food.FoodName}</h2>
              <p><strong>Donor Name:</strong> {food.donatorName}</p>
              <p><strong>Pickup Location:</strong> {food.PickUpLocation}</p>
              <p><strong>Expire Date:</strong> {food.ExpiredDate}</p>
              <p><strong>Request Date:</strong> {new Date(food.requestDate).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default RequestedFoods;
