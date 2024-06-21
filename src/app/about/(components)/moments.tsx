"use client";
import React from 'react'
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import StarIcon from "@mui/icons-material/Star";
import Autoplay from "embla-carousel-autoplay";

const items = [
    {
        message: 'It was an unforgettable experience with Eventory. They handled everything flawlessly from start to finish.',
        name: 'Madhuri Sethi',
        image: "/aboutus/moments01.png"
    },
    {
        message: 'It was an unforgettable experience with Eventory. They handled everything flawlessly from start to finish.',
        name: 'Aman Gupta',
        image: "/aboutus/moments01.png"
    },
    {
        message: 'It was an unforgettable experience with Eventory. They handled everything flawlessly from start to finish.',
        name: "Madhuri Sethi",
        image: "/aboutus/moments01.png"
    }
    // Add more items as needed
];
// const cards = [
//     {
//         message: "I recently celebrated my birthday and used Eventory to book a hall, decorators, and a cake, and I couldn't be happier. The venue was perfect, the decorations were stunning, and the cake was delicious. ",
//         name: "Madhuri Sethi",
//         image_link: "/aboutus/moments01.png"
//     },
//     {
//         message: "I recently celebrated my birthday and used Eventory to book a hall, decorators, and a cake, and I couldn't be happier. The venue was perfect, the decorations were stunning, and the cake was delicious. ",
//         name: "Madhuri Sethi",
//         image_link: "/aboutus/moments01.png"
//     },
//     {
//         message: "I recently celebrated my birthday and used Eventory to book a hall, decorators, and a cake, and I couldn't be happier. The venue was perfect, the decorations were stunning, and the cake was delicious. ",
//         name: "Madhuri Sethi",
//         image_link: "/aboutus/moments01.png"
//     }

// ]


