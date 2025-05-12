import React from 'react';

const Newsletter = () => {
    return (
        <div className='w-11/12 mx-auto my-20 '>
            <div className="w-11/12 mx-auto h-72 md:h-64 border rounded-xl pl-4 pr-4 gap-2">
        <div className="rounded-xl flex flex-col justify-center items-center text-center gap-3 border h-60  md:h-52 mt-5">

            <h1 className="text-xl md:text-3xl font-extrabold text-[#1E2A47] dark:text-white">Subscribe to our Newsletter</h1>
        <p className="text-[#1E2A47] dark:text-white"> Get delicious recipes, exclusive deals, and foodie news delivered fresh to your inbox.</p>
        <div className="flex flex-col sm:flex-row gap-3 w-3/2 max-w-md">
                        <input
                            className="p-3 rounded-xl border border-[#1E2A47] w-full text-[#1E2A47] placeholder-[#1E2A47]"
                            placeholder="Your email address"
                            type="email"
                        />
                        <button className="px-6 py-3 rounded-xl font-semibold btn border border-[#1E2A47] bg-white text-[#1E2A47] hover:text-white hover:bg-[#1E2A47]">
                            Subscribe
                        </button>
                    </div>
        </div>
        </div>
        
        
    </div>
    );
};

export default Newsletter;



