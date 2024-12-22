import React from 'react';

const Footer = () => {
    return (

      <div className='bg-[#1E2A47] md:h-96'>
          <div className="bg-[#1E2A47] mt-10 p-16 flex flex-col md:flex-row">
        <div className="md:w-2/5 mb-10 md:mb-0">
          <div className="flex mb-3">
            <h1 className="font-extrabold text-2xl text-white">Food Feasta</h1>
          </div>
          <p className="text-white">
            Phone: +8801644898184 <br />
            Email: ShafiSiyam674@gmail.com <br />
            Dont forget to visit our social sites <br />
          </p>
          
          <div className="flex gap-2 mt-4">
  
  <a href="https://www.facebook.com/ShafiSiyam674/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.icons8.com/?size=48&id=uLWV5A9vXIPu&format=png" alt="Facebook" />
  </a>
  <a href="https://x.com/SiyamShafi7025" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-twitter text-white text-3xl mt-2"></i>
  </a>
  <a href="https://www.youtube.com/@NadirOnTheGoBangla" target="_blank" rel="noopener noreferrer">
    <img src="https://img.icons8.com/?size=48&id=19318&format=png" alt="LinkedIn" />
  </a>
  <a href="https://www.instagram.com/shafi_siyam/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.icons8.com/?size=48&id=Xy10Jcu1L2Su&format=png" alt="Instagram" />
  </a>
</div>


        </div>
      
        <div className="md:w-1/5 flex-col mb-10 md:mb-0">
          <div className="mb-8">
            <h3 className="text-white ml-20 md:ml-20 text-lg">Useful links</h3>
          </div>
          <div className="flex flex-col gap-3 ml-20 md:ml-20">
            <a className="text-white" href="#">Home</a>
            <a className="text-white" href="#">AboutUs</a>
            <a className="text-white" href="#">Locations</a>
            <a className="text-white" href="#">Blogs</a>
            <a className="text-white" href="#">Contact</a>
          </div>
        </div>
      
        <div className="md:w-2/5 flex flex-col items-center">
          <div className="mb-8">
            <h3 className="text-white md:ml-12 text-lg">Drop a Message</h3>
          </div>
          <input
            className="bg-slate-600 text-white my-5 rounded-md h-10 w-52 border-none md:ml-32 p-3"
            placeholder="Enter your Email"
            type="text"
          />
          <div>
            <button className="btn  bg-white text-[#1E2A47] hover:bg-[#BEE3E2] hover:text-white w-52 md:ml-32">Send</button>
          </div>
          
        </div>
        
      </div>
       <hr />
      <h3 className="text-white text-lg text-center">Copyright@2024</h3>
      </div>
        
    )
};

export default Footer;