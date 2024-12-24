import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import FoodCard from '../Components/FoodCard';

const AvailableFoods = () => {
    const food=useLoaderData()
    const [search,setSearch]=useState("")
    const [foodData,setFoodData]=useState(food)
    useEffect(()=>{
        fetch(`http://localhost:5000/foods?searchParams=${search}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
           setFoodData(data)
          
           
        })
    },[search])
    return (
        <div>
             <div className="text-center my-14 space-y-2 ">
            <h1 className="font-extrabold text-white text-3xl mb-3">Explore Our Vast Collections of movies</h1>
            <h2>There is a huge collections of movies added by our users and admins.</h2>
            <div className="w-[400px] mx-auto mb-4">
        <input 
           onChange={(e) => {
            console.log("Search Input:", e.target.value); // Debugging
            setSearch(e.target.value);
        }}
          type="text"
          name="search"
          placeholder="search"
          className="input input-bordered w-full text-black"
          required
        />
      </div>
            
        </div>
        <div className="w-11/12 mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">
     
               {
                  
                  foodData.map( foods=> (
           
             <FoodCard key={foods._id} foods={foods}></FoodCard>))
             } 
             
             
             
         </div>
         <div className='w-2/3 md:w-1/5 mx-auto mt-10'>
       <Link to={`/availableFoods`}>
                     <button className='btn font-bold border border-[#1E2A47] rounded-full text-[#1E2A47] md:w-1/2 hover:text-white hover:bg-[#1E2A47]'>See All Movies</button>
                </Link>
       </div> 
      
     </div>
    );
};

export default AvailableFoods;