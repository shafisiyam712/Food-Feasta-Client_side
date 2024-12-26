import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import FoodCard from '../Components/FoodCard';

const AvailableFoods = () => {
    const food = useLoaderData();
    const [search, setSearch] = useState("");
    const [foodData, setFoodData] = useState(food);
    const [isTwoColumn, setIsTwoColumn] = useState(false); // State to toggle layout

    const sortFoodByDate = () => {
        const sortedData = [...foodData].sort((a, b) => {
            return new Date(a.ExpiredDate) - new Date(b.ExpiredDate);
        });
        setFoodData(sortedData);
    };
    useEffect(() => {
        fetch(`http://localhost:5000/foods?searchParams=${search}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setFoodData(data);
            });
    }, [search]);

    return (
        <div className=''>
            <div className="text-center my-14">
                <h1 className="font-extrabold text-[#1E2A47] text-3xl mb-3">Explore Our Vast Collections of Foods</h1>
                <h2 className='mb-3'>There is a huge collection of foods added by our users and admins. <br />
                You can search and sort food according to their Expired date.
                </h2>
                <div className='flex  items-center justify-center mt-10'>
                <div className="w-[450px] mx-auto">
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
                <button  onClick={sortFoodByDate} className='btn font-bold border border-[#1E2A47] rounded-full w-40 mx-auto text-[#1E2A47]  hover:text-white hover:bg-[#1E2A47]'>Sort Food</button>
                </div>
                
            </div>
            <div
                className={`w-11/12  pl-7 mx-auto grid ${
                    isTwoColumn ? "grid-cols-1 md:grid-cols-1 lg:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                } gap-2 mt-10`}
            >
                {foodData.map((foods) => (
                    <FoodCard key={foods._id} foods={foods}></FoodCard>
                ))}
            </div>
            <div className="w-36 mx-auto mt-10 pl-2">
                <button
                    onClick={() => setIsTwoColumn(!isTwoColumn)} // Toggle layout on button click
                    className="btn font-bold border border-[#1E2A47] rounded-full text-[#1E2A47]  hover:text-white hover:bg-[#1E2A47]"
                >
                    {/* {isTwoColumn ? "Switch to 3-Column" : "Switch to 2-Column"} */}
                    Change Layout
                </button>
            </div>
        </div>
    );
};

export default AvailableFoods;
