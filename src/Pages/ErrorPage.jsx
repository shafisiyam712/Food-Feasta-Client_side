import { useNavigate } from 'react-router-dom';
import errorImg from '../assets/error.webp'
const ErrorPage = () => {
    const navigate=useNavigate()
    const GoHome = () => {
        navigate('/')
    }
    return (
        <div className="flex flex-col justify-center items-center gap-3 mt-20">
            <img src={errorImg} className='mt-32' alt="" />
            <h1 className="text-3xl">Page Not Found</h1>
            <div>
                    <button onClick={GoHome} className='mb-20 btn w-40 font-bold border border-[#1E2A47] rounded-full text-[#1E2A47] hover:text-white hover:bg-[#1E2A47]'>Go Back</button>
                </div>
        </div>
    );
};

export default ErrorPage;