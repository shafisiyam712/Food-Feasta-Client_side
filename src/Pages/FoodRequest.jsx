import React, { useEffect, useState, useContext } from 'react';
import { authContext } from '../Components/AuthProvider'; // Assuming your auth context provides the user data

const RequestedFoods = () => {
  const {user} = useContext(authContext); // Get logged-in user's information
  const [requestedFoods, setRequestedFoods] = useState([]);
  const [loading, setLoading] = useState(true);
console.log(user);

  useEffect(() => {
    if (user) {
      // Make GET request with the logged-in user's email
      fetch(`http://localhost:5000/foods/request?userEmail=${user.email}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch requested foods");
          }
          return res.json();
        })
        .then((data) => {
          setRequestedFoods(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching requested foods:", error);
          setLoading(false);
        });
    }
  }, [user]); // Dependency on user, reload when the user changes

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-center text-3xl font-bold mb-8">Requested Foods</h1>
      {requestedFoods.length === 0 ? (
        <p className="text-center text-xl">No requested foods found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {requestedFoods.map((food) => (
            <div key={food._id} className="border rounded-lg p-4 shadow-md">
              <img
                src={food.FoodImage}
                alt={food.FoodName}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-semibold">{food.FoodName}</h2>
              <p>Pick-Up Location: {food.PickUpLocation}</p>
              <p>Expired Date: {food.ExpiredDate}</p>
              <p>Donator: {food.userName}</p>
              <p>Donator Email: {food.userEmail}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RequestedFoods;
