import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import FoodCard from './FoodCard';

const Foods = () => {
    const data=useLoaderData()
    console.log(data);
    
    return (
        <div>
        <div className="w-11/12 mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
     
              {
                  
                  data.map( foods=> (
           
             <FoodCard key={foods._id} foods={foods}></FoodCard>))
             }
             
         </div>
        
         <div className='w-2/3 md:w-1/5 mx-auto mt-16'>
       <Link to={`/availableFoods`}>
                     <button className='btn font-bold border border-[#1E2A47] rounded-full text-[#1E2A47] md:w-1/2 hover:text-white hover:bg-[#1E2A47]'>See Available Foods</button>
                </Link>
       </div>
      
     
     </div>
    );
};

export default Foods;