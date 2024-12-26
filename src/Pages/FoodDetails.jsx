
import React, { useState, useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../Components/AuthProvider";

const FoodDetails = () => {
  const data = useLoaderData();
  const { user } = useContext(authContext);
  const navigate = useNavigate();

  const [isModalOpen, setModalOpen] = useState(false); 
  const { _id, FoodName, FoodImage, FoodQuantity, PickUpLocation, ExpiredDate, Notes, userEmail, userName,userPhoto ,status } = data || {};

  


  const handleRequest = () => {
    const requestData = {
      foodId: _id,
      FoodName,
      FoodImage,
      PickUpLocation,
      ExpiredDate,
      Notes,
      donatorEmail: userEmail,
      donatorName: userName,
      requesterEmail: user?.email,
    };
  
    fetch(`http://localhost:5000/foods/request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          Swal.fire("Success!", "Food requested successfully!", "success");
          navigate("/availableFoods"); 
        } else {
          Swal.fire("Error!", "Failed to request food.", "error");
        }
      });
  };
  

  return (
    <div className="w-11/12 mx-auto">
      {/* Food Details Card */}
      <div className="card w-2/3 mx-auto mt-10 border border-rounded-xl shadow-xl overflow-hidden p-4 mb-2 gap-3">
        <div className="mb-2 space-y-4">
          <img className="w-full h-60 object-cover border rounded-xl" src={FoodImage} alt={`Cover picture of the title`} />
        </div>
        <div className="flex gap-2 justify-center">
          <h4 className="font-extrabold text-xl text-center">Food Title: {FoodName}</h4>
        </div>

        <div className="mt-4 flex flex-col gap-3 mb-2 text-center">
          <h5 className="font-bold mt-2">Food Quantity: {FoodQuantity}</h5>
          <h5 className="font-bold mt-2">Pick Up Location: {PickUpLocation}</h5>
          <h5 className="font-bold mt-2">Expired Date: {ExpiredDate}</h5>
          <h5 className="font-bold mt-2">Summary: {Notes}</h5>

          <div className="flex flex-col text-center items-center">
            <h5 className="font-bold mt-2">Added By: {userName}</h5>
            <img className='w-10 h-10 rounded-full mt-2' src={userPhoto} alt="" />
            <h5 className="font-bold mt-2">User Email: {userEmail}</h5>
          </div>
        </div>
      </div>

      {/* Request Button */}
      <div className="flex justify-center gap-2 md:gap-5 mt-10">
        <button
          onClick={() => setModalOpen(true)} // Open modal on click
          className="btn font-bold border border-[#1E2A47] rounded-full text-[#1E2A47] w-28 md:w-40 hover:text-white hover:bg-[#1E2A47]"
        >
          Request
        </button>
      </div>

      {/* Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2">
            <h2 className="text-xl font-bold mb-4">Request Food</h2>
            <div className="space-y-2">
              <p><strong>Food Name:</strong> {FoodName}</p>
              <p><strong>Food Image:</strong> <img className="h-20" src={FoodImage} alt={FoodName} /></p>
              <p><strong>Food ID:</strong> {_id}</p>
              <p><strong>Donator Email:</strong> {userEmail}</p>
              <p><strong>Donator Name:</strong> {userName}</p>
              <p><strong>User Email:</strong> {user?.email}</p>
              <p><strong>Request Date:</strong> {new Date().toLocaleString()}</p>
              <p><strong>Pickup Location:</strong> {PickUpLocation}</p>
              <p><strong>Expire Date:</strong> {ExpiredDate}</p>
              <textarea
                placeholder="Additional Notes"
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>
            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={() => setModalOpen(false)}
                className="btn border border-gray-400 text-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleRequest}
                className="btn border border-[#1E2A47] text-[#1E2A47] hover:text-white hover:bg-[#1E2A47]"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodDetails;
