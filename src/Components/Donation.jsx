
const Donation = () => {
    return (
        <div className="w-11/12 mx-auto mt-16">
            <h1 className="text-center font-bold text-3xl text-[#1E2A47] dark:text-white">Our Previous Donation</h1>
            <p className="text-center mt-3">We collaborate with different NGO's and others welfare trust and send your food to them.Here are some of them in the last few months. <br />If you like to join our this programme you can send your food to us and we make sure to send it safely </p>
             <div className="w-11/12 mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2 mt-20">
               <div className='card border border-rounded-xl  shadow-xl overflow-hidden p-4 mb-2 gap-3'>
            <div className='mb-2  space-y-4 '>
        <img className='w-full h-60 border rounded-xl' src="https://i.ibb.co.com/qp92L5w/468544210-450738434714589-6972391268938130911-n.jpg" />
    </div>  
      <div className=''>
      <h4 className='font-extrabold text-xl text-center'>SAWAB Foundation</h4>
      </div>
            <div className='mt-3  mb-2 text-center'>
            <h4 className="font-bold">Donating food to road child</h4>
                 
                <h5 className='font-bold mt-2'>Date: 27 feb,2024</h5>
            </div>
        </div>

               <div className='card border border-rounded-xl shadow-xl overflow-hidden p-4 mb-2 gap-3'>
            <div className='mb-2  space-y-4 '>
        <img className='w-full h-60 border rounded-xl' src="https://i.ibb.co.com/XkcM1tY/458212248-18457252789044167-8346416057273539593-n.jpg" />
    </div>  
    <div className=''>
      <h4 className='font-extrabold text-xl text-center'>MATW Project</h4>
      </div>
            <div className='mt-3  mb-2 text-center'>
            <h4 className="font-bold">Give Food for flood effected people</h4>
                 
                <h5 className='font-bold mt-2'>Date: 20 sep,2024</h5>
            </div>
        </div>
               <div className='card border border-rounded-xl  shadow-xl overflow-hidden p-4 mb-2 gap-3'>
            <div className='mb-2  space-y-4 '>
        <img className='w-full h-60 border rounded-xl' src="https://i.ibb.co.com/wht81pf/469877283-1039042788235277-1702016664390423742-n.jpg" />
    </div>  
    <div className=''>
      <h4 className='font-extrabold text-xl text-center'>Food Fair Thailand</h4>
      </div>
            <div className='mt-3  mb-2 text-center'>
            <h4 className="font-bold">A large fair to donate food</h4>
                 
                <h5 className='font-bold mt-2'>Date: 11 nov,2024</h5>
            </div>
        </div>
        </div>
        </div>
       
    );
};

export default Donation;