const Moments = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true }),
    );

    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically move right every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [items.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };
    return (
        <>
            <div className="justify-between items-center lg:py-5 md:py-5 sm:py-5 lg:mx-16 sm:mx-10 sm:gap-0 lg:gap-40 md:gap-20 mt-16">
                <div className="justify-center">
                    <h2 className="font-semibold text-4xl text-[rgba(0,0,0,1)] lg:mb-14 sm:mb-20">Sharing Moments</h2>
                </div>
                {/* <Carousel
                    plugins={[plugin.current]}
                    className="w-full max-w-[100%] mb-4 md:mb-0 md:max-w-[100%] mt-4"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent className="-ml-1">
                        {cards.map((cards, index) => (
                            <CarouselItem
                                key={index}
                                className=" md:basis-1/1 lg:basis-1/1 justify-between items-center  sm:py-10 lg:mx-16 sm:mx-10 "
                            >
                                <div className="container sm:w-[100%] md:w-[100%] lg:w-[100%] flex lg:flex-row md:flex-row max-sm:flex-col-reverse justify-center items-center ">
                                    <div className=' ml-36 rounded-l-lg flex-1 w-[724px] h-[277px] bg-[rgba(46,49,146,0.1)]'>
                                        <div className='p-5'>
                                            <svg width="40" height="33" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M37.1156 0.5L40 4.25133C37.6054 6.18384 35.6644 8.26791 34.1769 10.5036C32.7256 12.7013 31.6553 15.2211 30.966 18.0631C33.1066 19.4651 34.5397 20.6208 35.2653 21.5302C36.0272 22.4396 36.4082 23.3869 36.4082 
                                                24.3721C36.4082 25.13 36.1723 25.8689 35.7007 26.5888C35.229 27.2709 34.1406 28.3508 32.4354 29.8286L29.1701 32.5C26.2676 30.1886 24.3265 28.3129 23.3469 26.873C22.4036 25.4331 21.932 23.8606 21.932 22.1554C21.932 19.3893 23.2925 16.0169 26.0136 12.0382C28.771 8.0595 32.4717 4.21344 37.1156 0.5ZM15.1293 0.5L18.068 4.25133C15.6735 6.18384 13.7506 8.28686 12.2993 10.5604C10.8481 12.796 9.79592 15.2969 9.14286 18.0631C11.1746 19.4272 12.5714 20.5639 13.3333 21.4734C14.0952 22.3828 14.4762 23.349 14.4762 24.3721C14.4762 25.13 14.2222 25.8689 13.7143 26.5888C13.2426 27.2709 12.1542 28.3508 10.449 29.8286L7.34694 32.5C4.37188 30.1507 2.39456 28.2561 1.41497 26.8162C0.471655 25.3763 0 23.8227 0 22.1554C0 19.3893 1.36054 16.0169 4.08163 12.0382C6.839 8.0595 10.5215 4.21344 15.1293 0.5Z" fill="#1F2937" />
                                            </svg>

                                            <div className='mt-10 max-sm:mt-0 text-sm'>
                                                {cards.message}
                                            </div>
                                        </div>
                                        <div className='mt-10 ml-10 font-inter font-semibold text-3xl'>
                                            {cards.name}
                                        </div>
                                    </div>
                                    <div className=' flex-1 w-[304px] h-[357px]'>
                                        <img src={cards.image_link} alt="" />
                                    </div>



                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel> */}

                <div className="relative mx-auto overflow-hidden xs:mt-8">
                    <div className="flex transition-transform ease-in-out duration-500 "
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {items.map((item, index) => (
                            <div key={index} className="  flex-shrink-0 w-full flex flex-col md:flex-row lg:flex-row items-center justify-center">
                                <div className=" xs:w-[200px] sm:w-[300px] md:h-[300px] md:rounded-l-2xl rounded-b-2xl  md:ml-20 md:w-2/3  pt-5 px-5 text-left order-2 md:order-1 bg-[rgba(46,49,146,0.1)]">
                                   <div className='mb-5'>
                                   <svg width="40" height="33" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M37.1156 0.5L40 4.25133C37.6054 6.18384 35.6644 8.26791 34.1769 10.5036C32.7256 12.7013 31.6553 15.2211 30.966 18.0631C33.1066 19.4651 34.5397 20.6208 35.2653 21.5302C36.0272 22.4396 36.4082 23.3869 36.4082 24.3721C36.4082 25.13 36.1723 25.8689 35.7007 26.5888C35.229 27.2709 34.1406 28.3508 32.4354 29.8286L29.1701 32.5C26.2676 30.1886 24.3265 28.3129 23.3469 26.873C22.4036 25.4331 21.932 23.8606 21.932 22.1554C21.932 19.3893 23.2925 16.0169 26.0136 12.0382C28.771 8.0595 32.4717 4.21344 37.1156 0.5ZM15.1293 0.5L18.068 4.25133C15.6735 6.18384 13.7506 8.28686 12.2993 10.5604C10.8481 12.796 9.79592 15.2969 9.14286 18.0631C11.1746 19.4272 12.5714 20.5639 13.3333 21.4734C14.0952 22.3828 14.4762 23.349 14.4762 24.3721C14.4762 25.13 14.2222 25.8689 13.7143 26.5888C13.2426 27.2709 12.1542 28.3508 10.449 29.8286L7.34694 32.5C4.37188 30.1507 2.39456 28.2561 1.41497 26.8162C0.471655 25.3763 0 23.8227 0 22.1554C0 19.3893 1.36054 16.0169 4.08163 12.0382C6.839 8.0595 10.5215 4.21344 15.1293 0.5Z" fill="#1F2937" />
                                    </svg>

                                   </div>
                                    <blockquote className="text-gray-600 text-sm md:text-base ">
                                        {item.message}
                                    </blockquote>
                                    <p className="mb-10 md:my-5 md:mt-20 text-[rgba(31,41,55,1)] justify-center text-[28px] font-semibold ">{item.name}</p>
                                </div>
                                <div className="  mr-16 md:w-1/3 max-sm:pl-[60px] flex items-start justify-start order-1 md:order-2">
                                    <img src={item.image} alt={item.name} className=" xs:w-[400px] h-[200px] md:w-[300px] md:h-[400px] rounded-2xl object-cover" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <button onClick={prevSlide} className="absolute  top-1/2 transform -translate-y-1/2 t p-2 rounded-full"><svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 15.5L14.4142 20.0858C13.6332 20.8668 13.6332 22.1332 14.4142 22.9142L19 27.5M15 21.5L29 21.5M21 1.5C9.95431 1.5 1 10.4543 1 21.5C1 32.5457 9.95431 41.5 21 41.5C32.0457 41.5 41 32.5457 41 21.5C41 10.4543 32.0457 1.5 21 1.5Z" stroke="#B3B3B3" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                    </button>
                    <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full"><svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 27.5L27.5858 22.9142C28.3668 22.1332 28.3668 20.8668 27.5858 20.0858L23 15.5M27 21.5L13 21.5M21 41.5C32.0457 41.5 41 32.5457 41 21.5C41 10.4543 32.0457 1.5 21 1.5C9.9543 1.5 0.999998 10.4543 0.999998 21.5C0.999998 32.5457 9.9543 41.5 21 41.5Z" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                    </button>

                </div>

            </div>

        </>
    )
}

export default Moments