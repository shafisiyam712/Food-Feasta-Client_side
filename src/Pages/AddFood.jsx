import React from 'react';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2'
import { authContext } from '../Components/AuthProvider';

const AddFood = () => {
    const {user,manageProfile}=useContext(authContext)
    const [error,setError] = useState("")

    const userEmail=user.email
    const userName=user.displayName
    const userPhoto=user.photoURL    
    let status='available'


    const handleAddfood = e => {
        setError("")
        e.preventDefault();

        const FoodName = e.target.FoodName.value;
        const FoodImage = e.target.FoodImg.value;
        const PickUpLocation = e.target.location.value;
        const FoodQuantity = parseInt(e.target.FoodQuantity.value);
        // const ReleaseYear = parseInt(e.target.releaseYear.value);
        // const Rating = parseFloat(e.target.rating.value);
        const ExpiredDate = e.target.ExDate.value;
        const Notes = e.target.Notes.value;

        
        const newFood = { FoodName, FoodImage, FoodQuantity, PickUpLocation, ExpiredDate, Notes,userEmail,userName,userPhoto,status}
        console.log(newFood)

        //send data to the server and database
        fetch('https://mileston-11-server-side.vercel.app/foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('successfully added');
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your food added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                    e.target.reset();
                }
            })

    }


    return (
        <div className='lg:w-3/4 mx-auto'>
        <div className="text-center p-10">
            <h1 className="text-[#1E2A47] dark:text-white text-5xl font-bold">Add Your Food</h1>
            <p className="py-6">
               Add your food.Just fill up the form with your food information.It will up to our website.You can find it All movies section and if its quantity is high then you can see it in our home page featured section!!
            </p>
        </div>
        <div className="card bg-base-100  dark:bg-[#1E2A47] w-full shrink-0 shadow-2xl rounded-xl">
            <form onSubmit={handleAddfood} className="card-body  rounded-xl">
                {/* form first row */}
                <div className='flex flex-col lg:flex-row gap-5'>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text text-black dark:text-white">Food Name</span>
                        </label>
                        <input type="text" name='FoodName' placeholder="Food Name" className="input input-bordered text-black" required />

                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text text-black dark:text-white">Food Image</span>
                        </label>
                        <input type='url' name='FoodImg' placeholder="Photo Url" className="input input-bordered text-black" required />
                    </div>

                </div>
                {/* form second row */}
                <div className='flex flex-col lg:flex-row gap-5'>

                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text text-black dark:text-white">Food Quantity</span>
                        </label>
                        <input type="number" name='FoodQuantity' placeholder="Food Quantity" className="input input-bordered text-black" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text text-black dark:text-white">Pickup Location</span>
                        </label>
                        <input type="text" name='location' placeholder="pickup location" className="input input-bordered text-black" required />
                    </div>
                </div>
                {/* form third row */}
                <div className='flex flex-col lg:flex-row gap-5'>
                <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text text-black dark:text-white">Expired Date</span>
                        </label>
                        <input type='date' name='ExDate' placeholder="Expired Date" className="input input-bordered text-black" required />

                    </div>
                  
                </div>
                <br />
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black dark:text-white">Additional Notes</span>
                    </label>

                    <textarea className='border text-black' name="Notes" id="" cols="30" rows='5' required></textarea>
                </div>


                {error && <p className="text-red-500">{error}</p>}
                <div className="form-control mt-6">
                <button className='btn font-bold border border-[#1E2A47] rounded-full w-2/6 mx-auto text-[#1E2A47]  hover:text-white hover:bg-[#1E2A47]'>Add Food</button>
                </div>
            </form>
        </div>
    </div>

    );
};

export default AddFood;