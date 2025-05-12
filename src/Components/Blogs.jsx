import { Link } from "react-router-dom";


const Blogs = () => {
    return (
        <div className="w-11/12 mx-auto my-20">
            <h1 className="text-center font-bold text-3xl text-[#1E2A47] dark:text-white">Reed Health and Fitness blogs</h1>
            <p className="text-center mt-3">Check out experts thoughts and suggestions about health and fitness</p>
            <div className="w-11/12 mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2 mt-20">
                <div className='card border border-rounded-xl transition  hover:scale-105 shadow-xl overflow-hidden p-4 mb-2 gap-3'>
                    <div className='mb-2  space-y-4 '>
                        <img className='w-80 h-72 border rounded-full' src="https://i.ibb.co.com/k8Fpd72/Titcomb2019.webp" />
                    </div>
                    <div className=''>
                        <h4 className='font-extrabold text-xl text-center'>David A.Titcomb</h4>
                    </div>
                    <div className='my-1 text-center'>
                        <h4 className="font-bold">Professor of Health Sciences at Liberty University</h4>
                        <Link
                            to='https://blog.nasm.org/author/david-a-titcomb' className="text-blue-500 hover:underline hover:text-blue-700" target="_blank">Reed Blog</Link>

                    </div>
                </div>

                <div className='card border border-rounded-xl transition  hover:scale-105 shadow-xl overflow-hidden p-4 mb-2 gap-3'>
                    <div className='mb-2  space-y-4 '>
                        <img className='w-80 h-72 border rounded-full' src="https://i.ibb.co.com/8PCxnTm/beresini-bio.webp" />
                    </div>
                    <div className=''>
                        <h4 className='font-extrabold text-xl text-center'>Erin Beresini</h4>
                    </div>
                    <div className='my-1 text-center'>
                        <h4 className="font-bold"> journalist in sports and health science</h4>
                        <Link
                            to='https://www.outsideonline.com/health/nutrition/day-food-ketone-diet/' className="text-blue-500 hover:underline hover:text-blue-700" target="_blank">Reed Blog</Link>
                    </div>
                </div>
                <div className='card border border-rounded-xl transition  hover:scale-105 shadow-xl overflow-hidden p-4 mb-2 gap-3'>
                    <div className='mb-2  space-y-4 '>
                        <img className='w-80 h-72 border rounded-full' src="https://i.ibb.co.com/SNwdGZj/Dr.webp" />
                    </div>
                    <div className=''>
                        <h4 className='font-extrabold text-xl text-center'>Dr. Scott Cheatham</h4>
                    </div>
                    <div className='my-1 text-center'>
                        <h4 className="font-bold">PhD and DPT in Physical Therapy</h4>
                        <Link
                            to='https://blog.nasm.org/author/dr-scott-cheatham' className="text-blue-500 hover:underline hover:text-blue-700" target="_blank">Reed Blog</Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;