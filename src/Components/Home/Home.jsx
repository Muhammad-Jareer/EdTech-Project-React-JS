import React, { useRef } from 'react';
import arrowDown from '../../assets/arrow.png'
import { Link } from 'react-router-dom';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Home = () => {

    const homeRef = useRef(null)

    useGSAP(() => {
        gsap.from(homeRef.current, {
            opacity: 0,
            y: 250,
            duration: 5.5,  // increased duration for smoother animation
            ease: "elastic.out(1,0.3)",
            delay: 0.5,
            stagger: {
                amount: 2.5, // add stagger for collision-like effect
                from: 'start'
            }
        });
    })

    return (
        <section ref={homeRef} className='w-full h-screen flex justify-center items-center bg-custom-bg text-white font-fun py-4 px-6 lg:px-0'>
            <div className=' uppercase text-center'>
                <div className='flex flex-col gap-1 sm:gap-6'>
                    <h1 className='text-3xl sm:text-8xl font-black'>Uncover the code ,</h1> <br />
                    <h1 className='text-3xl sm:text-8xl font-black'>rewrite the fun</h1>
                </div>
                <Link 
                to="blog"
                className='flex justify-center items-center gap-4 sm:gap-12 bg-white shadow-3xl text-black w-fit mx-auto py-2 sm:py-6 px-8 sm:px-14 mt-16 hover:cursor-pointer hover:translate-x-1 hover:translate-y-1 duration-300'>
                    <p className=' uppercase text-xl sm:text-3xl font-bold'>Let the fun begin </p>
                    <img className='w-12 h-12 rotate-90' src={arrowDown} alt="" />
                </Link>
            </div>
        </section>
    );
}

export default Home;


