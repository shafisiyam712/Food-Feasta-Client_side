import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { authContext } from '../Components/AuthProvider';

const UpdateFood = () => {
  const { id } = useParams(); 
  console.log('Food ID:', id);
  const navigate = useNavigate();
  const { user } = useContext(authContext);
  const [food, setFood] = useState(null); // Food data to update
  const [error, setError] = useState("");



useEffect(() => {
    fetch(`https://mileston-11-server-side.vercel.app/foods/user/${id}`) 
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch food data');
        }
        return res.json();
      })
      .then((data) => setFood(data))
      .catch((error) => {
        console.error('Error fetching food data:', error);
        setFood(null); 
      });
  }, [id]);
  

  const handleUPfood = (e) => {
    e.preventDefault();
    setError("");

    // Updated food data from the form
    const updatedFood = {
      FoodName: e.target.FoodName.value,
      FoodImage: e.target.FoodImg.value,
      FoodQuantity: parseInt(e.target.FoodQuantity.value),
      PickUpLocation: e.target.location.value,
      ExpiredDate: e.target.ExDate.value,
      Notes: e.target.Notes.value,
      userEmail: user.email,
      userName: user.displayName,
      userPhoto: user.photoURL,
    //   status: "available",
    };

    // Send updated food data to the server
    fetch(`https://mileston-11-server-side.vercel.app/foods/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFood),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Your food has been updated successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });
          navigate("/manageFoods"); 
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to update food.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        console.error("Error updating food:", error);
        setError("Something went wrong while updating the food.");
      });
  };

  if (!food) return <p>Loading food details...</p>;

  return (
    <div className="lg:w-3/4 mx-auto">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold">Update Your Food</h1>
        <p className="py-6">
          Update the information of your food donation. After submission, the updated details will be reflected on the website.
        </p>
      </div>
      <div className="card bg-base-100  dark:bg-[#1E2A47] w-full shrink-0 shadow-2xl rounded-xl">
        <form onSubmit={handleUPfood} className="card-body rounded-xl">
          {/* Form First Row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-black dark:text-white">Food Name</span>
              </label>
              <input
                type="text"
                name="FoodName"
                defaultValue={food.FoodName}
                placeholder="Food Name"
                className="input input-bordered text-black"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-black dark:text-white">Food Image</span>
              </label>
              <input
                type="url"
                name="FoodImg"
                defaultValue={food.FoodImage}
                placeholder="Photo URL"
                className="input input-bordered text-black"
                required
              />
            </div>
          </div>
          {/* Form Second Row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-black dark:text-white">Food Quantity</span>
              </label>
              <input
                type="number"
                name="FoodQuantity"
                defaultValue={food.FoodQuantity}
                placeholder="Food Quantity"
                className="input input-bordered text-black"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-black dark:text-white">Pickup Location</span>
              </label>
              <input
                type="text"
                name="location"
                defaultValue={food.PickUpLocation}
                placeholder="Pickup Location"
                className="input input-bordered text-black"
                required
              />
            </div>
          </div>
          {/* Form Third Row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-black dark:text-white">Expired Date</span>
              </label>
              <input
                type="date"
                name="ExDate"
                defaultValue={food.ExpiredDate}
                placeholder="Expired Date"
                className="input input-bordered text-black"
                required
              />
            </div>
          </div>
          <br />
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black dark:text-white">Additional Notes</span>
            </label>
            <textarea
              className="textarea textarea-bordered text-black"
              name="Notes"
              defaultValue={food.Notes}
              rows="5"
            ></textarea>
          </div>

          {error && <p className="text-red-500">{error}</p>}
          <div className="form-control mt-6">
            <button className="btn font-bold border border-[#1E2A47] rounded-full w-2/6 mx-auto text-[#1E2A47] hover:text-white hover:bg-[#1E2A47]">
              Update Food
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateFood;
