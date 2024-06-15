import React from 'react';

const Sectiontwo = () => {
    return (
        <div className='bg-[#2E319233]'>
            <div className='flex pt-12 pl-12'>
                <div className='w-[600px] h-[450px]'>
                    <div className="grid grid-cols-2 gap-4">
                        {/* Large Image */}
                        <div className="row-span-2">
                            <img src="/0bb091b52522077d85bd7842cf20b739.png" alt="Large" className="object-cover rounded-lg w-[300px] h-[385px] shadow-2xl" />
                        </div>
                        {/* Small Top Image */}
                        <div>
                            <img src="/4117e82135630db284a8781b077680a9.png" alt="Small Top" className="object-cover rounded-lg w-[300px] h-[185px] shadow-2xl" />
                        </div>
                        {/* Small Bottom Image */}
                        <div>
                            <img src="/e67f2766bf5f5627a22becd531d1fb5d.jpeg" alt="Small Bottom" className="object-cover rounded-lg w-[300px] h-[185px] shadow-2xl" />
                        </div>
                    </div>
                </div>
                <div className='ml-12 w-[400px]'>
                    <p className='text-4xl font-semibold  mb-4 pt-3'>Your Ultimate Event Planning Partner</p>
                    <p className='text-md font-light  pt-4 pb-5'>Our platform connects you with top vendors for a seamless event planning experience, ensuring a stress-free planning process for weddings, corporate events, birthday parties, and any special occasion.</p>
                    <div className="inline-block mt-4">
                        <a href="#" className="bg-[#2E3192] text-white text-xs font-light  py-2 pr-5 pl-4 rounded-lg flex items-center shadow-xl">
                            <span>Know More</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-3 inline-block ml-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sectiontwo;
